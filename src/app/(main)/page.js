/* eslint-disable @next/next/no-img-element */
"use client";
import { Search, MapPin, Home as HomeIcon, Wallet } from "lucide-react";
import Navbar from "@/app/(main)/components/Navbar";

import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [location, setLocation] = useState("");
  const [pgType, setPgType] = useState("Boys PG");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `/api/search-pg?location=${location}&type=${pgType}`,
      );

      const data = await res.json();

      

      setPlaces(data);
    } catch (err) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Find Your Perfect PG
            <br />
            in Minutes
          </h1>

          <p className="text-gray-200 text-lg mt-6 max-w-2xl">
            Discover verified PGs, hostels and co-living spaces across India.
          </p>

          {/* Search Box */}
          <div className="mt-12 w-full max-w-6xl">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <div className="grid md:grid-cols-[1.7fr_1.7fr_1fr_auto] gap-4 items-stretch">
                <div className="bg-white/10 rounded-2xl border border-white/20 p-5 flex items-center gap-3">
                  <MapPin className="text-white" />

                  <div className="text-left flex-1">
                    <p className="text-gray-300 text-sm">Location</p>
                    <input
                      type="text"
                      placeholder="Enter city or locality"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent outline-none text-white placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl border border-white/20 p-5 flex items-center gap-3">
                  <HomeIcon className="text-white" />
                  <div className="text-left flex-1">
                    <p className="text-gray-300 text-sm">PG Type</p>

                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => setPgType("Boys PG")}
                        className={`px-3 cursor-pointer py-1 rounded-full text-white text-sm ${
                          pgType === "Boys PG"
                            ? "bg-blue-600"
                            : "bg-white/10 border border-white/20"
                        }`}
                      >
                        Boys
                      </button>
                      <button
                        onClick={() => setPgType("Girls PG")}
                        className={`px-3 cursor-pointer py-1 rounded-full text-white text-sm ${
                          pgType === "Girls PG"
                            ? "bg-blue-600"
                            : "bg-white/10 border border-white/20"
                        }`}
                      >
                        Girls
                      </button>
                      <button
                        onClick={() => setPgType("Co-Living")}
                        className={`px-3 cursor-pointer py-1 rounded-full text-white text-sm ${
                          pgType === "Co-Living"
                            ? "bg-blue-600"
                            : "bg-white/10 border border-white/20"
                        }`}
                      >
                        Co-Living
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl border border-white/20 p-5 flex items-center gap-3">
                  <Wallet className="text-white" />
                  <div className="text-left flex-1">
                    <p className="text-gray-300 text-sm">Budget</p>
                    <input
                      type="text"
                      placeholder="₹5000 - ₹10000"
                      className="w-full bg-transparent outline-none text-white placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className={`rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-2 px-8 h-full ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      Search
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/*  */}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-5xl">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h2 className="text-white text-4xl font-bold">5000+</h2>
              <p className="text-gray-300">PG Listings</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h2 className="text-white text-4xl font-bold">10K+</h2>
              <p className="text-gray-300">Happy Users</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h2 className="text-white text-4xl font-bold">50+</h2>
              <p className="text-gray-300">Cities</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h2 className="text-white text-4xl font-bold">24/7</h2>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PGS */}
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured PGs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
                  alt="pg"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">Premium Boys PG</h3>

                  <p className="text-gray-500 mt-2">📍 Velachery, Chennai</p>

                  <div className="flex gap-3 mt-4 text-sm">
                    <span>📶 WiFi</span>
                    <span>🍽 Food</span>
                    <span>❄ AC</span>
                  </div>

                  <div className="flex justify-between mt-5">
                    <span className="text-blue-600 font-bold">
                      ₹7,500/month
                    </span>

                    <span>⭐ 4.8</span>
                  </div>

                  <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       */}
      {places.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Search Results
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {places.map((pg) => {
                const imageUrl = pg.photoReference
                  ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photo_reference=${pg.photoReference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
                  : "https://via.placeholder.com/400x250?text=No+Image";

                return (
                  <div  key={pg.place_id} >
                    <div
                     
                      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={pg.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                        />

                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                          ⭐ {pg.rating || "NA"}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-slate-900 line-clamp-2 min-h-[60px]">
                          {pg.name}
                        </h3>

                        <p className="text-gray-500 mt-3 flex items-start gap-2 text-sm">
                          <span>📍</span>
                          <span className="line-clamp-2">{pg.address}</span>
                        </p>

                        <div className="flex items-center justify-between mt-6">
                          <span className="text-green-600 font-semibold">
                            Verified PG
                          </span>

                          <Link href={`/pg/${pg.place_id}?location=${location}&type=${pgType}`}>
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                              View Details
                            </button>
                          </Link>


                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {/* POPULAR CITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Popular Cities
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-slate-900">
            {["Chennai", "Bangalore", "Hyderabad", "Coimbatore"].map((city) => (
              <div
                key={city}
                className="bg-slate-100 rounded-3xl p-10 text-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-xl font-bold">Verified Listings</h3>

              <p className="mt-4 text-gray-600">
                Every PG is manually verified before appearing on our platform.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl border border-white/20 p-5">
              <p className="text-gray-300 text-sm mb-2">Budget</p>

              <input
                type="number"
                placeholder="₹5000"
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-300"
              />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-xl font-bold">Trusted Reviews</h3>

              <p className="mt-4 text-gray-600">
                Read genuine reviews from verified tenants.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-100 p-8 rounded-3xl">
              <p>"Found my PG within 2 days. The process was very smooth."</p>

              <h4 className="mt-5 font-bold">- Harish, Chennai</h4>
            </div>

            <div className="bg-slate-100 p-8 rounded-3xl">
              <p>"Lots of verified PGs with genuine reviews."</p>

              <h4 className="mt-5 font-bold">- Arun, Bangalore</h4>
            </div>

            <div className="bg-slate-100 p-8 rounded-3xl">
              <p>"Easy to compare PGs and contact owners."</p>

              <h4 className="mt-5 font-bold">- Priya, Coimbatore</h4>
            </div>
          </div>
        </div>
      </section>
      

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">PG Finder</h2>

          <p className="mt-4 text-gray-400">
            Find the best PGs and hostels across India.
          </p>

          <p className="mt-8 text-gray-500">
            © 2026 PG Finder. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
