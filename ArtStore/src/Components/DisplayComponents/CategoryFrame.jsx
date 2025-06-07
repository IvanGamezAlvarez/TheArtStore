import React from "react";
import { Link } from "react-router-dom";

function CategoryFrame({ item, id }) {
  return (
    <div className=" h-full w-full">
      <Link to={`/Catalog/${id}`}>
        <h2 className=" absolute my-12 mx-12   inline font-bold    text-amber-50  size-1 ">
          {item.name}
        </h2>
        <img className="h-full w-full object-cover" src={item.imageUrl}></img>
        <p className="text-white">{item.description}</p>
      </Link>
    </div>
  );
}

export default CategoryFrame;
