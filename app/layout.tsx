import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sleep & Screen — Mattress Store + Movie Theater | Concord, CA",
  description:
    "Concord's only mattress store that becomes a movie theater after dark. Try the mattress. Stay for the movie. Open daily at 2475 Willow Pass Rd.",
  keywords: [
    "mattress store",
    "movie theater",
    "Concord CA",
    "cult films",
    "midnight movies",
    "Sleep and Screen",
    "Willow Pass",
  ],
  openGraph: {
    title: "Sleep & Screen",
    description: "A mattress store until showtime.",
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
