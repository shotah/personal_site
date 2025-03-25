import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Blodgett | Full-Stack Engineer", // Updated title
  description:
    "Christopher Blodgett is a highly motivated Full-Stack Engineer with expertise in React, Go, AWS, and DevOps. View my portfolio and contact me.",
  keywords: [
    "Christopher Blodgett",
    "Full-Stack Engineer",
    "React",
    "Go",
    "AWS",
    "DevOps",
    "Software Engineer",
    "Web Development",
    "Cloud Technologies",
    "Seattle",
  ],
  authors: [{ name: "Christopher Blodgett" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
