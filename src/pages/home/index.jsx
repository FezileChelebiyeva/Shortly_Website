import React from "react";
import "./index.scss";
import compImg from "../../assets/images/working_with_computer.png";
import icon from "../../assets/images/icon.png";
import icon2 from "../../assets/images/icon-brand.svg";
import icon3 from "../../assets/images/icon-detailed.svg";
import Input from "../../components/input";
const HomePage = () => {
  return (
    <div id="home-page">
      <div className="container">
        <section className="about-text">
          <div className="text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
          <div className="img">
            <img src={compImg} alt="" />
          </div>
        </section>
      </div>
      <Input />
      <div id="advanced-statistics">
        <div className="container">
          <section className="advanced-statistics">
            <div className="head">
              <h1>Advanced Statistics</h1>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="line"></div>
            <div className="boxes">
              <div className="card">
                <div className="circle">
                  <img src={icon2} alt="" />
                </div>
                <h1>Brand Recognition</h1>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className="card">
                <div className="circle">
                  <img src={icon3} alt="" />
                </div>
                <h1>Detailed Records</h1>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div className="card">
                <div className="circle">
                  <img src={icon} alt="" />
                </div>
                <h1>Fully Customizable</h1>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="your-links">
        <div className="container">
          <div>
            <h1>Boost your links today</h1>
            <button>Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
