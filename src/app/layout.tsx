import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://skoolcatch.com"),
  title: "SkoolCatch — School updates without the chaos",
  description: "Transform chaotic WhatsApp class groups into calm morning briefings. One glance, everything you need. Try free for 14 days.",
  keywords: ["school", "WhatsApp", "parents", "homework", "briefing", "India", "education"],
  authors: [{ name: "SkoolCatch" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://skoolcatch.com",
    siteName: "SkoolCatch",
    title: "Stop scrolling. Start relaxing.",
    description: "SkoolCatch extracts homework, events, and deadlines from your school WhatsApp groups. Get one calm briefing every morning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkoolCatch - School updates without the chaos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkoolCatch — School updates without the chaos",
    description: "Transform chaotic WhatsApp class groups into calm morning briefings.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased text-dark-gray bg-white">
        {children}
      </body>
    </html>
  );
}
