import './product.css';
import { IProduct } from "../../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }:ProductProps) {
    return ( 
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between align-middle">
                <div>
                  <h3 className="text-base mr-3 font-bold font-sans">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p className="text-3xl font-extralight text-gray-900">{product.price+"$"}</p>
              </div>
            </div>
    )
}