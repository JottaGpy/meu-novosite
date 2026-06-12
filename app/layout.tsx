import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll"; // Importamos aqui

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Jairyelle | Estratégia, Marketing & Web",
  description: "Especialista em posicionamento, desenvolvimento web e marketing digital de alta performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-[#F8F7F4] text-gray-900 antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}