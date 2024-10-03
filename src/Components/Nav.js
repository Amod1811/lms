import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      {/* Header START */}
      <header className="navbar-light navbar-sticky header-static">
        {/* Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid px-3 px-xl-5">
            {/* Logo START */}
            <Link className="navbar-brand" to="/">
              <img className="light-mode-item logo navbar-brand-item" src="assets/images/logo1newbg.png" alt="logo" />
            </Link>
            {/* Logo END */}

            {/* Responsive navbar toggler */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Main navbar START */}
            <div className="collapse navbar-collapse w-100" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Nav item 1: Home */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>

                {/* Nav item 2: Courses Dropdown */}
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/Course">Courses</Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Networking</a>
                      <ul className="dropdown-menu dropdown-menu-start">
                        <li><a className="dropdown-item" href="#">Hardware</a></li>
                        <li><a className="dropdown-item" href="#">AWS</a></li>
                        <li><a className="dropdown-item" href="#">Linux (CCNA)</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Front-end</a>
                      <ul className="dropdown-menu dropdown-menu-start">
                        <li><a className="dropdown-item" href="#">HTML</a></li>
                        <li><a className="dropdown-item" href="#">React</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Back-end</a>
                      <ul className="dropdown-menu dropdown-menu-start">
                        <li><a className="dropdown-item" href="#">Node.js</a></li>
                        <li><a className="dropdown-item" href="#">MongoDB</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-item"><a href="#">Graphics</a></li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Digital Marketing</a>
                      <ul className="dropdown-menu dropdown-menu-start">
                        <li><a className="dropdown-item" href="#">SEO</a></li>
                        <li><a className="dropdown-item" href="#">SEM</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Nav item 3: Packages */}
                <li className="nav-item">
                  <Link className="nav-link" to="/coursecategory">Packages</Link>
                </li>

                {/* Nav item 4: Dashboard */}
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/coursecategory">Dashboard</Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu dropend">
                      <Link className="dropdown-item dropdown-toggle" to="/admin-dashboard">Admin</Link>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <Link className="dropdown-item dropdown-toggle" to="/instructordashboard">Instructor</Link>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <Link className="dropdown-item dropdown-toggle" to="/studentdashboard">Student</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* Nav Search START */}
              <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <form className="position-relative">
                  <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                  <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i className="fas fa-search fs-6" />
                  </button>
                </form>
              </div>

              {/* Login/Signup Links */}
              <ul className="navbar-nav sign ms-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/signout">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signUp">SignUp</Link>
                </li>
              </ul>
              {/* Nav Search END */}
            </div>
            {/* Main navbar END */}
          </div>
        </nav>
        {/* Nav END */}
      </header>
      {/* Header END */}
    </div>
  );
};

export default Nav;
