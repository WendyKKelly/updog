import styles from "@/styles/Lontainer.module.css";
type Props = {
    children?: React.ReactNode
  }
  
  const Lontainer = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>
  }
  
  export default Lontainer