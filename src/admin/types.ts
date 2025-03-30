import { translations as defaultTranslations } from '../translations';

// Define the structure based on default translations
export type TranslationsType = typeof defaultTranslations;

// LanguageKey type - currently only 'en' is used
export type LanguageKey = 'en';

// Define a template for a new project
export const newProjectTemplate = {
  title: "New Project Title",
  description: "New project description.",
  tags: ["Tag1", "Tag2"],
};
