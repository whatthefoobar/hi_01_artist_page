import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="Navbar">
      <h3 className="nav-logo">
        <Link to="/">Artist name</Link>
      </h3>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link className="nav-item" to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link className="nav-item" to="/store" onClick={() => setIsOpen(false)}>
          Store
        </Link>
        <Link
          className="nav-item"
          to="/contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
