import styles from "@/styles/Body.module.css";

export default function PostCategory({ children }) {
    return (
      <h1 className={styles.description}>
        {children}
      </h1>
    )
  }