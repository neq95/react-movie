import React from "react";

import "./Footer.css";
import Container from "../UI/Container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <section className="footer__socials socials">
          <a className="socials__icon" href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="socials__icon" href="https://vk.com">
            <i className="fab fa-vk"></i>
          </a>
          <a className="socials__icon" href="https://youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
          <a className="socials__icon" href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </section>
        <section className="footer__info">
          <p className="footer__gratitude">This site was made with data from <a href="https://www.themoviedb.org">The Movie Database</a></p>
        </section>
      </Container>
    </footer>
  )
}

export default Footer;