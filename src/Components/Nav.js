import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      {/* Header START */}
      <header className="navbar-light navbar-sticky-on header-static">
        {/* Nav START */}
        <nav className="navbar navbar-expand-xl sticky-top">
          <div className="container-fluid px-3 px-xl-5">
            {/* Logo START */}
            <Link className="navbar-brand" to="/">
              <img className="light-mode-item logo navbar-brand-item" src="assets/images/LMS.png" alt="logo" />
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
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>

            {/* Main navbar START */}
            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll me-auto">
                {/* Nav item 1 Home */}
                <li className="nav-item">
                  <Link className="nav-link " to="/">Home</Link>
                </li>

                {/* Nav item 2 Courses Dropdown */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/Course" id="courseDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</Link>
                  <ul className="dropdown-menu" aria-labelledby="courseDropdown">
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/course">Networking</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/frontendcourse">Front-end</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/backendcourse">Back-end</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/digitalmarketing">Digital Marketing</Link>
                    </li>
                    <hr />
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item" to="/graphicscourse">Graphics Designing</Link>
                    </li>
                  </ul>
                </li>

                {/* Nav item 3 Packages */}
                <li className="nav-item">
                  <Link className="nav-link" to="/coursecategory">Packages</Link>
                </li>

                {/* Nav item 4 Dashboard Dropdown */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="dashboardDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dashboard</Link>
                  <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
                    <li>
                      <Link className="dropdown-item" to="/adminlogin">Admin</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/instructorlogin">Instructor</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/studentdashboard">Student</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* Search bar and sign in/signup links */}
              {/* <div className="d-flex align-items-center" >
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div> */}
              <ul className="navbar-nav sign ms-3">
                  <li className="nav-item">
                    <Link className="nav-link" to="/signout">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signUp">SignUp</Link>
                  </li>
                </ul>
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
