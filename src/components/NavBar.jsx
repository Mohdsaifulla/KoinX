import React, { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleNavbar = () => {
    setActive(!active);
  };
  return (
    <div className="flex justify-between items-center shadow-2xl px-6">
      <img src="/images/Logo.svg" alt="Logo" />
      <ul className="justify-center items-center gap-6 font-semibold cursor-pointer hidden sm:flex">
        <li>
          <Link to="/crypto">Crypto Taxe</Link>
        </li>
        <li>
          <Link to="/tools">Fee Tools </Link>
        </li>
        <li>
          <Link to="/resource">Resource Center</Link>
        </li>
        <ThemeToggle />
        <button className="bg-blue-500 p-2 rounded-lg text-white">
         <Link to="/getStarted"> Get Started</Link>
        </button>
      </ul>
      <div className="flex sm:hidden">
        <MobileNav handleNavbar={handleNavbar} active={active} />
      </div>
    </div>
  );
};

export default NavBar;
