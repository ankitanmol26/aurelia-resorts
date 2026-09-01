"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Rooms", href: "/rooms" },
  { name: "Experiences", href: "/experiences" },
  { name: "Dining", href: "/dining" },
  { name: "Wellness", href: "/wellness" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event for sticky nav background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-widest uppercase z-50 relative"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Aurelia
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-foreground-secondary">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book" className="btn-primary ml-4 inline-block">Book Your Stay</Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden z-50 relative p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col items-center gap-8 text-lg uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className="btn-primary mt-8 inline-block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
