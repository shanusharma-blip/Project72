import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="div1">
      <div className="left">
        <div className="left-1"></div>
      </div>
      <div className="right">
        <div className="right-1">
          <div className="heading">
            <h3 className="create">Login</h3>
          </div>
          <form>
            <div className="main">
              <div className="heading">
                <p className="no">
                  Don'have an account?
                  <a href="/sign.html" className="sign-up">
                    Sign up
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
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
