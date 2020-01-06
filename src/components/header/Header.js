import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header id="fh5co-header" role="banner">
        <div className="container">
          <div className="header-inner">
            <h1>
              <Link to="/">Flew</Link>
            </h1>
            <nav role="navigation">
              <ul>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/feature">Feature</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
