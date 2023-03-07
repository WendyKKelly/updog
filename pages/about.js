import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
        <li>Uplift: <p>Covid, amirite? Things shifted — I think it's safe to say that all of us came out of these last few years feeling like <span className={styles.pink}>things had changed.</span> We decided we needed to do something positive to impact our community which we love dearly and we looked to our new-to-us dog, Luna, for inspiration.</p><p>When Luna arrived in our lives, a 4-year-old Akbash/Husky who needed to be rehomed, we knew immediately that she would uplift us. But could we be that uplifting, loving presence she needed? Her first family loves her dearly and needed to know that her new family was able to provide the kind of love and care she was used to and needed (and deserved).</p><p>Dogs provide a kind of uplifting joyful presence that deserves to be met with at least reciprocal love back. Don't ya think? <Link href="./nutrition">Which brings us to: What's in 'em?</Link></p></li>
        <li>Upcycle: <p>Upcycling remains at the heart of Updog.  Here's the thing: The world can look bleak at times. An antedote is to look for small helpful solutions that move the needle, if even a bit. Updog is about using materials that would otherwise go to waste, and doing our dagnabit best to avoid adding to the world's problems. That includes an attempt to be zero plastic, zero waste.</p></li>
        <li>Up, up, and away: <p>We are feeling hopeful these days. It's helpful that we live in one of the most beautiful towns in the world. Updog offers dog treats and upcycled dodads as a way to do our part, however small, to create beauty out of chaos and be good.</p> </li>
    </ul>

    <h5 className={cormorant.className}>
            ...If you have a<span className={styles.pink}>GOOD</span>dog or know a <span className={styles.pink}>GOOD</span> dog give them an <span className={styles.pink}>Updog</span> treat...
          </h5>
    </div>
    
    </div>

      
      </section>
    
    
    </Layout>
    
    </>
  )
}


 