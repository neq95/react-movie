import React from "react";
import {connect} from "react-redux";

import "./HomePage.css";
import Container from "../../../components/UI/Container/Container";
import * as actions from "../../../store/actions/actions";
import ItemsGrid from "../../../components/ItemsGrid/ItemsGrid";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.moviesRequest();
  }

  render() {
    return (
      <main className="home-page">
        <Container className="home__container">
          <h1 className="home-page__title">Popular Movies</h1>
          <ItemsGrid movies={this.props.movies}/>
        </Container>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesData.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moviesRequest: () => dispatch(actions.moviesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);