import React from "react";
import "./home.css";
import Slider from "../../components/slider/Slider";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <Slider />
        <marquee className="marq" direction="left" loop="">
          <div className="">New Year 2024 Offer 100%* Cashback</div>
        </marquee>

        <div className="here-section">
          <Slide direction="left">
            <div className="hero-first">
              <img
                src="https://static.wixstatic.com/media/298fd7_b8678a927a0f4c4d90c3d0193a5032b4~mv2.gif"
                alt=""
              />
            </div>
          </Slide>
          <Slide direction="right">
            <div className="hero-second">
              <h4 className="hero-title">WROLEY ELECTRIC SCOOTER</h4>
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
                <h2>+91-9891780956</h2>
              </div>
            </div>
          </Slide>
        </div>

        <div className="here-section" style={{ marginTop: "80px" }}>
          <Slide direction="left">
            <div className="hero-second">
              <h4 className="hero-title">WROLEY ELECTRIC SCOOTER</h4>
              <h1 className="hero-heading">
                Wroley Electric Scooter: The New Electric Scooter in Delhi
              </h1>
              <ul>
                <li>
                  Eco-Friendly Innovation: Our electric scooters are designed
                  with a commitment to sustainability. By choosing Wroley
                  Electric Scooter, you're not just choosing a mode of
                  transportation; you're choosing a greener future for Delhi.
                </li>
                <li>
                  Efficient Performance: Experience the power and efficiency of
                  our electric scooters. Navigating through the city has never
                  been smoother, and with zero emissions, you'll be contributing
                  to a healthier environment with every ride.
                </li>
                <li>
                  Modern and Stylish Design: We believe that sustainability
                  should not compromise style. Our scooters boast a modern and
                  stylish design, ensuring that you turn heads on the road while
                  making a positive impact.
                </li>
              </ul>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="hero-first">
              <img
                src="https://thumbs.dreamstime.com/b/why-choose-us-symbol-concept-word-beautiful-white-paper-orange-table-background-business-motivational-copy-space-299736448.jpg"
                alt=""
              />
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Home;
