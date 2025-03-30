import React from 'react';

interface Service {
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title: string;
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, services }) => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        {/* Apply primary color using CSS variable */}
        <h2 className="text-3xl font-bold text-center mb-8 text-titel" style={{ color: 'var(--title-color)' }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--h3title-color)' }}>{service.title}</h3>
              <p className="text-gray-300" style={{ color: 'var(--text-color)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
