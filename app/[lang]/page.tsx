import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Contact, EMAIL, Footer, Glow, Header, href, pillBtn } from "./site";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} t={t} path="" />

      <main className="flex-1">
        <section className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-6xl flex-col items-center px-4 pb-8 pt-14 text-center sm:px-6 sm:pt-20">
          {/* Pill kept by the owner: it marks a real state (availability), not a label the headline repeats. */}
          <p className="rise rounded-full border border-line bg-card px-4 py-1.5 text-sm text-mute" style={{ "--i": 0 } as React.CSSProperties}>
            {t.hero.pill}
          </p>
          <h1 className="mt-8 text-[clamp(2.5rem,6.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance">
            <span className="rise block" style={{ "--i": 1 } as React.CSSProperties}>
              {t.hero.lines[0]} <span className="accent-word">{t.hero.accent}</span>
            </span>
            <span className="rise block" style={{ "--i": 2 } as React.CSSProperties}>
              {t.hero.lines[1]}
            </span>
            <span className="rise block" style={{ "--i": 3 } as React.CSSProperties}>
              {t.hero.lines[2]}
            </span>
          </h1>
          <p className="rise mt-8 max-w-[42ch] text-balance text-lg text-mute" style={{ "--i": 4 } as React.CSSProperties}>
            {t.hero.sub}
          </p>
          <a href={`mailto:${EMAIL}`} className={`${pillBtn} mt-8 sm:hidden`}>
            {t.nav.email}
          </a>
          <ul className="mt-auto flex flex-wrap justify-center gap-x-8 gap-y-2 pt-16 text-sm font-medium text-mute">
            {t.stack.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <ul className="grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.proof.map((x) => (
              <li key={x.value} className="px-2 py-8 sm:px-8">
                <p className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">{x.value}</p>
                <p className="mt-3 max-w-[28ch] text-mute">{x.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <div className="on-night relative overflow-hidden rounded-[2rem] bg-night px-6 pb-44 pt-14 text-paper sm:px-12 sm:pb-52 sm:pt-20">
            <Glow />
            <h2 className="relative max-w-[26ch] text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="relative mt-6 max-w-[56ch] text-lg text-night-mute">{t.about.text}</p>
            <Link
              href={href(lang, "/profile")}
              className="relative mt-6 inline-flex min-h-11 items-center underline decoration-night-mute decoration-2 underline-offset-4 transition-colors hover:decoration-paper"
            >
              {t.about.link}
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">{t.hard.title}</h2>
            <p className="mt-4 text-lg text-mute text-balance">{t.hard.text}</p>
          </div>
          <dl className="draw-rules mt-14 border-b border-line">
            {t.hard.domains.map((d) => (
              <div key={d.name} className="grid gap-2 py-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <dt className="text-xl font-semibold tracking-[-0.02em]">
                  {d.name}
                  <span className="mt-1 block text-sm font-normal text-mute">{d.project}</span>
                </dt>
                <dd className="text-xl text-mute text-balance sm:text-2xl">{d.question}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center">
            <Link href={href(lang, "/products")} className={pillBtn}>
              {t.hard.cta}
            </Link>
          </p>
        </section>

        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
