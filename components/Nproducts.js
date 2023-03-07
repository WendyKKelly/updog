import Image from 'next/image'
import Link from 'next/link'
import updogSample from "../public/images/samples.jpg"
import updogTreat from "../public/images/120-grams.jpg"
import updogPouch from "../public/images/treatpouch.jpg"
import updogRefill from "../public/images/refill.png"
import styles from '../styles/Nproduct.module.css';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
  

export default function Nproducts () {
    return (
        <section className={styles.section}> 
            <main className={styles.main}>
                
        <div className={styles.product}>
           <div className={styles.t_title}>
            <div className={grandstander.className}>
            <h5 className={styles.title}>Updog Treats / 120 grams</h5></div></div>
            <div className={styles.t_image}>
            <Image 
            src={updogTreat} 
            alt={updogTreat}
            width={300}
            height={300}
            priority />
            </div>
            <div className={styles.t_desc}>
            <div className={cormorant.className}>
            <p className={styles.description}>120 grams of treats that will make your dog love you (even more). These treats are made with spent barley grain from a local brewery, fresh ground meat (mainly pork but may include beef and a small amount of chicken) and chia seeds. Best refrigerated but can last up to 10 days in the pantry.</p></div></div>
            <div className={styles.t_ppb}>
            <div className={cormorant.className}>
                <Link href="#form"><div className={styles.t_button}>Order Now</div></Link>
                <div className={styles.t_price}>$10</div>
                
                
            </div>
        </div>
        <div className={styles.s_title}>
            <div className={grandstander.className}>
            <h5 className={styles.title}>Updog Sample</h5></div></div>
            <div className={styles.s_image}>
            <Image 
            src={updogSample} 
            alt={updogSample}
            width={300}
            height={300}
            priority />
            </div>
            <div className={styles.s_desc}>
            <div className={cormorant.className}>
            <p className={styles.description}>Curious? Order a small 10 gram sample of our delicious treats. So far, every dog we have given samples to has begged us for more — but we fully understand that you might want to try them out first. All our packaging is made inhouse with upcycled materials and we plan to keep it that way.</p></div></div>
            <div className={styles.s_ppb}>
            <div className={cormorant.className}>
            <Link href="#form"><div className={styles.t_button}>Order Now</div></Link>
                <div className={styles.t_price}>$1</div>
                
                
            </div>
        </div>
        <div className={styles.p_title}>
            <div className={grandstander.className}>
            <h5 className={styles.title}>Updog Treat Pouch</h5></div></div>
            <div className={styles.p_image}>
            <Image 
            src={updogPouch} 
            alt={updogPouch}
            width={300}
            height={300}
            priority />
            </div>
            <div className={styles.p_desc}>
            <div className={cormorant.className}>
            <p className={styles.description}>Ultralight, upcycled, handmade with care from malt and grain bags. When brewmaster Mike made an offhand remark about upcycling grain bags, who could have predicted this? These treat bags now come in 2 sizes — small, about the size of a rock climber's chalk bag, and a larger one, about twice as large. No two are the same.</p></div></div>
            <div className={styles.p_ppb}>
            <div className={cormorant.className}>
                <div className={styles.t_price}>$10</div>
                <Link href="#form"><div className={styles.t_button}>Order Now</div></Link>
                
            </div>
        </div>
        <div className={styles.tp_title}>
            <div className={grandstander.className}>
            <h5 className={styles.title}>Updog Treat Pouch w/ 120 grams treats</h5></div></div>
            <div className={styles.tp_image}>
            <Image 
            src={updogRefill} 
            alt={updogRefill}
            width={300}
            height={300}
            priority />
            </div>
            <div className={styles.tp_desc}>
            <div className={cormorant.className}>
            <p className={styles.description}>Buy a handmade upcycled treat pouch (large or small) and save $1 on the treats, every time it's refilled. That's like a free bag of treats every 10 refills!</p></div></div>
            <div className={styles.tp_ppb}>
            <div className={cormorant.className}>
                <div className={styles.t_price}>$19</div>
                
                
            </div>
        </div>
        </div>
        </main>
        </section>
    )
}

