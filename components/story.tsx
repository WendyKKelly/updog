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
        
            <h5 className={grandstander.className}>Humans:</h5>
            <p className={grandstander.className}>Mike and Wendy are making hyper healthy dog treats and upcycled dog treat pouches!</p>
            </div>
            <div className={styles.grid}>
              <div className={styles.card}>
            <Image
                src="/images/mike2.png"
                alt="Mike Kelly"
                
                width={500}
                height={500}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Mike Kelly <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Brewmaster, baker, upcycled dog treat pouch  maker.
            </p>
            
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/wendy2.png"
                alt="Wendy Kelly"
                
                width={500}
                height={500}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Wendy Kelly <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Webmaster*, baker, healthy dog treat maker.
            </p>
            
            </div>
            </div>
            
            
   



              
              </div>
              
            
          
           
         
         
    

</div>

        </main>
        </section>
        </>
  )
}