import React, { useContext, useEffect, useState } from "react";
import iconCart from "../assets/cart-icon-black.svg";
import iconClose from "../assets/close-icon.svg";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./DisplayComponents/CartItem";
import UsePaints from "../hooks/UsePaints";

function CartWidget() {
  const paints = UsePaints();
  const [cartContent, setCartContent] = useContext(CartContext);
  const [cartScren, setCartScreen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log("renderizando");
    const UpdateCart = () => {
      if (paints.length > 0) {
        console.log("entrando");
        let total = 0;

        cartContent.forEach((element) => {
          const paint = paints.find((paint) => paint.id === Number(element.id));
          const totalItem = paint.value * element.amount;
          total = total + totalItem;
        });
        setCartTotal(total);
      }
    };

    UpdateCart();
  }, [cartContent, paints]);

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
      {cartContent.length > 0 ? (
        <div className=" fixed w-4/16 right-0  h-full bg-white    z-100 duration-300 ">
          {cartScren}
          <button
            onClick={handleCart}
            className=" bg-white h-16 w-16 rounded-full m-1 "
          >
            <img src={iconClose} className=" size-10 m-auto "></img>
          </button>
          <h2 className="text-center text-2xl mb-2 font-bold ">
            Inside your cart:
          </h2>
          {cartContent.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <hr className="my-2 border-2" />
          <h3 className="font-bold text-2xl mx-10">Your Total: {cartTotal}</h3>
          <button className=" font-semibold  bg-indigo-500 text-amber-50 p-3 rounded-3xl mx-auto">
            Check Out
          </button>
        </div>
      ) : (
        <div className=" fixed w-4/16 right-0  h-full bg-white    z-100 duration-300 ">
          {cartScren}
          <button
            onClick={handleCart}
            className=" bg-white h-16 w-16 rounded-full m-1 "
          >
            <img src={iconClose} className=" size-10 m-auto "></img>
          </button>
          <h2 className="text-center">Nothing to show</h2>
        </div>
      )}
    </>
  );

  return cartScren ? showCart : hideCart;
}

export default CartWidget;
