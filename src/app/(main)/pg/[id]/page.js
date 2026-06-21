import Link from "next/link";

export default async function PgDetails({ params, searchParams }) {
  const { id } = await params;
  const { location, type } = await searchParams;


  const res = await fetch(`http://localhost:3000/api/pg/${id}`, {
    cache: "no-store",
  });

  const recommendedRes = await fetch(
    `http://localhost:3000/api/search-pg?location=${encodeURIComponent(location)}&type=${encodeURIComponent(type)}
  
  }`,
    {
      cache: "no-store",
    },
  );

  const pg = await res.json();
   const recommendedPg = await recommendedRes.json();
  

  const relatedPg = recommendedPg.filter((item) => item.place_id !== id);
  
  console.log("Recommended PGs:", recommendedPg);
console.log("Count:", recommendedPg.length);

  const img = pg.photos?.[0];
  const coverPhotoUrl = img
    ? `https://places.googleapis.com/v1/${img.name}/media?maxHeightPx=800&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    : null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/*----------LEFT SIDE----------- */}
        <div className="lg:col-span-2">
          {/* Cover Image */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-[450px] overflow-hidden">
              {coverPhotoUrl ? (
                <img
                  src={coverPhotoUrl}
                  alt={pg.displayName?.text}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-gray-200">
                  No Image Available
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">{pg.displayName?.text}</h1>

                <div className="bg-yellow-100 px-4 py-2 rounded-full font-semibold">
                  ⭐ {pg.rating}
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-lg">
                📍 {pg.formattedAddress}
              </p>

              <p className="mt-3 text-lg">📞 {pg.nationalPhoneNumber}</p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                Contact PG
              </button>
            </div>
          </div>
          {/* Reviews */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Reviews</h2>

              <span className="text-sm text-gray-500">
                {pg.reviews?.length || 0} Reviews
              </span>
            </div>

            <div className="space-y-5">
              {pg.reviews?.slice(0, 5).map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                        {review.authorAttribution?.displayName?.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg">
                          {review.authorAttribution?.displayName}
                        </h3>

                        <p className="text-sm text-gray-500">
                          Verified Resident
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                      ⭐ {review.rating}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {review.text?.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*-------------Right Side---------- */}

        <div className="sticky top-24 h-fit">
          <h2 className="text-2xl font-bold mb-6">Similar PGs</h2>

          <div className="space-y-4">
            {relatedPg.slice(0, 6).map((item) => (
              <Link
                key={item.place_id}
                href={`/pg/${item.place_id}?location=${location}&pgType=${type}`}
              >
                <div className="flex gap-3 bg-white p-3 rounded-xl shadow hover:shadow-lg cursor-pointer">
                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.photoReference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                    alt={item.name}
                    className="w-32 h-24 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-sm">{item.name}</h3>

                    <p className="text-xs text-gray-500">⭐ {item.rating}</p>

                    <p className="text-xs text-gray-500 line-clamp-2">
                      {item.address}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>


    
  );
}
