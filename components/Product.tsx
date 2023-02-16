import Image from 'next/image'
import styles from '../styles/Product.module.css';
import { Grandstander } from '@next/font/google'
import {Cormorant} from '@next/font/google'
const grandstander = Grandstander({ subsets: ['latin'] })
const cormorant = Cormorant({subsets: ['latin']})
export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: StaticImageData
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <section> 
        <div className={styles.product}>
           
            <div className={grandstander.className}>
            <h2 className={styles.title}>{props.product.name}</h2></div>
            <div className={cormorant.className}>
            <p className={styles.description}>{props.product.description}</p></div>
            <div className={styles.image}>
            <Image 
            src={props.product.image} 
            alt={props.product.image.src}
            width={300}
            height={300}
            priority />
            </div>
            <div className="product__price-button-container"><div className={cormorant.className}>
                <div className={styles.price}>${props.product.price.toFixed(2)}</div>
                <button
                    className={`snipcart-add-item ${styles.button}`}
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={props.product.url}
                    data-item-image={props.product.image.src}>
                    Add to cart
                </button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Product