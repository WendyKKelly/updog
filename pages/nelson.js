
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



export default function Nelson() {

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      fullname: event.target.fullname.value,
      tel: event.target.tel.value,
      email: event.target.email.value,
      address: event.target.address.value,
      order: event.target.order.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

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
        <title>Updog Treats</title>
        
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
        <div className={styles.grid1}>

        <div className={styles.title}>
          <div className={grandstander.className}>
          <h1 className={grandstander.className} >In Nelson? Hurray!</h1>
          </div>
        </div>

        <div className={styles.desc}>
          <div className={cormorant.className}>
          <h5 className={cormorant.className}>Order from this page, and upon receiving your paid order, we will contact you for delivery or pickup options.</h5>
          </div>
          <div >
    <form className={styles.grid}onSubmit={handleSubmit}>
      
        <div className={styles.group}>
      <label className={styles.label}htmlFor="fullname">Your name: (What would you like us to call you?)</label>
      <input className={styles.fullname}type="text" id="fullname" name="fullname" required /></div>
      <div className={styles.group}>
     <label className={styles.label}htmlFor="phone">Phone</label>
      <input className={styles.phone}type="tel" id="tel" name="tel" required /></div>
      <div className={styles.group}>
      <label className={styles.label}htmlFor="email">Email</label>
      <input className={styles.email}type="email" id="email" name="email" required /></div>
      <div className={styles.group}>
      <label className={styles.label}htmlFor="order">What would you like? <ul><li>treats $10 for 120 grams</li><li>pouch $10 </li><li>sample $1</li></ul></label>
      <textarea 
      className={styles.order}type="text" id="order" name="order" required /></div>
       <div className={styles.group}>
    <label className={styles.label}htmlFor="address">Address: (Where should we deliver your treats? Needs to be in Nelson area, from Nine Mile to Blewitt...call if you think you deserve treats but live at 10 Mile or just past Blewitt )</label>
      <input className={styles.address}type="text" id="address" name="address" required /></div>
      


     <button className={styles.button}type="submit">Submit</button>
      
    </form>
    </div>
        </div>
        </div>
        
        </main>
    
        
       
      </section>
    
    
    </Layout>
    </>
  )}