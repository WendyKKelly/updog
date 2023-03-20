import Llert from './llert'
import Looter from './looter'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Cayout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Llert preview={preview} />
        <main>{children}</main>
      </div>
      <Looter />
    </>
  )
}

export default Cayout