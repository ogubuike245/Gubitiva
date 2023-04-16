import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="nav-header">
        <div className="nav-logo">
          <Link to="/">
            <span>GUBITIVA</span>
          </Link>
        </div>

        <nav className="nav-list">
          <ul>
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
        </nav>

        <div className="nav-cta">
          <button className="btn secondary">LOGIN</button>
          <button className="btn primary">SIGN UP</button>
        </div>

        <div className="nav-icons">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
      </header>
    </>
  );
};

export default Navbar;
