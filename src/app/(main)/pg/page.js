"use client";
import { useEffect, useState } from "react";
import { MapPin, Search, Star, Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pg() {
  const [pg, setPg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const type=searchParams.get("type")

  useEffect(() => {
  const fetchPgs = async () => {

    // Coming from Popular Cities
    if (location) {
      const res = await fetch(
        `/api/search-pg?location=${location}&type=PG`
      );

      const data = await res.json();
      setPg(data);
      setLoading(false);

      return; // stop here
    }

    // Coming from Navbar PGs
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const res = await fetch(
          `/api/nearby-pg?lat=${lat}&lng=${lng}`
        );

        const data = await res.json();
        setPg(data);
        setLoading(false);
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      }
    );
  };

  fetchPgs();
}, [location]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-b-2 border-blue-500 rounded-full"></div>
      </div>
    );
  }
  console.log("pg state", pg);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* PG Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pg.map((pg) => {
            const imgUrl = pg.photoReference
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${pg.photoReference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
              : "https://picsum.photos/600/400";

            return (
              <div
                key={pg.place_id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
              >
                {/* Image */}
                <img
                  src={imgUrl}
                  alt={pg.name}
                  className="h-56 w-full object-cover"
                />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                      {pg.type}
                    </span>

                    <div className="flex items-center gap-1">
                      <Star
                        className="text-yellow-500 fill-yellow-500"
                        size={18}
                      />
                      <span className="font-semibold">{pg.rating}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800">{pg.name}</h2>

                  <div className="flex items-start gap-2 text-gray-500 mt-2">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span className="line-clamp-2">{pg.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Home size={16} />
                    <span>{pg.reviews} Reviews</span>
                  </div>

                  <p className="text-xl font-bold text-blue-600">{pg.price}</p>

                  <div className="mt-auto pt-4  ">
                    <Link
                      href={`/pg/${pg.place_id}?location=${encodeURIComponent(pg.address)}&type=PG`}
                    >
                      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
