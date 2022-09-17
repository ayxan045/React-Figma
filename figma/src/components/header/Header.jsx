import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <Link to="/">DOMAINFINDER</Link>
          </div>
          <ul className="d-flex list-unstyled">
            
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/developers">For Developers</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
