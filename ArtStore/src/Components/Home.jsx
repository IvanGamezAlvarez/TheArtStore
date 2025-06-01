import React from "react";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";
import Paints from "./../data/paintsData";
function Home() {
  return (
    <>
      <ImagesDiplayer Paints={Paints} />
    </>
  );
}

export default Home;
