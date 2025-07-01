import React from "react";
import { Link } from "react-router-dom";

function CategoryFrame({ item, id }) {
  console.log("Nos cargamos");

  return (
    <div className=" bg-rose-700 h-130 w-full d hover:bg-gray-800 text-amber-50">
      <Link to={`/Catalog/${id}`}>
        <img className=" h-8/12 w-full object-cover" src={item.imageUrl}></img>

        <h2 className=" font-bold text-center p-3 uppercase font-bol ">
          {item.name}
        </h2>
        <p className=" mx-5 text-justify font-semibold">{item.description}</p>
      </Link>
    </div>
  );
}

export default CategoryFrame;
