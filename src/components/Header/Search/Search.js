import React from "react";

import "./Search.css";

class Search extends React.Component {
  state = {
    searchValue: ""
  }

  onInputChange = (event) => {
    let searchValue = event.target.value;
    this.setState({searchValue});
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.searchValue) {
      this.props.onSearchSubmit(this.state.searchValue);
    }
  }

  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input 
          value={this.state.searchValue}
          onChange={this.onInputChange}
          type="text"
          className="search__input" 
          placeholder="Search any movies"
        />
        <button type="submit" className="search__button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    )
  }
}

export default Search;