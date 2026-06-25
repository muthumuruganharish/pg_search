"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/75 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1
            className="text-3xl font-bold text-white tracking-tight cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="text-blue-500">PG</span> Finder
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-gray-200 font-medium">
            <a
              href="/"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/pg"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              PGs
            </a>

            <a
              href="/about"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer"
              >
                {user?.name?.charAt(0).toUpperCase()}
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-3 w-44 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                  <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      setUser(null);
                      setShowMenu(false);
                      router.push("/");
                    }}
                    className="w-full px-4 py-3 text-left text-white hover:bg-red-500/20 hover:text-red-400 transition-all cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => router.push("/auth/login")}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl"
            >
              Login
            </button>
          )}

          {/* Mobile Hamburguer Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => router.push("/auth/login")}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900/95 border-b border-white/10 backdrop-blur-xl ${
            isOpen
              ? "max-h-[300px] opacity-100 py-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-6 gap-4 text-gray-200 font-medium pb-2">
            <a
              href="/"
              className="hover:text-blue-400 py-2 border-b border-white/5 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/pg"
              className="hover:text-blue-400 py-2 border-b border-white/5 transition-colors duration-200"
            >
              PGs
            </a>
            <a
              href="/cities"
              className="hover:text-blue-400 py-2 border-b border-white/5 transition-colors duration-200"
            >
              Cities
            </a>
            <a
              href="/about"
              className="hover:text-blue-400 py-2 border-b border-white/5 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-blue-400 py-2 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
