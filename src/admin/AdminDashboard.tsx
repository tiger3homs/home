import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth"; // Firebase sign out
import { auth } from '../firebaseConfig'; // Firebase auth instance
import { translations as defaultTranslations } from '../translations'; // Import default data

type TranslationsType = typeof defaultTranslations;
// LanguageKey type is no longer strictly necessary as we only use 'en', but keep for structure consistency for now.
type LanguageKey = 'en'; // Explicitly set to 'en'

// Define a template for a new project
const newProjectTemplate = {
  title: "New Project Title",
  description: "New project description.",
  tags: ["Tag1", "Tag2"],
};

// Helper function to recursively render form fields for nested objects
const renderFields = (
    data: any,
    path: (string | number)[],
    handleChange: (path: (string | number)[], value: string) => void,
    editingPath: string | null, // Pass editing state down
    setEditingPath: (path: string | null) => void, // Pass setter down
    handleAddProject?: () => void, // Optional callback for adding projects
    handleDelete?: (path: (string | number)[]) => void // Optional callback for deleting items
    ) => {
  // Special handling for the main 'projects' object to add the "Add Project" button
  if (path.length === 1 && path[0] === 'projects' && typeof data === 'object' && data !== null && !Array.isArray(data)) {
      return (
          <div key={path.join('.')} className="mb-6 p-4 border border-gray-200 rounded">
              <div className="flex justify-between items-center mb-3">
                 <h4 className="text-lg font-semibold capitalize">{String(path[0]).replace(/([A-Z])/g, ' $1')}</h4>
                 {handleAddProject && (
                      <button
                          onClick={handleAddProject}
                          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                      >
                          + Add Project
                      </button>
                  )}
              </div>
              {/* Render the actual project fields */}
              {Object.entries(data).map(([key, value]) => {
                  // Check if the key represents a project
                  if (key !== 'title' && typeof value === 'object' && value !== null && !Array.isArray(value)) { // Exclude the main 'projects' title from this block
                      const projectPath = [...path, key];
                      return (
                          <div key={projectPath.join('.')} className="mb-4 p-3 border border-gray-100 rounded relative">
                              <div className="flex justify-between items-center mb-2">
                                <h5 className="text-md font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</h5>
                                {handleDelete && (
                                    <button
                                        onClick={() => {
                                            if (window.confirm(`Are you sure you want to delete project "${key}"?`)) {
                                                handleDelete(projectPath);
                                            }
                                        }}
                                        className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        aria-label={`Delete project ${key}`}
                                    >
                                        Delete
                                    </button>
                                )}
                              </div>
                              {/* Pass editing state and handlers down */}
                              {renderFields(value, projectPath, handleChange, editingPath, setEditingPath, undefined, undefined)}
                          </div>
                      );
                  } else if (key === 'title' && typeof value === 'string') {
                    // Render the main 'projects' title field (click-to-edit)
                    const titlePath = [...path, key];
                    const titleKeyString = titlePath.join('.');
                    const isEditingTitle = editingPath === titleKeyString;
                    return (
                        <div key={titleKeyString} className="mb-4">
                            <label htmlFor={titleKeyString} className="block text-sm font-medium text-gray-700 capitalize mb-1">
                                {key.replace(/([A-Z])/g, ' $1')}
                            </label>
                            {isEditingTitle ? (
                                <input
                                    type="text"
                                    id={titleKeyString}
                                    name={titleKeyString}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    value={value}
                                    onChange={(e) => handleChange(titlePath, e.target.value)}
                                    onBlur={() => setEditingPath(null)}
                                    autoFocus
                                />
                            ) : (
                                <div
                                    className="mt-1 block w-full rounded-md border border-transparent p-2 cursor-pointer hover:bg-gray-100 min-h-[38px]"
                                    onClick={() => setEditingPath(titleKeyString)}
                                >
                                    {value || <span className="text-gray-400 italic">Click to edit...</span>}
                                </div>
                            )}
                        </div>
                    );
                 }
                  return null; // Ignore other direct children of 'projects' object if any
              })}
          </div>
      );
  }


  // Original rendering logic for other fields
  return Object.entries(data).map(([key, value]) => {
    const currentPath = [...path, key];
    const keyString = currentPath.map(String).join('.');
    const isEditing = editingPath === keyString;

    if (typeof value === 'string') {
      return (
        <div key={keyString} className="mb-4">
          <label htmlFor={keyString} className="block text-sm font-medium text-gray-700 capitalize mb-1">
            {key.replace(/([A-Z])/g, ' $1')}
          </label>
          {isEditing ? (
            <textarea
              id={keyString}
              name={keyString}
              rows={value.length > 100 ? 4 : 2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              value={value}
              onChange={(e) => handleChange(currentPath, e.target.value)}
              onBlur={() => setEditingPath(null)}
              autoFocus
            />
          ) : (
            <div
              className="mt-1 block w-full rounded-md border border-transparent p-2 cursor-pointer hover:bg-gray-100 min-h-[50px] whitespace-pre-wrap"
              onClick={() => setEditingPath(keyString)}
            >
              {value || <span className="text-gray-400 italic">Click to edit...</span>}
            </div>
          )}
        </div>
      );
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Render nested object fields
      return (
        <div key={keyString} className="mb-6 p-4 border border-gray-200 rounded">
          <h4 className="text-lg font-semibold mb-3 capitalize">{String(key).replace(/([A-Z])/g, ' $1')}</h4>
          {/* Pass editing state down */}
          {renderFields(value, currentPath, handleChange, editingPath, setEditingPath)}
        </div>
      );
    } else if (Array.isArray(value)) {
       // Handle arrays (e.g., services, project tags)
       return (
         <div key={keyString} className="mb-6 p-4 border border-gray-200 rounded">
           <h4 className="text-lg font-semibold mb-3 capitalize">{String(key).replace(/([A-Z])/g, ' $1')}</h4>
           {value.map((item, index) => {
             const itemPath = [...currentPath, index];
             const itemKeyString = itemPath.map(String).join('.');
             const isEditingItem = editingPath === itemKeyString;

             if (typeof item === 'string') {
                // Simple array of strings (like tags)
                return (
                    <div key={itemKeyString} className="mb-2">
                        <div className="flex justify-between items-center mb-1"> {/* Wrapper for label and delete button */}
                            <label htmlFor={itemKeyString} className="block text-sm font-medium text-gray-700">
                                Item {index + 1}
                            </label>
                            {handleDelete && ( // Add delete button for array items
                                <button
                                    onClick={() => {
                                        if (window.confirm(`Are you sure you want to delete this item?`)) {
                                            handleDelete(itemPath);
                                        }
                                    }}
                                    className="bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-0.5 px-1.5 rounded focus:outline-none focus:shadow-outline"
                                    aria-label={`Delete item ${index + 1}`}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                        {isEditingItem ? (
                            <input
                                type="text"
                                id={itemKeyString}
                                name={itemKeyString}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                value={item}
                                onChange={(e) => handleChange(itemPath, e.target.value)}
                                onBlur={() => setEditingPath(null)}
                                autoFocus
                            />
                        ) : (
                            <div
                                className="mt-1 block w-full rounded-md border border-transparent p-2 cursor-pointer hover:bg-gray-100 min-h-[38px]"
                                onClick={() => setEditingPath(itemKeyString)}
                            >
                                {item || <span className="text-gray-400 italic">Click to edit...</span>}
                            </div>
                        )}
                    </div>
                );
             } else if (typeof item === 'object' && item !== null) {
               // Array of objects (like services)
               return (
                 <div key={itemKeyString} className="mb-4 p-3 border border-gray-100 rounded relative"> {/* Added relative */}
                    <div className="flex justify-between items-center mb-2"> {/* Wrapper for title and delete button */}
                        <h5 className="text-md font-medium">Item {index + 1}</h5>
                        {handleDelete && ( // Add delete button for array items (objects)
                            <button
                                onClick={() => {
                                    if (window.confirm(`Are you sure you want to delete Item ${index + 1}?`)) {
                                        handleDelete(itemPath);
                                    }
                                }}
                                className="bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-0.5 px-1.5 rounded focus:outline-none focus:shadow-outline"
                                aria-label={`Delete item ${index + 1}`}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                   {/* Pass editing state and delete handler down */}
                   {renderFields(item, itemPath, handleChange, editingPath, setEditingPath, undefined, handleDelete)}
                 </div>
               );
             }
             return null;
           })}
         </div>
       );
    }
    return null;
  });
};

// Helper function to update nested state immutably
const updateNestedState = (prevState: any, path: (string | number)[], value: string): any => {
  if (!path || path.length === 0) {
    return prevState;
  }
  const newState = JSON.parse(JSON.stringify(prevState));
  let current: any = newState;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (current[key] === undefined || current[key] === null) {
       const nextKeyIsNumber = typeof path[i+1] === 'number';
       current[key] = nextKeyIsNumber ? [] : {};
    }
     if (Array.isArray(current) && typeof key === 'number') {
        while (current.length <= key) {
            current.push(null);
        }
     }
    current = current[key];
  }

  const lastKey = path[path.length - 1];
   if (typeof current !== 'object' || current === null) {
       console.error("Cannot set property on non-object:", current, "at path", path);
       return prevState;
   }
  current[lastKey] = value;
  return newState;
};


const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [translations, setTranslations] = useState(() => {
    const savedTranslations = localStorage.getItem('siteTranslations');
    try {
      return savedTranslations ? JSON.parse(savedTranslations) : defaultTranslations;
    } catch (e) {
      console.error("Failed to parse translations from localStorage", e);
      return defaultTranslations;
    }
  });
  const [saveStatus, setSaveStatus] = useState('');
  const [logoutError, setLogoutError] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [editingPath, setEditingPath] = useState<string | null>(null); // State for click-to-edit

  const contentSections = useMemo(() => {
    if (translations && translations.en) {
      const keys = Object.keys(translations.en);
      if (activeTab === null && keys.length > 0) {
        setActiveTab(keys[0]);
      }
      return keys;
    }
    return [];
  }, [translations, activeTab]);


  const handleLogout = async () => {
    setLogoutError('');
    if (!auth) {
        console.error("Firebase auth instance is not available.");
        setLogoutError('Logout service unavailable. Please try again later.');
        return;
    }
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
      setLogoutError('Failed to log out. Please try again.');
    }
  };

  const handleInputChange = useCallback((fullPath: (string | number)[], value: string) => {
      setTranslations((prev: TranslationsType) => {
          const langToUpdate: LanguageKey = 'en';
          const updatedLangData = updateNestedState(prev[langToUpdate], fullPath, value);
          return {
              ...prev,
              [langToUpdate]: updatedLangData
          };
      });
      setSaveStatus('');
  }, []);

  const handleAddNewProject = useCallback(() => {
      setTranslations((prev: TranslationsType) => {
          const newProjectKey = `newProject_${Date.now()}`;
          const langData = prev.en;
          const currentProjects = langData.projects || {};
          const updatedProjects = {
              ...currentProjects,
              [newProjectKey]: { ...newProjectTemplate }
          };
          const updatedLangData = {
              ...langData,
              projects: updatedProjects
          };
          return {
              ...prev,
              en: updatedLangData
          };
      });
      setSaveStatus('New project added. Edit details and save.');
      if (activeTab !== 'projects') {
          setActiveTab('projects');
      }
  }, [activeTab]);

  const handleDeleteItem = useCallback((pathToDelete: (string | number)[]) => {
      if (!pathToDelete || pathToDelete.length < 2) {
          console.error("Invalid path for deletion:", pathToDelete);
          return;
      }
      setTranslations((prev: TranslationsType) => {
          const newState = JSON.parse(JSON.stringify(prev));
          let current = newState.en;
          for (let i = 0; i < pathToDelete.length - 1; i++) {
              const key = pathToDelete[i];
              if (current[key] === undefined || current[key] === null) {
                  console.error("Path not found for deletion:", pathToDelete);
                  return prev;
              }
              current = current[key];
          }
          const itemToDelete = pathToDelete[pathToDelete.length - 1];
          if (Array.isArray(current) && typeof itemToDelete === 'number') {
              if (itemToDelete >= 0 && itemToDelete < current.length) {
                  current.splice(itemToDelete, 1);
              } else {
                  console.error("Index out of bounds for deletion:", pathToDelete);
                  return prev;
              }
          } else if (typeof current === 'object' && current !== null && typeof itemToDelete === 'string') {
              if (itemToDelete in current) {
                  delete current[itemToDelete];
              } else {
                  console.error("Key not found for deletion:", pathToDelete);
                  return prev;
              }
          } else {
              console.error("Cannot delete from target:", current, "at path", pathToDelete);
              return prev;
          }
          return newState;
      });
      setSaveStatus('Item deleted. Remember to save changes.');
  }, []);


  const saveChanges = () => {
    try {
      localStorage.setItem('siteTranslations', JSON.stringify(translations));
      setSaveStatus('Changes saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (e) {
      console.error("Failed to save translations to localStorage", e);
      setSaveStatus('Error saving changes.');
    }
  };

  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset the English content to the default values? This cannot be undone.')) {
        setTranslations({ en: defaultTranslations.en });
        localStorage.setItem('siteTranslations', JSON.stringify({ en: defaultTranslations.en }));
        setSaveStatus('English content reset to defaults.');
        setTimeout(() => setSaveStatus(''), 3000);
    }
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard - Edit Content</h1>
        <div>
           <button
            onClick={resetToDefaults}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Reset to Defaults
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
         {logoutError && <p className="text-red-500 text-xs italic mt-2 text-right">{logoutError}</p>}
      </div>

      {/* Content Section Tabs */}
      <div className="mb-6 border-b border-gray-300">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {contentSections.map((sectionKey) => {
              // Use the 'title' field from the data for the tab name, fallback to key
              const tabTitle = translations.en[sectionKey]?.title || sectionKey.replace(/([A-Z])/g, ' $1');
              return (
                <button
                  key={sectionKey}
                  onClick={() => setActiveTab(sectionKey)}
                  className={`${
                    activeTab === sectionKey
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                  aria-current={activeTab === sectionKey ? 'page' : undefined}
                >
                  {tabTitle}
                </button>
              );
          })}
        </nav>
      </div>

      {/* Form Fields for Active Tab */}
      <div className="bg-white p-6 rounded shadow">
        {activeTab && translations.en && translations.en[activeTab] ? (
          <>
            {/* Use the 'title' field from the data for the heading, fallback to key */}
            <h3 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
              Editing: {translations.en[activeTab]?.title || activeTab.replace(/([A-Z])/g, ' $1')} Content
            </h3>
            {renderFields(
              translations.en[activeTab],
              [activeTab],
              handleInputChange,
              editingPath, // Pass editing state
              setEditingPath, // Pass editing state setter
              activeTab === 'projects' ? handleAddNewProject : undefined, // Add project only for projects tab
              handleDeleteItem // Pass delete handler universally; renderFields decides where to show button
            )}
          </>
        ) : (
           contentSections.length > 0 ? <p>Select a section above to start editing.</p> : <p>Loading content sections...</p>
        )}
      </div>

      {/* Save Button and Status */}
      <div className="mt-6 text-right">
         {saveStatus && <span className="text-green-600 mr-4">{saveStatus}</span>}
        <button
          onClick={saveChanges}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </div>

    </div>
  );
};

export default AdminDashboard;
