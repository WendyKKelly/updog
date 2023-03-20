import styles from "@/styles/Alert.module.css";
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className={styles.description}>
      {children}
    </h1>
  )
}

export default PostTitle