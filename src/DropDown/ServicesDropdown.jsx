import React from "react";
import { Link } from "react-router-dom";

function ServicesDropdown({ closeMenu }) {
  return (
    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
      {/* DECORATION submenu */}
      <li className="dropdown-submenu">
        <a className="dropdown-item dropdown-toggle" href="#">
          🎉 Decoration
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link
              to="/decoration"
              className="dropdown-item"
              onClick={closeMenu}
            >
              Theme Decoration
            </Link>
          </li>
          <li>
            <Link
              to="/decoration"
              className="dropdown-item"
              onClick={closeMenu}
            >
              Balloon Decoration
            </Link>
          </li>
        </ul>
      </li>

      {/* GAMES submenu */}
      <li className="dropdown-submenu">
        <a className="dropdown-item dropdown-toggle position-relative" href="#">
          🎮 Games
          <span
            className="badge bg-warning text-dark ms-2"
            style={{ fontSize: "0.65rem" }}
          >
            Coming Soon
          </span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <span className="dropdown-item text-muted disabled">
              Category 1 Games
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Category 2 Games
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Category 3 Games
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
        </ul>
      </li>

      {/* SHORT EATS */}
      <li>
        <span className="dropdown-item text-muted disabled d-flex justify-content-between align-items-center">
          <span>🍽️ Short Eats & Chaats</span>
          <span
            className="badge bg-warning text-dark"
            style={{ fontSize: "0.65rem" }}
          >
            Coming Soon
          </span>
        </span>
      </li>

      {/* ENTERTAINMENT submenu */}
      <li className="dropdown-submenu">
        <a className="dropdown-item dropdown-toggle" href="#">
          🎭 Entertainment
          <span
            className="badge bg-warning text-dark ms-2"
            style={{ fontSize: "0.65rem" }}
          >
            Coming Soon
          </span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <span className="dropdown-item text-muted disabled">
              Face Painting
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Balloon Painting
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Pot Painting
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
        </ul>
      </li>

      {/* FUN ACTIVITIES submenu */}
      <li className="dropdown-submenu">
        <a className="dropdown-item dropdown-toggle" href="#">
          🎨 Fun Activities
          <span
            className="badge bg-warning text-dark ms-2"
            style={{ fontSize: "0.65rem" }}
          >
            Coming Soon
          </span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <span className="dropdown-item text-muted disabled">
              Sand Art
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Pottery
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Clay Modelling
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Art & Craft
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
          <li>
            <span className="dropdown-item text-muted disabled">
              Slime Making
              <small className="ms-2 text-warning">Coming Soon</small>
            </span>
          </li>
        </ul>
      </li>

      {/* PHOTOGRAPHY */}
      <li>
        <span className="dropdown-item text-muted disabled d-flex justify-content-between align-items-center">
          <span>📸 Photography – Photos & Videos</span>
          <span
            className="badge bg-warning text-dark"
            style={{ fontSize: "0.65rem" }}
          >
            Coming Soon
          </span>
        </span>
      </li>

      {/* SOUND & LIGHTS */}
      <li>
        <span className="dropdown-item text-muted disabled d-flex justify-content-between align-items-center">
          <span>🔊 Sound & Lights</span>
          <span
            className="badge bg-warning text-dark"
            style={{ fontSize: "0.65rem" }}
          >
            Coming Soon
          </span>
        </span>
      </li>

      <style>{`
        .dropdown-item.disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        
        .dropdown-submenu .dropdown-menu {
          top: 0;
          left: 100%;
          margin-top: -1px;
        }
      `}</style>
    </ul>
  );
}

export default ServicesDropdown;
