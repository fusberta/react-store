import { Link } from 'react-router-dom';
import { CartBlock } from "./cart-block"

export const Header = () => {
    return (
        <div className="h-24 flex items-center justify-center container mx-auto transition-all duration-500">
            <div className="flex flex-1">
                <Link to="/" className='font-dashed text-4xl font-bold drop-shadow-2xl shadow-gray-light'>
                    Simple Store
                </Link> 
            </div>
            <div className="justify-end">
                <CartBlock />
            </div>
        </div>
    )
}