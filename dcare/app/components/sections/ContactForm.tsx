import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input className="w-full px-4 py-2 border rounded-md" type="text" placeholder="Your Name" />
        <input className="w-full px-4 py-2 border rounded-md" type="email" placeholder="Your Email" />
        <textarea className="w-full px-4 py-2 border rounded-md" rows={5} placeholder="Your Message"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
