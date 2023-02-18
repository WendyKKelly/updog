import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/nutrition.module.css'
import Link from 'next/link'
const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Nutrition() {
  return (
   <>
    <Layout>
      <Head>
        <title>Updog Treats: Nutrition</title>
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
        <div className={styles.grid1}>
        <div className={styles.title}>
          <div className={grandstander.className}>
          <h1 className={grandstander.className} >What's in Updog Treats?</h1>
          <h5 className={cormorant.className}>
            ...and are they good (tasty & nutritious)
          </h5>
          </div>
        
        </div>
        
          <div className={styles.desc}>
         <ul className={grandstander.className}>
        <li>Get Updog Treats:</li>
        <li>Get Updog Treats:</li>
        <li>Get Updog Treats:</li>
    </ul>
    </div>
    <div className={styles.title_2}>
    <h5 className={cormorant.className}>
            ...and here are a few ingredients that we have been playing around with...feedback welcome!
          </h5></div>
          <div className={styles.desc_2}>
         <ul className={grandstander.className}>
        <li>Get Updog Treats:</li>
        <li>Get Updog Treats:</li>
        <li>Get Updog Treats:</li>
    </ul>
    </div>
    </div>

      
      </section>
    
    
    </Layout>
    
    </>
  )
}


 