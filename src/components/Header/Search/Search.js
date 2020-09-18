import React from "react";

import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" className="search__input" placeholder="Search any movies"/>
        <button className="search__button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    )
  }
}

export default Search;