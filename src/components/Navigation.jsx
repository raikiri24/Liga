import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar/Searchbar";
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        <span className="font-aquirebold">LIGA</span>
        <ul className="flex gap-5 font-aquirelight">
          <li className="">
            <NavLink className='navlink relative'>PBA</NavLink>
          </li>
          <li>
            <NavLink className='navlink relative'>MPBL</NavLink>
          </li>
          <li>
            <NavLink className='navlink relative'>NBL</NavLink>
          </li>
          <li>
            <NavLink className='navlink relative' >PBA</NavLink>
          </li>
        </ul>
      </div>
      <div className="font-aquirelight"><Searchbar/></div>
      <div className="font-aquirebold">ICON</div>
    </div>
  );
};

export default Navigation;
