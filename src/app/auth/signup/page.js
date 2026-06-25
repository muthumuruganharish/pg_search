"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Signup() {
  const router = useRouter();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

     if (response.ok) {
         localStorage.setItem(
        "user",
        JSON.stringify({
          name: formdata.name,
          email: formdata.email,
        }),
      );

        alert(data.message);
        router.push("/");
      
      }
      else{

        alert(data.message)

      }


    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden grid md:grid-cols-2 border border-slate-100">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-48 h-48 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              Join PG Finder
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 max-w-sm">
              Create your account and discover comfortable PGs across major
              hubs.
            </p>

            <div className="mt-10 sm:mt-16">
              <h3 className="font-bold text-xl mb-4 text-white/90">
                Quick & Simple
              </h3>

              <ul className="space-y-3 text-blue-100 text-sm sm:text-base font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> Instant Booking
                  Request
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> Direct Owner Contact
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> Detailed Virtual
                  Tours
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Create Account
          </h2>

          <p className="text-slate-500 mb-8 font-medium">
            Start finding your perfect PG today
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  name: e.target.value,
                })
              }
              type="text"
              placeholder="Full Name"
              className="w-full border border-slate-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />

            <input
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  email: e.target.value,
                })
              }
              type="email"
              placeholder="Email Address"
              className="w-full border border-slate-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />

            <input
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  password: e.target.value,
                })
              }
              type="password"
              placeholder="Password"
              className="w-full border border-slate-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/25 cursor-pointer mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500 font-medium">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
