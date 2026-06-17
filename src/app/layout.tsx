import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lei Arjhen | Portfolio",
  description: "Graphic Designer & UI/UX Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        {/* Floating Navigation Bar */}
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-6 md:px-12">
          <div className="w-full max-w-7xl flex items-center justify-between">
            
            {/* Logo area */}
           

            {/* Nav Pill */}
            <nav className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5 items-center gap-2">
              <Link href="/" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                HOME
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white px-4 py-2 text-sm font-bold transition-colors">
                ABOUT
              </Link>
              <Link href="/projects" className="text-white/80 hover:text-white px-4 py-2 text-sm font-bold transition-colors">
                PROJECTS
              </Link>
              <Link href="/contact" className="bg-[#f55b14] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#d94d0e] transition-colors">
                CONTACT ME
              </Link>
            </nav>

            {/* Invisible spacer to perfectly center the nav pill */}
            <div className="w-[100px] hidden md:block"></div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
        
      </body>
    </html>
  );
}