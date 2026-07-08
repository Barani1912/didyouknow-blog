import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Read the general disclaimers and information warranties of DIDYOUKNOW.",
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <PageHeading
        title="Disclaimer"
        description="Last updated: July 1, 2026. General disclaimers for information published on DIDYOUKNOW."
      />

      <div className="space-y-8 font-sans text-sm md:text-base leading-relaxed text-black/85">
        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">1. Informational Purposes Only</h2>
          <p>
            All content published on DIDYOUKNOW—including technical essays, business strategy perspectives, lifestyle reflections, and design critiques—is provided for general informational and educational purposes only. The information should not be construed as professional advice (including but not limited to financial, legal, technical, or medical advice).
          </p>
          <p>
            Any reliance you place on the information provided on our website is strictly at your own risk. We recommend consulting with appropriate professionals before taking any actions based on the content of this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">2. No Warranties</h2>
          <p>
            While we make every effort to publish accurate, thoroughly researched, and high-quality content, DIDYOUKNOW makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, timeliness, or availability of the website or the information, products, services, or related graphics contained on the site for any purpose.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">3. Limitation of Liability</h2>
          <p>
            Under no circumstances shall DIDYOUKNOW, its editors, or its contributors be held liable for any loss or damage (including without limitation indirect, consequential, or special loss or damage) arising out of, or in connection with, the use of this website or reliance on any information published herein.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">4. External Views and Comments</h2>
          <p>
            Articles on this website reflect the personal perspectives of their respective authors and do not necessarily represent the official views of DIDYOUKNOW as a publication.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-black">5. Contact Information</h2>
          <p>
            If you require any clarification or have questions regarding these disclaimers, please contact us via our <a href="/contact" className="underline hover:bg-black hover:text-white transition-colors">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
