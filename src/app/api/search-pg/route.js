export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const location = searchParams.get("location");
  const type = searchParams.get("type");

  const query = `${type} in ${location}`;
 

  const url =
    `https://maps.googleapis.com/maps/api/place/textsearch/json` +
    `?query=${encodeURIComponent(query)}` +
    `&key=${process.env.GOOGLE_MAPS_API_KEY}`;   
    // encodeURIComponent remove space  like "Boys PG in Chennai" to Boys%20PG%20in%20Chennai

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results.slice(0, 3).map((pg) => ({
    place_id: pg.place_id,
    name: pg.name,
    address: pg.formatted_address,
    rating: pg.rating,
     reviews: pg.user_ratings_total || 0,
    photoReference: pg.photos?.[0]?.photo_reference || null,
  }));

 

  return Response.json(results);
}