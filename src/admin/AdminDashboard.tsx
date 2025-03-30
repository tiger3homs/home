import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { translations as defaultTranslations } from '../translations';
import ProjectsTab from './tabs/ProjectsTab';
import ServicesTab from './tabs/ServicesTab';
import StyleEditorTab from './tabs/StyleEditorTab';
import SocialLinksTab from './tabs/SocialLinksTab';
import { TranslationsType, LanguageKey, newProjectTemplate, ServiceItem } from './types'; // Import ServiceItem if defined there, or define below
import { renderFields, updateNestedState } from './utils';

// Define a template for new service items if not imported from types.ts
const newServiceTemplate: ServiceItem = {
  title: 'New Service Title',
  description: 'New service description.',
  // icon: 'default-icon.png' // Add default icon if applicable
};

// Define the type for the keys of the 'en' object in translations
type TranslationSectionKey = keyof typeof defaultTranslations.en;

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [translations, setTranslations] = useState<TranslationsType>(() => {
    const savedTranslations = localStorage.getItem('siteTranslations');
    try {
      // Ensure the parsed data conforms to the expected structure, merge if necessary
      const parsed = savedTranslations ? JSON.parse(savedTranslations) : {};
      // Simple merge, prioritizing saved data but ensuring all default keys exist
      // A more robust merge might be needed for deeply nested structures if defaults change often
      return { en: { ...defaultTranslations.en, ...(parsed.en || {}) } };
    } catch (e) {
      console.error("Failed to parse translations from localStorage", e);
      return defaultTranslations; // Fallback to defaults on error
    }
  });
  const [saveStatus, setSaveStatus] = useState('');
  const [logoutError, setLogoutError] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [editingPath, setEditingPath] = useState<string | null>(null);

  const contentSections = useMemo(() => {
    if (translations && translations.en) {
      // Get keys that are actually present in the current translations state
      const keys = Object.keys(translations.en) as TranslationSectionKey[];
      if (activeTab === null && keys.length > 0) {
        setActiveTab(keys[0]); // Set initial tab
      }
      // Filter out any keys that might not be in the default structure if needed,
      // but generally, we trust the initial load/merge logic.
      return keys;
    }
    return [];
  }, [translations]); // Dependency is correct

  const handleLogout = async () => {
    setLogoutError('');
    if (!auth) {
      console.error("Firebase auth instance is not available.");
      setLogoutError('Logout service unavailable. Please try again later.');
      return;
    }
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.error("Logout failed:", error);
      setLogoutError('Failed to log out. Please try again.');
    }
  };

  // Note: updateNestedState uses 'any', so type safety relies on correct path construction
  const handleInputChange = useCallback((fullPath: (string | number)[], value: string) => {
    setTranslations((prev: TranslationsType) => {
      const langToUpdate: LanguageKey = 'en';
      // Basic validation before calling the 'any' based utility
      if (!fullPath || fullPath.length === 0) return prev;
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
      const newProjectKey = `project_${Date.now()}`; // Use a more descriptive prefix
      const langData = { ...prev.en }; // Shallow copy
      // Ensure projects section exists and is an object with at least a title
      if (typeof langData.projects !== 'object' || langData.projects === null) {
        // Initialize with the default title
        langData.projects = { title: defaultTranslations.en.projects.title };
      }
      // Add the new project using type assertion to allow dynamic key
      (langData.projects as any)[newProjectKey] = { ...newProjectTemplate };

      return {
        ...prev,
        en: langData
      };
    });
    setSaveStatus('New project added. Edit details and save.');
    if (activeTab !== 'projects') {
      setActiveTab('projects');
    }
  }, [activeTab]);


  const handleAddNewService = useCallback(() => {
    setTranslations((prev: TranslationsType) => {
      const langData = { ...prev.en }; // Shallow copy

      // Ensure services section and list array exist
      if (typeof langData.services !== 'object' || langData.services === null) {
        // Initialize services with title and empty list array if it doesn't exist
        langData.services = { title: defaultTranslations.en.services.title || 'Services', list: [] };
      } else if (!Array.isArray(langData.services.list)) {
        // Initialize list array if it's missing
        langData.services.list = [];
      }

      // Add the new service item to the list array
      langData.services.list.push({ ...newServiceTemplate });

      return {
        ...prev,
        en: langData
      };
    });
    setSaveStatus('New service added. Edit details and save.');
    if (activeTab !== 'services') {
      setActiveTab('services');
    }
  }, [activeTab]); // Dependency on activeTab to potentially switch tabs


  // Note: This relies on updateNestedState's logic which uses 'any'
  // More robust type checking could be added here if needed.
  const handleDeleteItem = useCallback((pathToDelete: (string | number)[]) => {
    if (!pathToDelete || pathToDelete.length < 1) {
        console.error("Invalid path for deletion:", pathToDelete);
        return;
    }
    setTranslations((prev: TranslationsType) => {
        const newState = JSON.parse(JSON.stringify(prev)); // Deep copy for safety
        let current: any = newState.en; // Use 'any' for traversal

        // Traverse to the parent object/array
        for (let i = 0; i < pathToDelete.length - 1; i++) {
            const key = pathToDelete[i];
            if (typeof current !== 'object' || current === null || current[key] === undefined) {
                console.error("Path not found for deletion:", pathToDelete, "at segment", key);
                return prev; // Return original state if path is invalid
            }
            current = current[key];
        }

        const itemKeyToDelete = pathToDelete[pathToDelete.length - 1];

        // Perform deletion on the parent ('current')
        if (Array.isArray(current) && typeof itemKeyToDelete === 'number') {
            if (itemKeyToDelete >= 0 && itemKeyToDelete < current.length) {
                current.splice(itemKeyToDelete, 1); // Delete from array
            } else {
                console.error("Index out of bounds for deletion:", pathToDelete);
                return prev;
            }
        } else if (typeof current === 'object' && current !== null && typeof itemKeyToDelete === 'string') {
            if (itemKeyToDelete in current) {
                delete current[itemKeyToDelete]; // Delete from object
            } else {
                console.error("Key not found for deletion:", pathToDelete, `Key: ${itemKeyToDelete}`);
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
      setSaveStatus('Content changes saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (e) {
      console.error("Failed to save translations to localStorage", e);
      setSaveStatus('Error saving content changes.');
    }
  };

  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset the English text content (About, Contact, Services, General Info) to the default values? This cannot be undone and does not affect Projects, Styles, or Social Links.')) {
      // Reset only specific sections, preserving others like projects
      const currentProjects = translations.en.projects; // Keep existing projects
      setTranslations(prev => ({
        ...prev, // Keep other languages if any
        en: {
          ...defaultTranslations.en, // Reset base sections
          projects: currentProjects // Restore projects
        }
      }));
      // Save the selectively reset state
      localStorage.setItem('siteTranslations', JSON.stringify({
         en: {
          ...defaultTranslations.en,
          projects: currentProjects
        }
      }));
      setSaveStatus('Text content sections reset to defaults.');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  // Type guard to check if a key is a valid TranslationSectionKey
  const isValidTranslationKey = (key: string | null): key is TranslationSectionKey => {
    if (key === null) return false;
    return key in defaultTranslations.en;
  };

  const renderActiveTabContent = () => {
    if (!activeTab) {
      return <p className="text-gray-500">Select a section above to start editing.</p>;
    }

    // Static Tabs
    if (activeTab === 'styleEditor') {
      return <StyleEditorTab />;
    }
    if (activeTab === 'socialLinks') {
      return <SocialLinksTab />;
    }

    // Dynamic Tabs - Use type guard
    if (isValidTranslationKey(activeTab)) {
      // Determine title based on the active tab key
      const sectionDataForTitle = translations.en[activeTab];
      const tabTitle = typeof sectionDataForTitle === 'object' && sectionDataForTitle !== null && 'title' in sectionDataForTitle && typeof sectionDataForTitle.title === 'string'
        ? sectionDataForTitle.title
        : activeTab.replace(/([A-Z])/g, ' $1');

      return (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
            Editing: {tabTitle} Content
          </h3>
          {/* Render specific tabs, fetching data within the block for better type inference */}
          {activeTab === 'projects' ? (() => {
            const projectsData = translations.en.projects; // Explicitly get projects data
            return <ProjectsTab
              data={projectsData} // Pass the correctly typed data
              path={[activeTab]}
              handleChange={handleInputChange}
              editingPath={editingPath}
              setEditingPath={setEditingPath}
              handleAddProject={handleAddNewProject}
              handleDelete={handleDeleteItem}
              renderFields={renderFields}
            />;
          })() : activeTab === 'services' ? (() => { // Corrected block for services
             const servicesData = translations.en.services; // Explicitly get services data
             // Ensure servicesData is correctly typed or provide a fallback
             if (!servicesData || typeof servicesData !== 'object' || !Array.isArray(servicesData.list)) {
                 // Handle case where services data might be missing or malformed initially
                 // You might want to return null, a loading indicator, or an error message
                 // Or ensure initial state/defaultTranslations provides a valid structure
                 console.error("Services data is not in the expected format:", servicesData);
                 // For now, let's provide a default structure to avoid crashing renderFields
                 // A better approach might be to ensure defaultTranslations.en.services is always valid
                 const defaultServiceData = { title: 'Services', list: [] };
                 return <ServicesTab
                     data={defaultServiceData}
                     path={[activeTab]}
                     handleChange={handleInputChange}
                     editingPath={editingPath}
                     setEditingPath={setEditingPath}
                     handleAddService={handleAddNewService} // Correct prop name
                     handleDelete={handleDeleteItem}
                     renderFields={renderFields}
                 />;
             }
             // Render ServicesTab with validated/fetched data
             return <ServicesTab
              data={servicesData} // Pass the correctly typed data
              path={[activeTab]}
              handleChange={handleInputChange}
              editingPath={editingPath}
              setEditingPath={setEditingPath}
              handleAddService={handleAddNewService} // Correct prop name
              handleDelete={handleDeleteItem}
              renderFields={renderFields}
            />;
          })() : ( // End of services block, start generic block
            // Generic rendering for other dynamic tabs (e.g., about, contact, generalInfo)
            renderFields(
              translations.en[activeTab], // Pass the specific section data
              [activeTab],
              handleInputChange,
              editingPath,
              setEditingPath,
              undefined,
              handleDeleteItem
            )
          )}
        </>
      );
    }

    // Fallback if activeTab is somehow invalid (shouldn't happen with guard)
    return <p className="text-red-500">Error: Invalid tab '{activeTab}' selected.</p>;
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-300 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
          <button
            onClick={resetToDefaults}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors"
            title="Reset text content (About, Contact, Services, General Info) to defaults. Does not affect Projects, Styles, or Social Links."
          >
            Reset Text Defaults
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors"
          >
            Logout
          </button>
        </div>
        {logoutError && <p className="text-red-500 text-xs italic w-full text-center sm:text-right mt-2">{logoutError}</p>}
      </div>

      {/* Tabs Navigation */}
      <div className="mb-6 border-b border-gray-300">
        <nav className="-mb-px flex space-x-4 sm:space-x-6 overflow-x-auto pb-px" aria-label="Tabs">
          {/* Dynamic tabs */}
          {contentSections.map((sectionKey) => {
             // Use type assertion here as we know sectionKey comes from Object.keys(translations.en)
             const key = sectionKey as TranslationSectionKey;
             const tabData = translations.en[key];
             const tabTitle = typeof tabData === 'object' && tabData !== null && 'title' in tabData && typeof tabData.title === 'string'
               ? tabData.title
               : key.replace(/([A-Z])/g, ' $1');
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`${
                  activeTab === key
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`}
                aria-current={activeTab === key ? 'page' : undefined}
              >
                {tabTitle}
              </button>
            );
          })}
          {/* Static tabs */}
          <button
            key="styleEditor"
            onClick={() => setActiveTab('styleEditor')}
            className={`${
              activeTab === 'styleEditor'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`}
            aria-current={activeTab === 'styleEditor' ? 'page' : undefined}
          >
            Style Editor
          </button>
          <button
            key="socialLinks"
            onClick={() => setActiveTab('socialLinks')}
            className={`${
              activeTab === 'socialLinks'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`}
            aria-current={activeTab === 'socialLinks' ? 'page' : undefined}
          >
            Social Links
          </button>
        </nav>
      </div>

      {/* Tab Content Area */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        {renderActiveTabContent()}
      </div>

      {/* Save Button Area */}
      <div className="mt-6 text-right flex justify-end items-center gap-4">
        {saveStatus && <span className="text-green-600 text-sm transition-opacity duration-300">{saveStatus}</span>}
        <button
          onClick={saveChanges}
          className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline transition-all duration-150 text-sm ${
            activeTab === 'styleEditor' || activeTab === 'socialLinks' ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          disabled={activeTab === 'styleEditor' || activeTab === 'socialLinks'}
          title={activeTab === 'styleEditor' || activeTab === 'socialLinks' ? "Changes are saved directly within this tab" : "Save text content changes"}
        >
          Save Content Changes
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
