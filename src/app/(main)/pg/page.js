"use client";
import { Suspense, useEffect, useState } from "react";
import { MapPin, Star, Home } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Pg() {
  const [pg, setPg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const type = searchParams.get("type");

  useEffect(() => {
    const fetchPgs = async () => {
      // Coming from Popular Cities
      if (location) {
        const res = await fetch(`/api/search-pg?location=${location}&type=PG`);

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

          const res = await fetch(`/api/nearby-pg?lat=${lat}&lng=${lng}`);

          const data = await res.json();
          setPg(data);
          setLoading(false);
        },
        () => {
          setError("Location permission denied");
          setLoading(false);
        },
      );
    };

    fetchPgs();
  }, [location]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-10 text-center">
        <div className="bg-red-50 text-red-600 p-6 rounded-3xl inline-block max-w-md">
          <p className="font-semibold text-lg">Error Loading PGs</p>
          <p className="text-sm mt-1">
            {error}. Please enable location permissions or search for a city
            directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-16">
      {/* PG Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-2">
          <span className="w-1.5 h-7 bg-blue-600 rounded-full inline-block"></span>
          {location ? `Verified PGs in ${location}` : "Verified PGs Near You"}
        </h1>

        {pg.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-lg">
              No PG listings found in this location.
            </p>
            <Link href="/cities">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer">
                Browse Cities
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pg.map((item) => {
              const imgUrl = item.photoReference
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${item.photoReference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
                : "https://picsum.photos/600/400";

              return (
                <div
                  key={item.place_id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 border border-slate-100 transition-all duration-300 flex flex-col group h-full"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56 w-full shrink-0">
                    <img
                      src={imgUrl}
                      alt={item.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                      <Star
                        className="text-yellow-500 fill-yellow-500"
                        size={14}
                      />
                      {item.rating || "N/A"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                     
                      <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-md">
                        Verified
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </h2>

                    <div className="flex items-start gap-2 text-slate-500 mt-3 text-sm flex-grow">
                      <MapPin
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-slate-400"
                      />
                      <span className="line-clamp-2">{item.address}</span>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-2">
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Home size={14} />
                        <span>{item.reviews || 0} Reviews</span>
                      </div>

                      <Link
                        href={`/pg/${item.place_id}?location=${encodeURIComponent(item.address)}&type=PG`}
                      >
                        <button className="bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer active:scale-95">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function pgPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      }
    >
      <Pg />
    </Suspense>
  );
}
