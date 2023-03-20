import styles from "@/styles/Alert.module.css";
type Props = {
    children?: React.ReactNode
  }
  
  const Lontainer = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>
  }
  
  export default Lontainer