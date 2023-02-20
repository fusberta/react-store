import {BsCart2} from 'react-icons/bs'

export const CartBlock = () => {
    return (
        <div className="flex items-center cursor-pointer">
            <BsCart2 size={30} className=''></BsCart2>
            <span className='ml-4 text-2xl font-normal hidden lg:block'>$526</span>
        </div>
    )
}