import React from "react";
import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";

function ArtStyle() {
  const { id } = useParams();
  console.log(id);

  const PaintsToShow = Paints.filter((paint) => paint.artStyle === id);
  console.log(PaintsToShow);

  return (
    <>
      <ImagesDiplayer Paints={PaintsToShow} />
    </>
  );
}

export default ArtStyle;
