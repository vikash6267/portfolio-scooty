import React, { useEffect, useState } from "react";
import { getAllOffer } from "../../../services/operations/admin";

const AllOffer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getAllOffer();

      console.log(result);
      if (result) {
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default AllOffer;
