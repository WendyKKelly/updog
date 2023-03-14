
import Head from 'next/head'

import Layout from '../components/Layout';



import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Contact.module.css'

import {useRouter} from 'next/router'
import {useState} from 'react'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})



export default function Contact() {
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
      message: event.target.message.value,
      
   
      
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
  
    router.push("./contact-thx")
}

  
  
  return (
   <>
    <Layout>
      <Head>
        <title>Updog Treats | Nelson British Columbia's Fresh Healthy Dog Treats</title>
        
        <meta name="description" content="Fresh healthy dog treats made in Nelson British Columbia: Updog Treats — Uplift and Upcycle" />
        <meta property="og:title" content="Updog Treats: Nelson's Healthy Dog Treats" />
        
              
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
          
          <h5 className={cormorant.className}>Want to tell us that we are very very good humans? Send us a pic of your dog begging for Updog Treats? Have a bone to pick? A suggestion? Go for it —</h5>
          </div>
          
    <form className={styles.grid}onSubmit={handleSubmit} enctype="multipart/form-data">
      
        
      <label className={styles.l_name}htmlFor="fullname">Your name: (What would you like us to call you?)</label>
      <input className={styles.i_name} type="text" id="fullname" name="fullname" required />
      
     <label className={styles.l_phone}htmlFor="phone">Phone: (either phone or email so that we can contact you if necessary.)</label>
      <input className={styles.i_phone} type="tel" id="tel" name="tel"  />
      
      <label className={styles.l_email}htmlFor="email">Email:</label>
      <input className={styles.i_email} type="email" id="email" name="email"  />
      


      <label className={styles.l_message}htmlFor="message">Tell us your thoughts:</label>
      <textarea className={styles.i_message}
       type="text" id="message" name="message" required />
       
       <input className={styles.i_input} type="text" name='route' onChange={(e)=>{setRoute(e.target.value)}} />


     <button  className={styles.button}type="submit">Submit</button>
      
    </form>
        </main>
      </section>
    </Layout>
    </>
  )}