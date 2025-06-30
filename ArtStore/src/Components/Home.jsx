import React, { useEffect, useState } from "react";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";
// import Paints from "./../data/paintsData";
import Banner from "./DisplayComponents/Banner";
import HotSaleSign from "./DisplayComponents/HotSaleSign";
import StylesDisplayer from "./DisplayComponents/StylesDisplayer";
import { getPaintsData } from "../firebase";
function Home() {
  const [paints, setPaints] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPaintsData();
      console.log(data);
      await setPaints(data);
    };

    getData();
  }, []);

  // const paintsToShow = paints.slice(0, 8);
  //const paintsToShowSecond = paints.slice(9, 17);

  return (
    <>
      <Banner />
      {/* <HotSaleSign /> */}
      <ImagesDiplayer Paints={paints} />
      <StylesDisplayer />
    </>
  );
}

export default Home;
