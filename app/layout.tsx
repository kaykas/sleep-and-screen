import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "East Bay Mattress — Mattress Store + Evening Screenings | Concord, CA",
  description:
    "Concord's mattress store by day. Evening Hours film programming after dark. Try the mattress. Stay for the movie. Open daily at 2304 Willow Pass Road, Concord, CA 94520.",
  keywords: [
    "mattress store",
    "East Bay Mattress",
    "Concord CA",
    "film screening",
    "cult films",
    "Evening Hours",
    "Willow Pass",
    "East Bay",
  ],
  openGraph: {
    title: "East Bay Mattress",
    description: "A mattress store by day. Evening Hours after dark.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
