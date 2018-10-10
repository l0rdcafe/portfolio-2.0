import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import l0rdcafe from "../assets/l0rdcafe.jpg";

const NavWrapper = styled.div`
  width: 100%;
  min-height: 8vh;

  .main__banner__list {
    background-color: #3d9970;
    display: flex;
    width: 100%;
    height: 100%;

    a {
      font-size: 1.25rem;

      @media (max-width: 650px) {
        font-size: 0.75rem;
      }
    }
  }

  .main__banner__list__logo {
    display: block;
    margin: 0 1.5rem;
    margin-right: 5%;
    padding: 1% 0;
    height: 5vh;
    border-style: none;

    @media (max-width: 650px) {
      width: 30%;
      margin: 0;
      margin-top: 0.85rem;
      margin-left: 1rem;
      margin-right: 1rem;
      height: 3.5vh;
    }
  }

  .main__banner__list__item {
    flex: 1;
    color: #ffdc00;
    text-transform: uppercase;
    background-color: #3d9970;
    letter-spacing: 0.075rem;
    transition: all 0.3s;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 650px) {
      font-size: 0.25rem;
    }
  }

  .main__banner__list__item:hover {
    background-color: #5bbe91;
  }

  .sticky {
    position: fixed;
    top: 0;
    height: 9vh;
    z-index: 1;
    box-shadow: 0 0 8px #1f4d38;
  }
`;

const Nav = ({ sticky }) => (
  <NavWrapper>
    <nav
      className={`main__banner__list animated ${sticky ? "sticky" : ""}`}
      itemProp="breadcrumb"
      role="navigation"
      id={!sticky ? "nav" : ""}
    >
      <img
        className="main__banner__list__logo"
        src={l0rdcafe}
        alt="l0rdcafe logo"
        style={{ display: !sticky ? "none" : "inherit" }}
      />
      <Link to="/" href="/" className="main__banner__list__item">
        Home
      </Link>
      <Link to="/#blog" href="/#blog" className="main__banner__list__item">
        Blog
      </Link>
      <Link to="/#music" href="/#music" className="main__banner__list__item">
        Music
      </Link>
    </nav>
  </NavWrapper>
);

Nav.propTypes = {
  sticky: PropTypes.bool
};

Nav.defaultProps = {
  sticky: false
};

export default Nav;
