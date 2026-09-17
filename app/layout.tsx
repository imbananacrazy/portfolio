import type { Metadata } from "next";
import { Average_Sans, Momo_Trust_Display, Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik();

export const metadata: Metadata = {
  title: "Raf Carrière",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${font.className}`}>
        {children}
      </body>
    </html>
  );
}
