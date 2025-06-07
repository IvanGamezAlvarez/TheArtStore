import React from "react";

import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";

function Paint() {
  const { id } = useParams();

  const PaintToShow = Paints.find((paint) => paint.id === Number(id));

  return (
    <>
      <div className=" flex justify-center gap-5  h-150">
        <img
          src={PaintToShow.imageUrl}
          alt={PaintToShow.title}
          className="   h-full"
        />
        <div className=" px-10 text-amber-50">
          <h2 className=" text-3xl font-bold text-center p-10">
            {PaintToShow.title}
          </h2>
          <h3 className=" text-2xl">Description:</h3>
          <p>{PaintToShow.description}</p>

          <h2> {PaintToShow.value}.00</h2>
          <button className=" rounded-4xl bg-amber-600 p-2 font-bold">
            Add to the cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Paint;
