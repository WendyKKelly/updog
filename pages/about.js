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
          <h1 className={grandstander.className} >Updog: Why the Heck?</h1>
          <h5 className={cormorant.className}>
           ...good question.
          </h5>
          </div>
        
        </div>
        
          <div className={styles.desc}>
         <ul className={grandstander.className}>
        <li>Uplift: <p>Covid, amirite? Things shifted — I think it's safe to say that all of us came out of these last few years feeling like <span className={styles.pink}>things had changed.</span> We decided we needed to do something positive to impact our community which we love dearly and we looked to our new-to-us dog, Luna, for inspiration.</p></li>
        <li>Upcycle: <p>Upcycling remains </p></li>
        <li>Chia Seeds: <p>Black chia seeds provide an excellent source of B vitamins and they’re rich in omega fatty acids, antioxidants, fiber, and minerals like calcium, magnesium and phosphorus. Because they are paired with meat in our treats, the omegas from chia seeds are balanced with the omegas from the meat, providing a good healthy balance for your dog. </p> </li>
    </ul>

    <h5 className={cormorant.className}>
            ...And these treats taste <span className={styles.pink}>GOOD</span>. Dogs love them and have been known to wait paitiently for <span className={styles.pink}>minutes</span> just to get another. Think of all the training gains...think of all the <span className={styles.pink}>love</span>...
          </h5>
    </div>
    
    </div>

      
      </section>
    
    
    </Layout>
    
    </>
  )
}


 