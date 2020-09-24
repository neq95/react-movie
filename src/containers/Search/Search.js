import React from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";

import "./Search.css";
import * as actions from "../../store/actions/actions";

class Search extends React.Component {
  state = {
    searchValue: ""
  }

  componentDidUpdate(prevProps) {
    if(prevProps.searchValue !== this.props.searchValue) {
      this.setState({searchValue: this.props.searchValue});
    }
  }

  onInputChange = (event) => {
    let searchValue = event.target.value;
    this.setState({searchValue});
  }

  _changeHistory() {
    this.props.history.push(`/search?query=${this.state.searchValue}`)
  }

  onSubmit = (event) => {
    event.preventDefault();
    let searchValue = this.state.searchValue;

    //Prevent dispatching empty query
    if(searchValue) {
      this.props.setSearchValue(searchValue);
      this._changeHistory();
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

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchData.searchValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchValue: (searchValue) => dispatch(actions.setSearchValue(searchValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));