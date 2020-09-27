import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../../img/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { pageChange } from "./../../actions";
import "./navigation.scss";

function Navigation({ isHomePage, pageChange }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navigation"
    >
      <Link
        className={`${isHomePage ? "active" : ""} nav-link`}
        to="/"
        onClick={() => pageChange(true)}
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className={`${isHomePage ? "active" : ""} nav-link`}
            to="/"
            onClick={() => pageChange(true)}
          >
            Home
          </Link>
          <Link
            className={`${isHomePage ? "" : "active"} nav-link`}
            to="/about"
            onClick={() => pageChange(false)}
          >
            About us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({ navbarReducer: { isHomePage } }) => {
  return {
    isHomePage,
  };
};

const mapDispatchToProps = {
  pageChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
