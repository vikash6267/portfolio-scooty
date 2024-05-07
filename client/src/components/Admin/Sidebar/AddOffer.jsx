import React, { useState } from "react";
import { addOffer } from "../../../services/operations/admin";
import { useDispatch, useSelector } from "react-redux";

const AddOffer = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: "",
    offerName: "",
    cashBack: "",
    color: "",
    conditions: "",
    image: null, // Initialize image as null
  });

  const handleOnChange = (e) => {
    if (e.target.name === "image") {
      // Set image property to the File object
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
      }));
    } else {
      // For other fields, update formData as usual
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("offerName", formData.offerName);
    formDataToSend.append("cashBack", formData.cashBack);
    formDataToSend.append("color", formData.color);
    formDataToSend.append("conditions", formData.conditions);
    formDataToSend.append("image", formData.image);

    // Call addOffer with the FormData object and token
    addOffer(formDataToSend, token);
  };



  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center mt-10 ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-5 p-10 bg-slate-200 rounded"
        >
          <div className="grid grid-cols-2  gap-10 items-center">
            <input
              type="text"
              name="title"
              placeholder="Enter your title"
              value={formData.title}
              onChange={handleOnChange}
              className="p-5 bg-transparent outline-2 outline-gray-400 outline-none rounded"
            />
            <input
              id="image"
              type="file"
              accept=".png, .jpg, .jpeg"
              name="image"
              placeholder="img"
              // value={formData.image}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-1">
            <input
              type="text"
              placeholder="Write your offer name"
              name="offerName"
              value={formData.offerName}
              onChange={handleOnChange}
              className="p-5 bg-transparent outline-2 outline-gray-400 outline-none rounded"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <input
              type="text"
              placeholder="Write your cashback"
              name="cashBack"
              value={formData.cashBack}
              onChange={handleOnChange}
              className="p-5 bg-transparent outline-2 outline-gray-400 outline-none rounded"
            />
          </div>
          <div className="grid grid-cols-1">
            <input
              type="text"
              placeholder="Write your color"
              name="color"
              value={formData.color}
              onChange={handleOnChange}
              className="p-5 bg-transparent outline-2 outline-gray-400 outline-none rounded"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <input
              type="text"
              placeholder="Write your conditions"
              name="conditions"
              value={formData.conditions}
              className="p-5 bg-transparent outline-2 outline-gray-400 outline-none rounded"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="bg-blue-500 p-3 rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddOffer;
