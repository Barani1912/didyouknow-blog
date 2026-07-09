import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about the privacy practices, data collection, and cookie policies of DIDYOUKNOW.",
  alternates: {
    canonical: "https://didyouknow.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | DIDYOUKNOW",
    description: "Learn about the privacy practices, data collection, and cookie policies of DIDYOUKNOW.",
    url: "https://didyouknow.com/privacy-policy",
    siteName: "DIDYOUKNOW",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <PageHeading
        title="Privacy Policy"
        description="Last updated: July 1, 2026. Your privacy is critically important to us."
      />

      <div className="space-y-8 font-sans text-sm md:text-base leading-relaxed text-black/85">
        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">1. Introduction</h2>
          <p>
            DIDYOUKNOW (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the publication website located at didyouknow.com. This Privacy Policy details how we collect, use, and safeguard personal data when you visit and interact with our website. By using our website, you agree to the practices outlined in this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">2. Data We Collect</h2>
          <p>
            We collect basic information necessary to run our publication. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Analytics &amp; Logs:</strong> IP address, browser type, referral URL, pages visited, and timestamps collected automatically to analyze site traffic.</li>
            <li><strong>Contact Information:</strong> If you use our contact form, we collect your name, email address, and any message you submit.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">3. How We Use Your Data</h2>
          <p>
            The collected data is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maintain, monitor, and optimize the performance of our website.</li>
            <li>Respond directly to user inquiries submitted through our contact channels.</li>
            <li>Analyze reader trends to compile aggregated stats on popular topics.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">4. Cookies and Third-Party Advertising</h2>
          <p>
            We use cookies to improve site performance and customize your reading experience. Cookies are small text files placed on your device by your browser.
          </p>
          <p>
            <strong>Google AdSense and Third-Party Vendors:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
          </p>
          <p>
            Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-colors">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-colors">www.aboutads.info</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">5. Third-Party Links</h2>
          <p>
            Our articles may link to external websites that are not operated by us. We have no control over the content and practices of these external sites, and we cannot accept responsibility or liability for their respective privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">6. Children&apos;s Privacy</h2>
          <p>
            Our publication is not directed to children under the age of 13. We do not knowingly collect or maintain personal data from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately to resolve the matter.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">7. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated modification date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">8. Contact Information</h2>
          <p>
            For any questions regarding this Privacy Policy or data inquiries, please contact us via our <a href="/contact" className="underline hover:bg-black hover:text-white transition-colors">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
