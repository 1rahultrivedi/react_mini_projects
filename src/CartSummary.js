import React from 'react';
function CartSummary({ cart }) {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Cart Summary</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
export default CartSummary;
