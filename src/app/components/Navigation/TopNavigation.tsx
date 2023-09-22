import React from "react";
import Link from "next/link";
import "./style.css";

const TopNavigation = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        <span className="text-2xl p-2">
          <Link href="/" className="navlink relative">
            Liga
          </Link>
        </span>
        <ul className="flex gap-5 font-aquirelight">
          <li className="py-2">
            <Link href="/NBA" className="navlink relative">
              NBA
            </Link>
          </li>
          <li className="py-2">
            <Link href="/MPBL" className="navlink relative">
              MPBL
            </Link>
          </li>
          <li className="py-2">
            <Link href="/NBL" className="navlink relative">
              NBL
            </Link>
          </li>
          <li className="py-2">
            <Link href="/PBA" className="navlink relative">
              PBA
            </Link>
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
