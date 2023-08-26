import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav class="navbar border-bottom navbar-expand-lg bg-white navbar1">
      <div class="container-fluid mx-5 d-flex justify-content-between">
        <div class="">
          <img class="img-fluid logo" src="assets/NORDIC ROSE.png" alt="" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav1">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#blog">
                  BLOG
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-5" href="#about">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#links">
                  LINKS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-5" href="#projects">
                  PROJECTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
