import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="header-nav">
        <h1>
          <Link to="/">Star Wars</Link>
        </h1>
        <ul className="header-list">
          <li className="header-list-item">
            <Link to="/people">People</Link>
          </li>
          <li className="header-list-item">
            <Link to="/planet">Planet</Link>
          </li>
          <li className="header-list-item">
            <Link to="/starship">Starship</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
