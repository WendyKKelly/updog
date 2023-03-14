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
        <title>Updog Treats: Our Story</title>
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
        <div className={styles.grid1}>
        <div className={styles.title}>
          <div className={grandstander.className}>
          <h1 className={grandstander.className} >Thank you!</h1>
          <h5 className={cormorant.className}>
           ...we love hearing from you!
          </h5>
          </div>
        
        </div>
        
          <div className={styles.desc}>
         <ul className={grandstander.className}>
        <li><p>If appropriate (we're nothing if not appropriate!) We'll get back to you. </p></li>
        <li><p>We are so grateful for any feedback and really feel lucky to serve our community. So thank you again!</p></li>
        <li><p>Please share the news that we are offering delicious, healthy, fresh dog treats to all Nelson dog companions!</p> </li>
    </ul>

    <h5 className={cormorant.className}>
            Thank you so much for your feedback. As a next step, maybe leave us a 5-star rating and review <Link className={styles.pink} href="https://goo.gl/maps/ptwpKtpBCB4GsPTL9">over on our local google business listing </Link> and go for it! Thank you, again.
          </h5>
    </div>
    
    </div>

      
      </section>
    
    
    </Layout>
    
    </>
  )
}


 