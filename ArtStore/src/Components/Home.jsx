import React from "react";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";
import Paints from "./../data/paintsData";
import Banner from "./DisplayComponents/Banner";
import HotSaleSign from "./DisplayComponents/HotSaleSign";
import StylesDisplayer from "./DisplayComponents/StylesDisplayer";
function Home() {
  const paintsToShow = Paints.slice(0, 8);
  const paintsToShowSecond = Paints.slice(9,17) 

  return (
    <>
      <Banner />
    
          {/* <HotSaleSign /> */}
      <ImagesDiplayer Paints={paintsToShow} />
        <ImagesDiplayer Paints={paintsToShowSecond} />
      <StylesDisplayer />
    </>
  );
}

export default Home;
