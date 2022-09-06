import React from "react";

function CartItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{props.pItem.title}</div>
                {
                  props.pItem.price
                }
              </div>
              <button onClick={() => props.removeItem(props.pItem)} className="badge bg-primary rounded-pill">X</button>
        </li>
    )
}

export default CartItem;