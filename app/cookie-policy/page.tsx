import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn what cookies are, how we use them, and how you can manage cookie preferences on DIDYOUKNOW.",
  alternates: {
    canonical: "https://didyouknow.in/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | DIDYOUKNOW",
    description: "Learn what cookies are, how we use them, and how you can manage cookie preferences on DIDYOUKNOW.",
    url: "https://didyouknow.in/cookie-policy",
    siteName: "DIDYOUKNOW",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <PageHeading
        title="Cookie Policy"
        description="Last updated: July 1, 2026. This policy explains how we use cookies and similar tracking technologies."
      />

      <div className="space-y-8 font-sans text-sm md:text-base leading-relaxed text-black/85">
        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">2. How We Use Cookies</h2>
          <p>
            DIDYOUKNOW uses cookies for a variety of reasons. We divide our cookies into the following categories:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. For example, we use a local storage key to remember if you have dismissed the cookie consent banner, so it doesn&apos;t reappear on subsequent visits.</li>
            <li><strong>Performance &amp; Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</li>
            <li><strong>Targeting &amp; Advertising Cookies:</strong> These cookies may be set through our site by third-party advertising partners, such as Google AdSense. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">3. How to Control Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
          </p>
          <p>
            To manage your cookies through your browser, please consult your browser&apos;s help documentation or settings menu. Common browser configuration links:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-colors">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-colors">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-colors">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/microsoft-edge/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-colors">Microsoft Edge</a></li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">4. More Information</h2>
          <p>
            If you would like more information about how we use cookies, please contact us via our <a href="/contact" className="underline hover:bg-black hover:text-white transition-colors">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
