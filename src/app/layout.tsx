import "./globals.css";

import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ThemeProvider from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cameron Kilgore | Financial Technology Engineer",
  description:
    "Full-stack software engineer specializing in financial technology, cloud infrastructure, and AI. Building scalable systems at J.P. Morgan.",
  keywords: [
    "Software Engineer",
    "Financial Technology",
    "Python",
    "J.P. Morgan",
    "University of Cambridge",
  ],
  creator: "Cameron Kilgore",
  authors: [{ name: "Cameron Kilgore" }],
  metadataBase: new URL("https://cameron-kilgore.com"),
  alternates: {
    canonical: "https://cameron-kilgore.com",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cameron-kilgore.com",
    title: "Cameron Kilgore | Financial Technology Engineer",
    description:
      "Full-stack software engineer specializing in financial technology, cloud infrastructure, and AI.",
    images: [
      {
        url: "https://cameron-kilgore.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cameron Kilgore - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cameron_kilgore",
    title: "Cameron Kilgore | Financial Technology Engineer",
    description:
      "Building scalable financial systems with Python, TypeScript, and AWS.",
    images: ["https://cameron-kilgore.com/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if(!gaId){
    throw new Error("Google Analytics ID is not set in environment variables");
  }
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <head>
        <meta name="theme-color" content="#050816" />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="description"
          content="Cameron Kilgore - Full-stack software engineer specializing in financial technology, cloud infrastructure, and AI."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://cameron-kilgore.com" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <GoogleAnalytics gaId={gaId} />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
