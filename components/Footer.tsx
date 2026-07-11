import Link from "next/link";
import { categories } from "@/lib/posts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#ffffff]/15 bg-[#000000] w-full py-12 transition-colors duration-300">
      <div className="max-w-full mx-auto px-2 md:px-4 flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="space-y-2 max-w-sm">
            <Link
              href="/"
              className="flex items-center space-x-2.5 font-serif-editorial text-xl md:text-2xl font-normal tracking-tight text-[#ffffff] hover:underline underline-offset-4 decoration-[#ffffff] decoration-1"
            >
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 border border-[#ffffff] font-serif text-sm md:text-base font-normal select-none text-[#ffffff] bg-transparent leading-none">
                ?
              </div>
              <span>DIDYOUKNOW</span>
            </Link>
            <p className="text-sm text-[#aaaaaa] leading-relaxed font-sans">
              An independent, reader-supported publication dedicated to slow journalism, technology, business, and art.
            </p>
          </div>

          {/* Categories navigation */}
          <div className="flex flex-col space-y-3">
            <span className="eyebrow !text-[#ffffff]">
              Categories
            </span>
            <nav className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/unnoticed"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Unnoticed
              </Link>
            </nav>
          </div>

          {/* Legal navigation */}
          <div className="flex flex-col space-y-3">
            <span className="eyebrow !text-[#ffffff]">
              Legal
            </span>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Terms
              </Link>
              <Link
                href="/cookie-policy"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Cookie Policy
              </Link>
              <Link
                href="/disclaimer"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Disclaimer
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-xs font-sans uppercase font-medium tracking-wider text-[#ffffff] transition-all link-hover w-max"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#ffffff]/15 flex justify-center items-center text-xs tracking-wide text-[#aaaaaa]">
          <p className="text-center">© {currentYear} DIDYOUKNOW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
