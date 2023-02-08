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
        <h5 className={cormorant.className}>
            Treats are baked weekly in small batches.</h5>
            <h5 className={cormorant.className}>Products:</h5>
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
                src="/images/120-grams.png"
                alt="Dog Treats"
                
                width={300}
                height={300}
                priority
              />
<h4 className={grandstander.className}>
              Dog Treats <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              120 grams 
              $10
            </p>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/120-grams.png"
                alt="Dog Treats"
               
                width={300}
                height={300}
                priority
              />
<h4 className={grandstander.className}>
              Dog Treats <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              120 grams 
              $10
            </p>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/120-grams.png"
                alt="Dog Treats"
                
                width={300}
                height={300}
                priority
              />
<h4 className={grandstander.className}>
              Dog Treats <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              120 grams 
              $10
            </p>
            </div>



              
              </div>
              
            
          
           
         
         
         
 <h5 className={cormorant.className}>How To Pay:</h5>
            <p >For now, simply text Wendy at 236-972-7673. I will deliver your treats to you. You can then etransfer the money to us. </p>

            <p >This is our first iteration. We welcome your feedback!
            We are committed to uplifting and upcycling so treats are packaged in upcycled packaging sourced locally.
            We encourage you to purchase an upcycled dog treat bag and refill it.</p>

</div>

        </main>
        </section>
        </>
  )
}