import { translations as defaultTranslations } from '../translations';

type TranslationsType = typeof defaultTranslations;
// No longer need LanguageKey as we only use 'en'

// Update function to accept optional translations object, lang parameter removed
export const getProjectsData = (
  translations: TranslationsType = defaultTranslations // Use provided translations or default
) => {
  // Directly access the 'en' translations
  const t = translations.en;
  const projectsData = t?.projects;

  // Dynamically create the projects array from the projectsData object
  const projectsArray = projectsData
    ? Object.entries(projectsData)
        .filter(([key, value]) => key !== 'title' && typeof value === 'object' && value !== null) // Filter out the title and ensure value is an object
        .map(([key, projectDetails]: [string, any]) => ({
          // Use key for links for now, or implement storing links in translations later
          title: projectDetails?.title ?? `Project ${key}`,
          description: projectDetails?.description ?? 'Description missing.',
          tags: projectDetails?.tags ?? [],
          // Placeholder links - ideally these would also be editable/stored
          githubLink: `https://github.com/tiger3homs/${key}`,
          liveLink: `https://tiger3homs.github.io/${key}/`,
        }))
    : []; // Default to empty array if projectsData is missing

  return {
    title: projectsData?.title ?? 'Featured Projects', // Fallback title
    projects: projectsArray, // Use the dynamically generated array
  };
};
