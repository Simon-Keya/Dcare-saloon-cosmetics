import React from 'react';
import Card from '../common/Card';

const services = [
  { title: 'Hair Styling', description: 'Trendy styles tailored to you.', image: '/images/hair-styling.jpg' },
  { title: 'Makeup', description: 'Perfect looks for every occasion.', image: '/images/makeup.jpg' },
  { title: 'Skincare', description: 'Radiant and healthy skin.', image: '/images/skincare.jpg' },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
