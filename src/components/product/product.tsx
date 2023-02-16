import './product.css';
import { IProduct } from "../../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }:ProductProps) {
    return ( 
        <div className="product">
            <img src={product.image} alt={product.title} className="product-img" />
            <div className="content">
                
            </div>
        </div>
    )
}