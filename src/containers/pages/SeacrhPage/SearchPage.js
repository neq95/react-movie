import React from "react";
import {connect} from "react-redux";

import "./SearchPage.css";
import Container from "../../../components/UI/Container/Container";
import SearchResults from "../../../components/SearchResults/SearchResults";
import * as actions from "../../../store/actions/actions";
import Spinner from "../../../components/UI/Spinner/Spinner";

class SearchPage extends React.Component {
  componentDidMount() {
    let searchValue = this.props.searchData.searchValue;

    //If there is no search value in store, we opened this page via url
    //Get query from url, store it and fetch data from api
    if(!searchValue) {
      let rawQuery = this.props.location.search.match(/\?query=(.*)$/)[1];
      let query = decodeURI(rawQuery);
      this.props.setSearchValue(query);

      searchValue = query;
    }

    this.props.searchRequest(searchValue);
  }

  componentDidUpdate(prevProps) {
    if(this.props.searchData.searchValue !== prevProps.searchData.searchValue) {
      this.props.searchRequest(this.props.searchData.searchValue);
    }
  }

  componentWillUnmount() {
    this.props.clearSearchData();
  }

  render() {
    let loading = this.props.searchData.loading;
    return (
      <div className="search-page">
        <Container>
          {loading ? <Spinner /> : <SearchResults searchData={this.props.searchData.searchResults}/>}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchData: state.searchData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchRequest: (query) => dispatch(actions.searchRequest(query)),
    clearSearchData: () => dispatch(actions.clearSearchData()),
    setSearchValue: (searchValue) => dispatch(actions.setSearchValue(searchValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);