import './home-page.css'
import axios from 'axios';
import { IProduct } from "../../models";
import { useEffect, useState } from "react";
import { Product } from "../../components/product/product";
import { Search } from '../../components/search/search';

export const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
  
    async function fetchProducts() {
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products?limit=10')
        setProducts(response.data)
        setLoading(false)
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])
    
    return (
        <div className="products-container">
            <Search />
            {loading && <p className="loading-text">LOADING ...</p>}
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-1 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map(product => <Product product={product} key={product.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}