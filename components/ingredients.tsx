import Head from 'next/head'
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Food.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Ingredients() {
  return (
    <>
      <Head>
        <title>Updog Treats</title>
        <meta name="description" content="hyper local healthy dog treats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='styles.section'>
      <main className={styles.main}>
        <div className={styles.description}>
            
        Spent grain (or brewers grain) is what is left after the process of germinating dried cereal grains (typically barley) for the production of beer.  The remaining product is a concentrate of proteins and fiber that is nutritious and great for animal feeding (even for humans! Remember, we're animals too!).  Spent grain has had a long history in animal feeding, dating back to the monks and monasteries that would brew beer and then feed the brewers grain to their livestock.  A very resourceful way to reuse materials they already had - upcycling at its finest.

Spent grain is a great source of protein and fiber, aiding in digestion and providing essential amino acids needed for healthy muscle growth, repair and energy levels.  When paired with high quality, human grade ingredients,




        </div>
        </main>
        </section>
        </>
  )
}