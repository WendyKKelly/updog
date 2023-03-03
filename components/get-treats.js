import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from '@/styles/Get.module.css'
import Link from 'next/link'


const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export default function Get() {
  return (
<section>
  <main>
    <div className={styles.grid1}>
          <div className={styles.desc}>
         <h5 className={grandstander.className}>
        Get Updog Treats:
    </h5>
    </div>
   <div className={styles.list}>
      <ul><Link href="./nelson"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      <li className={styles.nelson} >Shop in Nelson</li></Link>
      <Link href="./shop"
      className={styles.link}
      target="blank"
      rel="noopener noreferrer"
      >
      <li className={styles.away} >Shop from Away</li></Link>
      </ul>
      </div>
      </div>
      </main>
</section>
  )
}