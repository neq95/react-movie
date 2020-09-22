import React from "react";

import "./Error404.css";
import Container from "../UI/Container/Container";
import image from "../../assets/Error404.png";

const Error404 = () => {

  return (
    <div className="error404">
      <Container className="error404__container">
        <img className="error404__image" src={image} alt=""/>
        <div className="error404-content">
          <h3 className="error404-content__title">404</h3>
          <p className="error404-content__description">
            You didn't break the internet, but we can't find what you're looking for.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Error404;