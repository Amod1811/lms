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
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Nav item 1 Home */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/instructordashboard">Home</Link>
                </li>

                {/* Nav item 2 Courses Dropdown */}
                <li className="nav-item dropdown">
            <Link className="nav-link" to="/Course">Courses</Link>
              {/* <Link className="nav-link dropdown-toggle" to="/coursecategory" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</Link> */}
              <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                {/* Dropdown submenu */}
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Networking</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    {/* <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li> */}
                  
                    <li> <a className="dropdown-item" href="#">Hardware</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">Networking</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">AWS</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">Linux (CCNA)</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MCITP</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MCSE</a></li>            
                  </ul>
                </li>

                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Front-end</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    {/* <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li> */}
                  
                    <li> <a className="dropdown-item" href="#">HTML</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">CSS</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">JS</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">JQuery</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">BootStrap</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">React</a></li>            
                  </ul>
                </li>

                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Back-end</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    {/* <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li> */}
                  
                    <li> <a className="dropdown-item" href="#">Node.js</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">Express.js </a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MySQL</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MongoDb</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">PhP</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">JAVA</a></li>            
                  </ul>
                </li>

                <li className="dropdown">
                  <a className="dropdown-item " href="#">Graphics</a>
                  
                </li>


                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Digital Marketing</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    {/* <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li> */}
                  
                    <li> <a className="dropdown-item" href="#">SEO</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">SMM</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">SEM</a></li>
                    
                  </ul>
                </li>
                {/* Dropdown submenu */}
                
               
               
              </ul>
            </li>

                {/* Nav item 3 Packages */}
                <li className="nav-item">
                  <Link className="nav-link" to="/coursecategory">Packages</Link>
                </li>
              </ul>

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
