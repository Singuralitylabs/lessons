import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "シンラボ - Next.js CSSフレームワーク",
  description: "Next.js アプリケーションのルートレイアウト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
