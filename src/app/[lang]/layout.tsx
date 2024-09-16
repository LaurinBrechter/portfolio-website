import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import CalendlyScheduling from "./components/CalendlyScheduling";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VertexAnalytics",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div id="root" className="flex flex-col min-h-[100dvh]">
          <NextIntlClientProvider messages={messages}>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
          <CalendlyScheduling />
        </div>
      </body>
    </html>
  );
}
