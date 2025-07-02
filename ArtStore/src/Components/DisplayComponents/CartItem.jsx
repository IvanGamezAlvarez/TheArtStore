import React, { useContext } from "react";
import UsePaints from "../../hooks/UsePaints";
import { CartContext } from "../../Contexts/CartContext";

function CartItem({ item }) {
  const [cartContent, setCartContent, addToCart, removeItem] =
    useContext(CartContext);
  const { paints } = UsePaints();
  const paintToShow = paints.find((paint) => paint.id === Number(item.id));

  return (
    <div className=" my-1">
      {paintToShow && (
        <div className=" h-30 bg-gray-700 flex justify-between">
          <div className="h-full  w-50 bg-white">
            <img
              className=" block h-full object-cover m-auto  "
              src={paintToShow.imageUrl}
              alt=""
            />
          </div>

          <div className=" w-full text-le mx-2 text-amber-50">
            <h2 className=" font-bold text-gray-300 ">{paintToShow.title} </h2>
            <p className=" font-bold">$ {paintToShow.value}.00</p>
            <p className=" ">amount: {item.amount}</p>
          </div>
          <button
            onClick={() => {
              removeItem(paintToShow.id);
            }}
            className=" rounded-3xl my-auto mr-3 right-0 h-10 w-18 bg-amber-50 font-bold text-black hover:bg-red-700 hover:text-amber-50 "
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
