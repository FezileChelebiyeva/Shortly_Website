import React from "react";
import logo from "../../assets/images/Shortly.svg";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <header>
          <div className="logo-nav">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="btns">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
