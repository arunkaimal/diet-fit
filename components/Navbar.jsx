"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#10B981] text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">Logo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 cursor-pointer">
          <li><Link href="/">About</Link></li>
          <li><Link href="/">BMI Calculator</Link></li>
          <li><Link href="/">Blogs</Link></li>
          <li><Link href="/">Testimonials</Link></li>
          <li><Link href="/">Book an Appointment</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer "
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#10B981] flex flex-col items-center gap-4 py-4 md:hidden">
            <li><Link href="/" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/" onClick={toggleMenu}>Calorie Counter</Link></li>
            <li><Link href="/" onClick={toggleMenu}>Blogs</Link></li>
            <li><Link href="/" onClick={toggleMenu}>Testimonials</Link></li>
            <li><Link href="/" onClick={toggleMenu}>Book an Appointment</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
