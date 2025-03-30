import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Restore Firestore imports
import { db } from '../../firebaseConfig'; // Import Firestore instance

// Restore StyleData interface
interface StyleData {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

interface StyleEditorTabProps {
  // Define props needed for the style editor tab, if any
}

const StyleEditorTab: React.FC<StyleEditorTabProps> = () => {
  // State for style properties - Keep these
  const [primaryColor, setPrimaryColor] = useState('#007bff'); // Default values
  const [secondaryColor, setSecondaryColor] = useState('#6c757d');
  const [fontFamily, setFontFamily] = useState("'Noto Sans', sans-serif"); // Match initial CSS
  const [isLoading, setIsLoading] = useState(true); // Keep isLoading state
  const [isSaving, setIsSaving] = useState(false); // Restore isSaving state

  // --- Input Change Handlers - Keep these ---
  const isValidHexColor = (color: string): boolean => /^#[0-9A-F]{6}$/i.test(color);

  // Handlers for Primary Color
  const handlePrimaryColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(e.target.value);
  };
  const handlePrimaryColorTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow empty or '#' for partial input, or valid hex
    if (isValidHexColor(newValue) || newValue === '' || newValue === '#') {
       setPrimaryColor(newValue);
    }
  };

  // Handlers for Secondary Color
  const handleSecondaryColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(e.target.value);
  };
   const handleSecondaryColorTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow empty or '#' for partial input, or valid hex
    if (isValidHexColor(newValue) || newValue === '' || newValue === '#') {
       setSecondaryColor(newValue);
    }
  };

  // Handler for Font Family
  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontFamily(e.target.value);
  };
  // --- End Handlers ---

  // Firestore document reference will be created inside useEffect now

  // Restore Effect to load styles from Firestore on mount
  useEffect(() => {
    // Check if db instance is ready first
    if (!db) {
      console.error("loadStyles Effect: Firestore db instance is not available.");
      setIsLoading(false); // Can't load if db is missing
      return; // Exit effect if db is not ready
    }

    // Create docRef inside the effect, now that we know db is available
    const stylesDocRefInsideEffect = doc(db, 'settings', 'styles');
    console.log('loadStyles Effect: Created stylesDocRefInsideEffect:', stylesDocRefInsideEffect.path);

    const loadStyles = async () => {
      setIsLoading(true);
      // No need for null check on stylesDocRefInsideEffect here
      console.log('loadStyles Function: Attempting getDoc...'); // Log inside async function
      try {
        const docSnap = await getDoc(stylesDocRefInsideEffect); // Use the ref created in the effect
        console.log('loadStyles Function: getDoc finished.'); // Log after getDoc
        if (docSnap.exists()) {
          console.log('loadStyles Function: Document exists. Data:', docSnap.data()); // Log if doc exists
          const data = docSnap.data() as StyleData;
          setPrimaryColor(data.primaryColor);
          setSecondaryColor(data.secondaryColor);
          setFontFamily(data.fontFamily);
        } else {
          console.log("loadStyles Function: No style document found, using defaults.");
          // Optionally save defaults if not found
          // await setDoc(stylesDocRefInsideEffect, { primaryColor, secondaryColor, fontFamily });
        }
      } catch (error) {
        console.error("loadStyles Function: Error during getDoc or processing:", error); // More specific error log
        alert('Failed to load styles.'); // User feedback
      } finally {
        console.log('loadStyles Function: Setting isLoading to false.'); // Log before setting loading false
        setIsLoading(false); // Set loading false after attempt
      }
    };

    loadStyles();
    // Effect depends on the db instance now.
    // If db changes (unlikely but possible), this effect re-runs.
  }, [db]); // Update dependency array to db

  // Restore Effect to update CSS variables when state changes
  useEffect(() => {
    // Keep this effect as it was working
    if (!isLoading) {
    // Ensure colors are valid before setting CSS variables
    const validPrimary = primaryColor.match(/^#[0-9A-F]{6}$/i) ? primaryColor : '#000000';
    const validSecondary = secondaryColor.match(/^#[0-9A-F]{6}$/i) ? secondaryColor : '#000000';
    document.documentElement.style.setProperty('--primary-color', validPrimary);
    document.documentElement.style.setProperty('--secondary-color', validSecondary);
    document.documentElement.style.setProperty('--font-family', fontFamily);
  }
    // No timer cleanup needed now
    // We apply styles *only* when not loading. If loading, we wait.
    // If already loaded, any change to colors/font triggers an update.
  }, [primaryColor, secondaryColor, fontFamily, isLoading]);


  // Restore handleSaveStyles function with added logging
  // It needs to create its own docRef or rely on one created elsewhere if db is stable
  const handleSaveStyles = async () => {
    // Recreate docRef for saving, ensuring db is checked
    if (!db) {
       console.error("Save Error: Firestore db instance is not available.");
       alert('Error: Cannot save styles. Firestore not available.');
       return;
    }
    const stylesDocRefForSave = doc(db, 'settings', 'styles');

    // Original null check is redundant now, but keep structure
    if (!stylesDocRefForSave) { // This check will likely never fail if db check passes
      console.error("Save Error: Failed to create doc reference.");
      alert('Error: Cannot save styles. Failed to create reference.');
      return;
    }
    setIsSaving(true);
    console.log('Attempting to save styles to Firestore:', { primaryColor, secondaryColor, fontFamily });
    try {
      const stylesToSave: StyleData = { primaryColor, secondaryColor, fontFamily };
      await setDoc(stylesDocRefForSave, stylesToSave); // Use the ref created for saving
      console.log('Firestore save successful:', stylesToSave);
      alert('Styles saved successfully!'); // User feedback
    } catch (error) {
      console.error("Firestore save error:", error); // Log the specific error
      alert(`Failed to save styles. Error: ${error instanceof Error ? error.message : String(error)}`); // Show error details
    } finally {
      console.log('Finished save attempt.');
      setIsSaving(false);
    }
  };

  // Keep isLoading check for rendering
  if (isLoading) {
    return <div>Loading styles...</div>; // Loading indicator
  }

  // --- Return JSX - Keep this structure ---
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Style Editor</h4> {/* Restore original title */}

      <div className="space-y-4">
        {/* Primary Color */}
        <div>
          <label htmlFor="primaryColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Primary Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="primaryColorPicker" // Use distinct ID
              value={primaryColor.match(/^#[0-9A-F]{6}$/i) ? primaryColor : '#000000'} // Ensure valid value for color picker
              onChange={handlePrimaryColorPickerChange}
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="primaryColorText" // Use distinct ID
              value={primaryColor}
              onChange={handlePrimaryColorTextChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7} // Limit input length
            />
          </div>
        </div>

        {/* Secondary Color */}
        <div>
          <label htmlFor="secondaryColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Secondary Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="secondaryColorPicker" // Use distinct ID
              value={secondaryColor.match(/^#[0-9A-F]{6}$/i) ? secondaryColor : '#000000'} // Ensure valid value for color picker
              onChange={handleSecondaryColorPickerChange}
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="secondaryColorText" // Use distinct ID
              value={secondaryColor}
              onChange={handleSecondaryColorTextChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7} // Limit input length
            />
          </div>
        </div>

        {/* Font Family */}
        <div>
          <label htmlFor="fontFamily" className="block text-sm font-medium text-gray-700 mb-1">
            Font Family
          </label>
          <input
            type="text"
            id="fontFamily"
            value={fontFamily}
            onChange={handleFontFamilyChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., 'Arial, sans-serif', 'Roboto, sans-serif'"
          />
           <p className="mt-1 text-xs text-gray-500">Enter a valid CSS font-family value.</p>
         </div>

        {/* Preview Section - Keep this */}
        <div className="mt-6 p-4 border border-gray-300 rounded">
            <h5 className="text-md font-medium mb-3">Preview</h5>
            {/* Use state directly for preview in this simplified version */}
            <div style={{ fontFamily: fontFamily }}>
                <p className="mb-2">This text uses the selected font family.</p>
                <button
                    style={{ backgroundColor: primaryColor, color: 'white' }}
                    className="px-3 py-1 rounded mr-2"
                >
                    Primary Button
                </button>
                <button
                    style={{ backgroundColor: secondaryColor, color: 'white' }}
                    className="px-3 py-1 rounded"
                >
                    Secondary Button
                </button>
                <p style={{ color: primaryColor }} className="mt-2">
                    This text uses the primary color.
                </p>
                <p style={{ color: secondaryColor }} className="mt-1">
                    This text uses the secondary color.
                </p>
            </div>
        </div>

        {/* Restore Save Button */}
        <div className="pt-4">
          <button
            onClick={handleSaveStyles}
            disabled={isSaving || isLoading} // Disable if loading or saving
            className={`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSaving || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSaving ? 'Saving...' : 'Save Styles'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleEditorTab;
