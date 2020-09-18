import React from "react";
import {NavLink} from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <li className="navigation-item">
      <NavLink 
        className={`navigation-item__link ${props.className}`}
        to={props.href}
      >
        {props.label}
      </NavLink>
    </li>
  )
}

export default NavigationItem;