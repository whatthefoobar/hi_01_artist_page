import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">
        <Link to="/">Artist name</Link>
      </h3>
      {/* <a href="#" class="toggle-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a> */}
      <a href="/" class="toggle-btn">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <div className="nav-links">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/store">Store</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
            {/* <a href="/contact.html">Contact</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
