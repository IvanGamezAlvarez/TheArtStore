import React from "react";
import { Link } from "react-router-dom";
function ImageFrame({ item, id }) {
  return (
    <div className=" h-96 w-full bg-amber-50">
      <Link to={`/Paint/${id}`}>
        <h2 className=" absolute my-12 mx-12   inline font-bold    text-amber-50  ">
          {item.title}
        </h2>
        <img
          className="h-full w-full object-cover object-center"
          src={item.imageUrl}
        ></img>
      </Link>
    </div>
  );
}

export default ImageFrame;
