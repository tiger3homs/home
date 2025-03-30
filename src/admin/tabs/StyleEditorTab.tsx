import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Restore Firestore imports
import chroma from 'chroma-js'; // Import chroma-js
import { db } from '../../firebaseConfig'; // Import Firestore instance
import { translations } from '../../translations'; // Import translations object

// Update StyleData interface
interface StyleData {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  titleColor?: string; // Added optional titleColor
  h3TitleColor?: string; // Added optional h3TitleColor
  textColor?: string; // Added optional textColor
  backgroundFromColor?: string; // Added background start color
  backgroundToColor?: string; // Added background end color
}

interface StyleEditorTabProps {
  // Define props needed for the style editor tab, if any
}

// Define default styles based on index.css for consistency
const defaultStyles: StyleData = {
  primaryColor: '#377dc8',
  secondaryColor: '#0f3257',
  fontFamily: "'Noto Sans', sans-serif", // Keep quotes for string literal
  titleColor: '#d7e3ee',
  h3TitleColor: '#d7e3ee',
  textColor: '#c6d3e2',
  backgroundFromColor: '#111827', // Default approx gray-900
  backgroundToColor: '#1F2937', // Default approx gray-800
};

const StyleEditorTab: React.FC<StyleEditorTabProps> = () => {
  // State initialized with default values
  const [primaryColor, setPrimaryColor] = useState(defaultStyles.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(defaultStyles.secondaryColor);
  const [fontFamily, setFontFamily] = useState(defaultStyles.fontFamily);
  const [titleColor, setTitleColor] = useState(defaultStyles.titleColor ?? '#ffffff'); // Use nullish coalescing for optional fields
  const [h3TitleColor, setH3TitleColor] = useState(defaultStyles.h3TitleColor ?? '#d7e3ee');
  const [textColor, setTextColor] = useState<string>(defaultStyles.textColor ?? '#c6d3e2');
  // Explicitly type state as string and initialize with guaranteed string default
  const [backgroundFromColor, setBackgroundFromColor] = useState<string>(defaultStyles.backgroundFromColor ?? '#111827');
  const [backgroundToColor, setBackgroundToColor] = useState<string>(defaultStyles.backgroundToColor ?? '#1F2937');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [aiMode, setAiMode] = useState(0); // 0: Complementary, 1: Analogous, 2: Triadic

  // --- Optimized Input Change Handlers ---
  const isValidHexColor = (color: string): boolean => /^#[0-9A-F]{6}$/i.test(color);

  // Generic handler for color picker changes
  const handleColorPickerChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
  };

  // Generic handler for color text input changes
  const handleColorTextChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      // Allow empty or '#' for partial input, or valid hex
      if (isValidHexColor(newValue) || newValue === '' || newValue === '#') {
        setter(newValue);
      }
  };

  // Specific handler for Font Family (updated for select dropdown)
  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };
  // --- End Optimized Handlers ---

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
          // Use defaultStyles for fallbacks
          setPrimaryColor(data.primaryColor || defaultStyles.primaryColor);
          setSecondaryColor(data.secondaryColor || defaultStyles.secondaryColor);
          setFontFamily(data.fontFamily || defaultStyles.fontFamily);
          setTitleColor(data.titleColor || defaultStyles.titleColor || '#ffffff'); // Double fallback for safety
          setH3TitleColor(data.h3TitleColor || defaultStyles.h3TitleColor || '#d7e3ee');
          setTextColor(data.textColor || defaultStyles.textColor || '#c6d3e2');
          // Ensure setting state uses defaults if Firestore data is missing, providing guaranteed string default
          setBackgroundFromColor(data.backgroundFromColor ?? defaultStyles.backgroundFromColor ?? '#111827');
          setBackgroundToColor(data.backgroundToColor ?? defaultStyles.backgroundToColor ?? '#1F2937');
        } else {
          console.log("loadStyles Function: No style document found, using defaults from defaultStyles object.");
          // Set state to defaults if no document exists
          setPrimaryColor(defaultStyles.primaryColor);
          setSecondaryColor(defaultStyles.secondaryColor);
          setFontFamily(defaultStyles.fontFamily);
          setTitleColor(defaultStyles.titleColor ?? '#ffffff');
          setH3TitleColor(defaultStyles.h3TitleColor ?? '#d7e3ee');
          setTextColor(defaultStyles.textColor ?? '#c6d3e2');
          // Ensure setting state uses guaranteed string defaults
          setBackgroundFromColor(defaultStyles.backgroundFromColor ?? '#111827');
          setBackgroundToColor(defaultStyles.backgroundToColor ?? '#1F2937');
          // Optionally save defaults if not found
          // await setDoc(stylesDocRefInsideEffect, { primaryColor, secondaryColor, fontFamily, titleColor, h3TitleColor, textColor });
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
    // Ensure colors are valid before setting CSS variables, use defaultStyles for fallbacks
    const validPrimary = primaryColor.match(/^#[0-9A-F]{6}$/i) ? primaryColor : defaultStyles.primaryColor;
    const validSecondary = secondaryColor.match(/^#[0-9A-F]{6}$/i) ? secondaryColor : defaultStyles.secondaryColor;
    const validTitle = titleColor.match(/^#[0-9A-F]{6}$/i) ? titleColor : (defaultStyles.titleColor ?? '#ffffff');
    const validH3Title = h3TitleColor.match(/^#[0-9A-F]{6}$/i) ? h3TitleColor : (defaultStyles.h3TitleColor ?? '#d7e3ee');
    const validText = textColor.match(/^#[0-9A-F]{6}$/i) ? textColor : (defaultStyles.textColor ?? '#c6d3e2');
    // Validate state directly, fallback to guaranteed string default
    const validBgFrom = backgroundFromColor.match(/^#[0-9A-F]{6}$/i)
      ? backgroundFromColor
      : (defaultStyles.backgroundFromColor ?? '#111827');
    const validBgTo = backgroundToColor.match(/^#[0-9A-F]{6}$/i)
      ? backgroundToColor
      : (defaultStyles.backgroundToColor ?? '#1F2937');

    document.documentElement.style.setProperty('--primary-color', validPrimary);
    document.documentElement.style.setProperty('--secondary-color', validSecondary);
    document.documentElement.style.setProperty('--font-family', fontFamily);
    // Apply new colors
    document.documentElement.style.setProperty('--title-color', validTitle);
    document.documentElement.style.setProperty('--h3title-color', validH3Title); // Note: CSS variable name is --h3title-color
    document.documentElement.style.setProperty('--text-color', validText);
    // State variables are now guaranteed strings, so direct assignment is safe
    document.documentElement.style.setProperty('--background-from-color', validBgFrom);
    document.documentElement.style.setProperty('--background-to-color', validBgTo);
  }
  }, [primaryColor, secondaryColor, fontFamily, titleColor, h3TitleColor, textColor, backgroundFromColor, backgroundToColor, isLoading]); // Add new dependencies


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
    const stylesToSave: StyleData = {
        primaryColor,
        secondaryColor,
        fontFamily,
        titleColor,
        h3TitleColor,
        textColor,
        backgroundFromColor,
        backgroundToColor
    };
    console.log('Attempting to save styles to Firestore:', stylesToSave);
    try {
      await setDoc(stylesDocRefForSave, stylesToSave);
      console.log('Firestore save successful:', stylesToSave);
      alert('Styles saved successfully!');
    } catch (error) {
      console.error("Firestore save error:", error); // Log the specific error
      alert(`Failed to save styles. Error: ${error instanceof Error ? error.message : String(error)}`); // Show error details
    } finally {
      console.log('Finished save attempt.');
      setIsSaving(false);
    }
  };

  // --- Add Reset Function ---
  const handleResetToDefaults = () => {
    // Reset state directly using the defaultStyles constant object
    setPrimaryColor(defaultStyles.primaryColor);
    setSecondaryColor(defaultStyles.secondaryColor);
    setFontFamily(defaultStyles.fontFamily);
    setTitleColor(defaultStyles.titleColor ?? '#ffffff'); // Use nullish coalescing for optional fields
    setH3TitleColor(defaultStyles.h3TitleColor ?? '#d7e3ee');
    setTextColor(defaultStyles.textColor ?? '#c6d3e2');
    // Ensure reset uses guaranteed string defaults
    setBackgroundFromColor(defaultStyles.backgroundFromColor ?? '#111827');
    setBackgroundToColor(defaultStyles.backgroundToColor ?? '#1F2937');

    // Optionally, provide user feedback
    // alert('Styles reset to defaults. Click Save Styles to persist.');
  };
  // --- End Reset Function ---

  // --- AI Color Generation using chroma-js (Enhanced Modes) ---
  const handleGenerateAIColors = () => {
    try {
      // Use current primary color as base, fallback to default if invalid
      const baseColor = chroma.valid(primaryColor) ? chroma(primaryColor) : chroma(defaultStyles.primaryColor);
      const currentMode = aiMode % 3; // Cycle through 0, 1, 2

      let secondaryColorHex: string;
      let accentColorHex: string; // For triadic

      switch (currentMode) {
        case 1: // Analogous
          secondaryColorHex = baseColor.set('hsl.h', '+30').hex();
          accentColorHex = baseColor.set('hsl.h', '-30').hex(); // Use the other analogous color for accents if needed
          console.log("AI Mode: Analogous");
          break;
        case 2: // Triadic
          secondaryColorHex = baseColor.set('hsl.h', '+120').hex();
          accentColorHex = baseColor.set('hsl.h', '-120').hex(); // Third triadic color
          console.log("AI Mode: Triadic");
          break;
        case 0: // Complementary (Default)
        default:
          secondaryColorHex = baseColor.set('hsl.h', '+180').hex();
          accentColorHex = baseColor.set('hsl.h', '+150').hex(); // Split complementary accent
           console.log("AI Mode: Complementary");
          break;
      }

      setSecondaryColor(secondaryColorHex);

      // Determine the color to base the text/titles/background on, depending on the mode
      let referenceColor = baseColor; // Default to primary
      if (currentMode === 1) { // Analogous - use a mix with secondary
        referenceColor = chroma.mix(baseColor, secondaryColorHex, 0.5);
      } else if (currentMode === 2) { // Triadic - use a mix with the third accent color
        referenceColor = chroma.mix(baseColor, accentColorHex, 0.5);
      }
      // For complementary (mode 0), we stick with the baseColor as the reference.

      // Generate text/title colors based on luminance contrast with a dark background assumption, using the referenceColor
      // Aim for good contrast (WCAG AA requires 4.5:1 for normal text)
      const darkBg = chroma('#18181b'); // Assume a dark background like zinc-900 for contrast check

      // Title Color (lighter shade of referenceColor, ensure contrast)
      let generatedTitleColor = referenceColor.brighten(1.5).hex();
      if (chroma.contrast(generatedTitleColor, darkBg) < 4.5) {
        generatedTitleColor = referenceColor.brighten(2.5).hex(); // Increase brightness if contrast is low
      }
      // Ensure it's not too white if reference is already light
      generatedTitleColor = chroma.mix(generatedTitleColor, '#ffffff', 0.1).hex();
      setTitleColor(generatedTitleColor);


      // H3 Title Color (slightly less bright than main title, based on referenceColor)
      let generatedH3Color = referenceColor.brighten(1).hex();
       if (chroma.contrast(generatedH3Color, darkBg) < 4.5) {
        generatedH3Color = referenceColor.brighten(2).hex(); // Increase brightness if contrast is low
      }
      // Ensure it's not too white
      generatedH3Color = chroma.mix(generatedH3Color, '#ffffff', 0.05).hex();
      setH3TitleColor(generatedH3Color);


      // Text Color (even lighter, ensure contrast, based on referenceColor)
       let generatedTextColor = referenceColor.brighten(2.5).desaturate(0.5).hex();
       if (chroma.contrast(generatedTextColor, darkBg) < 4.5) {
         generatedTextColor = referenceColor.brighten(3.5).desaturate(0.2).hex(); // Increase brightness significantly
       }
       // Ensure it's not too white
       generatedTextColor = chroma.mix(generatedTextColor, '#ffffff', 0.2).hex();
       setTextColor(generatedTextColor);


      // Background Gradient (dark shades based on referenceColor, less desaturated)
      const bgFrom = referenceColor.darken(2.2).desaturate(0.5).hex(); // Less darken, less desaturate
      const bgTo = referenceColor.darken(1.8).desaturate(0.3).hex();   // Less darken, less desaturate
      setBackgroundFromColor(bgFrom);
      setBackgroundToColor(bgTo);

      // Keep the selected primary color
      // setPrimaryColor(baseColor.hex()); // Already set, but ensures it's a valid hex

    } catch (error) {
      console.error("Error generating AI colors:", error);
      alert("Failed to generate colors. Please ensure the primary color is valid.");
      // Optionally reset to defaults or previous state on error
      handleResetToDefaults();
    } finally {
       setAiMode(prevMode => prevMode + 1); // Increment mode for next click
    }
  };
  // --- End AI Color Generation ---

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
              value={primaryColor.match(/^#[0-9A-F]{6}$/i) ? primaryColor : defaultStyles.primaryColor} // Ensure valid value for color picker
              onChange={handleColorPickerChange(setPrimaryColor)} // Use generic handler
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="primaryColorText" // Use distinct ID
              value={primaryColor}
              onChange={handleColorTextChange(setPrimaryColor)} // Use generic handler
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
              value={secondaryColor.match(/^#[0-9A-F]{6}$/i) ? secondaryColor : defaultStyles.secondaryColor} // Ensure valid value for color picker
              onChange={handleColorPickerChange(setSecondaryColor)} // Use generic handler
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="secondaryColorText" // Use distinct ID
              value={secondaryColor}
              onChange={handleColorTextChange(setSecondaryColor)} // Use generic handler
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
          <select
            id="fontFamily"
            value={fontFamily}
            onChange={handleFontFamilyChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="'Noto Sans', sans-serif">'Noto Sans', sans-serif</option>
            <option value="'Arial', sans-serif">'Arial', sans-serif</option>
            <option value="'Verdana', sans-serif">'Verdana', sans-serif</option>
            <option value="'Georgia', serif">'Georgia', serif</option>
            <option value="'Times New Roman', serif">'Times New Roman', serif</option>
            <option value="'Inconsolata', monospace">'Inconsolata', monospace</option>
            {/* Add more fonts as needed */}
          </select>
           <p className="mt-1 text-xs text-gray-500">Select a font family from the list.</p>
         </div>

        {/* --- Add New Color Inputs --- */}
        {/* Title Color */}
        <div>
          <label htmlFor="titleColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Title Color (h2)
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="titleColorPicker"
              value={titleColor.match(/^#[0-9A-F]{6}$/i) ? titleColor : (defaultStyles.titleColor ?? '#ffffff')} // Use default fallback
              onChange={handleColorPickerChange(setTitleColor)} // Use generic handler
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="titleColorText"
              value={titleColor}
              onChange={handleColorTextChange(setTitleColor)} // Use generic handler
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7}
            />
          </div>
        </div>

        {/* H3 Title Color */}
        <div>
          <label htmlFor="h3TitleColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Sub-Title Color (h3)
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="h3TitleColorPicker"
              value={h3TitleColor.match(/^#[0-9A-F]{6}$/i) ? h3TitleColor : (defaultStyles.h3TitleColor ?? '#d7e3ee')} // Use default fallback
              onChange={handleColorPickerChange(setH3TitleColor)} // Use generic handler
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="h3TitleColorText"
              value={h3TitleColor}
              onChange={handleColorTextChange(setH3TitleColor)} // Use generic handler
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7}
            />
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label htmlFor="textColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Text Color (p, label)
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="textColorPicker"
              value={textColor.match(/^#[0-9A-F]{6}$/i) ? textColor : (defaultStyles.textColor ?? '#c6d3e2')} // Use default fallback
              onChange={handleColorPickerChange(setTextColor)} // Use generic handler
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="textColorText"
              value={textColor}
              onChange={handleColorTextChange(setTextColor)} // Use generic handler
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7}
            />
          </div>
        </div>
        {/* --- End New Color Inputs --- */}

        {/* Background Gradient Colors */}
        <div>
          <label htmlFor="backgroundFromColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Background Gradient From
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="backgroundFromColorPicker"
              // Validate state directly, fallback to guaranteed string default for value prop
              value={backgroundFromColor.match(/^#[0-9A-F]{6}$/i) ? backgroundFromColor : (defaultStyles.backgroundFromColor ?? '#111827')}
              onChange={handleColorPickerChange(setBackgroundFromColor)}
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="backgroundFromColorText"
              // Value can be the state value directly here
              value={backgroundFromColor}
              onChange={handleColorTextChange(setBackgroundFromColor)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7}
            />
          </div>
        </div>

        <div>
          <label htmlFor="backgroundToColorText" className="block text-sm font-medium text-gray-700 mb-1">
            Background Gradient To
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="backgroundToColorPicker"
              // Validate state directly, fallback to guaranteed string default for value prop
              value={backgroundToColor.match(/^#[0-9A-F]{6}$/i) ? backgroundToColor : (defaultStyles.backgroundToColor ?? '#1F2937')}
              onChange={handleColorPickerChange(setBackgroundToColor)}
              className="h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              id="backgroundToColorText"
              // Value can be the state value directly here
              value={backgroundToColor}
              onChange={handleColorTextChange(setBackgroundToColor)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="#rrggbb"
              maxLength={7}
            />
          </div>
        </div>
        {/* End Background Gradient Colors */}


        {/* Preview Section - Updated with Translations */}
        <div
          className="p-4 md:p-6 border border-gray-300 text-white rounded-lg shadow-lg"
          style={{ background: `linear-gradient(to bottom right, ${backgroundFromColor}, ${backgroundToColor})` }}
        >
            <h5 className="text-md font-medium mb-3">Preview</h5>
            <div style={{ fontFamily: fontFamily }}>
                {/* Site Title and Role using Primary and Secondary Colors */}
                <h1 style={{ color: primaryColor }} className="text-3xl text-center font-bold mb-1">
                    {translations.en.generalInfo.siteTitle}
                </h1>
                <p style={{ color: secondaryColor }} className="text-xl text-center mb-6">
                    {translations.en.generalInfo.siteRole}
                </p>

                {/* Services Section Title using Title Color */}
                <h2 style={{ color: titleColor }} className="text-2xl font-bold text-center mb-3">
                    {translations.en.services.title}
                </h2>

                 {/* Example of H3 Title Color (if needed for other previews) */}
                 <h3 style={{ color: h3TitleColor }} className="text-lg font-semibold text-center mb-6">
                 {translations.en.projects.project1.title}
                  </h3>

                {/* About Description using Text Color */}
                <p style={{ color: textColor }} className="text-center mb-12">
                    {translations.en.projects.project1.description}
                </p>

            </div>
         </div>

        {/* Action Buttons: Save and Reset */}
        <div className="pt-4 flex space-x-2"> {/* Use flex container */}
          <button
            onClick={handleSaveStyles}
            disabled={isSaving || isLoading} // Disable if loading or saving
            className={`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSaving || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSaving ? 'Saving...' : 'Save Styles'}
          </button>
          {/* Add Reset Button */}
          <button
            onClick={handleResetToDefaults}
            disabled={isSaving || isLoading} // Also disable during save/load
            className={`px-4 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${isSaving || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Reset to Defaults
          </button>
          {/* Add AI Generate Button */}
          <button
            onClick={handleGenerateAIColors}
            disabled={isSaving || isLoading} // Also disable during save/load
            className={`px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isSaving || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Generate Colors
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleEditorTab;
