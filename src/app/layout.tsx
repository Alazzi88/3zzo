// app/layout.tsx
"use client";

import { Almarai } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/header";

const almarai = Almarai({
  subsets: ["latin", "arabic"],
  variable: "--font-almarai",
  weight: ["400", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={almarai.variable}>
      <head>
        <title>Ezzo</title>
        <meta name="title" content="Ezzo" />
        <meta
          name="description"
          content="اكتشف أفضل المؤشرات للتحليل الفني للتداول، واحصل على أدوات ومؤشرات عالية الدقة لمساعدتك في اتخاذ قرارات التداول بثقة."
        />
        <meta
          name="keywords"
          content="مؤشر تداول, تحليلات فنية, أدوات تداول, سوق الأسهم, التداول, مؤشرات تقنية"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2539958063286229"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-sans text-orange-300 antialiased bg-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-black mt-2 px-0 py-8">
          <div className="max-w-100 mx-auto bg-black p-0 rounded-lg shadow-md">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
