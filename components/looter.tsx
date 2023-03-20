import Lontainer from './lontainer'
import { EXAMPLE_PATH } from '../lib/constants'
import styles from "@/styles/Alert.module.css";
const Looter = () => {
  return (
    <footer className={styles.container}>
      <Lontainer>
        <div className={styles.description}>
          <h3 className={styles.description}>
            Statically Generated with Next.js.
          </h3>
          <div className={styles.description}>
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className={styles.description}
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Lontainer>
    </footer>
  )
}

export default Looter