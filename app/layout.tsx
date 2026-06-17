import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import CookieBar from "@/components/CookieBar";
import PromoModal from "@/components/PromoModal";
import { ALL_FAQS } from "@/lib/faq-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.sleepandscreen.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "East Bay Mattress | Berkeley, CA Mattress Store — San Pablo Ave",
    template: "%s | East Bay Mattress",
  },
  description:
    "East Bay Mattress on San Pablo Ave, Berkeley, CA. 12 mattresses on the showroom floor — try before you buy, no appointment needed. Free delivery and setup throughout the East Bay. No commission staff. Open daily 10 AM–6 PM.",
  keywords: [
    "mattress store Berkeley CA",
    "mattress store San Pablo Ave",
    "East Bay mattress",
    "buy mattress Berkeley",
    "mattress store Oakland",
    "mattress delivery East Bay",
    "mattress store near me Berkeley",
    "hybrid mattress Berkeley",
    "memory foam mattress Berkeley",
    "East Bay Mattress",
    "no commission mattress store",
    "free mattress delivery Berkeley",
  ],
  authors: [{ name: "East Bay Mattress" }],
  creator: "East Bay Mattress",
  publisher: "East Bay Mattress",
  formatDetection: { telephone: true, address: true },
  openGraph: {
    title: "East Bay Mattress | Berkeley, CA Mattress Store",
    description:
      "Try 12 mattresses on the showroom floor. No appointment, no commission. Free delivery and setup throughout the East Bay. Open daily on San Pablo Ave, Berkeley.",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "East Bay Mattress",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "East Bay Mattress showroom — Berkeley, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "East Bay Mattress | Berkeley, CA Mattress Store",
    description:
      "Try 12 mattresses on the showroom floor. No appointment, no commission. Free delivery throughout the East Bay.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// FAQPage structured data — powers AI Overview and People Also Ask results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

// LocalBusiness structured data for Google rich results
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "East Bay Mattress",
  description:
    "Berkeley mattress store on San Pablo Ave. 12 models on the showroom floor. Try before you buy. Free delivery and setup throughout the East Bay.",
  url: BASE_URL,
  telephone: "(510) 555-0182",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2397 San Pablo Ave",
    addressLocality: "Berkeley",
    addressRegion: "CA",
    postalCode: "94702",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.8604,
    longitude: -122.2871,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: undefined,
  hasMap: "https://maps.google.com/?q=2397+San+Pablo+Ave+Berkeley+CA",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
        <Suspense fallback={null}>
          <PromoModal />
          <CookieBar />
        </Suspense>
      </body>
    </html>
  );
}
