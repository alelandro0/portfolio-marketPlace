  import React from 'react';
  import { NavLink } from "react-router-dom";

  export const Navbar = () => {
    return (
      <ul>
        <li><NavLink to='/'>PERFIL</NavLink></li>
        <li><NavLink to='/proyectos'>PROYECTOS</NavLink></li>
        <li><NavLink to='/conocimientos'>CONOCIMIENTOS</NavLink></li>
        <li><NavLink to='/MarketPlace'>MARKETPLACE</NavLink></li>
      </ul>
    );
  };
  

