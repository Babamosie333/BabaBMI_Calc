import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BabaBMI Cal - Precision Body Metrics",
  description: "A professional-grade BMI calculator for accurate health tracking [web:6].",
  
  // OpenGraph for Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "BabaBMI Cal – Precision Body Metrics",
    description: "Professional-grade BMI calculator with metric/imperial support, dynamic health categories, and smooth animations.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BabaBMI Cal – Professional BMI Calculator",
      },
    ],
  },

  // Twitter Card (X) support
  twitter: {
    card: "summary_large_image",
    title: "BabaBMI Cal – Precision Body Metrics",
    description: "Professional-grade BMI calculator for accurate health tracking.",
    images: ["/opengraph-image"],
  },

  // Additional SEO
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
