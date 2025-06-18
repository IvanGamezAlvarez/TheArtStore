import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ImageFrame({ item, id }) {
  const imageFrame = useRef(null);

  useEffect(() => {

    const handleHover = () => {
      imageFrame.className = 
      backgroundSwicthColor = "Black";
      console.log("entramo mi gente");
    };
    imageFrame.current.addEventListener("mouseover", handleHover);
    return () => {
      imageFrame.current.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div ref={imageFrame} className="relative h-130 w-full bg-amber-50">
      <Link to={`/Paint/${id}`}>
        <div
          className="absolute h-full w-full  "
          // style={{ backgroundColor: backgroundSwicthColor }}
        >
          <h2 className=" absolute  text-3xl right-1/2 top-1/2 translate-1/2 text-center font-bold    text-amber-50  ">
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
