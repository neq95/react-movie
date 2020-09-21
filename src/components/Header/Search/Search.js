import React from "react";

import "./Search.css";

class Search extends React.Component {
  state = {
    searchValue: ""
  }

  timer = null;

  onInputChange = (event) => {
    clearTimeout(this.timer);

    let searchValue = event.target.value;
    this.setState({searchValue});

    this.timer = setTimeout(() => this.props.onSearch(searchValue), 2000);
  }

  render() {
    return (
      <div className="search">
        <input 
          value={this.state.searchValue}
          onChange={this.onInputChange}
          type="text"
          className="search__input" 
          placeholder="Search any movies"
        />
        <button className="search__button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    )
  }
}

export default Search;