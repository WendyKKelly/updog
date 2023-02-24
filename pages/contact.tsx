import { NextPage } from 'next';
import {FormEvent, useState} from "react";


const contactForm: NextPage = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

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
    <main className="bg-gray-100 min-h-screen">
    <div className="max-w-5xl mx-auto py-16">
        <form className="py-4 space-y-4" onSubmit={handleSubmit}>
           
            <div className="flex items-center justify-center">
                <label htmlFor="email" className="sr-only">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Email" />
            </div>
            
            <div className="flex items-center justify-center">
                <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600">Save</button>
            </div>
        </form>
    </div>
</main>
  )
}

export default contactForm