import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-2xl font-bold text-black underline">Shopi</h1>
      <li><NavLink to='/' className='text-black font-bold text-2xl'>Inicio</NavLink></li>
    </header>
  );
};

export default Header;
