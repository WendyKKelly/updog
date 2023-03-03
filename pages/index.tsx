
import Script from 'next/script';
import ProductList from "../components/ProductList";
import {IProduct} from "../components/Product";
import {GetStaticProps} from "next";
import Head from 'next/head'
import Image from 'next/image'
import updogSample from "../public/images/samples.png"
import updogTreat from "../public/images/120-grams.png"
import updogPouch from "../public/images/treatpouch.png"
import updogRefill from "../public/images/refills.png"
import Layout from '../components/Layout';




import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'

import Story from '../components/story'





const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})




export default function Home() {
  return (
   <>
    <Layout>
      <Head>
        <title>Updog Treats | Nelson British Columbia's Fresh Healthy Dog Treats</title>
        
        <meta name="description" content="Fresh healthy dog treats made in Nelson British Columbia: Updog Treats — Uplift and Upcycle" />
        <meta property="og:title" content="Updog Treats: Nelson's Healthy Dog Treats" />
        <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
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
          
          <h1 className={grandstander.className} >What's Up, Dog? Treats!</h1>
          </div>
        
      
        <Image
                src="/images/updoglogogold.png"
                alt="Updog Logo"
                className={styles.image}
                width={500}
                height={600}
                priority
              />

        <div className={styles.desc}>
         
          <h5 className={cormorant.className}>hyper-local, hyper-fresh, hyper-healthy dog treats for well-loved dogs.</h5>
          </div>
       
        
        </div>
        </main>
       
        
        <div className={styles.grid1}>
          <div className={styles.desc}>
         <h5 className={grandstander.className}>
        Get Updog Treats:
    </h5>
    </div>
   <div className={styles.list}>
      <ul><Link href="./nelson"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      <li >Shop in Nelson</li></Link>
      <Link href="./shop"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      <li>Shop from Away</li></Link>
      </ul>
      </div>
      </div>
       
        < Story />
        
      
      </section>
    
    
    </Layout>
   
    </>
  )
}

