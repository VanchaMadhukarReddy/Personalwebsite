import React from "react";
import "./Items.css";
const Items = (props) => {
  return (
    <div className="item_data">
      <div className="items">
        <div className="items_part1">
          <a href={props.link} target="_blank">
            <img src={props.image} />
          </a>
        </div>
        <h4 style={{ margin: "0px", padding: "0px" }}>{props.name}</h4>
      </div>
    </div>
  );
};

export default Items;
