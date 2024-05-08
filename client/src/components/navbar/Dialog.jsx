import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { enquiryForm } from "../../services/operations/admin";

function Dialog({ setIsOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("location", formData.location);
    enquiryForm(formDataToSend);
    setFormData({
      name: "",
      contact: "",
      location: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md mx-4 bg-gray-300 rounded-lg shadow-xl relative ">
        <div className="p-6">
          <div className="flex items-center justify-center">
            <div className="text-xl text-red-700 flex gap-3">
              Welcome To Wroley Scooter{" "}
              <FaHeart className="animate-pulse text-2xl" />
            </div>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleOnChange}
              className="block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:border-red-700"
            />
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleOnChange}
              className="block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:border-red-700"
            />
            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleOnChange}
              className="block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:border-red-700"
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
        <button
          onClick={() => console.log("Close button clicked")}
          className="absolute top-0 right-0 mt-1 mr-1 text-black bg-white rounded-full focus:outline-none"
        >
          <IoMdClose className="text-2xl" onClick={() => setIsOpen(false)} />
        </button>
      </div>
    </div>
  );
}

export default Dialog;
