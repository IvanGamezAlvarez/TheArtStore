import React, { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

function ItemCount({ itemId }) {
  const [cartContent, setCartContent, addToCart] = useContext(CartContext);
  const [amountToAdd, setAmountToAdd] = useState(0);

  const addAmout = (i) => {
    if (amountToAdd === 0 && i < 0) {
      return;
    }
    const newAmount = amountToAdd + i;
    setAmountToAdd(newAmount);
  };

  const addToTheCart = () => {
    let amount = amountToAdd;
    if (amountToAdd <= 0) {
      amount = 1;
    }
    addToCart(itemId, amount);
    setAmountToAdd(0);
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
