import React from "react";
import UsePaints from "../../hooks/UsePaints";

function CartItem({ item }) {
  console.log(item);
  const { paints } = UsePaints();
  console.log(paints);

  const paintToShow = paints.find((paint) => paint.id === Number(item.id));

  return (
    <div className=" my-1">
      {paintToShow && (
        <div className=" h-30 bg-gray-700 flex justify-between">
          <img
            className=" object-cover  h-full w-1/3"
            src={paintToShow.imageUrl}
            alt=""
          />
          <div className=" w-full text-le mx-2 text-amber-50">
            <h2 className=" font-bold text-gray-300 ">{paintToShow.title} </h2>
            <p className=" font-bold">$ {paintToShow.value}.00</p>
            <p className=" ">amount: {item.amount}</p>
          </div>
          <button className=" rounded-3xl my-auto mr-3 right-0 h-10 w-20 bg-amber-50 font-bold text-black ">
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
