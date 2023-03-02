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
        <Link
            href="../about"
            
            target="_blank"
            rel="noopener noreferrer"
          >   
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              About Us <span>-&gt;</span>
            </h4>
            
        </div></Link>
        <Link
            href="../contact"
            
            target="_blank"
            rel="noopener noreferrer"
          >
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              Contact <span>-&gt;</span>
            </h4>
            
        </div></Link>
        <Link
            href="https://whatsupdog.substack.com/p/a39db468-97f1-4b9f-b8e6-30bd28f7de47"
            
            target="_blank"
            rel="noopener noreferrer"
          >
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              What's Up Dog Newsletter <span>-&gt;</span>
            </h4>
            
        </div></Link>
        <Link
            href="https://www.instagram.com/updogtreats/"
            
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