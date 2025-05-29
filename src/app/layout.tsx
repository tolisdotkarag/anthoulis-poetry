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
  title: "Anthoulis Poetry",
  keywords: [
    "poetry",
    "poet",
    "Αλέξανδρος Ανθούλης",
    "Επόμενη Συνάντηση",
    "book",
    "collection",
    "Greek poetry",
    "Greek poet",
  ],
  description:
    "Ανακαλύψτε την ποιητική συλλογή 'Επόμενη Συνάντηση' του Αλέξανδρου Ανθούλη.",
  authors: [{ name: "Αλέξανδρος Ανθούλης" }],
  creator: "Αλέξανδρος Ανθούλης",
  openGraph: {
    title: "Anthoulis Poetry",
    description:
      "Ανακαλύψτε την ποιητική συλλογή 'Επόμενη Συνάντηση' του Αλέξανδρου Ανθούλη.",
    url: "https://anthoulispoetry.com",
    siteName: "Anthoulis Poetry",
  },
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
