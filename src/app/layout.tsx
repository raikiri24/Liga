import "./globals.css";
import type { Metadata } from "next";
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const aquire = localFont({
  src: "../../public/fonts/acquire.otf",
  variable: "--font-aquire",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${aquire.className} bg-[#DCDCDC]`}>{children}</body>
    </html>
  );
}

export default RootLayout;
