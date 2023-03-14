import { Grandstander } from "@next/font/google";

import Image from "next/image";
import Link from "next/link"



import styles from "@/styles/Alert.module.css";
const grandstander = Grandstander({ subsets: ['latin'] })
export default function Alert () {
  
  return (
    <>
      <container className={styles.container}>
        <Link 
        href="./shop"><div className={grandstander.className}><p className={styles.description}>Free local (postal code starting with V1L) delivery</p></div>
        </Link>
        </container>
        </>
  );
};

