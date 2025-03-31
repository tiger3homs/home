import React, { useState, useCallback, useMemo, useEffect } from 'react'; // Added useEffect
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
// Replace database imports with Firestore imports
// Add updateDoc and deleteField to the import
import { doc, setDoc, onSnapshot, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { auth, db } from '../firebaseConfig'; // Import db (which is Firestore)
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

// Helper function to get a static display name for a section key
const getStaticSectionName = (key: string): string => {
  // Simple formatting: split camelCase and capitalize
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};


// Define Firestore document path
const TRANSLATIONS_DOC_PATH = 'translations/en';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  // Initialize with default translations, will be overwritten by Firebase data
  const [translations, setTranslations] = useState<TranslationsType>(defaultTranslations);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
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
  }, [translations, activeTab]); // Added activeTab dependency for initial setting

  // Effect to fetch data from Firestore on mount and listen for changes
  useEffect(() => {
    if (!db) { // db is Firestore instance here
      console.error("Firestore instance is not available.");
      setSaveStatus("Error: Firestore connection failed.");
      setIsLoading(false);
      return;
    }
    // Get a reference to the Firestore document
    const translationsDocRef = doc(db, TRANSLATIONS_DOC_PATH);
    setIsLoading(true);

    // Use onSnapshot for real-time updates
    const unsubscribe = onSnapshot(translationsDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Directly set the 'en' state from Firestore data, assuming it's the complete source of truth
        setTranslations(prev => ({
          ...prev, // Keep other potential language keys if structure allows
          en: data as TranslationsType['en'] // Trust Firestore data for 'en'
        }));
      } else {
        // Document doesn't exist, use defaults (including default 'en')
        setTranslations(defaultTranslations);
        console.log("No translations document found in Firestore, using defaults.");
        // Optionally create the document with defaults here
        // setDoc(translationsDocRef, defaultTranslations.en);
      }
      setIsLoading(false);
    }, (error) => {
      console.error("Firestore snapshot error:", error);
      setSaveStatus("Error fetching data from Firestore.");
      setIsLoading(false);
      // Keep existing state or fallback to defaults? For now, keep state.
    });

    // Cleanup listener on unmount
    return () => unsubscribe(); // onSnapshot returns the unsubscribe function directly
  }, []); // Empty dependency array ensures this runs only on mount and unmount

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
      // Ensure prev.en and prev.en.services exist and are objects
      const currentServices = prev.en?.services;
      // Default to an empty array if list doesn't exist or isn't an array
      const currentList = Array.isArray(currentServices?.list) ? currentServices.list : [];

      // Create a new list with the new item added immutably
      const newList = [...currentList, { ...newServiceTemplate }];

      // Construct the new 'en' state immutably
      const newEnState = {
        ...prev.en, // Copy existing 'en' data
        services: { // Overwrite 'services' section
          // Copy existing service properties (like title) or use defaults if services didn't exist
          ...(currentServices || { title: defaultTranslations.en.services.title || 'Services', list: [] }),
          list: newList, // Use the new list
        },
      };

      return {
        ...prev, // Copy other languages if any
        en: newEnState, // Set the updated 'en' state
      };
    });
    setSaveStatus('New service added. Edit details and save.');
    if (activeTab !== 'services') {
      setActiveTab('services');
    }
  }, [activeTab]); // Dependency on activeTab to potentially switch tabs


  // Modified saveChanges to accept data payload
  const saveChanges = async (dataToSave?: TranslationsType['en']) => {
    const data = dataToSave || translations.en; // Use provided data or current state
    if (!db) { // db is Firestore instance
      setSaveStatus("Error: Firestore connection failed.");
      return;
    }
    setSaveStatus('Saving...');
    try {
      // Get a reference to the Firestore document and save the 'en' data
      const translationsDocRef = doc(db, TRANSLATIONS_DOC_PATH);
      // Revert to using merge: true for general saves
      await setDoc(translationsDocRef, data, { merge: true });
      setSaveStatus('Content changes saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      console.error("Failed to save translations to Firestore:", error);
      setSaveStatus('Error saving content changes.');
      setTimeout(() => setSaveStatus(''), 5000); // Keep error message longer
    }
  };

  // New function to handle specific field deletion using updateDoc and FieldValue.delete()
  const handleFirestoreDelete = async (fieldPath: string) => {
    if (!db) {
      setSaveStatus("Error: Firestore connection failed.");
      return;
    }
    setSaveStatus('Deleting item...');
    const translationsDocRef = doc(db, TRANSLATIONS_DOC_PATH);
    try {
      // Use the imported deleteField sentinel
      await updateDoc(translationsDocRef, {
        [fieldPath]: deleteField() // Use the deleteField() sentinel function
      });
      // Don't set status here, let onSnapshot update trigger potential status changes or rely on UI update
      // setSaveStatus('Item deleted successfully!'); // Optional: if needed
      // setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      console.error("Failed to delete item from Firestore:", error);
      setSaveStatus('Error deleting item.');
      setTimeout(() => setSaveStatus(''), 5000);
    }
  };


  // Updated handleDeleteItem to handle array deletions (services) and field deletions (projects)
  const handleDeleteItem = useCallback(async (pathToDelete: (string | number)[]) => { // Make async
    if (!pathToDelete || pathToDelete.length < 1) {
        console.error("Invalid path for deletion:", pathToDelete);
        setSaveStatus('Error: Invalid deletion path.');
        return;
    }

    // Check if we are deleting a service item from the list array
    if (pathToDelete[0] === 'services' && pathToDelete[1] === 'list' && typeof pathToDelete[2] === 'number') {
        const serviceIndexToDelete = pathToDelete[2];

        // Get the current list from state (more reliable than reading Firestore again immediately)
        // Use optional chaining in case services or list is missing initially
        const currentServicesList = translations.en.services?.list;

        if (!Array.isArray(currentServicesList)) {
            console.error("Cannot delete service item: services.list is not an array or is missing.", currentServicesList);
            setSaveStatus('Error: Services data structure issue.');
            return;
        }

        // Create the new list without the item to delete
        const updatedServicesList = currentServicesList.filter((_, index) => index !== serviceIndexToDelete);

        // Update Firestore with the modified list
        if (!db) {
            setSaveStatus("Error: Firestore connection failed.");
            return;
        }
        setSaveStatus('Deleting service item...');
        const translationsDocRef = doc(db, TRANSLATIONS_DOC_PATH);
        try {
            // Update the specific field 'services.list' with the new array
            await updateDoc(translationsDocRef, {
                'services.list': updatedServicesList
            });
            // onSnapshot listener will automatically update the local state and UI
            // setSaveStatus('Service item deleted.'); // Optional status update if needed
            // setTimeout(() => setSaveStatus(''), 3000);
        } catch (error) {
            console.error("Failed to update services list in Firestore:", error);
            setSaveStatus('Error deleting service item.');
            setTimeout(() => setSaveStatus(''), 5000);
        }

    } else {
        // Handle deletion for other types (e.g., projects) using deleteField
        const fieldPathString = pathToDelete.join('.');
        if (!fieldPathString) {
           console.error("Generated empty field path for deletion:", pathToDelete);
           setSaveStatus('Error: Could not determine field to delete.');
           return;
        }
        // Call the specific delete function for Firestore fields
        // Note: handleFirestoreDelete is already async
        await handleFirestoreDelete(fieldPathString);
        // Rely on onSnapshot for UI updates
    }

  // Add dependency on the services list from state to ensure useCallback has the latest list
  // when creating the filtered array. Also include db reference.
}, [translations.en.services?.list, db]);


  const resetToDefaults = async () => {
     if (!db) { // db is Firestore instance
      setSaveStatus("Error: Firestore connection failed.");
      return;
    }
    if (window.confirm('Are you sure you want to reset the English text content (About, Contact, Services, General Info) to the default values? This cannot be undone and does not affect Projects, Styles, or Social Links.')) {
      setSaveStatus('Resetting...');
      // Prepare the data to be saved: defaults for most, but keep existing projects
      const dataToSave = {
        ...defaultTranslations.en, // Start with all defaults
        projects: translations.en.projects // Overwrite with current projects
      };

      try {
        // Get a reference to the Firestore document and overwrite with the reset data
        const translationsDocRef = doc(db, TRANSLATIONS_DOC_PATH);
        await setDoc(translationsDocRef, dataToSave); // Overwrite the document
        // The onSnapshot listener should automatically update the local state
        setSaveStatus('Text content sections reset to defaults.');
        setTimeout(() => setSaveStatus(''), 3000);
      } catch (error) {
        console.error("Failed to reset translations in Firestore:", error);
        setSaveStatus('Error resetting content.');
        setTimeout(() => setSaveStatus(''), 5000);
      }
    }
  };

  // Type guard to check if a key is a valid TranslationSectionKey
  const isValidTranslationKey = (key: string | null): key is TranslationSectionKey => {
    if (key === null) return false;
    return key in defaultTranslations.en;
  };

  const renderActiveTabContent = () => {
    // Show loading indicator while fetching initial data
    if (isLoading) {
      return <p className="text-gray-500 text-center py-10">Loading content...</p>;
    }

    if (!activeTab) {
      // If still no active tab after loading, prompt selection
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
      // Use the static helper function for the heading title
      const staticTabTitle = getStaticSectionName(activeTab);

      return (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
            Editing: {staticTabTitle} Content
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
          {/* If generalInfo is active, also render About section content */}
          {activeTab === 'generalInfo' && translations.en.about && (
            <>
              <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-600 capitalize">
                {getStaticSectionName('about')} Content (Merged)
              </h4>
              {renderFields(
                translations.en.about,
                ['about'], // Path for the about section data
                handleInputChange,
                editingPath,
                setEditingPath,
                undefined,
                handleDeleteItem
              )}
            </>
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
          {/* Render tabs in specific order (Removed 'about') */}
          {['generalInfo', 'socialLinks', 'projects', 'services', 'contact', 'styleEditor'].map((key) => {
            let tabTitle: string;
            let isStatic = false;

            if (key === 'styleEditor') {
              tabTitle = 'Style Editor';
              isStatic = true;
            } else if (key === 'socialLinks') {
              tabTitle = 'Social Links';
              isStatic = true;
            } else if (isValidTranslationKey(key)) {
              // Use the static helper function for dynamic tabs
              tabTitle = getStaticSectionName(key);
            } else {
              // Skip rendering if the key is invalid (shouldn't happen with the hardcoded array)
              return null;
            }

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
        </nav>
      </div>

      {/* Tab Content Area */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        {renderActiveTabContent()}
      </div>

      {/* Save Button Area */}
      <div className="mt-6 text-right flex justify-end items-center gap-4">
        {saveStatus && <span className="text-green-600 text-sm transition-opacity duration-300">{saveStatus}</span>}
        {/* Wrap saveChanges call in an arrow function to avoid passing the event object */}
        <button
          onClick={() => saveChanges()}
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
