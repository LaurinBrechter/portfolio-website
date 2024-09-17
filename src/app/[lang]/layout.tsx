import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import CalendlyScheduling from "./components/CalendlyScheduling";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { routing } from "@/src/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Laurin Brechter Analytics",
    template: '%s | Laurin Brechter Analytics',
  },
  description: 'Leverage the power of data to make informed decisions. Laurin Brechter is a data scientist who helps businesses make data-driven decisions.',
};

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }


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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
