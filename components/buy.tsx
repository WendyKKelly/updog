import Head from 'next/head'
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Buy.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Buy() {
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
        
            <h5 className={grandstander.className}>Up Dog Treats:</h5>
            </div>
            <div className={styles.grid}>
              <div className={styles.card}>
            <Image
                src="/images/120-grams.png"
                alt="Dog Treats"
                
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
                src="/images/treatpouch.png"
                alt="Dog Pouch"
                
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
            <div className={styles.card}>
            <Image
                src="/images/samples.png"
                alt="Samples"
               
                width={300}
                height={300}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Samples <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Curious? Want to check to see if your dog will like 'em? 10 gram samples, approximately 10 treats.
              $1
            </p>
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/refills.png"
                alt="Dog Treats"
                
                width={300}
                height={300}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Dog Treat Refills <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              With purchase of Dog Treat Pouch, refills are $1 off.
              120 grams 
              $9
            </p>
            </div>
            </div>



              
              </div>
              
            
          
           
         
         
         
 <h5 className={grandstander.className}>How To Get Your Dog Treats:</h5>
            <p className={grandstander.className}>Simply text Mike at 250-551-0187. We will have your treats ready at a central downtown Nelson location. </p>
            <p className={grandstander.className}> Cash and E-transfer accepted. </p>

</div>

        </main>
        </section>
        </>
  )
}