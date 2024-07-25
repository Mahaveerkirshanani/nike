"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/routes";
import { Button } from "./button";
import { GiSplitCross } from "react-icons/gi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <header className="px-4 lg:px-12 py-6 z-20 w-full fixed top-0 bg-white shadow-md">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/header-logo.svg"
            alt="logo"
            width={150}
            height={40}
            className="w-auto h-auto"
          />
        </Link>

        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-16">
          {navLinks.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`text-base xl:text-lg font-semibold tracking-wide ${
                pathname === item.href ? "text-gray-900" : "text-gray-700"
              } hover:text-gray-900 transition duration-150`}
            >
              {item.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            onClick={() => handleNavLinkClick("/register")}
            className="bg-[#fe8d31] hover:bg-[#fe3d31] text-white font-semibold tracking-wider py-2 px-4"
          >
            Register
          </Button>
          <Button
            onClick={() => handleNavLinkClick("/login")}
            className="bg-[#fe8d31] hover:bg-[#fe3d31] text-white font-semibold tracking-wider py-2 px-4"
          >
            Login
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={toggleMenu}
        >
          <Image
            src="/assets/icons/hamburger.svg"
            width={24}
            height={24}
            alt="hamburger"
            className="w-7"
          />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        >
          <div className="fixed top-0 right-0 w-3/4 max-w-sm bg-white h-full z-40">
            <div className="flex items-center justify-between p-6">
              <span className="text-lg font-semibold">Menu</span>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <GiSplitCross className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`text-base font-semibold tracking-wide ${
                    pathname === item.href ? "text-gray-900" : "text-gray-700"
                  } hover:text-gray-900 transition duration-150`}
                  onClick={() => handleNavLinkClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => handleNavLinkClick("/register")}
                className="bg-[#fe8d31] hover:bg-[#fe3d31] text-white font-semibold tracking-wider py-2 px-4 mt-4"
              >
                Register
              </Button>
              <Button
                onClick={() => handleNavLinkClick("/login")}
                className="bg-[#fe8d31] hover:bg-[#fe3d31] text-white font-semibold tracking-wider py-2 px-4"
              >
                Login
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
