export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${id}`,
      {
        headers: {
          "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
          "X-Goog-FieldMask":
            "displayName,formattedAddress,rating,photos,reviews,websiteUri,nationalPhoneNumber",
        },
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Place Details Error:", error);

    return Response.json(
      {
        error: "Failed to fetch place details",
      },
      {
        status: 500,
      }
    );
  }
}