import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string; // Changed from githubLink and liveLink
}

interface ProjectsSectionProps {
  projects: Project[];
  title: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, title }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--title-color)' }}>{title}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => {
          const ProjectContent = (
            <>
              <div className="flex justify-between items-start mb-4">
                <Code2 className="text-blue-400" size={24} />
                {/* Link icon if link exists */}
                {project.link && (
                  <ExternalLink size={20} className="text-gray-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--h3title-color)' }}>{project.title}</h3>
              <p className="text-gray-400 text-text" >{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-blue-900 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </>
          );

          return project.link ? (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors hover:shadow-lg"
            >
              {ProjectContent}
            </a>
          ) : (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              {ProjectContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
