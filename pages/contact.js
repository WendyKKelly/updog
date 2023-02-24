

import React, { useState } from 'react';


const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    description: '',
  });
  function submitForm () {
     
      fetch("/api/form", {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
          'Content-type': 'application/json'
        }
       
      });
      
    }
    
  
    
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
    
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="space-y-3 w-full max-w-lg mx-auto p-5"
        onSubmit={submitForm}
      >
        <p className="font-semibold text-2xl text-center">Contact Form</p>
        <label className="block">
          <span className="text-gray-700 font-semibold">Full Name</span>
          <input
            name="name"
            type="text"
            className="form-input form-field-contact"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold">Email</span>
          <input
            name="email"
            type="email"
            className="form-input form-field-contact"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold">Topic</span>
          <input
            name="topic"
            type="text"
            className="form-input form-field-contact"
            placeholder="Topic"
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold">Description</span>
          <textarea
            name="description"
            className="form-textarea form-field-contact"
            rows="3"
            placeholder="Description"
            onChange={handleChange}
          />
        </label>

        <button
          className="bg-green-200 px-3 py-1 font-semibold shadow-md rounded-md"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm