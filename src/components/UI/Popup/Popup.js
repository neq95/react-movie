import React from "react";

import "./Popup.css";
import Container from "../Container/Container";

const Popup = (props) => {
  console.log(props.show);
  let popupClass = props.show ? "popup open" : "popup close"
  return (
    <section className={popupClass}>
      <Container className="popup__container">
        {props.children}
        <button className="popup__close" onClick={props.onPopupClose}>
          <i className="fas fa-times"></i>
        </button>
      </Container>
    </section>
  )
}

export default Popup;