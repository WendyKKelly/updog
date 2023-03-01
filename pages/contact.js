
import Head from 'next/head'
import Image from 'next/image'
import updogSample from "../public/images/samples.png"
import updogTreat from "../public/images/120-grams.png"
import updogPouch from "../public/images/treatpouch.png"
import updogRefill from "../public/images/refills.png"
import Layout from '../components/Layout';



import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Contact.module.css'

import Link from 'next/link'



const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})



export default function Contact() {

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      fullname: event.target.fullname.value,
      tel: event.target.tel.value,
      email: event.target.email.value,
      message: event.target.message.value,
      horns: event.target.horns.value,
      scales: event.target.scales.value,
      
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/contact'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name and email address and phone: ${result.data}`)
  }
  return (
   <>
    <Layout>
      <Head>
        <title>Updog Treats | Nelson British Columbia's Fresh Healthy Dog Treats</title>
        
        <meta name="description" content="Fresh healthy dog treats made in Nelson British Columbia: Updog Treats — Uplift and Upcycle" />
        <meta property="og:title" content="Updog Treats: Nelson's Healthy Dog Treats" />
        
                <link rel="shortcut icon" href="../public/favicon.ico" />
        <meta
          property="og:description"
          content="Fresh, healthy, locally made in Nelson BC — Updog Treats"
        />
        <meta
          property="og:image"
          content="/images/updoglogogold.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className={styles.section}>
      
        <main className={styles.main}>
        

        <div className={styles.title}>
         
          <h1 className={grandstander.className} >Reach Out</h1>
          </div>
        

        <div className={styles.desc}>
          
          <h5 className={cormorant.className}>Want to tell us that we are very very good humans? Have a bone to pick? A suggestion? Go for it —</h5>
          </div>
          
    <form className={styles.grid}onSubmit={handleSubmit}>
      
        
      <label className={styles.l_name}htmlFor="fullname">Your name: (What would you like us to call you?)</label>
      <input className={styles.i_name} type="text" id="fullname" name="fullname" required />
      
     <label className={styles.l_phone}htmlFor="phone">Phone: (either phone or email so that we can contact you if necessary.)</label>
      <input className={styles.i_phone} type="tel" id="tel" name="tel"  />
      
      <label className={styles.l_email}htmlFor="email">Email:</label>
      <input className={styles.i_email} type="email" id="email" name="email"  />
      
      <label className={styles.l_message}htmlFor="message">Tell us your thoughts:</label>
      <textarea className={styles.i_message}
       type="text" id="message" name="message" required />
       <fieldset>
    <legend>Choose your monster's features:</legend>

    <div>
      <input type="checkbox" id="scales" name="scales" onChange={(e) => setChecked(e.target.checked)} />
      <label htmlFor="scales">Scales</label>
    </div>

    <div>
      <input type="checkbox" id="horns" name="horns" onChange={(e) => setChecked(e.target.checked)} />
      <label htmlFor="horns">Horns</label>
    </div>
</fieldset>

     <button className={styles.button}type="submit">Submit</button>
      
    </form>
        </main>
      </section>
    </Layout>
    </>
  )}