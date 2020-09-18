import React from "react";

import "./Header.css";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import Logo from "../UI/Logo/Logo";

class Header extends React.Component {
  state = {
    showSidebar: false
  }

  toggleShowSidebar = () => {
    this.setState((state) => ({showSidebar: !state.showSidebar}));
  }

  onOpenSidebar = () => {
    this.toggleShowSidebar();
  }

  onCloseSidebar = () => {
    this.toggleShowSidebar();
  }

  render() {
    let {showSidebar} = this.state;

    let sidebar = null;
    if(showSidebar) {
      sidebar = (
        <div className="sidebar">
          <Sidebar show={showSidebar} onCloseSidebar={this.onCloseSidebar}/>
        </div>
      )
    }

    return (
      <header className="header">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__search">
          <Search />
        </div>
        <nav className="header__nav">
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Serials</li>
          </ul>
        </nav>
        <div className="header__cart cart">
          <div className="cart__icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <span className="cart__quantity">0</span>
        </div>
        <div className="header__burger" onClick={this.onOpenSidebar}>
          <i className="fas fa-bars"></i>
        </div>
        {sidebar}
      </header>
    )
  }
}

export default Header;