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
          <h1 className={grandstander.className} >Thank you!</h1>
          <h5 className={cormorant.className}>
           ...now we wait...
          </h5>
          </div>
        
        </div>
        
          <div className={styles.desc}>
         <ul className={grandstander.className}>
        <li>First<p>We will contact you, using either your phone number or email address.</p></li>
        <li>Next<p>We'll confirm what you ordered, decide upon the delivery time, and let you know how much you owe.</p></li>
        <li>Finally<p>We deliver your treats, and when you receive them, you can pay via etransfer or cash </p> </li>
    </ul>

    <h5 className={cormorant.className}>
            Thank you so much for trusting us with your dog's treats! We feel super lucky. As a next step, maybe leave us a 5-star rating and review <Link className={styles.pink} href="https://goo.gl/maps/ptwpKtpBCB4GsPTL9">over on our local google business listing </Link> and go for it! If you would like to give us some feedback, please — we're listening. Head on over to our <Link className={styles.pink} href="./contact">contact page</Link> and tell us what's on your mind. Thank you, again.
          </h5>
    </div>
    
    </div>

      
      </section>
    
    
    </Layout>
    
    </>
  )
}


 