import React from 'react'
import { Link } from 'react-router-dom'

const StudentQuiz = () => {
  return (
  <div>
  {/* =======================
Page Banner START */}
  <section className="pt-0">
    <div className="container-fluid px-0">
      <div className="card bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div>
    </div>
    <div className="container mt-n4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
            <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
              {/* Avatar */}
              <div className="col-auto">
                <div className="avatar avatar-xxl position-relative mt-n3">
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/09.jpg" alt />
                  <span className="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
                </div>
              </div>
              {/* Profile info */}
              <div className="col d-sm-flex justify-content-between align-items-center">
                <div>
                  <h1 className="my-1 fs-4">Lori Stevens</h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">255</span>
                      <span className="text-body fw-light">points</span>
                    </li>
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">7</span>
                      <span className="text-body fw-light">Completed courses</span>
                    </li>
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">52</span>
                      <span className="text-body fw-light">Completed lessons</span>
                    </li>
                  </ul>
                </div>
                {/* Button */}
                <div className="mt-2 mt-sm-0">
                  <a href="student-course-list.html" className="btn btn-outline-primary mb-0">View my courses</a>
                </div>
              </div>
            </div>
          </div>
          {/* Advanced filter responsive toggler START */}
          {/* Divider */}
          <hr className="d-xl-none" />
          <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
            <a className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
            <button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
              <i className="fas fa-sliders-h" />
            </button>
          </div>
          {/* Advanced filter responsive toggler END */}
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}
  {/* =======================
Page content START */}
  <section className="pt-0">
    <div className="container">
      <div className="row">
        {/* Left sidebar START */}
        <div className="col-xl-3">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
            {/* Offcanvas header */}
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            {/* Offcanvas body */}
            <div className="offcanvas-body p-3 p-xl-0">
              <div className="bg-dark border rounded-3 p-3 w-100">
                {/* Dashboard menu */}
                <div className="list-group list-group-dark list-group-borderless collapse-list">
                  <Link className="list-group-item" to="/studentdashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/studentsubscription"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</Link>
                  <Link className="list-group-item" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/studentresume"><i className="far fa-fw fa-file-alt me-2" />Course Resume</Link>
                  <Link className="list-group-item active" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/studentpaymentinfo"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment Info</Link>
                  <Link className="list-group-item" to="/studentbookmark"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</Link>
                  <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                 {/* <Link className="list-group-item" to="/studentpayout"><i className="bi bi-pencil-square fa-fw me-2" />Payout</Link>  */}
                  <Link className="list-group-item" to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/studentdeleteaccount"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                  {/* Collapse menu */}
                  <a className="list-group-item" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                    <i className="bi bi-lock fa-fw me-2" />Dropdown level
                  </a>
                  {/* Submenu */}
                  <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                    <li className="nav-item"> <a className="nav-link" href="#">Dropdown item</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Dropdown item</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-xl-9">
          {/* Course item START */}
          <div className="card border">
            <div className="card-header border-bottom">
              {/* Course list START */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img src="assets/images/courses/4by3/01.jpg" className="rounded-2" alt="Card image" />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          {/* Title */}
                          <h3 className="card-title"><a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course list END */}
            </div>
            <div className="card-body">
              {/* Step content START */}
              <div className="card bg-transparent border rounded-3 mb-1">
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
                        </div>
                      </div>
                      <div className="line" />
                      {/* Step 2 */}
                      <div className="step" data-target="#step-2">
                        <div className="d-grid text-center align-items-center">
                          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                            <span className="bs-stepper-circle">2</span>
                          </button>
                        </div>
                      </div>
                      <div className="line" />
                      {/* Step 3 */}
                      <div className="step" data-target="#step-3">
                        <div className="d-grid text-center align-items-center">
                          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                            <span className="bs-stepper-circle">3</span>
                          </button>
                        </div>
                      </div>
                      <div className="line" />
                      {/* Step 4 */}
                      <div className="step" data-target="#step-4">
                        <div className="d-grid text-center align-items-center">
                          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
                            <span className="bs-stepper-circle">4</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Step Buttons END */}
                  </div>
                  {/* Card body START */}
                  <div className="card-body">
                    <h6 className="text-danger text-end mb-0"><i className="bi bi-clock-history me-2" />Time Left: 00:01:30</h6>
                    {/* Step content START */}
                    <div className="bs-stepper-content">
                      <form>
                        {/* Step 1 content START */}
                        <div id="step-1" role="tabpanel" className="content fade" aria-labelledby="steppertrigger1">
                          {/* Title */}
                          <h4>How do you protect your business against cyber-crime?</h4>
                          <hr /> {/* Divider */}
                          <div className="vstack gap-2">
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option1" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option1">We have cybersecurity insurance coverage</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option2" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option2">Our dedicated staff will protect us</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option3" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option3">We give regular training for best practices</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option4" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option4">Third-party vendor protection</label>
                            </div>
                          </div>
                          {/* Step 1 button */}
                          <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-primary next-btn mb-0">Next question</button>
                          </div>
                        </div>
                        {/* Step 1 content END */}
                        {/* Step 2 content START */}
                        <div id="step-2" role="tabpanel" className="content fade" aria-labelledby="steppertrigger2">
                          {/* Title */}
                          <h4>What is SEO?</h4>
                          <hr /> {/* Divider */}
                          <div className="vstack gap-2">
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option11" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option11">We have cybersecurity insurance coverage</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option22" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option22">Our dedicated staff will protect us</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option33" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option33">We give regular training for best practices</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option44" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option44">Third-party vendor protection</label>
                            </div>
                          </div>
                          {/* Next button */}
                          <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-primary next-btn mb-0">Next question</button>
                          </div>
                        </div>
                        {/* Step 2 content END */}
                        {/* Step 3 content START */}
                        <div id="step-3" role="tabpanel" className="content fade" aria-labelledby="steppertrigger3">
                          {/* Title */}
                          <h4>Who should join this course?</h4>
                          <hr /> {/* Divider */}
                          <div className="vstack gap-2">
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option111" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option111">We have cybersecurity insurance coverage</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option222" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option222">Our dedicated staff will protect us</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option333" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option333">We give regular training for best practices</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option444" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option444">Third-party vendor protection</label>
                            </div>
                          </div>
                          {/* Next button */}
                          <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-primary next-btn mb-0">Next question</button>
                          </div>
                        </div>
                        {/* Step 3 content END */}
                        {/* Step 4 content START */}
                        <div id="step-4" role="tabpanel" className="content fade" aria-labelledby="steppertrigger4">
                          {/* Title */}
                          <h4>What are the T&amp;C for this program?</h4>
                          <hr /> {/* Divider */}
                          <div className="vstack gap-2">
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option1111" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option1111">We have cybersecurity insurance coverage</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option2222" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option2222">Our dedicated staff will protect us</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option3333" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option3333">We give regular training for best practices</label>
                            </div>
                            {/* Feed ques item */}
                            <div>
                              <input type="radio" className="btn-check" name="ques" id="option4444" />
                              <label className="btn btn-outline-primary w-100" htmlFor="option4444">Third-party vendor protection</label>
                            </div>
                          </div>
                          {/* Next button */}
                          <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-success next-btn mb-0">View result</button>
                          </div>
                        </div>
                        {/* Step 4 content END */}
                      </form>
                    </div>
                  </div>
                  {/* Card body END */}
                </div>
              </div>		
            </div>
          </div>
          {/* Course item END */}
        </div>
        {/* Main content END */}
      </div> {/* Row END */}
    </div>	
  </section>
  {/* =======================
Page content END */}
</div>

  )
}

export default StudentQuiz
