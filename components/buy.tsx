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
            <div className={styles.grid}>
              <div className={styles.card}>
          <Image 
            src="/images/120-grams.png"
            alt="Dog Treat"
            
            width={300}
            height={300}
            
         / >
          <div className={styles.desc}>
            <h4 className={grandstander.className}>
              Upcylcled Treat Pouch <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Lightweight, closable, carabiner attached to loop.
          </p>
          </div>
          </div>

          <div className={styles.card}>
          <Image 
            src="/images/120-grams.png"
            alt="Dog Treat"
            
            width={300}
            height={300}
            
         / >
            <div className={styles.desc}>
            <h4 className={grandstander.className}>
              What's Spent Grain? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              It's the barley grain left after brewers use it to make beer. Yes, it's super healthy for dogs (and humans!)
            </p>
            </div>
          </div>

          <div className={styles.card}>
          <Image 
            src="/images/120-grams.png"
            alt="Dog Treat"
            
            width={300}
            height={300}
            
         / >
          <div className={styles.desc}>
            <h4 className={grandstander.className}>
              What's Our Story? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              We're a couple of dog lovers who wanted to feed our dog healthy, fresh, locally made treats.
            </p>
          </div>

          <div className={styles.card}>
          <Image 
            src="/images/120-grams.png"
            alt="Dog Treat"
            
            width={300}
            height={300}
            
         / >
          <div className={styles.desc}>
            <h4 className={grandstander.className}>
              What's The Deal? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              $10 for 120 grams of treats. $10 for a handmade, upcycled treat pouch. Buy both and treat refills are $9 for 120 grams. 
            </p>
          
        </div>
 <h5 className={cormorant.className}>How To Pay:</h5>
            <p >For now, simply text Wendy at 236-972-7673. I will deliver your treats to you. You can then etransfer the money to us. </p>

            <p >This is our first iteration. We welcome your feedback!
            We are committed to uplifting and upcycling so treats are packaged in upcycled packaging sourced locally.
            We encourage you to purchase an upcycled dog treat bag and refill it.</p>

</div>
</div>


       
        </main>
        </section>
        </>
  )
}