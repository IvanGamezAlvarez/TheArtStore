import React, { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import paints from "../data/paintsData";

function NavBar() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setNavScrolled(true);
      } else if (window.scrollY < 1) {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topNav = (
    <>
      <header
        className={
          " bg-neutral-900 sticky top-0 flex-1/2  h-80 py-5 px-10 transition-all duration-300 ease-in-out z-50"
        }
      >
        <nav className="  text-amber-100 text-6xl font-bold   ">
          <ul className="transition-all duration-300">
            <li className=" block hover:text-amber-50">
              <Link to={"/Catalog "}> Artistic styles</Link>
            </li>
            <li className=" block text-center text-9xl upper transition-transform duration-300 hover:text-amber-50">
              <Link to={"/"}>The Art Store</Link>
            </li>
            <li className=" block text-right hover:text-amber-50 ">
              <Link to={`/}`}>Surprise Me</Link>
            </li>
          </ul>
        </nav>
        <h2 className=" text-right text-white opacity-100 transition-all">
          Created by Ivan Gamez
        </h2>
      </header>
    </>
  );

  const downNav = (
    <>
      <header
        className={
          " bg-gray-200 sticky top-0 flex-1/2 h-16 py-5 px-10 transition-all duration-300 ease-in-out z-50"
        }
      >
        <nav className=" text-neutral-800 text-2xl font-bold   ">
          <ul className="flex justify-around transition-all duration-300">
            <li className=" block">
              <Link to={"/Catalog"}> Artistic styles</Link>
            </li>
            <li className=" block text-center text-2xl upper transition-transform duration-300">
              <Link to={"/"}>The Art Store</Link>
            </li>
            <li className=" block text-right">
              <Link to={"/"}>Surprise Me</Link>
            </li>
          </ul>
        </nav>
        <h2 className=" text-right text-white opacity-0 transition-all duration-300 delay-300">
          Created by Ivan Gamez
        </h2>
      </header>
    </>
  );

  return navScrolled ? downNav : topNav;
}

export default NavBar;
