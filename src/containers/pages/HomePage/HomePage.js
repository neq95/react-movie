import React from "react";
import { connect } from "react-redux";

import "./HomePage.css";
import Container from "../../../components/UI/Container/Container";
import * as actions from "../../../store/actions/actions";
import ItemsGrid from "../../../components/ItemsGrid/ItemsGrid";
import MoviePreview from "../../../components/MoviePreview/MoviePreview";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.moviesRequest({
      image: { type: "poster", width: this.props.width }
    });
  }

  render() {
    let renderMovies = this.props.movies.map((movie) => {
      return <MoviePreview width={this.props.width} movie={movie} />;
    });

    return (
      <main className="home-page">
        <Container className="home__container">
          <h1 className="home-page__title">Popular Movies</h1>
          <ItemsGrid>{renderMovies}</ItemsGrid>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesData.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moviesRequest: (config) => dispatch(actions.moviesRequest(config))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
