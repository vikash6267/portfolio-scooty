import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Servicetable = ({ data, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-center">All Service </h2>
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-500 px-4 py-2">Title</th>
            <th className="border border-gray-500 px-4 py-2">Description</th>
            <th className="border border-gray-500 px-4 py-2">Price</th>
            <th className="border border-gray-500 px-4 py-2">Range</th>
            <th className="border border-gray-500 px-4 py-2">Top Speed</th>
            <th className="border border-gray-500 px-4 py-2">Color</th>
            <th className="border border-gray-500 px-4 py-2">Image</th>
            <th className="border border-gray-500 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((offer, index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2">{offer.title}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.description}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.price}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.range}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.topspeed}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.color}</td>
              <td className="border border-gray-500 px-4 py-2">
                <img src={offer.image} alt="Offer" className="w-24 h-auto" />
              </td>
              <td className="border border-gray-500 px-4 py-2">
                <button onClick={() => onDelete(offer._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servicetable;
