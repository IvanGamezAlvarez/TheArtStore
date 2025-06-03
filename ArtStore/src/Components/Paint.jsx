import React from "react";

import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";

function Paint() {
  const { id } = useParams();
  console.log(Paints);

  const PaintToShow = Paints.find((paint) => paint.id === Number(id));

  return (
    <>
      <div className=" flex justify-center gap-5">
      <img src={PaintToShow.imageUrl} alt={PaintToShow.title} className="   h-96" />
        <div className=" text-amber-50">
          <h2 className=" text-3xl font-bold">{PaintToShow.title}</h2>
          <h3>Description:</h3>
          <p>{PaintToShow.description}</p>
          <h2>Value: {PaintToShow.value}</h2>
        </div>
      </div>
    </>
  );
}

export default Paint;
