import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
const MobileNav = ({ handleNavbar, active }) => {
  return (
    <>
      {active ? (
        <div>
          <ul className="flex  sm:hidden flex-col justify-start items-start gap-6 font-semibold cursor-pointer absolute top-0 right-0 p-4 rounded-l-2xl shadow-xl backdrop-blur-lg">
            <button
              onClick={handleNavbar}
              className="flex justify-between items-center gap-4"
            >
              <IoCloseSharp className="text-2xl font-semibold hover:scale-110" />
            </button>
            <li className="flex justify-center items-center gap-2">
              Theme:
              <ThemeToggle />
            </li>
            <li>
              <Link to="/crypto">Crypto Taxe</Link>
            </li>
            <li>
              <Link to="/tools">Fee Tools </Link>
            </li>
            <li>
              <Link to="/resource">Resource Center</Link>
            </li>
            <button className="bg-blue-500 p-2 rounded-lg text-white">
              <Link to="/getStarted"> Get Started</Link>
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
