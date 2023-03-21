import Lontainer from './lontainer'
import Link from 'next/link'
import styles from "@/styles/Llert.module.css";
import { Grandstander } from "@next/font/google";

const grandstander = Grandstander({ subsets: ['latin'] })
export default function Llert() {
  return (
   
      <Lontainer>
        <div className={styles.description}>
         
            <>
            <Link 
        href="./shop"><div className={grandstander.className}><p className={styles.description}>Free local delivery</p></div>
        </Link>
              .
            </>
          
        </div>
      </Lontainer>
    
  )
}