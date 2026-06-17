import type { Metadata } from "next";
import "./globals.css";

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
