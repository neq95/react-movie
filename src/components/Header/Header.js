import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import Search from "../../containers/Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import Logo from "../UI/Logo/Logo";
import Container from "../UI/Container/Container";

class Header extends React.Component {
  state = {
    showSidebar: false
  }

  toggleShowSidebar = () => {
    this.setState((state) => ({showSidebar: !state.showSidebar}));
    document.body.classList.toggle("open");
  }

  onOpenSidebar = () => {
    this.toggleShowSidebar();
  }

  onCloseSidebar = () => {
    this.toggleShowSidebar();
  }

  onSidebarLinkClick = () => {
    this.onCloseSidebar();
  }

  render() {
    let {showSidebar} = this.state;

    return (
      <header className="header">
        <Container className="header__container">
          <div className="header__logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="header__search">
            <Search onSearchSubmit={this.props.onSearchSubmit} searchValue={this.props.searchValue} />
          </div>
          <nav className="header__nav nav">
            <ul className="nav__items">
              <li className="nav__item">
                <NavLink to="/movies" className="nav__link">
                  Movies
                </NavLink>
              </li>
              {/* <li className="nav__item">
                <NavLink to="/tv-shows" className="nav__link">
                  TV Shows
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/watchlist" className="nav__link">
                  Watchlist
                </NavLink>
              </li> */}
            </ul>
          </nav>
          <div className="header__profile profile">
            <div className="profile__not-auth">
              <div className="profile__icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="profile__box">
                <button className="profile__button profile__button--log-in">Log in</button>
                <button className="profile__button profile__button--sign-up">Sign up</button>
              </div>
            </div>
          </div>
          <div className="header__burger burger">
            <button className="burger__button" onClick={this.onOpenSidebar}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <Sidebar 
            show={showSidebar} 
            onSidebarLinkClick={this.onSidebarLinkClick} 
            onCloseSidebar={this.onCloseSidebar}/>
        </Container>
      </header>
    )
  }
}

export default Header;