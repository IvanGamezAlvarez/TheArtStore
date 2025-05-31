import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className=" flex-1/2   h-aurto py-5 px-10  ">
        <nav className="  text-amber-100 text-6xl font-bold   ">
          <ul>
            <li className=" block">
              <Link to={"/Catalog"}> Artistic styles</Link>
            </li>
            <li className=" block text-center text-9xl upper">
              <Link to={"/"}>The Art Store</Link>
            </li>
            <li className=" block text-right">
              <Link to={"/"}>Sorprise Me</Link>
            </li>
          </ul>
        </nav>
        <h2 className=" text-right text-white">Created by Ivan Gamez</h2>
      </header>
    </>
  );
}

export default NavBar;
