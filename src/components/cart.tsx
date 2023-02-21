import React, { useState } from "react";
import { IProduct } from "../models";

interface CartItem {
  product: IProduct;
  quantity: number;
}

interface Props {
  products: IProduct[];
}

export const Cart: React.FC<Props> = ({ products }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: IProduct) => {
    const itemInCart = cartItems.find(item => item.product.id === product.id);

    if (itemInCart) {
      setCartItems(
        cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: IProduct) => {
    const itemInCart = cartItems.find(item => item.product.id === product.id);

    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        setCartItems(cartItems.filter(item => item.product.id !== product.id));
      } else {
        setCartItems(
          cartItems.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.product.id}>
              <p>
                {item.product.title} x {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.product)}>
                Remove
              </button>
            </div>
          ))}
          <p>Total: ${cartTotal.toFixed(2)}</p>
        </>
      )}
      <hr />            
      {/*<h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.title} - ${product.price}
          </p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}*/}
    </div>
  );
};