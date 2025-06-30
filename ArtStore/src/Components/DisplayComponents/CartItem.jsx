import React from "react";


function CartItem({ item }) {
  return (
    <div className=" h-20 bg-amber-400 ">
      <h2>{item.id}</h2>
    </div>
  );
}

export default CartItem;
