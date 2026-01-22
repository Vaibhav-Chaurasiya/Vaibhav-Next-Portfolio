import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Chaurasiya | Full Stack Developer",
  description:
    "Portfolio of Vaibhav Chaurasiya — Full Stack Developer building modern, fast and SEO-friendly web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>
          <StarsCanvas />
          <Navbar />
          <div className="w-full">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
