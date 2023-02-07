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
<ul><li className={cormorant.className}>
            120 grams dog treats: $10</li>
            <li className={cormorant.className}>upcycled treat pouch: $10</li>

            <li className={cormorant.className}>refills in treat pouch: $9 </li></ul>
 <h5 className={cormorant.className}>How To Pay:</h5>
            <p className={cormorant.className}>For now, simply text Wendy at 236-972-7673. I will deliver your treats to you. You can then etransfer the money to us. </p>

            <p className={cormorant.className}>This is our first iteration. We welcome your feedback!
            We are committed to uplifting and upcycling so treats are packaged in upcycled packaging sourced locally.
            We encourage you to purchase an upcycled dog treat bag and refill it.</p>

</div>
</div>


       
        </main>
        </section>
        </>
  )
}