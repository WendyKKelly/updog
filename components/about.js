
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Food.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function About() {
  return (
    <>

<div className={styles.grid}>
<Link
  href="./nutrition"
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
</Link>

<a
  href=""
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

<Link
  href="./about"
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
</Link>

<Link
  href=""
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h4 className={grandstander.className}>
    What's The Deal? <span>-&gt;</span>
  </h4>
  <p className={grandstander.className}>
    $10 for 120 grams of treats. $10 for a handmade, upcycled treat pouch. Buy both and treat refills are $9 for 120 grams. 
  </p>
</Link>
</div>
<div className={styles.h_title}>
          <h5 className={grandstander.className}>Humans:</h5>
          <p className={grandstander.className}>Mike and Wendy are making hyper healthy dog treats and upcycled dog treat pouches.</p>
          </div>
          <div className={styles.humans}>
            
              <div className={styles.h_card}>
            <Image
                src="/images/mike2.png"
                alt="Mike Kelly"
                width={300}
                height={350}
                priority
              />
              <div className={styles.h_desc}>
<h4 className={grandstander.className}>
              Mike Kelly <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Brewmaster, baker, upcycled dog treat pouch  maker.
            </p>
            
            </div>
            </div>
            <div className={styles.h_card}>
            <Image
                src="/images/wendy3.png"
                alt="Wendy Kelly"
                width={300}
                height={350}
                priority
              />
              <div className={styles.h_desc}>
<h4 className={grandstander.className}>
              Wendy Kelly <span>-&gt;</span>
            </h4>
            <p className={grandstander.className}>
              Webmaster*, baker, healthy dog treat maker.
            </p>
            
            </div>
            </div>
            </div>
</>
  )
}