"use client";

import { Search, MapPin } from "lucide-react";

const majorCities = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Pune",
  "Delhi",
  "Coimbatore",
  "Kolkata",
];

export default function Cities() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Find PGs Across India
          </h1>

          <p className="text-gray-500 mt-3">
            Search your city or choose from popular locations.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto relative mb-12">
          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search any city..."
            className="w-full border rounded-xl py-3 pl-12 pr-4 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Popular Cities */}
        <h2 className="text-2xl font-semibold mb-6">
          Popular Cities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {majorCities.map((city) => (
            <button
              key={city}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center gap-3"
            >
              <MapPin size={30} />
              <span className="font-medium">{city}</span>
            </button>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-gray-500">
          Can't find your city?
          <br />
          Search from hundreds of cities across India.
        </div>
      </div>
    </div>
  );
}