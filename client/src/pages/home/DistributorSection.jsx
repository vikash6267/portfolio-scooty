import React from "react";

export default function DistributorSection() {
  return (
    <section className="py-10 px-5 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Distributor Categories & Special Offers
        </h2>

        {/* Distributor Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { price: "₹25,00,000", label: "Premium Distributor" },
            { price: "₹1,50,000", label: "Gold Distributor" },
            { price: "₹75,000", label: "Silver Distributor" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {item.label}
              </h3>
              <p className="text-2xl font-bold text-purple-600 mt-3">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Scooter Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Scooter Price
          </h3>
          <p className="text-3xl font-bold text-pink-600 mt-2">₹99,000</p>
          <p className="text-sm text-gray-500 italic mt-1">*Conditions Apply</p>

          <p className="mt-4 text-lg font-medium text-gray-700">
            Scooter kharidne par bahut saara{" "}
            <span className="text-purple-600">Upahar</span> paaye aur saath mai{" "}
            <span className="text-green-600 font-semibold">Cashback</span> bhi:
          </p>

          <div className="flex justify-center gap-4 mt-4 font-bold text-gray-700">
            <span className="bg-purple-100 px-3 py-1 rounded-lg">100%</span>
            <span className="bg-purple-100 px-3 py-1 rounded-lg">80%</span>
            <span className="bg-purple-100 px-3 py-1 rounded-lg">70%</span>
            <span className="bg-purple-100 px-3 py-1 rounded-lg">40%</span>
          </div>
          <p className="text-sm text-gray-500 italic mt-1">*Conditions Apply</p>
        </div>

        {/* Gift Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Gift 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              🎁 Upahar Number One
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Double Bed Palang</li>
              <li>• 5 Seater Sofa</li>
              <li>• Centre Table</li>
              <li>• Dressing Table</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-3">
              *Conditions Apply
            </p>
          </div>

          {/* Gift 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              🎁 Upahar Number Two
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Fridge 175 Ltr</li>
              <li>• TV 32inch Smart LED</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-3">
              *Conditions Apply
            </p>
          </div>

          {/* Gift 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              🎁 Upahar Number Three
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>• 7 Gram Gold Jewellery</li>
              <li>• 9 Carat Gold (BIS) Hallmark</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-3">
              *Conditions Apply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
