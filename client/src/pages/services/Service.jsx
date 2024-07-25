import React, { useEffect, useState } from "react";
import { getAllServices } from "../../services/operations/admin";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
const Service = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getAllServices();

      if (result) {
        setServices(result);
      }
    })();
  }, []);

  return (
    <>
      <div className="card main-container">
        {service.map((currElem) => (
          <div
            className="innerCard"
            style={{ backgroundImage: "url(../../public/assests/bg.jpg)" }}
          >
            <div className="img">
              <img src={currElem?.image} alt="not found" />
            </div>
            <br />
            <br />
            <span className="font-bold text-xl whitespace-wrap">
              {currElem.title}
            </span>
            <span className="text-red-400 font-bold ">{currElem.color}</span>
            <span className="font-bold">
              Top Speed :
              <span className="text-blue-600">{currElem.topspeed}</span>{" "}
            </span>
            <br />
            <div className="border border-b-2 border-blue-700"></div>
            <br />
            <span className="font-bold">Top Range : {currElem.range}</span>
            <span className="font-bold">Price : ₹{currElem.price}</span>
            <br />
            <Link
              to="/contact"
              className="btn-grad bg-black text-white font-bold p-2 mt-2"
            >
              Contact With Us
            </Link>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Service;
