import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Providers } from "./providers";

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
// Example: app/layout.tsx or any component

export const metadata: Metadata = {
  title: "Time manager",
  description: "Manage your time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="text-tiny sm:text-small md:text-medium lg:text-large xl:text-tiny 2xl:text-[1.2vw]"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
