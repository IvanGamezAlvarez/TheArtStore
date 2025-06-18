import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";

function Paint() {
  const { id } = useParams();

  const PaintToShow = Paints.find((paint) => paint.id === Number(id));

  return (
    <>
      <div className=" flex justify-center gap-5   h-150 m-10">
        <div className="h-full w-1/2 bg-gray-900 ">
        <img
        
          src={PaintToShow.imageUrl}
          alt={PaintToShow.title}
          className=" p-1  object-contain   h-full m-auto   "
        />
        </div>
    
        <div className=" px-10 text-amber-50  w-1/2">
          <Link
            to={`/Catalog/${PaintToShow.artStyle}`}
            className=" mt-10 text-2xl"
          >
            {PaintToShow.artStyle}
          </Link>
          <h2 className=" text-3xl font-bold m-0 p-0">{PaintToShow.title}</h2>
          <p className=" w-100">{PaintToShow.description}</p>
          <h3 className=" font-bold"> Price:</h3>
          <h2> {PaintToShow.value}.00</h2>

          <h3 className=" font-bold"> Author:</h3>
          <p>{PaintToShow.author}</p>

          <button className="mt-0 bottom-0 bg-amber-100 p-2 font-bold text-black">
            Add to the cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Paint;
