"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {

  const router = useRouter();


  return (
    <div>
      <nav className="fixed top-0 left-0 w-full  z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-blue-500">PG</span> Finder
          </h1>

          <div className="hidden md:flex gap-10 text-white">
            <a href="/">Home</a>
            <a href="/pg">PGs</a>
            <a href="/cities">Cities</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <button
            onClick={() => router.push("/auth/login")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
