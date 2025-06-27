import React from "react";
import CategoryFrame from "./DisplayComponents/CategoryFrame";
import artStylesData from "../data/artStylesData";
import ArtStyle from "./ArtStyle";

function Catalog() {
  return (
    <>
      <div className=" grid grid-cols-5 gap-2">
        {artStylesData.map((item) => (
          <CategoryFrame key={item.id} item={item} id={item.name} />
        ))}
      </div>
    </>
  );
}

export default Catalog;
