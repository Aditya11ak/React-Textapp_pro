import React, { useState } from "react";
import PropTypes from "prop-types";

// this is to link the webpages to each other using the link keyword and using react router
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // dark mode problem solve
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function changeColor() {
    const isDark = text === "Dark Mode";

    document.body.style.color = isDark ? "White" : "#463f3a";
    document.body.style.backgroundColor = isDark ? "#282828" : "#bcb8b1";

    // this is the main implementation of the text area color changing which i was lacking to impement
    const textarea = document.querySelector("#theTextArea");

    if (textarea) {
      textarea.style.color = isDark ? "white" : "black";
      textarea.style.backgroundColor = isDark ? "black" : "white";
    }

    setText(isDark ? "Light Mode" : "Dark Mode");

    // this one line helped to keep the changes permenent
    localStorage.setItem("mode", isDark ? "dark" : "light");
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [text, setText] = useState("Light Mode");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h4 style={{ color: "white", marginRight: "10px" }}>
          {props.title}
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-dark btn-outline-light"
              onClick={changeColor}
              type="button"
            >
              Enable {text}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// it makes all the things to be entered compulsary..

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

// find out why this is not workoing?
//--> as it is removed in an update this will not work
// Navbar.defaultProps = {
//   title: "TextUtils"
// };
