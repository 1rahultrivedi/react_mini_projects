import React from 'react';
function CartItem({ item, removeFromCart }) {
  return (
    <div>
      {item.name} - ${item.price}
      <button
        onClick={() => removeFromCart(item.id)}
        style={{ marginLeft: '10px' }}
      >
        Remove
      </button>
    </div>
  );
}
export default CartItem;
