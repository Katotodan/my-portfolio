import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Apipawe | Portfolio",
  description: "APIPAWE KATOTO Daniel's Portfolio",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
  openGraph: {
    images: [
      {
        url: "/logo-img.png", // Use a large custom image here
        width: 1200,
        height: 630,
        alt: "Apipawe Portfolio Preview",
      },
    ],
  },
  twitter: {
    images: [
      "/logo-img.png", // Use the same or a Twitter-optimized image
    ],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
