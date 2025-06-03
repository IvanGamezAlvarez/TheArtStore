import React from "react";
import ImagesDiplayer from "./DisplayComponents/ImagesDiplayer";
import Paints from "./../data/paintsData";
function Home() {

  const paintsToShow = Paints.slice(0,8)



  return (
    <>
      <ImagesDiplayer Paints={paintsToShow} />
    </>
  );
}

export default Home;
