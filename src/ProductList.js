import React from 'react';
function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} style={{ margin: '10px 0' }}>
          <strong>{product.name}</strong> - ${product.price}
          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: '10px' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
