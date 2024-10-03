import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminSeating = () => {
  return (
   <>
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
      {/* Title */}
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="h3 mb-2 mb-sm-0">Admin Settings</h1>
        </div>
      </div>
      <div className="row g-4">
        {/* Left side START */}
        <div className="col-xl-3">
          {/* Tab START */}
          <ul className="nav nav-pills nav-tabs-bg-dark flex-column">
            <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab-1"><i className="fas fa-globe fa-fw me-2" />Website Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-2"><i className="fas fa-cog fa-fw me-2" />General Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-3"><i className="fas fa-bell fa-fw me-2" />Notification Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-4"><i className="fas fa-user-circle fa-fw me-2" />Account Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-5"><i className="fas fa-sliders-h fa-fw me-2" />Social Settings</a> </li>
            <li className="nav-item"> <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-6"><i className="fas fa-envelope-open-text fa-fw me-2" />Email Settings</a> </li>
          </ul>
          {/* Tab END */}
        </div>
        {/* Left side END */}
        {/* Right side START */}
        <div className="col-xl-9">
          {/* Tab Content START */}
          <div className="tab-content">
            {/* Personal Information content START */}
            <div className="tab-pane show active" id="tab-1">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Website Settings</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <form className="row g-4 align-items-center">
                    {/* Input item */}
                    <div className="col-lg-4">
                      <label className="form-label">Site Name</label>
                      <input type="text" className="form-control" placeholder="Site Name" />
                      <div className="form-text">Enter Website Name. It Display in Website and Email.</div>
                    </div>
                    {/* Input item */}
                    <div className="col-lg-4">
                      <label className="form-label">Site Copyrights</label>
                      <input type="text" className="form-control" placeholder="Site Copyrights" />
                      <div className="form-text">Using for Contact and Send Email</div>
                    </div>
                    {/* Input item */}
                    <div className="col-lg-4">
                      <label className="form-label">Site Email</label>
                      <input type="email" className="form-control" placeholder="Site Email" />
                      <div className="form-text">For Copyrights Text</div>
                    </div>
                    {/* Textarea item */}
                    <div className="col-12">
                      <label className="form-label">Site Description</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-text">For write brief description of your organization, or a Website.</div> 
                    </div>
                    {/* Input item */}
                    <div className="col-lg-6">
                      <label className="form-label">Contact Phone</label>
                      <input type="text" className="form-control" placeholder="Contact Phone" />
                      <div className="form-text">Using for Contact and Support</div>
                    </div>
                    {/* Input item */}
                    <div className="col-lg-6">
                      <label className="form-label">Support Email</label>
                      <input type="email" className="form-control" placeholder="Support Email" />
                      <div className="form-text">For Support Email</div>
                    </div>
                    {/* Radio items */}
                    <div className="col-lg-6">
                      <label className="form-label">Allow Registration</label>
                      <div className="d-sm-flex">
                        {/* Radio */}
                        <div className="form-check radio-bg-light me-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Enable
                          </label>
                        </div>
                        {/* Radio */}
                        <div className="form-check radio-bg-light me-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Disable
                          </label>
                        </div>
                        {/* Radio */}
                        <div className="form-check radio-bg-light">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                          <label className="form-check-label" htmlFor="flexRadioDefault3">
                            On Request
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Textarea item */}
                    <div className="col-12">
                      <label className="form-label">Contact Address</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-text">Enter support Address</div> 
                    </div>
                    {/* Save button */}
                    <div className="d-sm-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>			
            </div>
            {/* Personal Information content END */}
            {/* General Settings content START */}
            <div className="tab-pane" id="tab-2">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">General Settings</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <form className="row g-4">
                    {/* Input item */}
                    <div className="col-12">
                      <label className="form-label">Main Site URL</label>
                      <input type="text" className="form-control" placeholder="Site URL" />
                      <div className="form-text">Set your main website url.</div>
                    </div>
                    {/* Choice item */}
                    <div className="col-lg-6">
                      <label className="form-label">Select Currency</label>
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Select Currency</option>
                        <option>USD</option>
                        <option>Indian Rupee</option>
                        <option>Euro</option>
                        <option>British Pound</option>
                      </select>
                      <div className="form-text">Select currency as per Country</div>
                    </div>
                    {/* Choice item */}
                    <div className="col-lg-6">
                      <label className="form-label">Select Language</label>
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Select Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>German</option>
                        <option>Spanish</option>
                      </select>
                      <div className="form-text">Select language as per Country</div>
                    </div>
                    {/* Switch item */}
                    <div className="col-lg-3">
                      <label className="form-label">Maintainance mode</label>
                      <div className="form-check form-switch form-check-lg mb-0">
                        <input className="form-check-input mt-0 price-toggle me-2" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mt-1" htmlFor="flexSwitchCheckDefault">Make Site Offline</label>
                      </div>
                    </div>
                    {/* Textarea item */}
                    <div className="col-lg-9">
                      <label className="form-label">Maintainance Text</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-text">Admin login on maintenance mode:<a href="#" className="ms-2">http://example.xyz/admin/login</a></div> 
                    </div>
                    {/* Save button */}
                    <div className="d-sm-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* General Settings content END */}
            {/* Notification setting content START */}
            <div className="tab-pane" id="tab-3">
              {/* Notification START */}
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Notifications Settings</h5>
                </div>
                {/* Card body */}
                <div className="card-body">
                  {/* General nofification */}
                  <h6 className="mb-2">Choose type of notifications you want to receive</h6>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy12" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy12">Withdrawal activity</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy2" />
                    <label className="form-check-label" htmlFor="checkPrivacy2">Weekly report</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy3" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy3">Password change</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy4" />
                    <label className="form-check-label" htmlFor="checkPrivacy4">Play sound on a message</label>
                  </div>
                  {/* Instructor notification */}
                  <h6 className="mb-2 mt-4">Instructor Related Notification</h6>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy11" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy5">Joining new instructors</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy5" />
                    <label className="form-check-label" htmlFor="checkPrivacy5">Notify when the instructorss added new courses</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy6" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy6">Notify when instructors update courses</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy7" />
                    <label className="form-check-label" htmlFor="checkPrivacy7">Course weekly report</label>
                  </div>
                  {/* Student notification */}
                  <h6 className="mb-2 mt-4">Student Related Notification</h6>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy8" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy8">Joining new student</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy9" />
                    <label className="form-check-label" htmlFor="checkPrivacy9">Notify when students purchase new courses</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy10" />
                    <label className="form-check-label" htmlFor="checkPrivacy10">Course weekly report</label>
                  </div>
                </div>
              </div>
              {/* Notification START */}
            </div>
            {/* Notification setting content END */}
            {/* Account setting content START */}
            <div className="tab-pane" id="tab-4">
              {/* Activity logs */}
              <div className="bg-light rounded-3 p-4 mb-3">
                <div className="d-md-flex justify-content-between align-items-center">
                  {/* Content */}
                  <div>
                    <h6 className="h5">Activity Logs</h6>
                    <p className="mb-1 mb-md-0">You can save your all activity logs including unusual activity detected.</p>
                  </div>
                  {/* Switch */}
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
                  </div>
                </div>
              </div>
              {/* Change password */}
              <div className="bg-light rounded-3 p-4 mb-3">
                <div className="d-md-flex justify-content-between align-items-center">
                  {/* Content */}
                  <div>
                    <h6 className="h5">Change Password</h6>
                    <p className="mb-1 mb-md-0">Set a unique password to protect your account.</p>
                  </div>
                  {/* Button */}
                  <div>
                    <a href="#" className="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#changePassword">Change Password</a>
                    <p className="mb-0 small h6">Last change 10 Aug 2020</p>
                  </div>
                </div>
              </div>
              {/* 2 Step Verification */}
              <div className="bg-light rounded-3 p-4">
                <div className="d-md-flex justify-content-between align-items-center">
                  {/* Content */}
                  <div>
                    <h6 className="h5">2 Step Verification</h6>
                    <p className="mb-1 mb-md-0">Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.</p>
                  </div>
                  {/* Switch */}
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy13" defaultChecked />
                  </div>
                </div>
              </div>
              {/* Active Logs START */}
              <div className="card border mt-4">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Active Logs</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  {/* Table START */}
                  <div className="table-responsive border-0">
                    <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                      {/* Table head */}
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 rounded-start">Browser</th>
                          <th scope="col" className="border-0">IP</th>
                          <th scope="col" className="border-0">Time</th>
                          <th scope="col" className="border-0 rounded-end">Action</th>
                        </tr>
                      </thead>
                      {/* Table body START */}
                      <tbody>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Chrome On Window</td>
                          {/* Table data */}
                          <td>173.238.198.108</td>
                          {/* Table data */}
                          <td>12 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Mozilla On Window</td>
                          {/* Table data */}
                          <td>107.222.146.90</td>
                          {/* Table data */}
                          <td>08 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Chrome On iMac</td>
                          {/* Table data */}
                          <td>231.213.125.55</td>
                          {/* Table data */}
                          <td>06 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Mozilla On Window</td>
                          {/* Table data */}
                          <td>37.242.105.138</td>
                          {/* Table data */}
                          <td>02 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                      </tbody>
                      {/* Table body END */}
                    </table>
                  </div>
                  {/* Table END */}
                </div>
                {/* Card body END */}
              </div>
              {/* Active Logs END */}
            </div>
            {/* Account setting content END */}
            {/* Social Settings content START */}
            <div className="tab-pane" id="tab-5">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom d-sm-flex justify-content-between align-items-center">
                  <h5 className="card-header-title mb-0">Social Media Settings</h5>
                  <a href="#" className="btn btn-sm btn-primary mb-0">Add new</a>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <form className="row g-4">
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-google text-google-icon me-2" />Enter google client ID</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-google text-google-icon me-2" />Enter google API</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-facebook text-facebook me-2" />Enter facebook client ID</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-facebook text-facebook me-2" />Enter facebook API</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Note */}
                    <p className="mb-0"><b>In your app set all redirect URL like:</b> <u className="text-primary">https://app.eduport.abc/google/callback</u></p>
                    {/* Button */}
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Social Settings content END */}
            {/* Email Settings content START */}
            <div className="tab-pane" id="tab-6">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title mb-0">Email Settings</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <div className="row g-4">
                    {/* Radio group items */}
                    <div className="col-xl-8">
                      <label className="form-label">Choose Email Drive</label>
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Radio */}
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail1" />
                          <label className="form-check-label" htmlFor="flexRadioEmail1">Send Mail</label>
                        </div>
                        {/* Radio */}
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail2" defaultChecked />
                          <label className="form-check-label" htmlFor="flexRadioEmail2">SMTP</label>
                        </div>
                        {/* Radio */}
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail3" />
                          <label className="form-check-label" htmlFor="flexRadioEmail3">Mail</label>
                        </div>
                      </div>
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">SMTP HOST</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6 col-xl-3">
                      <label className="form-label">SMTP Port</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6 col-xl-3">
                      <label className="form-label">SMTP Secure</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">SMTP Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">SMTP Passwod</label>
                      <input type="password" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">Email From Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">Email From Name</label>
                      <input type="email" className="form-control" />
                    </div>
                    {/* Choice item */}
                    <div className="col-lg-6">
                      <label className="form-label">Email Send To</label>
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Email Send to</option>
                        <option>All Admin</option>
                        <option>Instructors</option>
                        <option>Students</option>
                        <option>Visitors</option>
                      </select>
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">Email External Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>	
                  {/* Email Template */}
                  <div className="row g-4 mt-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Edit Email Template</h5>
                      <a href="#" className="btn btn-sm btn-primary mb-0">Add Template</a>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Welcome Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Send Email to User</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Password Change</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Unusual Login Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Password Reset Email by Admin</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Approve Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Reject Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Missing Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Submitted Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Token Purchase - Cancel by User</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Token Purchase - Order Placed</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Token Purchase - Order Successfully</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Button */}
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Email Settings content END */}
          </div>
          {/* Tab Content END */}
        </div>
        {/* Right side END */}
      </div> {/* Row END */}		
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}

   </>
  )
}

export default AdminSeating