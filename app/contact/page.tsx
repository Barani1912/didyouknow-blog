import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the editorial team at DIDYOUKNOW.",
  keywords: ["contact didyouknow", "contact did you know", "support", "editorial team", "contributions"],
  alternates: {
    canonical: "https://didyouknow.com/contact",
  },
  openGraph: {
    title: "Contact | DIDYOUKNOW",
    description: "Get in touch with the editorial team at DIDYOUKNOW.",
    url: "https://didyouknow.com/contact",
    siteName: "DIDYOUKNOW",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DIDYOUKNOW",
    "description": "Get in touch with the editorial team at DIDYOUKNOW.",
    "url": "https://didyouknow.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "DIDYOUKNOW",
      "url": "https://didyouknow.com"
    }
  };

  return (
    <div className="space-y-12 max-w-3xl">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHeading
        title="Contact Us"
        description="We welcome inquiries, editorial feedback, and contributions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-0">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-theme-fg">Inquiries</h2>
          <p className="font-sans text-sm md:text-base text-theme-muted leading-relaxed">
            Whether you are a reader with a question, a writer looking to submit an essay, or a reviewer evaluating our site policies, please feel free to reach out. We read all messages and aim to respond within two business days.
          </p>
        </div>

        {/* Dynamic Interactive Contact Form */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-theme-fg">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
