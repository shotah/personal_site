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
    "Christopher Blodgett is a highly motivated Full-Stack Engineer with expertise in React, Go, AWS, and DevOps. View my portfolio and contact me.", // Updated description
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
