import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div >
        <ul className = "header_container-item">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/fees">Fees</NavLink>
          </li>
          <li>
            <NavLink to="/example-use-memo">Example Use Memo</NavLink>
          </li>
          <li>
            <NavLink to="/example-use-callback">Example Use Callback</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
