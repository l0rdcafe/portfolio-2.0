import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  .footer {
    width: 100%;
    font-size: 1rem;
    background-color: #111;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;

    h4 {
      color: #fff;
      font-size: 1.25rem;
      letter-spacing: 0.025rem;
      margin: 0;

      @media (max-width: 650px) {
        font-size: 1rem;
      }
    }
  }

  .footer__body {
    width: 100%;
    height: 100%;
    padding: 0.5% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer__social {
    width: 26%;
    list-style: none;
    display: flex;
    margin: 0;
    padding-top: 2%;
    padding-bottom: 0.5%;

    @media (max-width: 650px) {
      width: 60%;
    }
  }

  .social__item {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    color: #fff;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <footer className="footer">
      <div className="footer__body">
        <h4>
          Made by{" "}
          <span role="img" aria-label="crown emoji">
            👑
          </span>{" "}
          l0rdcafe{" "}
          <span role="img" aria-label="crown emoji">
            👑
          </span>
        </h4>
        <nav className="footer__social">
          <a className="social__item" href="mailto:me@l0rdcafe.com" aria-label="Email l0rdcafe">
            <i className="far fa-envelope fa-lg" />
          </a>
          <a className="social__item" href="https://github.com/l0rdcafe/" aria-label="l0rdcafe's Github Profile">
            <i className="fab fa-github fa-lg" />
          </a>
          <a
            className="social__item"
            href="https://soundcloud.com/the-lords-blueprints"
            aria-label="l0rdcafe's Soundcloud Profile"
          >
            <i className="fab fa-soundcloud fa-lg" />
          </a>
          <a className="social__item" href="https://twitter.com/l0rdcafe" aria-label="l0rdcafe's Twitter Profile">
            <i className="fab fa-twitter fa-lg" />
          </a>
        </nav>
      </div>
    </footer>
  </FooterWrapper>
);

export default Footer;
