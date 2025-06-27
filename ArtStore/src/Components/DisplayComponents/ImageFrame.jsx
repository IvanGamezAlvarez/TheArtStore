import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function ImageFrame({ item, id }) {
  const [hover, setHover] = useState(false);
  // const imageFrame = useRef(null);

  // useEffect(() => {
  //   const node = imageFrame.current;
  //   if (!node) return;
  //   const handleHover = () => {
  //     setHover(true);
  //   };
  //   node.addEventListener("mouseover", handleHover);
  //   return () => {
  //     node.removeEventListener("mouseover", handleHover);
  //   };
  // }, []);

  return (
    <div
      className="relative h-130 w-full bg-amber-50"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Link to={`/Paint/${id}`}>
        {hover ? (
          <div className="absolute h-full w-full bg-slate-900/70 transition-all duration-300   ">
            <h2 className=" absolute  text-3xl right-1/2 top-1/2 translate-1/2 text-center font-bold    text-amber-50  ">
              {item.title}
            </h2>
          </div>
        ) : (
          <div className="absolute h-full w-full  transition-all duration-300 ">
            <h2 className=" absolute  text-3xl right-1/2 top-1/2 translate-1/2 text-center font-bold    text-amber-50 opacity-0 ">
              {item.title}
            </h2>
          </div>
        )}

        <img
          className="h-full w-full object-cover object-center"
          src={item.imageUrl}
        ></img>
      </Link>
    </div>
  );
}

export default ImageFrame;
