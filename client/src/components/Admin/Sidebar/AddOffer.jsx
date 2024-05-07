import React, { useState } from "react";
import { addOffer } from "../../../services/operations/admin";
import { useSelector } from "react-redux";
const AddOffer = () => {
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: "",
    offerName: "",
    cashBack: "",
    color: "",
    conditions: "",
    image: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addOffer(formData, token);
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
              type="file"
              name="thumbnailImage"
              placeholder="img"
              value={formData.image}
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
