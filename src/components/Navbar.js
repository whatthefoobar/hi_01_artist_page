import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  // return (
  //   <nav className="navbar">
  //     <h3 className="logo">
  //       <Link to="/">Artist name</Link>
  //     </h3>

  //     <div className="toggle-btn" onClick={toggleMenu}>
  //       <i className="fa fa-bars" aria-hidden="true"></i>
  //     </div>
  //     <div className={`${activeMenu}? "nav-links active" : "nav-links"`}>
  //       <ul>
  //         <li className="nav-item">
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to="/store">Store</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to="/contact">Contact</Link>
  //           {/* <a href="/contact.html">Contact</a> */}
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
