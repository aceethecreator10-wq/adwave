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
  description: "Full-stack content agency for Indian brands",
  openGraph: {
    title: "Adwave Agency | Let Your Brand Make The Shor",
    description: "Full-stack content agency for Indian brands",
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