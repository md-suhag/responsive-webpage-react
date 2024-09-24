import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#1E1E1E]  text-white">
      <nav className="flex justify-between items-center container mx-auto p-4">
        <Link to="/">
          <strong>Responsive Design</strong>
        </Link>
        <div
          className={`fixed z-50 top-0 ${
            menuOpen ? "left-0" : "-left-full"
          } bottom-0 min-w-[250px] bg-[#141414] md:bg-transparent md:static transition-all duration-300 `}
        >
          <ul className="mt-5 ml-5 md:m-0 flex flex-col gap-5 md:flex-row">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <span className="md:hidden absolute top-5 right-5 cursor-pointer s">
            <CgClose className="size-5" onClick={() => setMenuOpen(false)} />
          </span>
        </div>

        <span className=" md:hidden cursor-pointer ">
          <FaBars className="size-5" onClick={() => setMenuOpen(true)} />
        </span>

        <div
          className={`fixed inset-0 bg-black bg-opacity-10 transition-all duration-1000 z-0 md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </nav>
    </header>
  );
};

export default Navbar;
