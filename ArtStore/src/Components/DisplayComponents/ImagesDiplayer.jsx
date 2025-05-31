import React, { useState } from "react";
import Paints from "../../data/Storage";
import ImageFrame from "./ImageFrame";

function ImagesDiplayer() {
  const { ImagesToDisplay, SetImagesToDisplay } = useState(6);

  return (
    <>
      <h2>Explore</h2>
      <div className=" grid-cols-4 h-32">
        {Paints.slice(0, 6).map((item) => (
          <ImageFrame key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ImagesDiplayer;
