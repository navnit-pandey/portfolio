import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navnit Pandey — AI/ML Engineer Portfolio",
  description:
    "Portfolio of Navnit Pandey, a B.Tech AI/ML student at LPU who builds intelligent systems — from AQI prediction models and adaptive resource managers to gesture-controlled hardware.",
  keywords: [
    "Navnit Pandey",
    "AI ML engineer",
    "machine learning student",
    "portfolio",
    "Python",
    "scikit-learn",
    "AQI prediction",
    "LPU",
  ],
  authors: [{ name: "Navnit Pandey", url: "https://github.com/navnit-pandey" }],
  openGraph: {
    title: "Navnit Pandey — AI/ML Engineer Portfolio",
    description:
      "Building intelligent systems and solving real problems. AI/ML student at LPU, aspiring engineer.",
    type: "website",
    siteName: "Navnit Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navnit Pandey — AI/ML Engineer Portfolio",
    description:
      "Building intelligent systems and solving real problems. AI/ML student at LPU.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
