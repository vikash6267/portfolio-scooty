import React from "react";
import { Slide } from "react-awesome-reveal";
import "./about.css";
import Footer from "../../components/footer/Footer";
import one from "../../image/e1.jpg";

const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="here-section">
          <Slide direction="left">
            <div className="hero-first">
              <img src={one} alt="" />
            </div>
          </Slide>
          <Slide direction="right">
            <div className="hero-second">
              <h4 className="hero-title text-xl font-bold">ABOUT US</h4>
              <h1 className="hero-heading">
                Wroley Electric Scooter: The New Electric Scooter in Delhi
              </h1>
              <p className="hero-pera">
                Welcome to Wroley Electric Scooter, where innovation meets
                sustainability in the heart of Delhi. Our electric scooters
                redefine urban commuting with cutting-edge technology and
                eco-friendly design. Experience the thrill of emission-free
                rides, contributing to a cleaner and greener cityscape. At
                Wroley Electric Scooter, we prioritize efficiency without
                compromising style, ensuring a seamless blend of performance and
                aesthetics. Say goodbye to fuel costs and high maintenance
                expenses—our scooters offer a cost-effective and eco-conscious
                solution for daily travel. As advocates of green living, we
                proudly support government incentives for electric vehicles,
                making your choice not only environmentally responsible but
                economically rewarding. Visit our showroom to test ride the
                future of urban mobility with Wroley Electric Scooter. Join us
                on the journey to a sustainable and smarter Delhi.
              </p>
              <div className="hero-div">
                <p>Call For New Electric Scooter</p>
                <h2> 9891780956</h2>
                <p>Email :</p>
                <h2>
                  <a href="mailto:info@wroleyelectricscooter.com">
                    info@wroleyelectricscooter.com
                  </a>
                </h2>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
