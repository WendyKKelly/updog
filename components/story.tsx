
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
   
      <section className={styles.section}>
        <main className={styles.main}>
      <div className={styles.top}>
      <div className={styles.story_title}>
     <h5 className={grandstander.className}>The Upvote from Dogs:</h5>
           </div>
            <div className={styles.dogs}>
             <div className={styles.d_image}>
            <Image
                src="/images/rocky2.png"
                alt="Rocky"
                width={300}
                height={350}
                priority
              />
              <div className={styles.d_desc}>
<h4 className={grandstander.className}>
              Rocky <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Happy dog!
            </p>
            </div>
            </div>
            <div className={styles.d_image}>
            <Image
                src="/images/rosa.png"
                alt="Rosa"
                width={300}
                height={350}
                priority
              />
              <div className={styles.d_desc}>
<h4 className={grandstander.className}>
              Rosa <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Rosa patiently waiting for her next treat.
            </p>
            
            </div>
            </div>
            <div className={styles.d_image}>
            <Image
                src="/images/lampi.png"
                alt="Lampi"
                width={300}
                height={350}
                priority
              />
              <div className={styles.d_desc}>
<h4 className={grandstander.className}>
              Lampi <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
            Lampi loves them! - the treats, I mean. And he’s surprisingly discerning when it comes to snacks.
            </p>
            
            </div>
            </div>
            <div className={styles.d_image}>
            <Image
                src="/images/morley.png"
                alt="Morley"
                width={300}
                height={350}
                priority
              />
              <div className={styles.d_desc}>
<h4 className={grandstander.className}>
             Morley <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
            It was harder than I expected to get a good photo! She kept gobbling them before I could get a good shot! If you let me buy some more, I’ll try again. She loves them!
            </p>
            
            </div>
            </div>
            <div className={styles.d_image}>
            <Image
                src="/images/spokesdogplaceholder.png"
                alt="Nelson dog"
                width={300}
                height={350}
                priority
              />
              <div className={styles.d_desc}>
<h4 className={grandstander.className}>
              Your Dog Here <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              send us a picture of your dog begging for Updog Treats and share the love.
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