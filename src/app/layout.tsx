import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Adwave Agency | Let Your Brand Make The Shor",
  description: "Full-stack content solutions for brands that want to dominate in the digital age.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Adwave Agency | Let Your Brand Make The Shor",
    description: "Full-stack content solutions for brands that want to dominate in the digital age.",
    siteName: "Adwave Agency",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}