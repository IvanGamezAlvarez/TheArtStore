import React, { useEffect, useState } from "react";

function HotSaleSign() {
  const [titlePosition, setTitlePosition] = useState(0);

  useEffect(() => {
    const scrollAnimation = () => {
      if (window.scrollY > 600 * 3) {
        setTitlePosition(300 * 2);
      } else if (window.scrollY > 250) {
        setTitlePosition((window.scrollY - 250) * 3);
      } else {
        setTitlePosition(0);
      }
    };

    window.addEventListener("scroll", scrollAnimation);

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);
  return (
    <h2
      className=" bg-black  text-amber-200  font-bold uppercase text-4xl"
      style={{ paddingLeft: titlePosition }}
    >
      Explore our Hot Sales
    </h2>
  );
}

export default HotSaleSign;
