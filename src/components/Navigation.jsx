import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-evenly">
      <div className="flex justify-center items-center gap-6">
        <span className="font-aquirebold">LIGA</span>
        <ul className="flex gap-5 font-aquirelight">
          <li className="">
            <NavLink>PBA</NavLink>
          </li>
          <li>
            <NavLink>MPBL</NavLink>
          </li>
          <li>
            <NavLink>NBL</NavLink>
          </li>
          <li>
            <NavLink>PBA</NavLink>
          </li>
        </ul>
      </div>
      <div className="font-aquirelight"></div>
      <div className="font-aquirebold">ICON</div>
    </div>
  );
};

export default Navigation;
