import React from 'react';
import ShoppingCart from './ShoppingCart';
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 599 },
  { id: 3, name: 'Headphones', price: 199 }];
function App() {
  return (
    <div className="App">
      <h1>Simple Shopping Cart</h1>
      <ShoppingCart products={products} />
    </div>
  );
}
export default App;
