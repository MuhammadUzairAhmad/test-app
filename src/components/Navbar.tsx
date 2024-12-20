"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MenuIcon from "@/assets/svg/Menu.svg";
import LogoIcon from "@/assets/png/Logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { href: "/", label: "App" },
    { href: "/Security", label: "Security" },
    { href: "/Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white">
      <div className="xl:container px-4 md:px-7 mx-auto">
        <div className="flex items-center justify-end sm:justify-between py-4">
          {/* Logo and company name */}
          <Link href="/" className="sm:flex items-center hidden">
            <div className="flex items-center gap-2">
              <Image src={LogoIcon} alt="Menu" className="h-12 w-12" />
              <span className="text-xl lg:text-3xl font-semibold text-primary">
                Stock<span className="text-secondary">Clubs</span>
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-4 xl:gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={` text-lg lg:text-xl font-bold text-primary hover:text-secondary transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="p-2 hover:text-primary focus:outline-none transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Image src={MenuIcon} alt="Menu" className="h-6 w-6" />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        ref={menuRef}
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } fixed top-0 right-0 w-full max-w-[16rem] h-screen bg-white shadow-lg transform transition-all duration-300 ease-in-out sm:hidden`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 hover:text-primary focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-4 pt-10 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={` text-lg lg:text-xl font-bold text-primary hover:text-secondary transition-colors duration-200`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
