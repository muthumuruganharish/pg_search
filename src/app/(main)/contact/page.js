import { Mail, Phone, MapPin } from "lucide-react";

export default function contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Have questions about a PG listing or need help finding
          accommodation? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow flex gap-4">
              <Mail className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600">
                  support@pgfinder.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow flex gap-4">
              <Phone className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow flex gap-4">
              <MapPin className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold">
                    How do I find PGs near me?
                  </p>
                  <p className="text-gray-600">
                    Search by city or location and browse available
                    PG listings.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    Are the PG listings verified?
                  </p>
                  <p className="text-gray-600">
                    We strive to provide accurate and trusted
                    information for all listings.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    Can I contact PG owners directly?
                  </p>
                  <p className="text-gray-600">
                    Yes, contact information will be available on the
                    PG details page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}