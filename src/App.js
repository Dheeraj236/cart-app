import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';
import CartItem from './CartItem';
import Product from './Product';


function App() {

  var products = [
    {
      id: 1,
      title: "Product1",
      price:  25,
      isStock: true
    },
    {
      id: 2,
      title: "Product2",
      price:  25,
      isStock: true
    },
    {
      id: 3,
      title: "Product3",
      price: 25,
      isStock: true
    },
    {
      id: 4,
      title: "Product4",
      price: 25,
      isStock: true
    },
    {
      id: 5,
      title: "Product5",
      price: 25,
      isStock: true
    },
    {
      id: 6,
      title: "Product6",
      price: 25,
      isStock: true
    },
    {
      id: 7,
      title: "Product7",
      price: 25,
      isStock: true
    },
  ];

  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  
  let showPrice = (data) => {
    setCartItem([...cartItem, data]);
    setTotal(total + data.price)
  }

  function removeItem(item){
    var index = cartItem.findIndex(cItem => cItem.id === item.id);
    cartItem.splice(index, 1);
    setCartItem([...cartItem]);
    setTotal(total-item.price)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
           {
             products.map((product) => {
               return <Product cartItem={cartItem} pdata = {product} handleShowPrice = {showPrice}></Product>
             })
           }
          </div>
        </div>
        <div className="col-lg-2">
          <h3 className='mt-3 mb-3'>Cart items({cartItem.length})</h3>
          <ol className='list-group list-group-numbered'>
            {
              cartItem.map((item) => {
                return <CartItem removeItem={removeItem} pItem = {item}></CartItem>
              })
            }
          </ol>
          <h3 className='mt-3'>Total : ({total})</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
