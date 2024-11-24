import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
      <div>
        <h1 className="text-5xl font-bold mb-4">Welcome to Day Care</h1>
        <p className="text-xl mb-6">Your beauty, our priority.</p>
        <Button label="Get Started" />
      </div>
    </section>
  );
};

export default Hero;
