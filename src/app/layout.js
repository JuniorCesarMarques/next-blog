import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import AuthProvider from "@/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brothers",
  description: "Loucos por adrenalina",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Header />
          <main className="main-container">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
