import React, { useContext, useState } from "react";
import iconCart from "../assets/cart-icon-black.svg";
import iconClose from "../assets/close-icon.svg";
import { CartContext } from "../Contexts/CartContext";

function CartWidget() {

  const [cartContent, setCartContentx] = useContext(CartContext);
  const [cartScren, setCartScreen] = useState(false);

  const handleCart = () => {
    setCartScreen(!cartScren);
  };

  const hideCart = (
    <>
      <div className=" fixed w-1/16 right-0  h-full   flex items-center justify-center z-10 transition-all duration-300">
        {cartScren}
        <button
          onClick={handleCart}
          className=" bg-white h-16 w-16 rounded-full"
        >
          <img src={iconCart} className=" size-10 m-auto"></img>
        </button>
      </div>
    </>
  );
  const showCart = (
    <>
      <div className=" fixed w-4/16 right-0  h-full bg-white    z-100 duration-300 ">
        {cartScren}
        <button
          onClick={handleCart}
          className=" bg-white h-16 w-16 rounded-full m-1 "
        >
          <img src={iconClose} className=" size-10 m-auto "></img>
        </button>
        {console.log(cartContent)}
        {cartContent.lenght ===0 && <h2 className=" block font-bold text-2xl text-center">The cart is empty</h2>}
        {cartContent.lenght > 0 &&  <h2>mostrando algo</h2>}

      </div>
    </>
  );

  return cartScren ? showCart : hideCart;
}

export default CartWidget;
