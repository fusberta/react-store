import {BsCart2} from 'react-icons/bs'

export const CartBlock = () => {
    return (
        <div className="flex items-center cursor-pointer">
            <BsCart2 size={25} className=''></BsCart2>
            <span className='ml-4 text-xl font-normal hidden lg:block'>$526</span>
        </div>
    )
}