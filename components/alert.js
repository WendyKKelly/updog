import { Grandstander } from "@next/font/google";

import Image from "next/image";
import Link from "next/link"

import Container from "../Container";

import styles from "@/styles/Alert.module.css";
const grandstander = Grandstander({ subsets: ['latin'] })
export default function Alert () {
  
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <Link 
        href="./shop">Free local (postal code starting with V1L) delivery
        </Link>
        
        
      </Container>
    </nav>
  );
};

