import React, { useEffect, useState } from "react";
import { getAllServices } from "../../services/operations/admin";

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
      <div className=" card main-container ">
        {service?.map((currElem) => (
          <div className="innerCard" key={currElem._id}>
            <div className="img">
              <img src={currElem?.image} alt="not found" />
            </div>
            <br />
            <br />
            <span className="font-bold text-xl text-wrap object-contain">
              {currElem.description}
            </span>
            <span className="text-red-400 font-bold ">{currElem.color}</span>
            <span className="font-bold">
              Top Speed :
              <span
                className="text-blue-600  "
              >
                {currElem.topspeed}
              </span>{" "}
            </span>
            <br />
            <hr />
            <br />
            <span className="font-bold">Top Range : {currElem.range}</span>
            <span className="font-bold">Price : ₹{currElem.price}</span>
            <button className="bg-black text-white font-bold p-2 mt-2">
              Contact With Us
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
