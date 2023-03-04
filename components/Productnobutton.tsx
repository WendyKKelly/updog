import Image from 'next/image'
import styles from '../styles/Product.module.css';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

  
export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: StaticImageData
    src?: string | StaticImageData
    weight: number
    length: number
    width: number
    height: number
}

interface IProductProps {
    product: IProduct
}

const Productnobutton = (props: IProductProps) => {
    return (
        <section className={styles.section}> 
            <main className={styles.main}>
                
        <div className={styles.product}>
           <div className={styles.title}>
            <div className={grandstander.className}>
            <h2 className={styles.title}>{props.product.name}</h2></div></div>
            <div className={styles.image}>
            <Image 
            src={props.product.image} 
            alt={props.product.image.src}
            width={300}
            height={300}
            priority />
            </div>
            <div className={styles.desc}>
            <div className={cormorant.className}>
            <p className={styles.description}>{props.product.description}</p></div></div>
            <div className={styles.ppb}>
            <div className="product__price-button-container"><div className={cormorant.className}>
                <div className={styles.price}>${props.product.price.toFixed(2)}</div>
                
                </div>
            </div>
        </div>
        </div>
        </main>
        </section>
    )
}

export default Productnobutton