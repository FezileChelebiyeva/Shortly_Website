import React from "react";
import "./index.scss";
import foorer_logo from "../../assets/images/Shortly.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="logo">
            <img src={foorer_logo} alt="" />
          </div>
       <div className="div">
       <div className="nav">
            <nav>
              <h5>Features</h5>
              <ul>
                <li>
                  <a href="#">Link Shortening</a>
                </li>
                <li>
                  <a href="#">Branded Links</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
