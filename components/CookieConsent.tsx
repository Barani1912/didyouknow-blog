"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Read user cookie consent preference from localStorage
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
      }, 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t border-white/20 py-5 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-xs md:text-sm font-sans text-white/90 leading-relaxed max-w-3xl">
          We use cookies to analyze site traffic, personalize content, and serve relevant advertisements. By clicking &quot;Accept,&quot; you consent to our use of cookies as described in our{' '}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4 font-medium hover:text-white/70"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="border border-white/20 bg-transparent text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="border border-white bg-white text-black px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
