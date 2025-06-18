import React from "react";
import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";

function ArtStyle() {
  const { id } = useParams();

  const PaintsToShow = Paints.filter((paint) => paint.artStyle === id);

  return (
    <>
      <h2 className=" text-amber-50 font-bold text-4xl text-center m-20">{id}</h2>
      <ImagesDiplayer Paints={PaintsToShow} />
    </>
  );
}

export default ArtStyle;
