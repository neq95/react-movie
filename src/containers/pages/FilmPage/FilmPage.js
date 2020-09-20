import React from "react";
import {connect} from "react-redux";

import "./FilmPage.css";
import Container from "../../../components/UI/Container/Container";
import MovieCard from "../../../components/MovieCard/MovieCard";
import * as actions from "../../../store/actions/actions";
import {WidthConsumer} from "../../../utils/Context/width-context";

class FilmPage extends React.Component {
  componentDidMount() {
    let id = this.props.location.pathname.match(/\d+?$/)[0];
    this.props.selectedMovieRequest(id);
  }

  componentWillUnmount() {
    this.props.removeSelectedMovie();
  }

  render() {
    return (
      <main className="film-page">
        <Container className="film-page__container">
          <WidthConsumer>
            {(width) => <MovieCard width={width} movie={this.props.selectedMovie} />}
          </WidthConsumer>
        </Container>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie.movie
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedMovieRequest: (id) => dispatch(actions.selectedMovieRequest(id)),
    removeSelectedMovie: () => dispatch(actions.removeSelectedMovie())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);