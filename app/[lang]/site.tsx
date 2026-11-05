import Link from "next/link";
import type { getDictionary, Locale } from "./dictionaries";
import { Logo } from "./logo";

export type Dict = Awaited<ReturnType<typeof getDictionary>>;

export const EMAIL = "adittyapratama2@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/adittya-pratama1509";
const GITHUB = "https://github.com/adittyapratama2";

export const pillBtn =
  "inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 hover:bg-[#2b2b30] active:scale-[0.98] motion-reduce:active:scale-100";
export const textLink = "underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-ink";

// EN lives at "/", ID under "/id"; "path" is "" for home or "/products", "/profile".
export const href = (lang: Locale, path: string) => (lang === "en" ? path || "/" : `/id${path}`);

export function pageMetadata(lang: Locale, path: string, meta: { title: string; description: string }) {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: href(lang, path),
      languages: { en: href("en", path), id: href("id", path), "x-default": href("en", path) },
    },
  };
}

export function Header({ lang, t, path }: { lang: Locale; t: Dict; path: string }) {
  const other = lang === "en" ? "id" : "en";
  const navLink = (to: string, label: string) => (
    <Link
      href={href(lang, to)}
      aria-current={path === to ? "page" : undefined}
      className={`flex min-h-11 items-center px-1.5 text-sm transition-colors hover:text-ink sm:px-3 ${path === to ? "text-ink" : "text-mute"}`}
    >
      {label}
    </Link>
  );
  return (
    // The only blurred surface on the page: it keeps nav legible over content while scrolling.
    <header className="sticky top-0 z-10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
        <Link href={href(lang, "")} aria-label="Adittya Pratama" className="flex min-h-11 items-center text-[15px] font-semibold tracking-tight sm:text-base">
          <Logo className="h-7 w-auto shrink-0" />
          <span className="brand-name ml-2 overflow-hidden max-[359px]:hidden whitespace-nowrap">Adittya Pratama</span>
        </Link>
        <nav className="flex items-center sm:gap-1" aria-label="Main">
          {navLink("/products", t.nav.products)}
          {navLink("/profile", t.nav.profile)}
          <Link
            href={href(other, path)}
            hrefLang={other}
            aria-label={t.nav.switchLabel}
            className="flex min-h-11 min-w-11 items-center justify-center px-2 text-sm font-medium text-mute transition-colors hover:text-ink"
          >
            {t.nav.switchTo}
          </Link>
          <a href={`mailto:${EMAIL}`} className={`${pillBtn} ml-1 max-sm:hidden`}>
            {t.nav.email}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Contact({ t }: { t: Dict }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
      <div className="rounded-[2rem] border border-line bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-6xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[48ch] text-lg text-mute">{t.contact.text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href={`mailto:${EMAIL}`} className={`${pillBtn} min-h-12 px-6 text-base`}>
            {t.contact.email}
          </a>
          <a href={LINKEDIN} className={`${textLink} inline-flex min-h-11 items-center`} rel="noopener noreferrer">
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm text-mute sm:px-6">
        <p>{t.footer.line}</p>
        <p className="flex gap-6">
          <a href={`mailto:${EMAIL}`} className={`${textLink} inline-flex min-h-11 items-center`}>
            {EMAIL}
          </a>
          <a href={GITHUB} className={`${textLink} inline-flex min-h-11 items-center`} rel="noopener noreferrer">
            {t.footer.github}
          </a>
        </p>
      </div>
    </footer>
  );
}

export function Glow() {
  return (
    // The page's single glow: a warm horizon under the statement, so the dark panel is the one dramatic moment.
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-72"
      style={{
        background:
          "radial-gradient(ellipse 70% 100% at 50% 100%, #ff8a3d 0%, rgba(232,89,31,0.55) 35%, rgba(224,52,63,0.15) 65%, transparent 80%)",
      }}
    />
  );
}
