import React from "react";
import {NavLink} from "react-router-dom";

import "./Sidebar.css";
import Logo from "../../UI/Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidebar = ({show, onSidebarLinkClick, onCloseSidebar}) => {
  let sidebarClass = show ? "sidebar open" : "sidebar closed";
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={onCloseSidebar}/>
      <div className={sidebarClass}>
        <div className="sidebar__logo">
          <Logo />
        </div>
        <ul className="sidebar__links">
          <li className="sidebar__link-box">
            <NavLink
              onClick={onSidebarLinkClick}
              to="/" 
              exact
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Home
            </NavLink>
          </li>
          <li className="sidebar__link-box">
            <NavLink 
              onClick={onSidebarLinkClick}
              to="/movies" 
              exact
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Movies
            </NavLink>
          </li>
          <li className="sidebar__link-box">
            <NavLink
              onClick={onSidebarLinkClick}
              to="/tv-shows"
              exact
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              TV Shows
            </NavLink>
          </li>
          <li className="sidebar__link-box">
            <NavLink 
              onClick={onSidebarLinkClick}
              to="/watchlist"
              exact
              className="sidebar__link"
              activeClassName="sidebar__link--active"
            >
              Watchlist
            </NavLink>
          </li>
        </ul>
        <button className="sidebar__close" onClick={onCloseSidebar}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Sidebar;