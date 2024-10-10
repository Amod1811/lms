import React, { useState } from 'react';

const Sign_in = () => {
  // State to capture form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission (minimal change to original structure)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <br /><br /><br />
      <main>
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}
              <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                <div className="p-3 p-lg-5">
                  <div className="text-center">
                    <h2 className="fw-bold">Welcome to our largest community</h2>
                    <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                  </div>
                  <img src="assets/images/element/02.svg" className="mt-5" alt="" />
                  <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                    <ul className="avatar-group mb-2 mb-sm-0">
                      <li className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                      </li>
                      <li className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                      </li>
                      <li className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                      </li>
                      <li className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                      </li>
                    </ul>
                    <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                  </div>
                </div>
              </div>
              {/* Right Section */}
              <div className="col-12 col-lg-6 m-auto">
                <div className="row my-5">
                  <div className="col-sm-10 col-xl-8 m-auto">
                    <span className="mb-0 fs-1">👋</span>
                    <h1 className="fs-2">Login into LMS!</h1>
                    <p className="lead mb-4">Nice to see you! Please log in with your account.</p>
                    {/* Form START */}
                    <form onSubmit={handleSubmit}>
                      {/* Email Input */}
                      <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="bi bi-envelope-fill" />
                          </span>
                          <input 
                            type="email" 
                            className="form-control border-0 bg-light rounded-end ps-1" 
                            placeholder="E-mail" 
                            id="exampleInputEmail1" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Captures email input
                            required 
                          />
                        </div>
                      </div>
                      {/* Password Input */}
                      <div className="mb-4">
                        <label htmlFor="inputPassword5" className="form-label">Password *</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="fas fa-lock" />
                          </span>
                          <input 
                            type="password" 
                            className="form-control border-0 bg-light rounded-end ps-1" 
                            placeholder="password" 
                            id="inputPassword5" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} // Captures password input
                            required 
                          />
                        </div>
                        <div id="passwordHelpBlock" className="form-text">
                          Your password must be at least 8 characters long.
                        </div>
                      </div>
                      {/* Check box */}
                      <div className="mb-4 d-flex justify-content-between">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div className="text-primary-hover">
                          <a href="forgot-password.html" className="text-secondary"><u>Forgot password?</u></a>
                        </div>
                      </div>
                      {/* Submit Button */}
                      <div className="align-items-center mt-0">
                        <div className="d-grid">
                          <button className="btn btn-primary mb-0" type="submit">Login</button>
                        </div>
                      </div>
                    </form>
                    {/* Form END */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sign_in;
