import { Building2, MapPin, ShieldCheck, Users } from "lucide-react";

export default function about() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About PG Finder
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          PG Finder helps students and working professionals discover
          comfortable and affordable PG accommodations across India.
          Our goal is to make finding the right place simple, fast,
          and stress-free.
        </p>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <MapPin className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Find Nearby PGs
            </h3>
            <p className="text-gray-600">
              Search PG accommodations by city, location, or nearby
              landmarks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <ShieldCheck className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Verified Listings
            </h3>
            <p className="text-gray-600">
              We aim to provide trusted and verified PG listings with
              transparent information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <Building2 className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Easy Comparison
            </h3>
            <p className="text-gray-600">
              Compare ratings, prices, facilities, and locations
              before making a decision.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-gray-600 mt-2">PG Listings</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-gray-600 mt-2">Cities Covered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-gray-600 mt-2">Monthly Visitors</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">4.8★</h3>
              <p className="text-gray-600 mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Users className="w-12 h-12 mx-auto mb-4" />

        <h2 className="text-3xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="text-lg text-gray-600">
          We believe finding accommodation should not be difficult.
          Our mission is to connect people with reliable PG options
          while providing accurate information, reviews, and a smooth
          search experience.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Finding Your Perfect PG Today
        </h2>

        <p className="text-gray-300 mb-6">
          Explore PGs across major cities in India.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
          Browse PGs
        </button>
      </section>
    </div>
  );
}