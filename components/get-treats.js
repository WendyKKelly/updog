import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Get.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Get() {
  return (
<section className={styles.section}>
  <main className={styles.main}>
    <div className={styles.grid1}>
          <div className={styles.desc}>
         <h5 className={grandstander.className}>
        Get Updog Treats:
    </h5>
    </div>
   
   <div className={styles.nelson} >
      <Link href="./nelson"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      Shop in Nelson</Link></div>
      <div className={styles.away} ><Link href="./shop"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      Shop from Away</Link></div>
      
     
      </div>
      
      </main>
</section>
  )
}