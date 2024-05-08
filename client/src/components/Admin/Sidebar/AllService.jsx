import React, { useEffect, useState } from "react";
import {
  getAllServices,
  deleteService,
} from "../../../services/operations/admin";
import Servicetable from "./Servicetable";
const AllService = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getAllServices();

      // console.log(result);

      if (result) {
        setServices(result);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletOffer = async (scootyId) => {
    try {
      await deleteService(scootyId);
      const updatedOffers = service.filter((ser) => ser._id !== scootyId);
      setServices(updatedOffers);
    } catch (error) {
      console.error("Failed to delete Services: ", error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <Servicetable data={service} onDelete={deletOffer} />
        </div>
      </div>
    </div>
  );
};

export default AllService;
