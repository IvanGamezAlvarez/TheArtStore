import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <header className=" flex-1/2   h-aurto py-5 px-10  ">
        <div className="  text-rose-600 text-6xl font-bold   ">
          <a className=" block">Artistic styles</a>
          <a className=" block text-center text-9xl upper">The Art Store</a>
          <a className=" block text-right">News</a>
        </div>
        <CartWidget />
        <h2 className=" text-right text-white">Created by Ivan Gamez</h2>
      </header>
    </>
  );
}

export default NavBar;
