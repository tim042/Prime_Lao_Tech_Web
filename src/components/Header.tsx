import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/" style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: location.pathname === "/about" ? "underline" : "none" }}>About</Link>
        <Link to="/contact" style={{ textDecoration: location.pathname === "/contact" ? "underline" : "none" }}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
