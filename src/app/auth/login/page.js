"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });


      const data = await response.json();
      if (response.ok) {
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
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">PG Finder</h1>

          <p className="text-lg text-blue-100">
            Find the best PGs near your location with ease.
          </p>

          <div className="mt-10">
            <h3 className="font-semibold text-xl mb-2">Why PG Finder?</h3>

            <ul className="space-y-2 text-blue-100">
              <li>✓ Verified PG Listings</li>
              <li>✓ Ratings & Reviews</li>
              <li>✓ Budget Friendly Options</li>
              <li>✓ Easy Location Search</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">Login to continue</p>

          <form onSubmit={check} className="space-y-5">
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              type="password"
              placeholder="Password"
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link href="#" className="text-blue-600">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
