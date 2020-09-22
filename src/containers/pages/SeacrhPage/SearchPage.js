import React from "react";
import {connect} from "react-redux";

import "./SearchPage.css";
import Container from "../../../components/UI/Container/Container";
import SearchResults from "../../../components/SearchResults/SearchResults";
import * as actions from "../../../store/actions/actions";

class SearchPage extends React.Component {
  componentDidMount() {
    //get search params from url and dispatch request method
    let rawQuery = this.props.location.search.match(/\?query=(.*)$/)[1];
    let query = decodeURI(rawQuery);
    this.props.searchRequest(query);
  }

  componentDidUpdate(prevProps) {
    if(this.props.searchData === prevProps.searchData) {
      let rawQuery = this.props.location.search.match(/\?query=(.*)$/)[1];
      let query = decodeURI(rawQuery);
      this.props.searchRequest(query);
    }
  }

  render() {
    return (
      <div className="search-page">
        <Container>
          <SearchResults searchData={this.props.searchData}/>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchData: state.searchData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchRequest: (query) => dispatch(actions.searchRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);