import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <Link to="/">
          <span>GUBITIVA</span>
        </Link>
      </div>

      <nav className={`${showNav ? "nav-list" : "  show-desktop"}`}>
        <ul onClick={() => setShowNav(false)}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="#">BLOGS</a>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>

        <div className="nav-cta">
          <button className="btn secondary" onClick={handleClick}>
            LOGIN
          </button>
          <button className="btn primary" onClick={handleClick}>
            SIGN UP
          </button>
        </div>
      </nav>

      <div className="nav-icons">
        <button className="barIcon" onClick={handleClick}>
          {showNav ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
