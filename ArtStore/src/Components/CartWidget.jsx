import React from "react";
import iconCart from "../assets/cart-icon.svg";

function CartWidget() {
  return (
    <>
      <div className=" fixed w-1/16 right-0  h-full   flex items-center justify-center ">
        <button className=" bg-white h-1/12 w-8/12 rounded-full">
          <img src={iconCart} className=" size-12 m-auto"></img>
        </button>
      </div>
    </>
  );
}

export default CartWidget;
