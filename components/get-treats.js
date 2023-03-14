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
         
   

      <div className={styles.away} ><Link href="./shop"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      Shop Now</Link></div>
      
      <div className={styles.nelson} >
      <Link href="./about"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      Learn More</Link></div>
      </div>
      
      </main>
</section>
  )
}