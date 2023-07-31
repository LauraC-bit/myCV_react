import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project1</li>
            </NavLink>
            <NavLink
              to="/project2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project2</li>
            </NavLink>
            <NavLink
              to="/project3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project3</li>
            </NavLink>
            <NavLink
              to="/project4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project4</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
