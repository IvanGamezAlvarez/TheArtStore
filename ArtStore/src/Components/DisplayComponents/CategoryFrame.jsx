import React from "react";
import { Link } from "react-router-dom";

function CategoryFrame({ item, id }) {
  console.log("Nos cargamos");

  return (
    <div className=" bg-orange-300 h-130 w-full d hover:bg-gray-800 hover:text-amber-50">
      <Link to={`/Catalog/${id}`}>
        <img className=" h-8/12 w-full object-cover" src={item.imageUrl}></img>

        <h2 className=" font-bold text-center p-4 uppercase font-bol ">
          {item.name}
        </h2>
        <p className=" mx-5 text-justify">{item.description}</p>
      </Link>
    </div>
  );
}

export default CategoryFrame;
