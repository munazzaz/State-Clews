import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],

});

const geistMono = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans} ${geistMono} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
