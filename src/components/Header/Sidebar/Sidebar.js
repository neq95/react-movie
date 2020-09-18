import React from "react";
import {NavLink} from "react-router-dom";

import "./Sidebar.css";
import Logo from "../../UI/Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidebar = (props) => {
  let sidebarClass = props.show ? "sidebar open" : "sidebar close";
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.onCloseSidebar}/>
      <div className={sidebarClass}>
        <div className="sidebar__logo">
          <Logo />
        </div>
        <ul className="sidebar__links">
          <li className="sidebar__link-box">
            <NavLink 
              to="/" 
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Home
            </NavLink>
          </li>
          <li className="sidebar__link-box">
            <NavLink 
              to="/movies" 
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Movies
            </NavLink>
          </li>
          <li className="sidebar__link-box">
            <NavLink
              to="/serials" 
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Serials
            </NavLink>
          </li>
          <li className="sidebar__link-box">
            <NavLink 
              to="/watchlist" 
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Watchlist
            </NavLink>
          </li>
        </ul>
        <button className="sidebar__close" onClick={props.onCloseSidebar}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Sidebar;