import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar"; // Assuming Navbar might be generic or adapted later

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "14 Encontro com a Educação Mealhada | Apresentação Interativa", // Updated title
  description: "Apresentação interativa do 14º Encontro com a Educação da Mealhada.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {/* <div className="pt-16"> */}
          {children}
        {/* </div> */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">14 Encontro com a Educação - Mealhada</h3>
                <p className="text-gray-300">Visualização interativa da apresentação.</p>
              </div>
              <div>
                {/* Optional: Add relevant links later */}
                {/* <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="/presentation" className="text-gray-300 hover:text-white">Apresentação</a></li>
                </ul> */}
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Apresentação Mealhada. Direitos reservados ao autor.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
