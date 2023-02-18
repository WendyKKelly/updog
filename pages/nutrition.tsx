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
        <li>Spent Brewer's Grain: Spent grain is high in fiber, protein and polyphenols (antioxidant, anti inflammation), and has been shown to provide numerous health benefits. Want to know more about spent grain? Luckily,one of Updog human workers, Mike, has been an award winning Master Brewer for decades. Read more here.</li>
        <li>Ground Meat: We source grass fed and/or organic meat from local butchers, using mainly pork (but also beef and possibly chicken as well) that is perfect for dogs — we can't guarantee exactly the combination of meat we use in each batch but we can guarantee that it is healthy, fresh, and delicious.</li>
        <li>Chia Seeds: Black chia seeds provide an excellent source of B vitamins and they’re rich in omega fatty acids, antioxidants, fiber, and minerals like calcium, magnesium and phosphorus. Because they are paired with meat in our treats, the omegas from chia seeds are balanced with the omegas from the meat, providing a good healthy balance for your dog.  </li>
    </ul>
    </div>
    
    </div>

      
      </section>
    
    
    </Layout>
    
    </>
  )
}


 