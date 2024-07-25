// components/ServiceBox.tsx
import { Service } from '@/routes';
import React from 'react';

interface ServiceBoxProps {
  service: Service;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ service }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 text-center font-medium">{service.description}</p>
    </div>
  );
};

export default ServiceBox;
