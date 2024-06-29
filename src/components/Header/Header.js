// import React from "react";

// const Header = () => {
//   return (
//     <div className=" z-50 fixed w-full flex justify-between items-center bg-gray-300">
//       <div className="ml-2">
//         <a className="text-xl cursor-pointer no-underline" href="#home">
//           <h4 className="border-4 border-double border-black p-2 text-black m-1 bg-white rounded-lg">
//             K<span className="font-bold">M</span>
//           </h4>
//         </a>
//       </div>
//       <ul className="flex list-none p-0 m-0">
//         <li className="m-2">
//           <a className="no-underline text-black text-lg hover:text-red-500" href="#home">
//             Home
//           </a>
//         </li>
//         <li className="m-2">
//           <a className="no-underline text-black text-lg hover:text-red-500" href="#about">
//             About
//           </a>
//         </li>
//         <li className="m-2">
//           <a className="no-underline text-black text-lg hover:text-red-500" href="#projects">
//             Projects
//           </a>
//         </li>
//         <li className="m-2">
//           <a className="no-underline text-black text-lg hover:text-red-500" href="#services">
//             Services
//           </a>
//         </li>
//         <li className="m-2">
//           <a className="no-underline text-black text-lg hover:text-red-500" href="#contact">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { RiCloseLargeLine, RiMenuFill } from "react-icons/ri";
// import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="z-50 fixed w-full flex justify-between items-center bg-gray-300">
      <div className="ml-2">
        <a className="text-xl cursor-pointer no-underline" href="#home">
          <h4 className="border-4 border-double border-black p-2 text-black m-1 bg-white rounded-lg">
            K<span className="font-bold">M</span>
          </h4>
        </a>
      </div>
      <ul
        // className={`flex list-none p-0 m-0 ${
        //   menuOpen ? "block" : "hidden"
        // } md:flex flex-col absolute top-0 right-0 bg-red-600 h-[100vh] pt-10 w-[120px] text-center text-white`}
      >
        <li className="m-2">
          <a
            className="no-underline text-black text-lg hover:text-white"
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black text-lg hover:text-white"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black text-lg hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black text-lg hover:text-white"
            href="#services"
          >
            Services
          </a>
        </li>
        <li className="m-2">
          <a
            className="no-underline text-black text-lg hover:text-white"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li className=" absolute top-0 right-0 m-5 md:hidden cursor-pointer">
          <RiCloseLargeLine onClick={closeMenu} />
        </li>
      </ul>
      {/* <i className="fa-solid fa-bars fas cursor-pointer md:hidden" onClick={openMenu}></i> */}
      {menuOpen ? (
        <></>
      ) : (
        <RiMenuFill className="cursor-pointer m-5" onClick={openMenu} />
      )}
    </div>
  );
};

export default Header;
