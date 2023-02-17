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
      
      <div className={styles.grid2}>

     <div className={styles.title}>
     <h5 className={grandstander.className}>Updog: Uplift & Upcycle</h5>
            <p className={grandstander.className}>Here's what the dogs have to say about Updog Treats: </p>
            <div className={styles.grid}>
              
        
             <div className={styles.card}>
            <Image
                src="/images/rocky2.png"
                alt="Rocky"
                
                width={300}
                height={350}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Rocky <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Happy dog!
            </p>
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/rosa.png"
                alt="Rosa"
                
                width={300}
                height={350}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Rosa <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Rosa patiently waiting for her next treat.
            </p>
            
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/lampi.png"
                alt="Lampi"
                
                width={300}
                height={350}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Lampi <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
            Lampi loves them! - the treats, I mean. And he’s surprisingly discerning when it comes to snacks.
            </p>
            
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/morley.png"
                alt="Morley"
                
                width={300}
                height={350}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
             Morley <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
            It was harder than I expected to get a good photo! She kept gobbling them before I could get a good shot! If you let me buy some more, I’ll try again. She loves them!
            </p>
            
            </div>
            </div>
            <div className={styles.card}>
            <Image
                src="/images/spokesdogplaceholder.png"
                alt="Nelson dog"
                
                width={300}
                height={350}
                priority
              />
              <div className={styles.desc}>
<h4 className={grandstander.className}>
              Your Dog Here <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              send us a picture of your dog begging for Updog Treats and share the love.
            </p>
            
            </div>
            </div>
            </div>

            
            <div className={styles.grid2}>
        
          <div className={grandstander.className}>
          <h5 className={styles.overflow}>Humans:</h5>
          <p className={styles.overflow}>Mike and Wendy are making hyper healthy dog treats and upcycled dog treat pouches.</p>
          </div>
        </div>
        </div>
         
            
            
            <div className={styles.grid}>
              <div className={styles.card}>
            <Image
                src="/images/mike2.png"
                alt="Mike Kelly"
                
                width={300}
                height={350}
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
                src="/images/wendy3.png"
                alt="Wendy Kelly"
                
                width={300}
                height={350}
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
              
            
          
           
         
         
    



        
        </section>
        </>
  )
}