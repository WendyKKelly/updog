import styles from "@/styles/Alert.module.css";

export default function PostCategory({ children }) {
    return (
      <h1 className={styles.description}>
        {children}
      </h1>
    )
  }