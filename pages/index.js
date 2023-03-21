
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';

import Get from '../components/get-treats'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Home.module.css'
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
          
          <h1 className={grandstander.className} >What's Up, Dog? </h1>
          <h3>Upcycled Dog Treats & Gear</h3> 
          </div>
        
      
        <Image
                src="/images/updoglogogold.png"
                alt="Updog Logo"
                className={styles.image}
                width={500}
                height={500}
                priority
              />

       
       

        </div>
        </main>
       
      </section>
        <Get/>
        < Story />
        </Layout>

</>
  ) 
  
}

