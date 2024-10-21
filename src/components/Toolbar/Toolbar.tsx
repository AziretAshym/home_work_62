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
                <NavLink to="/"
                         className={({ isActive, isTransitioning }) =>
                           [
                             isActive ? "active" : "",
                             isTransitioning ? "transitioning" : "",
                           ].join(" ")
                         }
                           style={({ isActive, isTransitioning }) => {
                           return {
                             fontWeight: isActive ? "bold" : "",
                             viewTransitionName: isTransitioning ? "slide" : "",
                             display: "block",
                             fontSize: "20px",
                             color: "#af9aee",
                             textDecoration: isActive ? "underline" : "none"
                           };
                         }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="assortment"
                         className={({ isActive, isTransitioning }) =>
                           [
                             isActive ? "active" : "",
                             isTransitioning ? "transitioning" : "",
                           ].join(" ")
                         }
                         style={({ isActive, isTransitioning }) => {
                           return {
                             fontWeight: isActive ? "bold" : "",
                             viewTransitionName: isTransitioning ? "slide" : "",
                             display: "block",
                             fontSize: "20px",
                             color: "#af9aee",
                             textDecoration: isActive ? "underline" : "none"
                           };
                         }}
                >
                  Assortment
                </NavLink>
              </li>
              <li>
                <NavLink to="portfolio"
                         className={({ isActive, isTransitioning }) =>
                           [
                             isActive ? "active" : "",
                             isTransitioning ? "transitioning" : "",
                           ].join(" ")
                         }
                         style={({ isActive, isTransitioning }) => {
                           return {
                             fontWeight: isActive ? "bold" : "",
                             viewTransitionName: isTransitioning ? "slide" : "",
                             display: "block",
                             fontSize: "20px",
                             color: "#af9aee",
                             textDecoration: isActive ? "underline" : "none"
                           };
                         }}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="contacts"
                         className={({ isActive, isTransitioning }) =>
                           [
                             isActive ? "active" : "",
                             isTransitioning ? "transitioning" : "",
                           ].join(" ")
                         }
                         style={({ isActive, isTransitioning }) => {
                           return {
                             fontWeight: isActive ? "bold" : "",
                             viewTransitionName: isTransitioning ? "slide" : "",
                             display: "block",
                             fontSize: "20px",
                             color: "#af9aee",
                             textDecoration: isActive ? "underline" : "none"
                           };
                         }}
                >
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
