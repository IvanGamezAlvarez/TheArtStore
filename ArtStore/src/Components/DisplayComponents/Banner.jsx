import React from "react";

function Banner() {
  return (
    <div className=" bg-amber-200 h-140 w-10/12 mx-auto  flex items-center justify-center">
      <div className=" bg-amber-50 h-10/12 w-1/2   border-8 border-black">
        <h1 className=" text-6xl font-bold uppercase m-10">
          Find the most sought-after pieces of art in{" "}
          <span className=" underline">history.</span>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
