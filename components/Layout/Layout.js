import Nav from '../Nav';
import Footer from '../Footer';
import Alert from '../alert'
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Alert/>
      <Nav />
      { children }
      <Footer />
    </div>
  )
}

export default Layout;