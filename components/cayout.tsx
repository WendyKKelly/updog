import Llert from './llert'
import Looter from './looter'
import Meta from './meta'
import styles from "@/styles/Cayout.module.css";
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Cayout = ({  children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Llert />
        <main>{children}</main>
      </div>
      <Looter />
    </>
  )
}

export default Cayout