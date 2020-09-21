import React from "react";
import {connect} from "react-redux";

import "./SearchPage.css";
import Container from "../../../components/UI/Container/Container";
import SearchResults from "../../../components/SearchResults/SearchResults";

class SearchPage extends React.Component {
  render() {
    console.log(this.props.searchData);
    return (
      <div className="search-page">
        <Container>
          <SearchResults />
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

export default connect(mapStateToProps)(SearchPage);