import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BabaBMI Cal - Precision Body Metrics",
  description: "A professional-grade BMI calculator for accurate health tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
