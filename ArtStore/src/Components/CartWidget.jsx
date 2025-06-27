import React, { useContext, useState } from "react";
import iconCart from "../assets/cart-icon-black.svg";
import iconClose from "../assets/close-icon.svg";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./DisplayComponents/CartItem";

function CartWidget() {
  const [cartContent, setCartContent] = useContext(CartContext);
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
        {cartContent.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );

  return cartScren ? showCart : hideCart;
}

export default CartWidget;
