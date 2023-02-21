import { Link } from "react-router-dom";
import { IProduct } from "../models";
import { BsCartPlus } from 'react-icons/bs'

interface ProductProps {
    product: IProduct
}

export function Product({ product }:ProductProps) {
    return ( 
      
      <div key={product.id} className="group relative bg-gray-dark rounded-xl border-solid border border-slategray">
        <Link to="/">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </Link>
        <div className="mt-4 flex flex-col justify-between px-5 pb-4 rounded-b-lg h-auto items-center">
          <div>
            <p className="text-base text-orange-200 font-extralight text-gray-900 mb-1">{'$' + product.price}</p>

          </div>
          <h3 className="text-base w-full text-center font-light font-sans mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {product.title}
          </h3>
          <div className="bg-gray rounded text-center w-max px-1 py-0.5">
            <p className="text-xs text-gray-dark font-semibold">{product.category}</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center mt-2">
            <BsCartPlus size={27} />
          </div>
        </div>
      </div>
    )
}