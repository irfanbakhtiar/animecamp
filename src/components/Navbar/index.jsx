"use client";

import { MagnifyingGlass, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY <= 0) {
        setIsAtTop(currentScrollY <= 0);
      } else {
        setIsAtTop(false);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`px-4 py-2 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
        isAtTop
          ? "bg-transparent text-gray-100"
          : "bg-gray-900 bg-opacity-20 backdrop-blur-lg shadow-lg z-50"
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <div>
          <Link
            href="/"
            className="text-base font-bold text-gray-200 md:text-xl"
          >
            ANIME CAMP
          </Link>
        </div>
        <div className="flex items-center gap-2 text-gray-100">
          <Link
            href="/search"
            className="p-3 lg:text-lg hover:rounded-full hover:bg-gray-700"
          >
            <MagnifyingGlass size={24} weight="bold" />
          </Link>
          <Link
            href="/"
            className="p-3 lg:text-lg hover:rounded-full hover:bg-gray-700"
          >
            <User size={24} weight="bold" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
