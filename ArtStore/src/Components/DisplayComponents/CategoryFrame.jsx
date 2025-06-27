import React from "react";
import { Link } from "react-router-dom";

function CategoryFrame({ item, id }) {
  console.log("Nos cargamos");

  return (
    <div className="bg-emerald-900 h-130 w-full">
      <Link to={`/Catalog/${id}`}>
        <img className=" h-8/12 w-full object-cover" src={item.imageUrl}></img>

        <h2 className=" font-bold    text-amber-50   ">{item.name}</h2>
        <p className="text-white">{item.description}</p>
      </Link>
    </div>
  );
}

export default CategoryFrame;
