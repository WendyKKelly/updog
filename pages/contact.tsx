import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Contact.module.css'
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
        <Layout >
        <main className={styles.section}>
            <div className={styles.main}>
                <h5>Hello!</h5>
                <form className={styles.grid1} onSubmit={handleSubmit}>
                    <div className={styles.title}>
                        <label htmlFor="name" className={styles.title}>Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className={styles.desc} placeholder="Your Name" />
                    </div>
                    <div className={styles.grid}>
                        <label htmlFor="email" className={styles.card}>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className={styles.card} placeholder="Your Email" />
                    </div>
                    <div className={styles.card}>
                        <label htmlFor="phone" className={styles.card}>Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className={styles.card} placeholder="Your Phone" />
                    </div>
                    <div className={styles.card}>
                        <label htmlFor="message" className={styles.card}>Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="styles.desc" placeholder="Your Message" />
                    </div>
                    <div className={styles.card}>
                        <button type="submit" className={styles.card}>Save</button>
                    </div>
                </form>
            </div>
        </main>
        </Layout>
    )
}

export default Nelson