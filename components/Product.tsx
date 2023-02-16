import Image from 'next/image'
import styles from '../styles/Product.module.css';

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
            <h5 className={styles.title}>{props.product.name}</h5>
            <p className={styles.description}>{props.product.description}</p>
            <div className={styles.image}>
            <Image 
            src={props.product.image} 
            alt={props.product.image.src}
            width={300}
            height={300}
            priority />
            </div>
            <div className="product__price-button-container">
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
        </section>
    )
}

export default Product