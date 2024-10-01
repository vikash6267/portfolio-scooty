import React from "react";
import "./home.css";
import Slider from "../../components/slider/Slider";
import { Slide } from "react-awesome-reveal";
import Info from "./Info";
import Compare from "./Compare";
import one from "../../image/e1.jpg";
// import two from "../../image/e4.jpg";
import banner from "../../assests/banner.jpg";
import WroleySupport from "./WroleySupport";
import Footer from "../../components/footer/Footer";
import offer from "../../../public/assests/offer/offer.jpg";
import HighlightBanner from "./HighlistBanner";
import offer1 from "../../assests/offer1.jpg";
import offer2 from "../../assests/offer2.jpg";
import offer3 from "../../assests/offer3.jpg";
import offer4 from "../../assests/offer4.jpg";
const Home = () => {
  return (
    <>
      <Slider />
      <div className="main-container">
        <marquee className="marq" direction="left" loop="">
          <div className=" lg:text-2xl md:text-2xl xl:lg:text-2xl text-sm">
            100% Cashback For Customer After 36 Months
          </div>
        </marquee>

        <div className="flex flex-wrap w-full lg:gap-0 md:gap-0 mt-[50px] lg:-mb-48 ">
          <Slide
            direction="right"
            className="lg:w-[50%] md:w-[50%] w-full lg:mb-0  md:mb-0 mb-[50px]"
          >
            <div className="lg:h-[70%] h-full flex justify-center ">
              <img src={offer} alt="" className=" h-full" />
            </div>
          </Slide>
          <Slide
            direction="left"
            className="lg:w-[50%] md:w-[50%] w-full lg:mb-0  md:mb-0 mb-[50px]"
          >
            <div className="lg:h-[70%] h-full flex justify-center ">
              <img src={offer1} alt="" className=" h-full" />
            </div>
          </Slide>

          {/* <Slide direction="left" className="lg:w-[45%] md:w-[50%] w-full"> */}
          {/* //Oferr */}

          {/* <div className="offer-section bg-blue-300 text-center py-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
              <div className="scrolling-text">
                <h2 className="text-xl font-bold"> Offer Offer Offer </h2>
              </div> */}

          {/* <div className="my-8  max-w-xl bg-white rounded-lg shadow-lg overflow-hidden mx-2">
                <div className="my-8 max-w-xl bg-white rounded-lg shadow-lg overflow-hidden mx-2">
                  <div className="p-4">
                    <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-4">
                      Monsoon Offer
                    </h1>
                    <p className="text- lg:text-xl text-center text-gray-700 mb-4">
                      Electric Scooter Price: ₹81,000, including GST
                    </p> */}
          {/* <p className="text-lg lg:text-xl text-center text-gray-700 mb-4">GST amount will be deducted under this scheme.</p> */}
          {/* <p className="text- lg:text-xl text-center text-gray-700 mb-4">
                      Receive a <span className="font-bold">32" LED TV</span> 2
                      months after the purchase.
                    </p> */}
          {/* <p className="text- lg:text-xl text-center text-gray-700 mb-4">
                      After deducting the GST amount in this scheme, you will{" "}
                      <span className="font-bold">
                        receive 48% after 6 months.
                      </span>
                    </p>
                    <p className="text- lg:text-xl text-center text-gray-700 mb-4">
                      Amount returned by cheque
                    </p> */}
          {/* <div className="flex justify-center">
    <p className="text- lg:text-xl text-center text-gray-700 mb-4">Contact: <span className="font-bold">9064801081</span></p>
  <p className="text- lg:text-xl text-center mb-4 text-yellow-900 font-bold">Visit our showroom:</p>
  <p className="text- lg:text-xl text-center text-gray-700 mb-4">Wroley Electric Scooter Showroom, Dulla Jot Dudh Get, Khoribari, Near Paanitanki Nepal Border</p>
  </div> */}
          {/* <p className="text- lg:text-xl text-center text-gray-700 mb-4">
                      This offer is valid from 15th June 2024 to 22nd June 2024.
                    </p>
                    <p className="text- lg:text-xl text-center text-gray-700 mb-4">
                      Terms and conditions apply.
                    </p> */}
          {/* </div>
                </div>
              </div>
            </div>
          </Slide> */}
        </div>
        <HighlightBanner />

        <div>
          <p className="text-center font-bold text-3xl"> Durga Puja Offers</p>
          <div className="grid lg:grid-cols-4 p-5 gap-5">
            <img
              src={offer1}
              alt="not found"
              className="hover:rotate-90
            
            "
            />
            <img src={offer2} alt="not found" />
            <img src={offer3} alt="not found" />
            <img src={offer4} alt="not found" />
          </div>
        </div>

        <div className="here-section">
          <Slide direction="left">
            <div className="hero-first h-[600px]">
              <img src={one} className="object-cover" alt="" />
            </div>
          </Slide>
          <Slide direction="right">
            <div className="hero-second">
              <h4 className="hero-title text-xl font-bold">
                WROLEY ELECTRIC SCOOTER
              </h4>
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
              </div>
            </div>
          </Slide>
        </div>

        <div className="here-section" style={{ marginTop: "80px" }}>
          <Slide direction="left">
            <div className="hero-second">
              <h4 className="hero-title text-xl font-bold">
                WROLEY ELECTRIC SCOOTER
              </h4>
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
            <div className="hero-first lg:h-[86vh]">
              <img src={banner} alt="" />
            </div>
          </Slide>
        </div>
      </div>

      <div className="mt-5">
        <Slide direction="left">
          <WroleySupport />
        </Slide>
      </div>

      <div>
        <Slide direction="right">
          <Info />
        </Slide>
      </div>

      <div>
        <Slide direction="left">
          <Compare />
        </Slide>
      </div>

      <Footer />
    </>
  );
};

export default Home;
