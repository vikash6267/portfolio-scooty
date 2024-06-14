import React from "react";
import "./home.css";
import Slider from "../../components/slider/Slider";
import { Slide } from "react-awesome-reveal";
import Info from "./Info"
import Compare from "./Compare";
import one from "../../../public/assests/about.png"
import WroleySupport from "./WroleySupport";
import Footer from "../../components/footer/Footer";
import offer from "../../../public/assests/offer/offer.jpg"
import HighlightBanner from "./HighlistBanner";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="main-container">
        <marquee className="marq" direction="left" loop="">
          <div className=" lg:text-2xl md:text-2xl xl:lg:text-2xl text-sm">100% Cashback For Customer After 36 Months</div>
        </marquee>


    <div className="flex flex-wrap w-full lg:gap-0 md:gap-0 mt-[50px] " >
    <Slide direction="right" className="lg:w-[50%] md:w-[50%] w-full lg:mb-0  md:mb-0 mb-[50px]">
<div className="lg:h-[70%] flex justify-center ">
<img src={offer} alt="" className=" h-full" />
</div>
</Slide>


        <Slide direction="left" className="lg:w-[45%] md:w-[50%] w-full">
{/* //Oferr */}
<div className="offer-section bg-blue-300 text-center py-4">
          <h2 className="text-3xl font-bold">Monsoon Offer</h2>
          <p className="text-xl mt-2">25000 में इलेक्ट्रिक स्कूटर खरीदने का मौका पाएं</p>
          <p className="text-xl mt-2">संपर्क करें 9064801081 पर</p>
          <p className="text-xl mt-2">हमारे शोरूम में अवश्य पधारें</p>
          <p className="text-xl mt-2">Wroley Electric Scooter Showroom, Dulla Jot Dudh Get, Khoribari, Near Paanitanki Nepal Border</p>
          <p className="text-xl mt-2">यह ऑफर 15 जून 2024 से 22 जून 2024 तक वैध है</p>
          <p className="text-xl mt-2">Terms and Conditions Apply</p>
        </div>

</Slide>

    </div>

    <HighlightBanner />

        <div className="here-section">
          <Slide direction="left">
            <div className="hero-first">
              <img
                src={one}
                className="rotate-12 shadow-2xl"
                alt=""
              />
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
                <h2>+91-9891780956</h2>
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
            <div className="hero-first">
              <img
                src="https://thumbs.dreamstime.com/b/why-choose-us-symbol-concept-word-beautiful-white-paper-orange-table-background-business-motivational-copy-space-299736448.jpg"
                alt=""
              />
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
