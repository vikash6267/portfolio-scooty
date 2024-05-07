import React, { useEffect, useState } from "react";
import { getAllOffer,deleteOffer } from "../../../services/operations/admin";
import OfferTable from "./Offertable";
const AllOffer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getAllOffer();

      // console.log(result);


      if (result) {
        setOffers(result)
console.log(offers)
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const deletOffer = async (scootyId) => {
    try {
      await deleteOffer(scootyId);
      const updatedOffers = offers.filter((offer) => offer._id !== scootyId);
      setOffers(updatedOffers);
    } catch (error) {
      console.error("Failed to delete offer: ", error);
    }
  };
  
  return <div>

  <div>

    <h1>All Offers List </h1>


    <div>

    <OfferTable data={offers} onDelete={deletOffer} />

    </div>
  </div>

  </div>;
};

export default AllOffer;
