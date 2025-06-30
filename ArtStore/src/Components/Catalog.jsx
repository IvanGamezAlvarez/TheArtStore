import React, { useEffect, useState } from "react";
import CategoryFrame from "./DisplayComponents/CategoryFrame";
// import artStylesData from "../data/artStylesData";
import ArtStyle from "./ArtStyle";
import { getArtSylesData } from "../firebase";

function Catalog() {
  const [artStyles, setArtStyles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getArtSylesData();
      console.log(data);
      await setArtStyles(data);
    };

    getData();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-5 gap-2 mx-25">
        {artStyles.map((item) => (
          <CategoryFrame key={item.id} item={item} id={item.name} />
        ))}
      </div>
    </>
  );
}

export default Catalog;
