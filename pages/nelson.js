
import Head from 'next/head'
import Image from 'next/image'
import updogSample from "../public/images/samples.png"
import updogTreat from "../public/images/120-grams.png"
import updogPouch from "../public/images/treatpouch.png"
import updogRefill from "../public/images/refills.png"
import Layout from '../components/Layout';



import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Nelson.module.css'

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
      treats: event.target.treats.value,
      sample: event.target.sample.value,
      pouch: event.target.pouch.value,
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
          <div className={grandstander.className}>
          <h1 className={grandstander.className} >In Nelson? Hurray!</h1>
          </div>
        </div>

        <div className={styles.desc}>
          <div className={cormorant.className}>
          <h5 className={cormorant.className}>Order from this page, and upon receiving your order, we will contact you for delivery or pickup options.</h5>
          </div></div>

          
          
    <form className={styles.grid}onSubmit={handleSubmit}>
      
        
      <label className={styles.l_name}htmlFor="fullname">Your name: (What would you like us to call you?)</label>
      <input className={styles.i_name} type="text" id="fullname" name="fullname" required />
      
     <label className={styles.l_phone}htmlFor="phone">Phone: (either phone or email so that we can contact you.)</label>
      <input className={styles.i_phone} type="tel" id="tel" name="tel"  />
      
      <label className={styles.l_email}htmlFor="email">Email:</label>
      <input className={styles.i_email} type="email" id="email" name="email" required />
      
     
       
    <label className={styles.l_address}htmlFor="address">Address: (Where should we deliver your treats? We'll go anywhere between 9 Mile and Blewitt)</label>
      <input className={styles.i_address} type="text" id="address" name="address" required />
      <label className={styles.l_treats} htmlFor="treats">Dog Treats: (please write the number of (120 gram / $10 each) treats you would like)</label>
      <input className={i_treats} type="number" id="treats" name="treats" />
      <label className={styles.l_sample} htmlFor="sample">Dog Treat Samples: (please write the number of (10 gram / $1 each) samples you would like)</label>
      <input className={i_sample} type="number" id="sample" name="sample" />
      <label className={styles.l_pouch} htmlFor="pouch">Dog Treat Pouch: (please write the number of dog treat pouches ($10 each) you would like)</label>
      <input className={i_pouch} type="number" id="pouch" name="pouch" />
      <label className={styles.l_order}htmlFor="order">Special Instructions, comments:</label>
      <textarea className={styles.i_order}
       type="text" id="order" name="order" required />

     <button className={styles.button}type="submit">Submit</button>
      
    </form>
    <div className={styles.desc}>
          <div className={cormorant.className}>
          <h5 className={cormorant.className}>Use this page to avoid shipping charges — you are more than welcome to order from <Link className={styles.pink} href="./index">the main "shop" on the home page</Link> if you would like to. The local Nelson delivery is simply a "locals only" option we want to offer to our dear community.</h5>
          </div></div>
        </main>
      </section>
    </Layout>
    </>
  )}