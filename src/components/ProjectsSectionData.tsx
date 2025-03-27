import { translations } from '../translations';

export const getProjectsData = (lang: 'en' | 'ar' | 'sv') => {
  const t = translations[lang];
  return {
    title: t.projects.title,
    projects: [
      {
        title: t.projects.project1.title,
        description: t.projects.project1.description,
        tags: t.projects.project1.tags,
        githubLink: "https://github.com/tiger3homs/project1",
        liveLink: "https://tiger3homs.github.io/project1/",
      },
      {
        title: t.projects.project2.title,
        description: t.projects.project2.description,
        tags: t.projects.project2.tags,
        githubLink: "https://github.com/tiger3homs/project2",
        liveLink: "https://tiger3homs.github.io/project2/",
      },
      {
        title: t.projects.project3.title, // Add project3 here
        description: t.projects.project3.description,
        tags: t.projects.project3.tags,
        githubLink: "https://github.com/tiger3homs/project3",
        liveLink: "https://tiger3homs.github.io/project3/",
      },
    ],
  };
};