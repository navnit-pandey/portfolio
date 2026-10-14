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
  metadataBase: new URL("https://portfolio-rho-three-ak8w0c2n2a.vercel.app"),
  title: "Navnit Pandey — AI/ML Engineer Portfolio",
  description:
    "Portfolio of Navnit Pandey, a B.Tech AI/ML student at Lovely Professional University who optimized an AQI forecasting system from R² 0.65 to 0.81 and deployed it as a live REST API. Seeking Summer 2027 internships.",
  keywords: [
    "Navnit Pandey",
    "AI ML engineer",
    "machine learning student",
    "portfolio",
    "Python",
    "scikit-learn",
    "AQI prediction",
    "Lovely Professional University",
    "LPU",
  ],
  authors: [{ name: "Navnit Pandey", url: "https://github.com/navnit-pandey" }],
  openGraph: {
    title: "Navnit Pandey — AI/ML Engineer Portfolio",
    description:
      "B.Tech AI/ML student at LPU. AirQ Predict (R² 0.81), OS Resource Allocator, and embedded hardware builds.",
    type: "website",
    url: "https://portfolio-rho-three-ak8w0c2n2a.vercel.app",
    siteName: "Navnit Pandey Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Navnit Pandey — AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navnit Pandey — AI/ML Engineer Portfolio",
    description:
      "B.Tech AI/ML student at LPU. AirQ Predict (R² 0.81), OS Resource Allocator, and embedded hardware builds.",
    images: ["/og-image.png"],
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
