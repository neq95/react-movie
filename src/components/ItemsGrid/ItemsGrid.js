import React from "react";

import "./ItemsGrid.css";

const ItemsGrid = (props) => {
  return <div className="items-grid">{props.children}</div>;
};

export default ItemsGrid;
