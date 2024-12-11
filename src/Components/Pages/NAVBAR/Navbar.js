import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  let [nav_value, nav_update] = useState("About");
  return (
    <div className="navbar">
      <ul
        className="data"
        style={{ listStyleType: "none", padding: 0, margin: 0 }}
      >
        <li
          onClick={() => {
            nav_update("About");
          }}
        >
          ABOUT
        </li>
        <li
          onClick={() => {
            nav_update("Resume");
          }}
        >
          RESUME
        </li>
        <li
          onClick={() => {
            nav_update("portfolio");
          }}
        >
          PORTFOLIO
        </li>
        {/* <li>CONTACT</li> */}
      </ul>
    </div>
  );
};
export default Navbar;
