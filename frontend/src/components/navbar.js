import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
