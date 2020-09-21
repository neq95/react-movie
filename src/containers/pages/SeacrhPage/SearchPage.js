import React from "react";

import "./SearchPage.css";
import Container from "../../../components/UI/Container/Container";
import SearchResults from "../../../components/SearchResults/SearchResults";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-page">
        <Container>
          <SearchResults />
        </Container>
      </div>
    )
  }
}

export default SearchPage;