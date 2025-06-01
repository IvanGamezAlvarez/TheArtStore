import React from "react";

import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";

function Paint() {
  const { id } = useParams();
  console.log(Paints);

  const PaintToShow = Paints.find((paint) => paint.id === Number(id));

  return (
    <>
      <h2>{PaintToShow.title}</h2>
      <img src={PaintToShow.imageUrl} className="  h-96" />
      <h3>Description:</h3>
      <p>{PaintToShow.description}</p>
      <h2>Value: {PaintToShow.value}</h2>
    </>
  );
}

export default Paint;
