import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminEditCourseDetals = () => {
  return (
   <>
   <div>
  {/* **************** MAIN CONTENT START **************** */}
  <main>
    {/* Sidebar START */}
   {/* Sidebar START */} 
<nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
        {/* Navbar brand for xl START */}
        <div className="d-flex align-items-center">
          <NavLink className="navbar-brand" to="/">
            <img className="navbar-brand-item" src="assets/images/logo-light.svg" alt="Logo" />
          </NavLink>
        </div>
        {/* Navbar brand for xl END */}
        <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex={-1} id="offcanvasSidebar">
          <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
            {/* Sidebar menu START */}
            <ul className="navbar-nav flex-column" id="navbar-sidebar">
              {/* Menu item 1 */}
              <li className="nav-item">
                <NavLink to="/admin-dashboard" className="nav-link" activeClassName="active">
                  <i className="bi bi-house fa-fw me-2" /> Dashboard
                </NavLink>
              </li>
              {/* Title */}
              <li className="nav-item ms-2 my-2">Pages</li>
              {/* Menu item 2 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button" aria-expanded="false" aria-controls="collapsepage">
                  <i className="bi bi-basket fa-fw me-2" /> Courses
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item">
                    <NavLink to="/admin-course-list" className="nav-link">
                      All Courses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-course-category" className="nav-link">
                      Course Category
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-course-detail" className="nav-link">
                      Course Detail
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Menu item 3 */}
              <li className="nav-item">
                <NavLink to="/admin-student-list" className="nav-link">
                  <i className="fas fa-user-graduate fa-fw me-2" /> Students
                </NavLink>
              </li>
              {/* Menu item 4 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapseinstructors" role="button" aria-expanded="false" aria-controls="collapseinstructors">
                  <i className="fas fa-user-tie fa-fw me-2" /> Instructors
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapseinstructors" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item">
                    <NavLink to="/admin-instructor-list" className="nav-link">
                      Instructors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-instructor-card" className="nav-link">
                      Instructor Detail
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-instructor-request" className="nav-link">
                      Instructor requests
                      <span className="badge text-bg-success rounded-circle ms-2">2</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Menu item 5 */}
              <li className="nav-item">
                <NavLink to="/admin-review" className="nav-link">
                  <i className="far fa-comment-dots fa-fw me-2" /> Reviews
                </NavLink>
              </li>
              {/* Menu item 6 */}
              <li className="nav-item">
                <NavLink to="/admin-elearning" className="nav-link">
                  <i className="far fa-chart-bar fa-fw me-2" /> Earnings
                </NavLink>
              </li>
              {/* Menu item 7 */}
              <li className="nav-item">
                <NavLink to="/admin-seating" className="nav-link">
                  <i className="fas fa-user-cog fa-fw me-2" /> Admin Settings
                </NavLink>
              </li>
              {/* Menu item 8 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                  <i className="bi bi-lock fa-fw me-2" /> Authentication
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item">
                    <NavLink to="/sign-up"  className="nav-link">Page 1</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-in" className="nav-link">Page 2</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/forgot-password" className="nav-link">Page 3</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-error-404" className="nav-link">Page 4</NavLink>
                  </li>
                </ul>
              </li>
              {/* Title */}
              <li className="nav-item ms-2 my-2">Documentation</li>
              {/* Menu item 9 */}
              <li className="nav-item">
                <NavLink to="/docs/index" className="nav-link">
                  <i className="far fa-clipboard fa-fw me-2" /> Documentation
                </NavLink>
              </li>
              {/* Menu item 10 */}
              <li className="nav-item">
                <NavLink to="/docs/changelog" className="nav-link">
                  <i className="fas fa-sitemap fa-fw me-2" /> Changelog
                </NavLink>
              </li>
            </ul>
            {/* Sidebar menu end */}
            {/* Sidebar footer START */}
            <div className="px-3 mt-auto pt-3">
              <div className="d-flex align-items-center justify-content-between text-primary-hover">
                <NavLink className="h5 mb-0 text-body" to="/admin-setting" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
                  <i className="bi bi-gear-fill" />
                </NavLink>
                <NavLink className="h5 mb-0 text-body" to="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Home">
                  <i className="bi bi-globe" />
                </NavLink>
                <NavLink className="h5 mb-0 text-body" to="/sign-in" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign out">
                  <i className="bi bi-power" />
                </NavLink>
              </div>
            </div>
            {/* Sidebar footer END */}
          </div>
        </div>
      </nav>

 
  {/* Page content START */}
  <div className="page-content">
 
       {/* Top bar START */}
       <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center w-100">
          {/* Logo START */}
          <div className="d-flex align-items-center d-xl-none">
            <a className="navbar-brand" href="index-2.html">
              <img className="light-mode-item navbar-brand-item h-30px" src="assets/images/logo-mobile.svg" alt />
              <img className="dark-mode-item navbar-brand-item h-30px" src="assets/images/logo-mobile-light.svg" alt />
            </a>
          </div>
          {/* Logo END */}
          {/* Toggler for sidebar START */}
          <div className="navbar-expand-xl sidebar-offcanvas-menu">
            <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="outside">
              <i className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip" data-bs-target="#offcanvasMenu"> </i>
            </button>
          </div>
          {/* Toggler for sidebar END */}
          {/* Top bar left */}
          <div className="navbar-expand-lg ms-auto ms-xl-0">
            {/* Toggler for menubar START */}
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopContent" aria-controls="navbarTopContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>
            {/* Toggler for menubar END */}
            {/* Topbar menu START */}
            <div className="collapse navbar-collapse w-100" id="navbarTopContent">
              {/* Top search START */}
              <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input className="form-control pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search" aria-label="Search" />
                    <button className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 text-primary" /></button>
                  </form>
                </div>
              </div>
              {/* Top search END */}
            </div>
            {/* Topbar menu END */}
          </div>
          {/* Top bar left END */}
          {/* Top bar right START */}
          <div className="ms-xl-auto">
            <ul className="navbar-nav flex-row align-items-center">
              {/* Notification dropdown START */}
              <li className="nav-item ms-2 ms-md-3 dropdown">
                {/* Notification button */}
                <a className="btn btn-light btn-round mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="bi bi-bell fa-fw" />
                </a>
                {/* Notification dote */}
                <span className="notif-badge animation-blink" />
                {/* Notification dropdown menu START */}
                <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                  <div className="card bg-transparent">
                    <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                      <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span></h6>
                      <a className="small" href="#">Clear all</a>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        {/* Notif item */}
                        <li>
                          <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                              </div>
                            </div>
                            <div>
                              <p className="text-body small m-0">Congratulate <b>Joan Wallace</b> for graduating from <b>Microverse university</b></p>
                              <u className="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                        {/* Notif item */}
                        <li>
                          <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-1">Larry Lawson Added a new course</h6>
                              <p className="small text-body m-0">What's new! Find out about new features</p>
                              <u className="small">View detail</u>
                            </div>
                          </a>
                        </li>
                        {/* Notif item */}
                        <li>
                          <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-1">New request to apply for Instructor</h6>
                              <u className="small">View detail</u>
                            </div>
                          </a>
                        </li>
                        {/* Notif item */}
                        <li>
                          <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                              </div>
                            </div>
                            <div>
                              <h6 className="mb-1">Update v2.3 completed successfully</h6>
                              <p className="small text-body m-0">What's new! Find out about new features</p>
                              <small className="text-body">5 min ago</small>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Button */}
                    <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                      <a href="#" className="stretched-link">See all incoming activity</a>
                    </div>
                  </div>
                </div>
                {/* Notification dropdown menu END */}
              </li>
              {/* Notification dropdown END */}
              {/* Profile dropdown START */}
              <li className="nav-item ms-2 ms-md-3 dropdown">
                {/* Avatar */}
                <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                </a>
                {/* Profile dropdown START */}
                <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                  {/* Profile info */}
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar me-3 mb-3">
                        <img className="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg" alt="avatar" />
                      </div>
                      <div>
                        <a className="h6 mt-2 mt-sm-0" href="#">Lori Ferguson</a>
                        <p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li> <hr className="dropdown-divider" /></li>
                  {/* Links */}
                  <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2" />Edit Profile</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2" />Account Settings</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2" />Help</a></li>
                  <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="bi bi-power fa-fw me-2" />Sign Out</a></li>
                  <li> <hr className="dropdown-divider" /></li>
                  {/* Dark mode options START */}
                  <li>
                    <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                      {/* <span>Mode:</span> */}
                      <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="light">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          <use href="#" />
                        </svg> Light
                      </button>
                      <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                          <use href="#" />
                        </svg> Dark
                      </button>
                      <button type="button" className="btn btn-sm mb-0 active" data-bs-theme-value="auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                          <use href="#" />
                        </svg> Auto
                      </button>
                    </div>
                  </li> 
                  {/* Dark mode options END*/}
                </ul>
                {/* Profile dropdown END */}
              </li>
              {/* Profile dropdown END */}
            </ul>
          </div>
          {/* Top bar right END */}
        </div>
      </div>
    </nav>
    
      

     
      {/* Top bar END */}
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        <h1 className="h3 mb-3">Edit Course</h1>
        {/* Card START */}
        <div className="card border rounded-3 mb-5">
          <div id="stepper" className="bs-stepper stepper-outline">
            {/* Card header */}
            <div className="card-header bg-light border-bottom px-lg-5">
              {/* Step Buttons START */}
              <div className="bs-stepper-header" role="tablist">
                {/* Step 1 */}
                <div className="step" data-target="#step-1">
                  <div className="d-grid text-center align-items-center">
                    <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
                      <span className="bs-stepper-circle">1</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Course details</h6>
                  </div>
                </div>
                <div className="line" />
                {/* Step 2 */}
                <div className="step" data-target="#step-2">
                  <div className="d-grid text-center align-items-center">
                    <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                      <span className="bs-stepper-circle">2</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Course media</h6>
                  </div>
                </div>
                <div className="line" />
                {/* Step 3 */}
                <div className="step" data-target="#step-3">
                  <div className="d-grid text-center align-items-center">
                    <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                      <span className="bs-stepper-circle">3</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Curriculum</h6>
                  </div>
                </div>
                <div className="line" />
                {/* Step 4 */}
                <div className="step" data-target="#step-4">
                  <div className="d-grid text-center align-items-center">
                    <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
                      <span className="bs-stepper-circle">4</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Additional information</h6>
                  </div>
                </div>
              </div>
              {/* Step Buttons END */}
            </div>
            {/* Card body START */}
            <div className="card-body px-1 px-sm-4">
              {/* Step content START */}
              <div className="bs-stepper-content">
                <form onsubmit="return false">
                  {/* Step 1 content START */}
                  <div id="step-1" role="tabpanel" className="content fade" aria-labelledby="steppertrigger1">
                    {/* Title */}
                    <h4>Course details</h4>
                    <hr /> {/* Divider */}
                    {/* Basic information START */}
                    <div className="row g-4">
                      {/* Course title */}
                      <div className="col-12">
                        <label className="form-label">Course title</label>
                        <input className="form-control" type="text" placeholder="Enter course title" defaultValue="The Complete Digital Marketing Course - 12 Courses in 1" />
                      </div>
                      {/* Short description */}
                      <div className="col-12">
                        <label className="form-label">Short description</label>
                        <textarea className="form-control" rows={2} placeholder="Enter keywords" defaultValue={"Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.\n\t\t\t\t\t\t\t\t\t\t"} />
                      </div>
                      {/* Course category */}
                      <div className="col-md-6">
                        <label className="form-label">Course category</label>
                        <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm" data-search-enabled="true">
                          <option value>Select category</option>
                          <option>Engineer</option>
                          <option>Medical</option>
                          <option>Information technology</option>
                          <option>Finance</option>
                          <option selected>Marketing</option>
                        </select>
                      </div>
                      {/* Course level */}
                      <div className="col-md-6">
                        <label className="form-label">Course level</label>
                        <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm" data-search-enabled="false" data-remove-item-button="true">
                          <option value>Select course level</option>
                          <option selected>All level</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advance</option>
                        </select>
                      </div>
                      {/* Language */}
                      <div className="col-md-6">
                        <label className="form-label">Language</label>
                        <select className="form-select js-choice border-0 z-index-9 bg-transparent" multiple="multiple" aria-label=".form-select-sm" data-max-item-count={3} data-remove-item-button="true">
                          <option value>Select language</option>
                          <option selected>English</option>
                          <option>German</option>
                          <option>French</option>
                          <option selected>Hindi</option>
                        </select>
                      </div>
                      {/* Switch */}
                      <div className="col-md-6 d-flex align-items-center justify-content-start mt-5">
                        <div className="form-check form-switch form-check-md">
                          <input className="form-check-input" type="checkbox" id="checkPrivacy1" />
                          <label className="form-check-label" htmlFor="checkPrivacy1">Check this for featured course</label>
                        </div>
                      </div>
                      {/* Course time */}
                      <div className="col-md-6">
                        <label className="form-label">Course time</label>
                        <input className="form-control" type="text" placeholder="Enter course time" defaultValue="12h 30m" />
                      </div>
                      {/* Total lecture */}
                      <div className="col-md-6">
                        <label className="form-label">Total lecture</label>
                        <input className="form-control" type="text" placeholder="Enter total lecture" defaultValue={82} />
                      </div>
                      {/* Course price */}
                      <div className="col-md-6">
                        <label className="form-label">Course price</label>
                        <input type="text" className="form-control" placeholder="Enter course price" defaultValue="$350" />
                      </div>
                      {/* Course discount */}
                      <div className="col-md-6">
                        <label className="form-label">Discount price</label>
                        <input className="form-control" type="text" placeholder="Enter discount" defaultValue="60%" />
                        <div className="col-12 mt-1 mb-0">
                          <div className="form-check small mb-0">
                            <input className="form-check-input" type="checkbox" id="checkBox1" defaultChecked />
                            <label className="form-check-label" htmlFor="checkBox1">
                              Enable this Discount
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* Course description */}
                      <div className="col-12">
                        <label className="form-label">Add description</label>
                        {/* Editor toolbar */}
                        <div className="bg-light border border-bottom-0 rounded-top py-3" id="quilltoolbar">
                          <span className="ql-formats">
                            <select className="ql-size" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-bold" />
                            <button className="ql-italic" />
                            <button className="ql-underline" />
                            <button className="ql-strike" />
                          </span>
                          <span className="ql-formats">
                            <select className="ql-color" />
                            <select className="ql-background" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-code-block" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-list" value="ordered" />
                            <button className="ql-list" value="bullet" />
                            <button className="ql-indent" value={-1} />
                            <button className="ql-indent" value={+1} />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-link" />
                            <button className="ql-image" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-clean" />
                          </span>
                        </div>
                        {/* Main toolbar */}
                        <div className="bg-body border rounded-bottom h-400px overflow-hidden" id="quilleditor">
                          <br />
                          <h1>Quill Rich Text Editor</h1>
                          <br />
                          <p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
                          <br />
                          <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
                          <br />
                          <p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
                          <br />
                          <p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
                          <p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
                          <br />
                          <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
                          <br />
                          <p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
                          <br />
                          <p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
                          <p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
                          <br />
                          <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
                          <br />
                          <p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
                          <br />
                          <p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
                        </div>
                      </div>	
                      {/* Step 1 button */}
                      <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary next-btn mb-0">Next</button>
                      </div>
                    </div>
                    {/* Basic information START */}
                  </div>
                  {/* Step 1 content END */}
                  {/* Step 2 content START */}
                  <div id="step-2" role="tabpanel" className="content fade" aria-labelledby="steppertrigger2">
                    {/* Title */}
                    <h4>Course media</h4>
                    <hr /> {/* Divider */}
                    <div className="row">
                      {/* Upload image START */}
                      <div className="col-12">
                        <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                          {/* Image */}
                          <img src="assets/images/element/gallery.svg" className="h-50px" alt />
                          <div>
                            <h6 className="my-2">Upload course image here, or<a href="#!" className="text-primary"> Browse</a></h6>
                            <label style={{cursor: 'pointer'}}>
                              <span> 
                                <input className="form-control stretched-link" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                              </span>
                            </label>
                            <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                          </div>	
                        </div>
                        {/* Button */}
                        <div className="d-sm-flex justify-content-end mt-2">
                          <button type="button" className="btn btn-sm btn-danger-soft mb-3">Remove image</button>
                        </div>
                      </div>
                      {/* Upload image END */}
                      {/* Upload video START */}
                      <div className="col-12">
                        <h5>Upload video</h5>
                        {/* Input */}
                        <div className="col-12 mt-4 mb-5">
                          <label className="form-label">Video URL</label>
                          <input className="form-control" type="text" placeholder="Enter video url" defaultValue="https://www.youtube.com/embed/tXHviS-4ygo" />
                        </div>
                        <div className="position-relative my-4">
                          <hr />
                          <p className="small position-absolute top-50 start-50 translate-middle bg-body px-3 mb-0">Or</p>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Upload video</label>
                          <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile01" />
                            <label className="input-group-text">.mp4</label>
                          </div>
                          <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02" />
                            <label className="input-group-text">.WebM</label>
                          </div>
                          <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile03" />
                            <label className="input-group-text">.OGG</label>
                          </div>
                        </div>
                        {/* Preview */}
                        <h5 className="mt-4">Video preview</h5>
                        <div className="position-relative">
                          {/* Image */}
                          <img src="assets/images/about/04.jpg" className="rounded-4" alt />
                          <div className="position-absolute top-50 start-50 translate-middle">
                            {/* Video link */}
                            <a href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox data-gallery="video-tour">
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Upload video END */}
                      {/* Step 2 button */}
                      <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-secondary prev-btn mb-0">Previous</button>
                        <button className="btn btn-primary next-btn mb-0">Next</button>
                      </div>
                    </div>
                  </div>
                  {/* Step 2 content END */}
                  {/* Step 3 content START */}
                  <div id="step-3" role="tabpanel" className="content fade" aria-labelledby="steppertrigger3">
                    {/* Title */}
                    <h4>Curriculum</h4>
                    <hr /> {/* Divider */}
                    <div className="row">
                      {/* Add lecture Modal button */}
                      <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                        <h5 className="mb-2 mb-sm-0">Upload Lecture</h5>
                        <a href="#" className="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#addLecture"><i className="bi bi-plus-circle me-2" />Add Lecture</a>
                      </div>
                      {/* Edit lecture START */}
                      <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                        {/* Item START */}
                        <div className="accordion-item mb-3">
                          <h6 className="accordion-header font-base" id="heading-1">
                            <button className="accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                              Introduction of Digital Marketing 
                            </button>
                          </h6>
                          <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                            {/* Topic START */}
                            <div className="accordion-body mt-3">
                              {/* Video item START */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"><i className="fas fa-play" /></a>
                                  <span className="ms-2 mb-0 h6 fw-light">Introduction</span>
                                </div>
                                {/* Edit and cancel button */}
                                <div>
                                  <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit" /></a>
                                  <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times" /></button>
                                </div>
                              </div>
                              {/* Divider */}
                              <hr />
                              {/* Video item END */}
                              {/* Video item START */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"><i className="fas fa-play" /></a>
                                  <span className="ms-2 mb-0 h6 fw-light">What is Digital Marketing</span>
                                </div>
                                {/* Edit and cancel button */}
                                <div>
                                  <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit" /></a>
                                  <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times" /></button>
                                </div>
                              </div>
                              {/* Divider */}
                              <hr />
                              {/* Video item END */}
                              {/* Add topic */}
                              <a href="#" className="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic"><i className="bi bi-plus-circle me-2" />Add topic</a>
                              <a href="#" className="btn btn-sm btn-danger-soft mb-0 mt-1 mt-sm-0">Delete this Lecture</a>
                            </div>
                            {/* Topic END */}
                          </div>
                        </div>
                        {/* Item END */}
                        {/* Item START */}
                        <div className="accordion-item mb-3">
                          <h6 className="accordion-header font-base" id="heading-2">
                            <button className="accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                              Customer Life cycle
                            </button>
                          </h6>
                          <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                            <div className="accordion-body mt-3">
                              {/* Add topic */}
                              <a href="#" className="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic">
                                <i className="bi bi-plus-circle me-2" />Add topic
                              </a>	
                            </div>
                          </div>
                        </div>
                        {/* Item END */}
                        {/* Item START */}
                        <div className="accordion-item mb-3">
                          <h6 className="accordion-header font-base" id="heading-3">
                            <button className="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                              How much should I offer the sellers? 
                            </button>
                          </h6>
                          {/* Body */}
                          <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
                            <div className="accordion-body mt-3">
                              {/* Add topic */}
                              <a href="#" className="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic">
                                <i className="bi bi-plus-circle me-2" />Add topic
                              </a>
                            </div>
                          </div>
                        </div>	
                        {/* Item END */}
                      </div>
                      {/* Edit lecture END */}
                      {/* Step 3 button */}
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-secondary prev-btn mb-0">Previous</button>
                        <button className="btn btn-primary next-btn mb-0">Next</button>
                      </div>
                    </div>
                  </div>
                  {/* Step 3 content END */}
                  {/* Step 4 content START */}
                  <div id="step-4" role="tabpanel" className="content fade" aria-labelledby="steppertrigger4">
                    {/* Title */}
                    <h4>Additional information</h4>
                    <hr /> {/* Divider */}
                    <div className="row g-4">
                      {/* Edit faq START */}
                      <div className="col-12">
                        <div className="bg-light border rounded p-2 p-sm-4">
                          <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                            <h5 className="mb-2 mb-sm-0">Upload FAQs</h5>
                            <a href="#" className="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#addQuestion"><i className="bi bi-plus-circle me-2" />Add Question</a>
                          </div>
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="bg-body p-3 p-sm-4 border rounded">
                                {/* Item 1 */}
                                <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                                  {/* Question */}
                                  <h6 className="mb-0">How Digital Marketing Work?</h6>
                                  {/* Button */}
                                  <div className="align-middle">
                                    <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit" /></a>
                                    <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times" /></button>
                                  </div>
                                </div>
                                {/* Content */}
                                <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.</p>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="bg-body p-4 border rounded">
                                {/* Item 2 */}
                                <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                                  {/* Question */}
                                  <h6 className="mb-0">How Digital Marketing Work?</h6>
                                  {/* Button */}
                                  <div className="align-middle">
                                    <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit" /></a>
                                    <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times" /></button>
                                  </div>
                                </div>
                                {/* Content */}
                                <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.</p>
                              </div>	
                            </div>
                          </div>
                        </div>	
                      </div>
                      {/* Edit faq END */}
                      {/* Tags START */}
                      <div className="col-12">
                        <div className="bg-light border rounded p-4">
                          <h5 className="mb-0">Tags</h5>
                          {/* Comment */}
                          <div className="mt-3">
                            <input type="text" className="form-control js-choice mb-0" defaultValue="java, javascript, finance" data-placeholder="true" data-placeholder-val="Enter tags" data-max-item-count={14} data-remove-item-button="true" />
                            <span className="small">Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing</span>
                          </div>
                        </div>
                      </div>
                      {/* Tags START */}
                      {/* Reviewer START */}
                      <div className="col-12">
                        <div className="bg-light border rounded p-4">
                          <h5 className="mb-0">Message to a reviewer</h5>
                          {/* Comment */}
                          <div className="mt-3">
                            <textarea className="form-control" rows={4} placeholder="Write a message" spellCheck="false" defaultValue={"Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.\n\t\t\t\t\t\t\t\t\t\t\t\t"} />
                            <div className="form-check mb-0 mt-2">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                              <label className="form-check-label" htmlFor="exampleCheck1">
                                Any images, sounds, or other assets that are not my own work, have been appropriately licensed for use in the file preview or main course. Other than these items, this work is entirely my own and I have full rights to sell it here.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Reviewer START */}
                      {/* Step 4 button */}
                      <div className="d-md-flex justify-content-between align-items-start mt-4">
                        <button className="btn btn-secondary prev-btn mb-2 mb-md-0">Previous</button>
                        <button className="btn btn-light me-auto ms-md-2 mb-2 mb-md-0">Preview Course</button>
                        <div className="text-md-end">
                          <a href="course-added.html" className="btn btn-success mb-2 mb-sm-0">Submit a Course</a>
                          <p className="mb-0 small mt-1">Once you click "Submit a Course", your course will be uploaded and marked as pending for review.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Step 4 content END */}
                </form>
              </div>
            </div>
            {/* Card body END */}
          </div>
        </div>
        {/* Card END */}
      </div>
      {/* Page main content END */}
    </div>
    {/* Page content END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}<br />
</div>

   </>
  )
}

export default AdminEditCourseDetals