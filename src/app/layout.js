import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { getServerSession } from "next-auth";

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
  const session = await getServerSession();
  console.log(session)
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header session={session} />
          <main className="main-container">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
