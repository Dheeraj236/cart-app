import React from 'react';

function Product(props) {
  return (
    <div className="col-lg-3">
      <div className='card' style={{ width: "18rem" }}>
        <img src="" className='card-img-top' alt="..." />
        <div className='card-body'>
          <h5 className='card-title'>{props.pdata.title}</h5>
          <h6>{props.pdata.price}</h6>
          {
            props.cartItem.title === props.pdata.title ? props.pdata.isStock=false : props.pdata.isStock=true
          } 
          -
          {
            props.pdata.isStock === true ? <span> in Stock</span> : <span> Out of Stock</span>
          }
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button disabled = {!props.pdata.isStock} onClick={() => props.handleShowPrice(props.pdata)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product;