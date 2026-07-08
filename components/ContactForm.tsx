"use client";

import { useState, FormEvent } from "react";

// ==========================================
// GOOGLE FORM CONFIGURATION
// Swap these placeholders with your actual Google Form details.
// See walkthrough.md / implementation_plan.md for step-by-step instructions.
// ==========================================
const GOOGLE_FORM_URL = ""; // e.g. "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXXX.../formResponse"
const NAME_ENTRY_ID = "";   // e.g. "entry.123456789"
const EMAIL_ENTRY_ID = "";  // e.g. "entry.987654321"
const MESSAGE_ENTRY_ID = ""; // e.g. "entry.555555555"

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // FALLBACK SIMULATION: If configurations are empty, run simulation so the UI doesn't break
    if (!GOOGLE_FORM_URL || !NAME_ENTRY_ID || !EMAIL_ENTRY_ID || !MESSAGE_ENTRY_ID) {
      console.warn("ContactForm is in simulation mode. Configure GOOGLE_FORM_URL and entry IDs to submit to Google Forms.");
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }

    // Build URL-encoded form parameters
    const formData = new URLSearchParams();
    formData.append(NAME_ENTRY_ID, name);
    formData.append(EMAIL_ENTRY_ID, email);
    formData.append(MESSAGE_ENTRY_ID, message);

    try {
      // Use no-cors mode since Google Forms responses don't include CORS headers for browsers
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-theme-border p-6 space-y-4 bg-theme-bg/50 backdrop-blur-xs transition-all duration-300">
        <h3 className="font-serif text-2xl font-normal text-theme-fg">Message Sent</h3>
        <p className="font-sans text-sm md:text-base text-theme-muted leading-relaxed">
          Thank you for reaching out. Your message has been received, and our editorial team will get back to you within two business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="border border-theme-border bg-theme-fg text-theme-bg px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-theme-bg hover:text-theme-fg transition-colors focus-visible:outline-2 focus-visible:outline-theme-fg focus-visible:outline-offset-2 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="border border-theme-border p-6 space-y-4 bg-theme-bg/50 backdrop-blur-xs transition-all duration-300">
        <h3 className="font-serif text-2xl font-normal text-theme-fg">Submission Error</h3>
        <p className="font-sans text-sm md:text-base text-theme-muted leading-relaxed text-red-500/80 dark:text-red-400/80">
          Something went wrong while sending your message. Please check your internet connection and try again.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="border border-theme-border bg-theme-fg text-theme-bg px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-theme-bg hover:text-theme-fg transition-colors focus-visible:outline-2 focus-visible:outline-theme-fg focus-visible:outline-offset-2 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="text-[10px] uppercase tracking-widest font-semibold text-theme-muted block"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
          disabled={status === "sending"}
          className="w-full border border-theme-border px-3 py-2 text-sm text-theme-fg bg-theme-bg focus:outline-none focus:ring-1 focus:ring-theme-fg disabled:opacity-50 transition-colors"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="text-[10px] uppercase tracking-widest font-semibold text-theme-muted block"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          disabled={status === "sending"}
          className="w-full border border-theme-border px-3 py-2 text-sm text-theme-fg bg-theme-bg focus:outline-none focus:ring-1 focus:ring-theme-fg disabled:opacity-50 transition-colors"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-[10px] uppercase tracking-widest font-semibold text-theme-muted block"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={status === "sending"}
          className="w-full border border-theme-border px-3 py-2 text-sm text-theme-fg bg-theme-bg focus:outline-none focus:ring-1 focus:ring-theme-fg resize-none disabled:opacity-50 transition-colors"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-theme-border bg-theme-fg text-theme-bg px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-theme-bg hover:text-theme-fg transition-colors focus-visible:outline-2 focus-visible:outline-theme-fg focus-visible:outline-offset-2 disabled:opacity-50 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
