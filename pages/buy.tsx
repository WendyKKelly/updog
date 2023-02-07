import Head from 'next/head'
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Home() {
  return (
    <>
      <Head>
        <title>Updog Treats</title>
        <meta name="description" content="hyper local healthy dog treats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
            
        <h5>
            Treats are baked weekly in small batches.
            We are committed to uplifting and upcycling so treats are packaged in upcycled packaging sourced locally.
            We encourage you to purchase an upcycled dog treat bag and refill it.

            Products: 

            120 grams dog treats: $10
            cute upcycled treat pouch: $10

            refills in treat pouch: $9 

            In the short term, simply text Wendy at 236-972-7673. I will deliver your treats to you. You can then etransfer the money to us.

            This is our first iteration. We welcome your feedback!
        </h5>



        </div>
        </main>
        </>
  )
}