import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
      className={`${playfair.variable} ${lato.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
