import React, { useState } from "react";
import "./Navbar1.css";
import About from "../ABOUT/About";
import Resume from "../RESUME/Resume";
import Portfolio from "../PORTFOLIO/Portfolio";
const Navbar1 = () => {
  let [nav_value, nav_update] = useState("About");
  return (
    <div className="navbar_main">
      <div className="navbar">
        <ul
          className="data"
          style={{ listStyleType: "none", padding: 0, margin: 0 }}
        >
          <li
            onClick={() => {
              nav_update("About");
            }}
            className={nav_value === "About" ? "display" : ""}
          >
            ABOUT
          </li>
          <li
            onClick={() => {
              nav_update("Resume");
            }}
            className={nav_value === "Resume" ? "display" : ""}
          >
            RESUME
          </li>
          <li
            onClick={() => {
              nav_update("portfolio");
            }}
            className={nav_value === "portfolio" ? "display" : ""}
          >
            PORTFOLIO
          </li>
        </ul>
      </div>
      <div className="navbar_secion1">
        <div className={nav_value === "About" ? "" : "displaynone"}>
          <About />
        </div>
        <div className={nav_value === "Resume" ? "" : "displaynone"}>
          <Resume />
        </div>
        <div className={nav_value === "portfolio" ? "" : "displaynone"}>
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
