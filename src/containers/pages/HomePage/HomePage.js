import React from "react";

import "./HomePage.css";
import Container from "../../../components/UI/Container/Container";
import * as actions from "../../../store/actions/actions";

class HomePage extends React.Component {
  componentDidMount() {
    actions.addMovies();
  }

  render() {
    return (
      <main className="home-page">
        <Container className="home__container">
          <div>HomePage</div>
        </Container>
      </main>
    )
  }
}

export default HomePage;