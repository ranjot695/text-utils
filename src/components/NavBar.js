import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="App">
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.link}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <div
                class={`form-check text-${
                  props.mode == "light" ? "dark" : "light"
                }`}
              >
                <input
                  class="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onClick={props.changeColor}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div> */}
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}

              <div
                class={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleButton}
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  enable dark mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "set title",
  link: "give link",
};
