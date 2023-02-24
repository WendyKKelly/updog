

import React, { useState } from 'react';


const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
  
  });
  function submitForm () {
     
      fetch("/lib/form", {
        method: 'POST',
        body: JSON.stringify("form"),
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
        name="form"
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