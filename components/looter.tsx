import Lontainer from './lontainer'
import { EXAMPLE_PATH } from '../lib/constants'
import styles from "@/styles/Looter.module.css";
const Looter = () => {
  return (
    <footer className={styles.footer}>
      <Lontainer>
        <div className={styles.container}>
          <h3 className={styles.description}>
            Statically Generated with Next.js.
          </h3>
          <div className={styles.link}>
            
              Read Documentation
            
            
              View on GitHub
            
          </div>
        </div>
      </Lontainer>
    </footer>
  )
}

export default Looter