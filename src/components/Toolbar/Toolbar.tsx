import "./Toolbar.css";
import { NavLink, Outlet } from "react-router-dom";
import * as React from "react";

const Toolbar = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-container">
            <h1>
              <NavLink to="/" className="logo">
                Travelulu
              </NavLink>
            </h1>
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="assortment" className="nav-link">
                  Assortment
                </NavLink>
              </li>
              <li>
                <NavLink to="portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="contacts" className="nav-link">
                  Contacts
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </header>
    </>
  );
};

export default Toolbar;
