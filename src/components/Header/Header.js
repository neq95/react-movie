import React from "react";

import "./Header.css";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import Logo from "../UI/Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";

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

    return (
      <header className="header">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__search">
          <Search />
        </div>
        <nav className="header__nav nav">
          <ul className="nav__items">
            <NavigationItem 
              href="/"
              label="Home"
            />
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
        <Sidebar show={showSidebar} onCloseSidebar={this.onCloseSidebar}/>
      </header>
    )
  }
}

export default Header;