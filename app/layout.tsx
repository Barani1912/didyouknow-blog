import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://didyouknow.in"),
  title: {
    template: "%s | DIDYOUKNOW",
    default: "DIDYOUKNOW",
  },
  description: "Ideas, essays, and perspectives on technology, business, and culture.",
  keywords: [
    "did you know",
    "didyouknow",
    "DIDYOUKNOW",
    "did you know blog",
    "tech and health blog",
    "technology",
    "health",
    "trending stories",
    "slow journalism",
    "perspectives",
    "digital minimalism"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DIDYOUKNOW",
    description: "Ideas, essays, and perspectives on technology, business, and culture.",
    type: "website",
    locale: "en_US",
    siteName: "DIDYOUKNOW",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "DIDYOUKNOW Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIDYOUKNOW",
    description: "Ideas, essays, and perspectives on technology, business, and culture.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = sessionStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-full mx-auto px-2 md:px-4 py-8">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
