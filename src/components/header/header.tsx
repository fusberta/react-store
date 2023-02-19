import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { CartBlock } from "../cart-block/cart-block"
import './sticky-header'

export const Header = () => {
    return (
        <div className="header sticky">
            <div className="wrapper">
                <Link to="/" className='header__store-title'>
                    Simple Store
                </Link> 
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    )
}