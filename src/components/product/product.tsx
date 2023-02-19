import './product.css';
import { IProduct } from "../../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }:ProductProps) {
    return ( 
            <div key={product.id} className="group relative bg-gray-dark rounded-xl border-solid border border-slategray">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden transition-all rounded-xl bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between px-5 pb-4 rounded-b-lg">
                <p className="text-base text-orange font-extralight text-gray-900">{'$' + product.price}</p>
                <div>
                  <h3 className="text-base ml-6 font-light font-sans">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
    )
}