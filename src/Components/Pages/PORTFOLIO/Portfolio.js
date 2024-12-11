import React, { useState } from "react";
import {
  Web_projects,
  all_projects,
  datascience_projects,
} from "./projects/All_projects.js";
import "./Portfolio.css";
import Navbar from "../NAVBAR/Navbar.js";
import Items from "./projects/Items.js";
const Portfolio = () => {
  let [value, updatevalue] = useState("all");
  let [data_value, update_data_value] = useState(all_projects);
  return (
    <div className="Portfolio">
      <div className="portfolio1">
        {/* <div className="about_navbar">
          <Navbar />
        </div> */}
        <div className="portfolio_section">
          <div className="portfolio_section1">
            <h1>Portfolio</h1>
            <div className="line1"></div>
          </div>
        </div>
        <div className="project_data">
          <ul className="list_items">
            <li
              onClick={() => {
                updatevalue("all");
                update_data_value(all_projects);
              }}
              className={value === "all" ? "colorchange" : ""}
            >
              {" "}
              All
            </li>
            <li
              onClick={() => {
                updatevalue("webdevelopment");
                update_data_value(Web_projects);
              }}
              className={value === "webdevelopment" ? "colorchange" : ""}
            >
              Web Development
            </li>
            <li
              onClick={() => {
                updatevalue("Datascience");
                update_data_value(datascience_projects);
              }}
              className={value === "Datascience" ? "colorchange" : ""}
            >
              {" "}
              Datascience
            </li>
          </ul>
        </div>
        <div className="projects">
          {data_value.map((data, id) => {
            return (
              <Items
                key={id}
                name={data.name}
                image={data.image}
                link={data.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
