import Image from 'next/image'
import styles from '../styles/Product.module.css';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})

type StaticImageData = {id: string; name: string; price: number; url: string; description: string;  image: string; weight: number; length: number; height: number; width: number; blurDataURL?: string; }

  
export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image?: string | StaticImageData
    weight: number
    length: number
    width: number
    height: number
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
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
                <button
                    className={`snipcart-add-item ${styles.button}`}
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={props.product.url}
                    data-item-image={props.product.image.src}
                    data-item-weight={props.product.weight}
                        data-item-length={props.product.length}
                        data-item-width={props.product.width}
                        data-item-height={props.product.height}>
                    Add to cart
                </button>
                </div>
            </div>
        </div>
        </div>
        </main>
        </section>
    )
}

export default Product