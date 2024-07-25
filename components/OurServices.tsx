// components/Services.tsx
import React from 'react';
import { Service } from '@/routes';
import ServiceBox from './ServiceBox';

const services: Service[] = [
  {
    icon: '/assets/icons/truck-fast.svg',
    title: 'Free & Fast Shipping',
    description: 'Get your products delivered in record time with our fast shipping options.',
  },
  {
    icon: '/assets/icons/shield-tick.svg',
    title: 'Quality Assurance',
    description: 'We ensure the highest quality standards for all our products.',
  },
  {
    icon: '/assets/icons/shield-tick.svg',
    title: 'Secure Payment',
    description: 'Our support team is here to help you around the clock, every day of the week.',
  },
  {
    icon: '/assets/icons/support.svg',
    title: 'Love to Help You',
    description: 'Our support team is here to help you around the clock, every day of the week.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12" id='our-services'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#FB7185]">Our</span> Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Discover the range of services we provide to make your experience with us exceptional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceBox key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
