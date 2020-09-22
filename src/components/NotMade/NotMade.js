import React from "react";

import "./NotMade.css";
import image_big from "../../assets/NotMade.png";
import image_small from "../../assets/NotMade_mobile.png";
import Container from "../UI/Container/Container";

const NotMade = ({width}) => {
  let image = null;

  switch(width) {
    case "small":
      image = image_small;
      break;
    case "medium":
    case "big":
      image = image_big;
      break;
    default:
      image = null;
      break;
  }

  console.log(width);

  return (
    <div className="not-made">
      <Container className="not-made__container">
        <p className="not-made__description">
          Sorry, I didn't make this page yet =)
        </p>
        <img src={image} alt="glitch_image"/>
      </Container>
    </div>
  )
}

export default NotMade;