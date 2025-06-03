import React from "react";
import { Link } from "react-router-dom";


function ImageFrame({ item, id }) {

  return (
    <div className="relative h-96 w-full bg-amber-50">
      <Link to={`/Paint/${id}`}>
        <div className="">
          <h2 className=" absolute my-1/2 mx-1/2   inline font-bold    text-amber-50  ">
          {item.title}
        </h2>
        </div>
      
        <img
          className="h-full w-full object-cover object-center"
          src={item.imageUrl}
        ></img>
      </Link>
    </div>
  );
}

export default ImageFrame;
