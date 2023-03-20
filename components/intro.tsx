
import styles from "@/styles/Alert.module.css";
import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.description}>
        Updog Blog
      </h1>
      <h4 className={styles.description}>
       Dogs.{' '}
        <a
          href="https://nextjs.org/"
          className={styles.description}
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  )
}

export default Intro
