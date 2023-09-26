import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="div1">
      <div className="left">
        <div className="left-1"></div>
      </div>
      <div className="right">
        <div className="right-1">
          <div className="heading">
            <h3 className="create">Sign Up</h3>
          </div>
          <form>
            <div className="main">
              <div className="heading">
                <p className="no">
                  Already have an account!
                  <a href="/login.html" className="sign-up">
                    Login
                  </a>
                </p>
              </div>
              <div className="email">
                <input
                  className="email-1"
                  type="email"
                  name="username"
                  placeholder="Email address"
                  required="required"
                />
              </div>
              <div className="email">
                <div className="icons"></div>
                <input
                  className="email-1"
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  required="required"
                />
              </div>
              <div className="password">
                <input
                  className="password-1"
                  type="password"
                  name="password"
                  placeholder=" password"
                  required="required"
                />
              </div>
              <div className="button">
                <button className="button-1" type="submit">
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
