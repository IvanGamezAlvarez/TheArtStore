import React, { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

function ItemCount() {
  const [cartContent, setCartContent, addToCart] = useContext(CartContext);
  const [amountToAdd, setAmountToAdd] = useState(0);

  const addAmout = (i) => {
    if (cartContent) console.log("le etamo llamando loco");
    const newAmount = amountToAdd + i;
    setAmountToAdd(newAmount);
    console.log(cartContent);
  };

  const addToTheCart = () => {
    addToCart([]);
  };
  return (
    <div className=" text-black ">
      <button
        className="py-2 font-bold bg-amber-100 px-4"
        onClick={() => {
          addAmout(-1);
        }}
      >
        -
      </button>

      <button
        onClick={addToTheCart}
        className="mt-0 bottom-0 bg-amber-100 p-2 font-bold"
      >
        Add to the cart
      </button>

      <button
        className="py-2 font-bold bg-amber-100 px-4"
        onClick={() => {
          addAmout(1);
        }}
      >
        +
      </button>

      {amountToAdd > 0 && (
        <p className=" text-amber-50 inline-block py-2 px-4  font-bold bg-orange-300">
          {amountToAdd}
        </p>
      )}
    </div>
  );
}

export default ItemCount;
