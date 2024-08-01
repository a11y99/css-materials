import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CSS Materials" />
        <meta name="twitter:description" content="Explore free, stylish CSS templates to enhance your projects." />
        <meta name="twitter:image" content="https://css-materials.vercel.app/apple-touch-icon.png" />
      </Head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}