import './home-page.css'
import axios from 'axios';
import { IProduct } from "../../models";
import { useEffect, useState } from "react";
import { Product } from "../../components/product/product";

export const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
  
    async function fetchProducts() {
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])
    
    return (
        
        <div className="products-container">
            {loading && <p className="loading-text">Wait a moments...</p>}
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
    )
}