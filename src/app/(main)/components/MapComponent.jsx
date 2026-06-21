"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 13.0827,
  lng: 80.2707,
};

export default function MapComponent() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      />
    </LoadScript>
  );
}