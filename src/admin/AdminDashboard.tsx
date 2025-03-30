import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth"; // Firebase sign out
import { auth } from '../firebaseConfig'; // Firebase auth instance
import { translations as defaultTranslations } from '../translations'; // Import default data
import ProjectsTab from './tabs/ProjectsTab'; // Import the new ProjectsTab component
import ServicesTab from './tabs/ServicesTab'; // Import the new ServicesTab component
import { TranslationsType, LanguageKey, newProjectTemplate } from './types'; // Import types and constants
import { renderFields, updateNestedState } from './utils'; // Import helper functions

// Helper functions renderFields and updateNestedState moved to utils.tsx

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
            {/* Conditionally render the specific tab component or the default renderFields */}
            {activeTab === 'projects' ? (
              <ProjectsTab
                data={translations.en[activeTab]}
                path={[activeTab]}
                handleChange={handleInputChange}
                editingPath={editingPath}
                setEditingPath={setEditingPath}
                handleAddProject={handleAddNewProject}
                handleDelete={handleDeleteItem}
                renderFields={renderFields} // Pass renderFields for nested rendering
              />
            ) : activeTab === 'services' ? (
              <ServicesTab
                data={translations.en[activeTab]}
                path={[activeTab]}
                handleChange={handleInputChange}
                editingPath={editingPath}
                setEditingPath={setEditingPath}
                handleDelete={handleDeleteItem}
                renderFields={renderFields} // Pass renderFields for nested rendering
              />
            ) : (
              // Fallback for other tabs using the original renderFields
              renderFields(
                translations.en[activeTab],
                [activeTab],
                handleInputChange,
                editingPath,
                setEditingPath,
                undefined, // No special add button for generic tabs
                handleDeleteItem
              )
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
