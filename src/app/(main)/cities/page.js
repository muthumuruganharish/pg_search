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
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Find PGs Across India
          </h1>

          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Find verification-backed accommodations in major educational and commercial hubs.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto relative mb-16">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-colors group-focus-within:text-blue-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search any city..."
            className="w-full border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-gray-400"
          />
        </div>

        {/* Popular Cities */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
          Popular Hubs
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {majorCities.map((city) => (
            <button
              key={city}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 border border-slate-100 transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer group text-slate-800 hover:text-blue-600"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600/10 flex items-center justify-center text-blue-600 transition-colors duration-300">
                <MapPin size={24} className="stroke-[2.25]" />
              </div>
              <span className="font-semibold text-sm sm:text-base tracking-tight">{city}</span>
            </button>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center text-slate-400 text-sm">
          Can't find your city? Search from hundreds of cities across India using the search bar above.
        </div>
      </div>
    </div>
  );
}