import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
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
        <a className="navbar-brand" href="#">
          
          <img className="light-mode-item logo navbar-brand-item" src="assets/images/logo1newbg.png" alt="logo" />
          {/* <img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" /> */}
        </a>
        {/* Logo END */}
        {/* Responsive navbar toggler */}
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-animation">
            <span />
            <span />
            
            <span />
          </span>
        </button>
        {/* Main navbar START */}
        <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
          {/* Nav category menu START */}
         
          {/* Nav category menu END */}
          {/* Nav Main menu START */}
          <ul className="navbar-nav navbar-nav-scroll me-auto">
            {/* Nav item 1 Demos */}
            <li className="nav-item ">
              <Link className="nav-link  active" to="/instructordashboard" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</Link>
             
            </li>
            {/* Nav item 2 Pages */}
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
                  {/* <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none"> */}
                    {/* <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li> */}
                  
                    {/* <li> <a className="dropdown-item" href="#">Hardware</a></li>
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
                  </ul> */}
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
                    {/* <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">Linux (CCNA)</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MCITP</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MCSE</a></li>             */}
                  </ul>
                </li>
                {/* Dropdown submenu */}
                
               
               
              </ul>
            </li>
            
            {/* Nav item 4 Megamenu*/}
          {/* Packages */}

          <li className="nav-item dropdown">
          <Link className="nav-link" to="/coursecategory">Packages</Link>
              {/* <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Packages</a> */}
              <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                {/* Dropdown submenu */}
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">MERN Stack <br/>Developement </a>
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
                  {/* <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none"> */}
                    {/* <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li> */}
                  
                    {/* <li> <a className="dropdown-item" href="#">Hardware</a></li>
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
                  </ul> */}
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
                    {/* <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">Linux (CCNA)</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MCITP</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="#">MCSE</a></li>             */}
                  </ul>
                </li>
                {/* Dropdown submenu */}
                
               
               
              </ul>
            </li>
            {/* packages end */}
            {/* Nav item 5 link*/}
          
          </ul>
          {/* Nav Main menu END */}
          {/* Nav Search START */}
          <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
            <div className="nav-item w-100">
              <form className="position-relative">
                <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <i className="fas fa-search fs-6 " />
                </button>
              </form>
            </div>
          </div>
          {/* <div className="dropdown ms-1 ms-lg-0">
          <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
        
          <ul className="navbar-nav sign">
              <li className="nav-item">
                 <Link to="/signout">Login</Link>
              </li>&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                 <Link to="/signup">SignUp</Link>
              </li>
          </ul>
        </a>
         
        </div> */}
        <div className="dropdown ms-1 ms-lg-0">
        <ul className="navbar-nav sign">
              <li className="nav-item">
                 <Link to="/signout">Login</Link>
              </li>&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                 <Link to="/signUp">SignUp</Link>
              </li>
          </ul>
</div>
          {/* Nav Search END */}
        </div>
        {/* Main navbar END */}
        {/* Profile START */} 
        
        {/* Profile START */}
      </div>
    </nav>
    {/* Nav END */}
  </header>
  {/* Header END */}
</div>

  )
}

export default Nav

