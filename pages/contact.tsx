import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/nutrition.module.css'
import Link from 'next/link'
import type { NextPage } from 'next'
import {FormEvent, useState} from "react";


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
const Nelson: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            name,
            email,
            phone,
            message
        }

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        alert(content.data.tableRange)

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')
    }

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto py-16">
                <h5>Hello!</h5>
                <form className="styles.section" onSubmit={handleSubmit}>
                    <div className="styles.grid1">
                        <label htmlFor="name" className="styles.card">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="styles.desc" placeholder="Your Name" />
                    </div>
                    <div className="styles.grid">
                        <label htmlFor="email" className="styles.desc">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="styles.desc" placeholder="Your Email" />
                    </div>
                    <div className="styles.card">
                        <label htmlFor="phone" className="styles.card">Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="styles.desc" placeholder="Your Phone" />
                    </div>
                    <div className="styles.grid">
                        <label htmlFor="message" className="styles.card">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="styles.desc" placeholder="Your Message" />
                    </div>
                    <div className="styles.grid">
                        <button type="submit" className="styles.desc">Save</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Nelson