import { Mail, Phone, MapPin } from "lucide-react";

export default function contact() {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 text-center py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact Us
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-500 max-w-xl mx-auto">
          Have questions about a PG listing or need help finding accommodation? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-gray-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-gray-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-gray-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-gray-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/25 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Email</h3>
                <p className="text-slate-500 text-sm sm:text-base mt-0.5">
                  support@pgfinder.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Phone</h3>
                <p className="text-slate-500 text-sm sm:text-base mt-0.5">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">Address</h3>
                <p className="text-slate-500 text-sm sm:text-base mt-0.5">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg sm:text-xl text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded-full inline-block"></span>
                FAQ Help
              </h3>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    How do I find PGs near me?
                  </p>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                    Search by city or location and browse available PG listings.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    Are the PG listings verified?
                  </p>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                    We strive to provide accurate and trusted information for all listings.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    Can I contact PG owners directly?
                  </p>
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                    Yes, contact information will be available on the PG details page.
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