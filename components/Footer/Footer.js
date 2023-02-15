import Container from '../Container';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.grid}>
            <div className={styles.card}>
        <h6>&copy; Updog Treats</h6>
        </div>
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
        <div className={styles.card}>
        <h4 className={grandstander.className}>
              <FaInstagram /> <span>-&gt;</span>
            </h4>
           
        </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;