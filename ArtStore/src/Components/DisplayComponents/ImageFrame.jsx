import React from "react";

function ImageFrame({ item }) {
  return (
    <div className=" h-full w-full">
      <img className="h-full w-full object-cover" src={item.imageUrl}></img>
    </div>
  );
}

export default ImageFrame;
