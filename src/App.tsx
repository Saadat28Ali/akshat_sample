// Module imports -------------------------------

import { Outlet } from "react-router-dom";

// Component imports ----------------------------

import Navbar from "./components/Navbar/Navbar";

// Interface and enum imports -------------------

import { NavLinkInter } from "./components/Navbar/Navbar";

// ----------------------------------------------

export default function App(
  {
    navlinks
  }:
  {
    navlinks: Array<NavLinkInter>
  }
) {
  return (
    <div
    className="
    App
    ">
      <Navbar links={navlinks}/>
      {/* <div className="Spacer min-h-5"></div> */}
      <Outlet />
    </div>
  );
}