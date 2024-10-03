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
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>

            {/* Main navbar START */}
            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
              {/* Nav Main menu START */}
              <ul className="navbar-nav navbar-nav-scroll me-auto">
                {/* Nav item 1 Home */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>

                {/* Nav item 2 Courses Dropdown */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/Course" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</Link>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    {/* Networking Submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Networking</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        {['Hardware', 'Networking', 'AWS', 'Linux (CCNA)', 'MCITP', 'MCSE'].map((item, index) => (
                          <React.Fragment key={index}>
                            <li><a className="dropdown-item" href="#">{item}</a></li>
                            {index < 5 && <li><hr className="dropdown-divider" /></li>}
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>

                    {/* Front-end Submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Front-end</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        {['HTML', 'CSS', 'JS', 'JQuery', 'BootStrap', 'React'].map((item, index) => (
                          <React.Fragment key={index}>
                            <li><a className="dropdown-item" href="#">{item}</a></li>
                            {index < 5 && <li><hr className="dropdown-divider" /></li>}
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>

                    {/* Back-end Submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Back-end</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        {['Node.js', 'Express.js', 'MySQL', 'MongoDb', 'PhP', 'JAVA'].map((item, index) => (
                          <React.Fragment key={index}>
                            <li><a className="dropdown-item" href="#">{item}</a></li>
                            {index < 5 && <li><hr className="dropdown-divider" /></li>}
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>

                    {/* Graphics Item */}
                    <li className="dropdown">
                      <a className="dropdown-item" href="#">Graphics</a>
                    </li>

                    {/* Digital Marketing Submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Digital Marketing</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        {['SEO', 'SMM', 'SEM'].map((item, index) => (
                          <React.Fragment key={index}>
                            <li><a className="dropdown-item" href="#">{item}</a></li>
                            {index < 2 && <li><hr className="dropdown-divider" /></li>}
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Nav item 3 Packages */}
                <li className="nav-item">
                  <Link className="nav-link" to="/coursecategory">Packages</Link>
                </li>

                {/* Nav item 4 Dashboard */}
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/coursecategory">Dashboard</Link>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    {['Admin', 'Instructor', 'Student'].map((role, index) => (
                      <li className="dropdown-submenu dropend" key={index}>
                        <Link className="dropdown-item" to={`/${role.toLowerCase()}dashboard`}>{role}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              {/* Nav Main menu END */}

              {/* Nav Search START */}
              <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <form className="position-relative w-100">
                  <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                  <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i className="fas fa-search fs-6" />
                  </button>
                </form>
                {/* Search bar and sign in/signup links */}
                <div className="d-flex align-items-center">
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                  <ul className="navbar-nav sign ms-3">
                    <li className="nav-item">
                      <Link className="nav-link" to="/signout">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signUp">SignUp</Link>
                    </li>
                  </ul>
                </div>
              </div>
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
