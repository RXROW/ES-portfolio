import { Cabin } from "next/font/google";
import "./css/globals.scss";
import Head from "next/head";

const cabin = Cabin({ subsets: ["latin"] });

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Eslam Ahmed (Web Developer)",
  description: "Eslam Ahmed (Web Developer)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#05020d]">
     
      <body className={cabin.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] ">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
