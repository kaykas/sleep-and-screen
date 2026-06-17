import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import CookieBar from "@/components/CookieBar";
import PromoModal from "@/components/PromoModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "East Bay Mattress — Mattress Store + Evening Screenings | Berkeley, CA",
  description:
    "Berkeley's mattress store by day. Evening Hours film programming after dark. Try the mattress. Stay for the movie. Open daily on San Pablo Ave, Berkeley, CA.",
  keywords: [
    "mattress store",
    "East Bay Mattress",
    "Berkeley CA",
    "San Pablo Ave",
    "film screening",
    "cult films",
    "Evening Hours",
    "East Bay",
  ],
  openGraph: {
    title: "East Bay Mattress — Mattress Store & Evening Screenings",
    description: "A mattress store by day. Evening Hours after dark. Berkeley, CA.",
    type: "website",
    locale: "en_US",
    siteName: "East Bay Mattress",
  },
  twitter: {
    card: "summary_large_image",
    title: "East Bay Mattress",
    description: "A mattress store by day. Evening Hours film program after dark. Berkeley, CA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Suspense fallback={null}>
          <PromoModal />
          <CookieBar />
        </Suspense>
      </body>
    </html>
  );
}
