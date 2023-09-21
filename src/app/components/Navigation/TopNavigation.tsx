import React from "react";
import "./style.css";

const TopNavigation = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        <span className="font-aquirebold">LIGA</span>
        <ul className="flex gap-5 font-aquirelight">
          <li className="">
            <p className="navlink relative">PBA</p>
          </li>
          <li>
            <p className="navlink relative">MPBL</p>
          </li>
          <li>
            <p className="navlink relative">NBL</p>
          </li>
          <li>
            <p className="navlink relative">PBA</p>
          </li>
        </ul>
      </div>
      {/* <div className="font-aquirelight">
        <Searchbar />
      </div> */}
    </div>
  );
};

export default TopNavigation;
