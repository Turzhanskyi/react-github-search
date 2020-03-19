import React from "react";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Github Search</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/" className="nav-link">
          Головна
        </a>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/about" className="nav-link">
          Інформація
        </a>
      </li>
    </ul>
  </nav>
);
