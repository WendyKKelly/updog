import Container from '../Container';
import { FaInstagram } from 'react-icons/fa';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
import styles from './Footer.module.css';
import Link from 'next/link';
const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.grid}>
            
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              About Us <span>-&gt;</span>
            </h4>
            
        </div>
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              Contact <span>-&gt;</span>
            </h4>
            
        </div>
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              FAQs <span>-&gt;</span>
            </h4>
            
        </div>
        <Link
            href="https://www.instagram.com/updogtreats/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
        <div className={styles.card}>
        <h4 className={styles.insta}>
              <FaInstagram /> <span>-&gt;</span>
            </h4>
           
        </div>
        </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;