import { ErrorMessage } from "../components/error-message";
import { Loader } from "../components/loader";
import { Product } from "../components/product";
import { Search } from '../components/search';
import { useProduct } from "../hooks/product-hooks";

export const HomePage = () => {
    const {loading, error, products} = useProduct()
    
    return (
        <div className="products-container">
            <Search />
            { loading && <Loader /> }
            { error && <ErrorMessage error={ error }/> }
            <div className="bg-white">
                <div className="mx-auto w-full py-1 sm:py-2 lg:w-full">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map(product => <Product product={product} key={product.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}