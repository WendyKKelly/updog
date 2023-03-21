
import styles from "@/styles/Intro.module.css";
import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.description}>
        Updog Blog
      </h1>
      <h4 className={styles.title}>
       Stories for dog companions.
        
      </h4>
    </section>
  )
}

export default Intro
