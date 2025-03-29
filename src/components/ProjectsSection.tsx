import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  title: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, title }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <Code2 className="text-blue-400" size={24} />
              <div className="flex space-x-4">
                <a href={project.githubLink} className="hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.liveLink} className="hover:text-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-blue-900 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;