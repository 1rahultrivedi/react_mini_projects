import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
function ShoppingCart({ products }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />

      <h2>Cart Items:</h2>
      {cart.length > 0 ? (
        cart.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      ) : (
        <p>No items in cart.</p>
      )}

      <CartSummary cart={cart} />
    </div>
  );
}
export default ShoppingCart;
