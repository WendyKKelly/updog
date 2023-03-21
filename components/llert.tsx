
import Link from 'next/link'
import styles from "@/styles/Llert.module.css";
import { Grandstander } from "@next/font/google";

const grandstander = Grandstander({ subsets: ['latin'] })
export default function Llert() {
  return (
   
      <div className={styles.container}>
         
            <>
            <Link 
        href="./shop"><div className={grandstander.className}><p className={styles.description}>Free local delivery</p></div>
        </Link>
            </>
          
        </div>
     
    
  )
}