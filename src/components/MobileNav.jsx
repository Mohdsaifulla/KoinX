import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";
const MobileNav = ({ handleNavbar, active }) => {
  return (
    <>
      {active ? (
        <div>
          <ul className="flex  sm:hidden flex-col justify-start items-start gap-6 font-semibold cursor-pointer absolute top-0 right-0 p-4 rounded-l-2xl shadow-xl backdrop-blur-lg">
            <button onClick={handleNavbar} className="flex justify-between items-center gap-4">
              <IoCloseSharp className="text-2xl font-semibold hover:scale-110" />
              <ThemeToggle/>
            </button>
            <li>Crypto Taxe</li>
            <li>Fee Tools</li>
            <li>Resource Center</li>
            <button className="bg-blue-500 p-2 rounded-lg text-white">
              Get Started
            </button>
          </ul>
        </div>
      ) : (
        <button onClick={handleNavbar} className="cursor-pointer">
          <GiHamburgerMenu className="text-xl font-semibold hover:scale-110" />
        </button>
      )}
    </>
  );
};

export default MobileNav;
