import React from "react";
import iconCart from "../assets/cart-icon-black.svg";

function CartWidget() {
  return (
    <>
      <div className=" fixed w-1/16 right-0  h-full   flex items-center justify-center z-10 ">
        <button className=" bg-white h-16 w-16 rounded-full">
          <img src={iconCart} className=" size-10 m-auto"></img>
        </button>
      </div>
    </>
  );
}

export default CartWidget;
