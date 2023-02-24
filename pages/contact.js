 
import { useState} from "react";


const ContactForm = () => {
  const [email, setEmail] = useState("");
  const submitForm = async () => {
    

    let form = {
      email
    }
    const rawResponse = await
      fetch("/api/form", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
       
      });
      const content = await rawResponse.json();
      alert(content.data.tableRange)
      setEmail('')

    }
    
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
            name="email"
            type="text"
            
            placeholder="Email"
            
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