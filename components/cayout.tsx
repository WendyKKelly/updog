import Llert from './llert'
import Looter from './looter'
import Meta from './meta'
import styles from "@/styles/Alert.module.css";
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Cayout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Llert preview={preview} />
        <main>{children}</main>
      </div>
      <Looter />
    </>
  )
}

export default Cayout