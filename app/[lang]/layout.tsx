import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "./dictionaries";
import "../globals.css";

const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"] });

// Domain is not bought yet, so the Vercel URL is the default. Set SITE_URL when a custom domain goes live.
const siteUrl = new URL(process.env.SITE_URL ?? "https://adittya-pratama.vercel.app");

// Every locale is known at build time, so both languages ship as static HTML for crawlers.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return {
    metadataBase: siteUrl,
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "website",
      siteName: "Adittya Pratama",
      title: meta.title,
      description: meta.description,
      url: lang === "en" ? "/" : "/id",
      locale: lang === "en" ? "en_US" : "id_ID",
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
    alternates: {
      canonical: lang === "en" ? "/" : "/id",
      languages: { en: "/", id: "/id", "x-default": "/" },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
