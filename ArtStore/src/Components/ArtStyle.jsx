import React from "react";
import { useParams } from "react-router-dom";
import Paints from "../data/paintsData";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";

function ArtStyle() {
  const { id } = useParams();

  const PaintsToShow = Paints.filter((paint) => paint.artStyle === id);

  return (
    <>
      <ImagesDiplayer Paints={PaintsToShow} />
    </>
  );
}

export default ArtStyle;
