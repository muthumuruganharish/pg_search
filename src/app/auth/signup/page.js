"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router=useRouter()

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
      alert(data.message);
      router.push("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Join PG Finder</h1>

          <p className="text-blue-100 text-lg">
            Create your account and discover comfortable PGs.
          </p>
        </div>

        {/* Right */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
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
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            /> */}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
