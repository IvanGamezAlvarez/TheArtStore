import React from "react";

function ImageFrame({ item }) {
  return (
    <div className=" h-full w-fit">
      <img className="h-full w-fit" src={item.imageUrl}></img>
    </div>
  );
}

export default ImageFrame;
