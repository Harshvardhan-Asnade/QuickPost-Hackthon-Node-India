import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});


export const metadata: Metadata = {
  title: "QuickPost",
  description: "Create quality posts in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.className}`}>{children}</body>
    </html>
  );
}
