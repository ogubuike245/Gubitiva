import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="nav-header">
        <div className="nav-logo">
          <span>LOGO</span>
        </div>

        <nav className="nav-list">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#">BLOGS</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
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
