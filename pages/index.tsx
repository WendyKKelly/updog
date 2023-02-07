import Head from 'next/head'
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Home.module.css'


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
          
          
          <div>
            
              By{' '}
              <Image
                src=""
                alt="Updog Logo"
                className={styles.vercelLogo}
                width={0}
                height={0}
                priority
              />
            
          </div>
        </div>
        <div className={styles.grid1}>

        <div className={styles.center}>
          <h1 className={grandstander.className}>What's Up, Dog? Treats!</h1>
         
        </div>
        <div className={styles.center1}>
        <Image
                src="/images/updoglogogold.png"
                alt="Updog Logo"
                className={styles.center1}
                width={500}
                height={600}
                priority
              />
        </div>
        <div>
          <h4 className={cormorant.className}>hyper-local, hyper-fresh, hyper-healthy dog treats for well-loved dogs.</h4>
        </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's in 'em?' <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Spent barley grain, meat (combination of chicken, pork, and beef), liver (beef), chia seeds.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's Spent Grain? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              It's the barley grain left after brewers use it to make beer. Yes, it's super healthy for dogs (and humans!)
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's Our Story? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              We're a couple of dog lovers who wanted to feed our dog healthy, fresh, locally made treats.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={grandstander.className}>
              What's Up? <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Uplift & Upcycle — Our aim and vision for this project. 
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
