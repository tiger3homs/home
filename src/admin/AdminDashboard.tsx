import React, { useState, useCallback } from 'react';
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
    handleAddProject?: () => void // Optional callback for adding projects - lang removed
    ) => {
  // Special handling for the main 'projects' object to add the "Add Project" button
  // Path check adjusted as it no longer starts with language key
  if (path.length === 1 && path[0] === 'projects' && typeof data === 'object' && data !== null && !Array.isArray(data)) {
      // const lang = path[0] as LanguageKey; // lang removed
      return (
          <div key={path.join('.')} className="mb-6 p-4 border border-gray-200 rounded">
              <div className="flex justify-between items-center mb-3">
                 <h4 className="text-lg font-semibold capitalize">{String(path[0]).replace(/([A-Z])/g, ' $1')}</h4> {/* Use path[0] */}
                 {handleAddProject && (
                      <button
                          onClick={handleAddProject} // Call without lang
                          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                      >
                          + Add Project
                      </button>
                  )}
              </div>
              {/* Render the actual project fields */}
              {Object.entries(data).map(([key, value]) => {
                  // Check if the key represents a project (e.g., project1, project2, newProject_timestamp)
                  // This assumes project keys might follow a pattern or we render all object children
                  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                      const projectPath = [...path, key];
                      return (
                          <div key={projectPath.join('.')} className="mb-4 p-3 border border-gray-100 rounded">
                              <h5 className="text-md font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h5>
                              {/* Pass handleAddProject=undefined here as it's nested */}
                              {renderFields(value, projectPath, handleChange, undefined)}
                          </div>
                      );
                  } else if (key === 'title' && typeof value === 'string') {
                     // Render the main 'projects' title field
                     const titlePath = [...path, key];
                     return (
                        <div key={titlePath.join('.')} className="mb-4">
                          <label htmlFor={titlePath.join('.')} className="block text-sm font-medium text-gray-700 capitalize mb-1">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </label>
                          <input // Use input for title
                            type="text"
                            id={titlePath.join('.')}
                            name={titlePath.join('.')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                            value={value}
                            onChange={(e) => handleChange(titlePath, e.target.value)}
                          />
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
    const keyString = currentPath.map(String).join('.'); // Ensure keyString is always string

    if (typeof value === 'string') {
      return (
        <div key={keyString} className="mb-4">
          <label htmlFor={keyString} className="block text-sm font-medium text-gray-700 capitalize mb-1">
            {key.replace(/([A-Z])/g, ' $1')} {/* Add space before caps */}
          </label>
          <textarea
            id={keyString}
            name={keyString}
            rows={value.length > 100 ? 4 : 2} // Adjust rows based on content length
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            value={value}
            onChange={(e) => handleChange(currentPath, e.target.value)}
          />
        </div>
      );
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Render nested object fields
      return (
        <div key={keyString} className="mb-6 p-4 border border-gray-200 rounded">
          <h4 className="text-lg font-semibold mb-3 capitalize">{String(key).replace(/([A-Z])/g, ' $1')}</h4> {/* Ensure key is string */}
          {renderFields(value, currentPath, handleChange)}
        </div>
      );
    } else if (Array.isArray(value)) {
       // Handle arrays (e.g., services, project tags) - Render fields for each item
       return (
         <div key={keyString} className="mb-6 p-4 border border-gray-200 rounded">
           <h4 className="text-lg font-semibold mb-3 capitalize">{String(key).replace(/([A-Z])/g, ' $1')}</h4> {/* Ensure key is string */}
           {value.map((item, index) => {
             const itemPath = [...currentPath, index]; // Use number index for arrays
             if (typeof item === 'string') {
                // Simple array of strings (like tags)
                return (
                    <div key={itemPath.map(String).join('.')} className="mb-2">
                        <label htmlFor={itemPath.map(String).join('.')} className="block text-sm font-medium text-gray-700 mb-1">
                            Item {index + 1}
                        </label>
                        <input
                            type="text"
                            id={itemPath.map(String).join('.')}
                            name={itemPath.map(String).join('.')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                            value={item}
                            onChange={(e) => handleChange(itemPath, e.target.value)}
                        />
                    </div>
                );
             } else if (typeof item === 'object' && item !== null) {
               // Array of objects (like services) - No add button here for now
               const itemKeyString = itemPath.map(String).join('.');
               return (
                 <div key={itemKeyString} className="mb-4 p-3 border border-gray-100 rounded">
                   <h5 className="text-md font-medium mb-2">Item {index + 1}</h5>
                   {renderFields(item, itemPath, handleChange)} {/* Pass handleChange down */}
                 </div>
               );
             }
             return null; // Explicitly return null if item type is not handled
           })}
         </div>
       );
    }
    return null; // Ignore other types for simplicity
  }); // End of Object.entries().map()
}; // End of renderFields function

// Helper function to update nested state immutably
const updateNestedState = (prevState: any, path: (string | number)[], value: string): any => {
  if (!path || path.length === 0) {
    return prevState; // No path, return original state
  }
  const newState = JSON.parse(JSON.stringify(prevState)); // Deep clone
  let current: any = newState;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    // Ensure path exists, creating objects/arrays as needed
    if (current[key] === undefined || current[key] === null) {
       // Look ahead to see if the next key is a number (indicating an array index)
       const nextKeyIsNumber = typeof path[i+1] === 'number';
       current[key] = nextKeyIsNumber ? [] : {};
    }
     // Handle array index creation carefully
     if (Array.isArray(current) && typeof key === 'number') {
        while (current.length <= key) {
            // Push null or an appropriate default structure if needed
            // For simplicity, pushing null might suffice if subsequent steps handle creation
            current.push(null); 
        }
     }
    current = current[key];
  }

  const lastKey = path[path.length - 1];
   // Ensure the immediate parent exists before assigning the final value
   if (typeof current !== 'object' || current === null) {
       // This case should ideally be prevented by the loop above, but as a safeguard:
       console.error("Cannot set property on non-object:", current, "at path", path);
       return prevState; // Return original state if structure is broken
   }
  current[lastKey] = value;
  return newState;
};


const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  // Initialize state with data from localStorage or defaults
  const [translations, setTranslations] = useState(() => {
    const savedTranslations = localStorage.getItem('siteTranslations');
    try {
      return savedTranslations ? JSON.parse(savedTranslations) : defaultTranslations;
    } catch (e) {
      console.error("Failed to parse translations from localStorage", e);
      return defaultTranslations; // Fallback to defaults if parsing fails
    }
  });
  // activeLang state removed
  const [saveStatus, setSaveStatus] = useState('');
  const [logoutError, setLogoutError] = useState(''); // State for logout errors

  const handleLogout = async () => {
    setLogoutError(''); // Clear previous errors
    try {
      await signOut(auth);
      // No need to navigate here, onAuthStateChanged in ProtectedRoute/LoginPage will handle it
      // navigate('/admin/login');
    } catch (error) {
      console.error("Logout failed:", error);
      setLogoutError('Failed to log out. Please try again.');
    }
  };

  const handleInputChange = useCallback((pathWithinLang: (string | number)[], value: string) => {
    setTranslations((prev: TranslationsType) => {
      // Always update the 'en' language
      const langToUpdate: LanguageKey = 'en';
      // pathWithinLang is the path starting from within the 'en' object
      const updatedLangData = updateNestedState(prev[langToUpdate], pathWithinLang, value);
      return {
        ...prev,
        [langToUpdate]: updatedLangData
      };
    });
    setSaveStatus(''); // Clear status on change
  }, []);

   // Function to add a new project structure to the state for the 'en' language
  const handleAddNewProject = useCallback(() => { // lang parameter removed
    setTranslations((prev: TranslationsType) => {
        const newProjectKey = `newProject_${Date.now()}`; // Unique key for the new project
        const langData = prev.en; // Directly use 'en'
        const updatedProjects = {
            ...langData.projects,
            [newProjectKey]: { ...newProjectTemplate } // Add the new project
        };
         const updatedLangData = {
            ...langData,
            projects: updatedProjects
        };
        return {
            ...prev,
            en: updatedLangData // Update 'en'
        };
    });
     setSaveStatus('New project added. Edit details and save.'); // Inform user
  }, []);


  const saveChanges = () => {
    try {
      localStorage.setItem('siteTranslations', JSON.stringify(translations));
      setSaveStatus('Changes saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000); // Clear status after 3 seconds
    } catch (e) {
      console.error("Failed to save translations to localStorage", e);
      setSaveStatus('Error saving changes.');
    }
  };

  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset the English content to the default values? This cannot be undone.')) {
        // Reset only the 'en' part, keeping the structure
        setTranslations({ en: defaultTranslations.en });
        // Update localStorage accordingly
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

      {/* Language Tabs Removed */}

      {/* Form Fields for English Language */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Editing: English Content</h3>
        {/* Pass handleAddNewProject to renderFields, render only 'en' data */}
        {/* Initial path is now empty as renderFields operates within the 'en' object */}
        {renderFields(translations.en, [], handleInputChange, handleAddNewProject)}
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
