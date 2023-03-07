
import {Nelson} from "../components/Nelson";
import {GetStaticProps} from "next";
import Head from 'next/head'

import updogSample from "../public/images/samples.jpg"
import updogTreat from "../public/images/120-grams.jpg"
import updogPouch from "../public/images/treatpouch.jpg"
import updogRefill from "../public/images/refill.png"
import Layout from '../components/Layout';




import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Nelson.module.css'

import {useRouter} from 'next/router'
import {useState} from 'react'




const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})


  


export default function Nelson() {

   const router = useRouter()
    const [route, setRoute] = useState()
  
 

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
    
router.push("./thank-you")
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
          <h1 className={grandstander.className} ></h1>
          </div>
        </div>
        <Nelson/>

        <div className={styles.desc}>
          <div className={cormorant.className}>
          <h5 className={cormorant.className}>Order here. Free delivery in Nelson area.</h5>
          </div></div>

          
          
    <form className={styles.grid}onSubmit={handleSubmit }>
      
        
      <label className={styles.l_name}htmlFor="fullname">Your name:</label>
      <input className={styles.i_name} type="text" id="fullname" name="fullname" required />
      
     <label className={styles.l_phone}htmlFor="phone">Phone: </label>
      <input className={styles.i_phone} type="tel" id="tel" name="tel"  />
      
      <label className={styles.l_email}htmlFor="email">Email:</label>
      <input className={styles.i_email} type="email" id="email" name="email" required />
      
     
       
    <label className={styles.l_address}htmlFor="address">Address: </label>
      <input className={styles.i_address} type="text" id="address" name="address" required />
      <label className={styles.l_treats} htmlFor="treats">Dog Treats: (How many 120 gram bags?)</label>
      <input className={styles.i_treats} type="number" id="treats" name="treats" />
      <label className={styles.l_sample} htmlFor="sample">Dog Treat Samples: (How many 10 gram bags?)</label>
      <input className={styles.i_sample} type="number" id="sample" name="sample" />
      <label className={styles.l_pouch} htmlFor="pouch">Dog Treat Pouch: (How many treat pouches?)</label>
      <input className={styles.i_pouch} type="number" id="pouch" name="pouch" />
      <label className={styles.l_order}htmlFor="order">Special Instructions, comments:</label>
      <textarea className={styles.i_order}
       type="text" id="order" name="order" required />
<input className={styles.i_input} type="text" name='route' onChange={(e)=>{setRoute(e.target.value)}} />
     <button className={styles.button}type="submit">Submit</button>
      
    </form>
    
        </main>
      </section>
    </Layout>
    </>
  )}

