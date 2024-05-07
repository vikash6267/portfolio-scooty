import React from 'react';
import { FaTrash } from 'react-icons/fa';

const OfferTable = ({ data, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-500 px-4 py-2">Title</th>
            <th className="border border-gray-500 px-4 py-2">Offer Name</th>
            <th className="border border-gray-500 px-4 py-2">CashBack</th>
            <th className="border border-gray-500 px-4 py-2">Color</th>
            <th className="border border-gray-500 px-4 py-2">Conditions</th>
            <th className="border border-gray-500 px-4 py-2">Image</th>
            <th className="border border-gray-500 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((offer, index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2">{offer.title}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.offerName}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.cashBack}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.color}</td>
              <td className="border border-gray-500 px-4 py-2">{offer.conditions}</td>
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

export default OfferTable;
