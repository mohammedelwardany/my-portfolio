import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import siteConfig from "../../config.json";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${siteConfig.personal.name} - Portfolio`,
  description: siteConfig.personal.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-textMain min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
