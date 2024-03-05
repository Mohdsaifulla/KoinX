import React, { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleNavbar = () => {
    setActive(!active);
  };
  return (
    <div className="flex justify-between items-center shadow-2xl px-6">
      <img src="/images/Logo.svg" alt="Logo" />
      <ul className="justify-center items-center gap-6 font-semibold cursor-pointer hidden sm:flex">
        <li>Crypto Taxe</li>
        <li>Fee Tools</li>
        <li>Resource Center</li>
        <ThemeToggle />
        <button className="bg-blue-500 p-2 rounded-lg text-white">
          Get Started
        </button>
      </ul>
      <div className="flex sm:hidden">
        <MobileNav handleNavbar={handleNavbar} active={active} />
      </div>
    </div>
  );
};

export default NavBar;
