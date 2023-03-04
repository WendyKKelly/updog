import Productnobutton, {IProduct} from "./Productnobutton";

interface IProductListProps {
    products: IProduct[]
}

const ProductListnb = (props: IProductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Productnobutton product={product} key={index}/>)}
        </div>
    )
}


export default ProductListnb