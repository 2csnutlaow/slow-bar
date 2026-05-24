import type { Metadata } from "next";
import { Syne, Nunito } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slow Bar — ร้านกาแฟที่ให้เวลาคุณช้าลง",
  description:
    "Slow Bar คือพื้นที่สำหรับคนที่อยากหยุดพักและดื่มกาแฟดี ๆ สักแก้ว ในบรรยากาศอบอุ่นใจกลางเมือง",
  openGraph: {
    title: "Slow Bar",
    description: "ร้านกาแฟที่ให้เวลาคุณช้าลง",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${syne.variable} ${nunito.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
