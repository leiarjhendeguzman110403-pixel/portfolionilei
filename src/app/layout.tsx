import type { Metadata } from "next";
import "./globals.css";

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
        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}