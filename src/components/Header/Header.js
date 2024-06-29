import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="z-50 fixed w-full flex justify-between items-center bg-gray-600">
      <div className="ml-2">
        <a className="text-xl cursor-pointer no-underline" href="#home">
          <h4 className="border-4 border-double border-black p-2 text-black m-1 bg-white rounded-lg">
            K<span className="font-bold">M</span>
          </h4>
        </a>
      </div>
      <ul
        className={`list-none p-0 m-0 ${
          menuOpen ? "block" : "hidden"
        } md:flex md:flex-row flex-col absolute md:static top-0 right-0 md:top-auto md:right-auto bg-red-600 md:bg-transparent h-[100vh] md:h-auto pt-10 md:pt-0 w-[120px] md:w-auto text-center md:text-left text-white`}
      >
        <li className="m-2">
          <a
            className="no-underline text-black md:text-white text-lg hover:text-white"
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black md:text-white text-lg hover:text-white"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black md:text-white text-lg hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black md:text-white text-lg hover:text-white"
            href="#services"
          >
            Services
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black md:text-white text-lg hover:text-white"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li className="absolute top-0 right-0 m-5 cursor-pointer md:hidden">
          <RxCross2 onClick={closeMenu} />
        </li>
      </ul>
      {menuOpen ? (
        <></>
      ) : (
        <RiMenuFill className="cursor-pointer m-5 md:hidden text-white" onClick={openMenu} />
      )}
    </div>
  );
};

export default Header;
