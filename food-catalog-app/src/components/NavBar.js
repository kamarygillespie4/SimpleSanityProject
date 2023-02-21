import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="">
      <NavLink to="/">
        <p className="">😋Yummy Food's</p>
      </NavLink>
      <div className="">
        <ul className="">
          <li>
            <NavLink to="/" exact className="" activeClassName="">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/foods" className="" activeClassName="">
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="" activeClassName="">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
