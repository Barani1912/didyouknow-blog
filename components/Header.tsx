"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/lib/posts-base";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Clean up old localStorage theme if present to avoid pollution
    try {
      localStorage.removeItem("theme");
    } catch (e) {}

    // Safely check theme on mount from sessionStorage
    const storedTheme = sessionStorage.getItem("theme");
    const initialTheme = (storedTheme as "light" | "dark") || "light";
    
    if (initialTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    sessionStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 bg-theme-bg/95 backdrop-blur-md border-b border-theme-border/10 w-full transition-all duration-300 ${
      isScrolled ? "py-2.5" : "py-5 md:py-7"
    }`}>
      <div className="max-w-full mx-auto px-2 md:px-4 flex items-center justify-between transition-all duration-300">
        {/* Site Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center space-x-3 font-serif-editorial text-2xl md:text-3xl lg:text-4xl tracking-tight text-theme-fg hover:underline underline-offset-4 decoration-1"
        >
          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 border border-theme-border font-serif text-xl md:text-2xl font-normal select-none text-theme-fg bg-transparent leading-none">
            ?
          </div>
          <span>DIDYOUKNOW</span>
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-xs font-sans uppercase font-bold tracking-widest text-theme-fg transition-all link-hover py-1"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/unnoticed"
              className="text-xs font-sans uppercase font-bold tracking-widest text-theme-fg transition-all link-hover py-1"
            >
              Unnoticed
            </Link>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="text-[10px] uppercase font-bold tracking-widest text-theme-fg border border-theme-border px-3 py-1.5 hover:bg-theme-accent-bg hover:text-theme-accent-fg transition-all duration-200 cursor-pointer"
          >
            {theme === "dark" ? "○ Light" : "● Dark"}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 text-theme-fg hover:bg-theme-border/10 transition-colors"
          >
            {isOpen ? (
              /* Close Icon (X) */
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <nav className="md:hidden border-t border-theme-border bg-theme-bg w-full mt-2.5 py-4 flex flex-col space-y-3 px-4 transition-colors duration-300">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              onClick={closeMenu}
              className="text-xs font-sans uppercase font-bold tracking-widest text-theme-fg py-2.5 link-hover w-max"
            >
              {category.name}
            </Link>
          ))}
          <Link
            href="/unnoticed"
            onClick={closeMenu}
            className="text-xs font-sans uppercase font-bold tracking-widest text-theme-fg py-2.5 link-hover w-max"
          >
            Unnoticed
          </Link>
        </nav>
      )}
    </header>
  );
}
