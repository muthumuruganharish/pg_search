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

  const img = pg.photos?.[0];
  const coverPhotoUrl = img
    ? `https://places.googleapis.com/v1/${img.name}/media?maxHeightPx=800&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    : null;

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/*----------LEFT SIDE----------- */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cover Image */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
                {coverPhotoUrl ? (
                  <img
                    src={coverPhotoUrl}
                    alt={pg.displayName?.text}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-slate-100 text-slate-400">
                    No Image Available
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {pg.displayName?.text}
                  </h1>

                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 self-start shrink-0">
                    ⭐ {pg.rating || "N/A"}
                  </div>
                </div>

                <p className="mt-6 text-slate-600 sm:text-lg flex items-start gap-2">
                  <span className="text-slate-400 mt-1 shrink-0">📍</span>
                  <span>{pg.formattedAddress}</span>
                </p>

                <p className="mt-3 sm:text-lg text-slate-600 flex items-center gap-2">
                  <span className="text-slate-400 shrink-0">📞</span>
                  <span>{pg.nationalPhoneNumber || "Not Available"}</span>
                </p>

                <button className="mt-8 w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/25 cursor-pointer">
                  Contact PG
                </button>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                  Reviews
                </h2>

                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                  {pg.reviews?.length || 0} Total Reviews
                </span>
              </div>

              <div className="space-y-5">
                {pg.reviews?.slice(0, 5).map((review, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                          {review.authorAttribution?.displayName?.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                            {review.authorAttribution?.displayName}
                          </h3>

                          <p className="text-xs sm:text-sm text-emerald-600 font-medium">
                            Verified Resident
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-yellow-500 font-bold bg-white px-2 py-1 rounded-lg shadow-sm border border-slate-100 w-fit">
                        ⭐ {review.rating}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {review.text?.text}
                    </p>
                  </div>
                ))}

                {(!pg.reviews || pg.reviews.length === 0) && (
                  <p className="text-slate-500 italic">No reviews yet for this property.</p>
                )}
              </div>
            </div>
          </div>

          {/*-------------Right Side---------- */}
          <div className="lg:sticky lg:top-24 h-fit space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2 mb-6">
               <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
               Similar PGs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {relatedPg.slice(0, 6).map((item) => (
                <Link
                  key={item.place_id}
                  href={`/pg/${item.place_id}?location=${location}&type=${type}`}
                  className="block group"
                >
                  <div className="flex gap-4 bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all cursor-pointer items-center">
                    <div className="w-24 sm:w-32 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.photoReference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-800 text-sm sm:text-base line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>

                      <div className="flex items-center gap-1 mt-1 mb-1.5">
                        <span className="text-yellow-500 text-xs">⭐</span>
                        <span className="text-xs font-bold text-slate-600">{item.rating || "N/A"}</span>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-2">
                        {item.address}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              {relatedPg.length === 0 && (
                <p className="text-slate-500 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  No similar properties found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
