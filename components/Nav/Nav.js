import { Grandstander } from "@next/font/google";

import Image from "next/image";
import Link from "next/link"

import Container from "../Container";


import styles from "./Nav.module.css";
const grandstander = Grandstander({ subsets: ['latin'] })
export default function Nav () {
  
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        
        <Link 
        href="./index">
        <Image
                src="/images/Updog3.png"
                alt="Updog Logo"
                className={styles.logo}
                width={500}
                height={600}
                priority
              /></Link>
        
        
      </Container>
    </nav>
  );
};

