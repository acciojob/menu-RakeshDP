import React from "react";

const Cart = ({ state }) => {
  return (
    <div id="main">
      {state.map((item) => (
        <div className="cart" key={item.id} data-test-id={`menu-item-${item.category}`}>
          <div className="left">
            <img alt="images are view " src={item.img} />
          </div>
          <div className="right">
            <div>
              <h5>{item.title}</h5>
              <small>$ {item.price}</small>
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
