import React from 'react';
import {BsCart2} from 'react-icons/bs'
import './cart-block.css';

export const CartBlock = () => {
    return (
        <div className="cart-block">
            <BsCart2 size={25} className='cart-block__icon'></BsCart2>
            <span className='cart-block__total-price'>526 руб.</span>
        </div>
    )
}