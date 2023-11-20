import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gear Gaze",
  description: "The Ultimate Car Library",
  icons: {
    // icon: 'favicon.svg'
    icon: 'hero.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
