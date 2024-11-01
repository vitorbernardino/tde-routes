import { NavLink } from 'react-router-dom';
import '../styles/header.css'; 

function Header() {
  return (
    <header className="header">
      <h1>logo</h1>
        <nav className="navbar">
        <NavLink to="/" className="nav-link">
            Home
        </NavLink>
        <NavLink to="/about" className="nav-link" >
            About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
            Contact
        </NavLink>
        </nav>
    </header>
  );
}

export default Header;