import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the Terms and Conditions and terms of use of DIDYOUKNOW.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <PageHeading
        title="Terms & Conditions"
        description="Last updated: July 1, 2026. Please read these terms carefully before using our service."
      />

      <div className="space-y-8 font-sans text-sm md:text-base leading-relaxed text-black/85">
        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">1. Acceptance of Terms</h2>
          <p>
            By accessing and reading DIDYOUKNOW, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue your use of our website immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, all materials on DIDYOUKNOW—including text, essays, layout designs, custom SVG graphics, illustrations, and source code—are the intellectual property of DIDYOUKNOW and are protected by applicable copyright and trademark laws. All rights are reserved.
          </p>
          <p>
            You may view, download, and print articles for your own personal, non-commercial use only. You must not republish, distribute, sell, or reproduce our content without express written consent from our editors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">3. External Links Disclaimer</h2>
          <p>
            Our website contains links to third-party web sites or services that are not owned or controlled by us. DIDYOUKNOW has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">4. Disclaimer of Liability</h2>
          <p>
            The content on DIDYOUKNOW is provided on an &quot;as is&quot; and &quot;as available&quot; basis for general information purposes only. While we strive to maintain accurate and up-to-date content, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">5. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which the site owner operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access our website after those revisions become effective, you agree to be bound by the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us via our <a href="/contact" className="underline hover:bg-black hover:text-white transition-colors">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
