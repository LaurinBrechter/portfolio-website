import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import CalendlyScheduling from "./components/CalendlyScheduling";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Laurin Brechter Analytics",
    template: "%s | Laurin Brechter Analytics",
  },
  // title: 'Laurin Brechter Analytics',
  description:
    "Leverage the power of data to make informed decisions. Laurin Brechter is a data scientist who helps businesses make data-driven decisions.",
};

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;

  const { lang } = params;

  const { children } = props;

  // unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Nav locale={lang} />
          <main className="h-[93vh] overflow-y-auto scroll-smooth">
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
        <CalendlyScheduling />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
