"use client";

import { useState, useEffect } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Safely get the full URL on the client
    setShareUrl(window.location.href);
  }, []);

  const handleCopyLink = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <div className="flex items-center space-x-3 py-4 border-t border-b border-theme-border/10 my-6">
      <span className="text-[10px] uppercase font-bold tracking-widest text-theme-muted">
        Share
      </span>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="flex items-center justify-center w-8 h-8 border border-theme-border/20 text-theme-fg hover:bg-theme-fg hover:text-theme-bg hover:border-theme-fg transition-all duration-200"
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.12 .942 11.49 1.942c-5.437 0-9.863 4.373-9.867 9.801-.001 1.73.475 3.424 1.378 4.92l-.999 3.65 3.79-.979h-.155zM16.8 13.916c-.285-.143-1.688-.833-1.95-.929-.262-.095-.452-.143-.642.143-.19.285-.736.929-.903 1.118-.166.19-.332.214-.617.071-.285-.143-1.204-.444-2.293-1.415-.848-.756-1.42-1.69-1.587-1.975-.166-.285-.018-.44.125-.581.129-.127.285-.333.428-.5.143-.166.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.642-1.548-.879-2.119-.23-.556-.464-.48-.642-.49-.166-.008-.356-.01-.546-.01-.19 0-.5.071-.76.357-.262.285-1 .977-1 2.38 0 1.405 1.022 2.761 1.165 2.951.143.19 2.012 3.074 4.875 4.314.681.295 1.212.471 1.627.603.684.218 1.307.187 1.8.114.549-.081 1.688-.69 1.925-1.357.238-.667.238-1.238.166-1.357-.071-.119-.262-.19-.546-.333z" />
        </svg>
      </a>

      {/* Twitter / X */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-8 h-8 border border-theme-border/20 text-theme-fg hover:bg-theme-fg hover:text-theme-bg hover:border-theme-fg transition-all duration-200"
      >
        <svg
          className="w-3.5 h-3.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="flex items-center justify-center w-8 h-8 border border-theme-border/20 text-theme-fg hover:bg-theme-fg hover:text-theme-bg hover:border-theme-fg transition-all duration-200"
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        aria-label="Copy Link"
        className="relative flex items-center justify-center w-8 h-8 border border-theme-border/20 text-theme-fg hover:bg-theme-fg hover:text-theme-bg hover:border-theme-fg transition-all duration-200 cursor-pointer"
      >
        {copied ? (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-theme-fg text-theme-bg text-[10px] font-bold px-2 py-1 rounded shadow-xs whitespace-nowrap z-50">
            Copied!
          </span>
        ) : null}
        <svg
          className="w-4 h-4 stroke-current fill-none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </button>
    </div>
  );
}
