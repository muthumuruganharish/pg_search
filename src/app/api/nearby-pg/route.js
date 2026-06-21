import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Latitude and Longitude are required" },
      { status: 400 },
    );
  }

  const query = `PG near ${lat},${lng}`;

  const url =
    `https://maps.googleapis.com/maps/api/place/textsearch/json` +
    `?query=${encodeURIComponent(query)}` +
    `&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const results = data.results.map((pg) => ({
      place_id: pg.place_id,
      name: pg.name,
      address: pg.formatted_address,
      rating: pg.rating,
      reviews: pg.user_ratings_total,
      photoReference: pg.photos?.[0]?.photo_reference || null,
    }));

    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch PG data" },
      { status: 500 },
    );
  }
}
