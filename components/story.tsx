import Head from 'next/head'
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Story.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Story() {
  return (
    <>
      <Head>
        <title>Updog Treats</title>
        <meta name="description" content="hyper local healthy dog treats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
      <main className={styles.main}>
      <div className={styles.grid2}>

     <div className={styles.center2}>
        
            <h5 className={cormorant.className}>Humans:</h5>
            </div>
            <div className={styles.grid}>
              <div className={styles.card}>
            <Image
                src="/images/mike.png"
                alt="Mike Kelly"
                
                width={300}
                height={300}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Dog Treats <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              120 grams 
              $10
            </p>
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/wendy2.png"
                alt="Wendy Kelly"
                
                width={300}
                height={300}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Dog Treat Pouch <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              upcylced, handmade, carabiner attaches to belt loop. 
              $10
            </p>
            </div>
            </div>
            
            
   



              
              </div>
              
            
          
           
         
         
         
 <h5 className={cormorant.className}>How To Get Your Dog Treats:</h5>
            <p >Simply text Mike at 250-551-0187. We will have your treats ready at a central downtown Nelson location. </p>
            <p> Cash and E-transfer accepted. </p>

</div>

        </main>
        </section>
        </>
  )
}