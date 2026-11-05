import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { Events, Ledger, Operated, Transactions } from "../diagrams";
import { Logo } from "../logo";
import { Contact, EMAIL, Footer, Header, LINKEDIN, pageMetadata, textLink } from "../site";

const diagrams = [Transactions, Ledger, Events, Operated];

export async function generateMetadata({ params }: PageProps<"/[lang]/profile">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(lang, "/profile", (await getDictionary(lang)).profile.meta);
}

export default async function Profile({ params }: PageProps<"/[lang]/profile">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const p = t.profile;

  return (
    <>
      <Header lang={lang} t={t} path="/profile" />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-6xl">{p.title}</h1>
            <p className="mx-auto mt-6 max-w-[60ch] text-lg text-mute text-balance">{p.text}</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-4 pt-20 sm:px-6 sm:pt-28">
          <p className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-balance sm:text-3xl">{p.story.lead}</p>
          {p.story.paragraphs.map((text) => (
            <p key={text} className="mt-6 text-lg text-mute">
              {text}
            </p>
          ))}
        </section>

        <section className="mx-auto w-full max-w-3xl px-4 pt-14 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-5 rounded-[2rem] border border-line bg-card p-6 sm:p-8">
            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-ink text-paper">
              <Logo className="h-8 w-auto" />
            </span>
            <div className="min-w-[14rem] flex-1">
              <p className="text-xl font-semibold tracking-[-0.02em]">Adittya Pratama</p>
              <p className="text-mute">{p.card.role}</p>
              <p className="text-sm text-mute">{p.card.place}</p>
            </div>
            <p className="flex gap-x-6">
              <a href={`mailto:${EMAIL}`} className={`${textLink} inline-flex min-h-11 items-center`}>
                {t.contact.email}
              </a>
              <a href={LINKEDIN} className={`${textLink} inline-flex min-h-11 items-center`} rel="noopener noreferrer">
                {t.contact.linkedin}
              </a>
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">{p.timeline.title}</h2>
            <ul className="draw-rules border-b border-line">
              {p.timeline.items.map((x) => (
                <li key={x.when} className="grid gap-x-8 gap-y-1 py-6 sm:grid-cols-[10rem_1fr]">
                  <p className="text-sm font-medium tabular-nums text-mute sm:pt-1">{x.when}</p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">{x.what}</h3>
                    <p className="text-mute">{x.where}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">{p.roles.title}</h2>
            <p className="mt-4 text-lg text-mute text-balance">{p.roles.text}</p>
          </div>
          <ol className="mt-14 divide-y divide-line border-y border-line">
            {p.roles.items.map((r, i) => (
              <li key={r.name} className="grid gap-x-8 gap-y-3 py-7 lg:grid-cols-[3rem_13rem_1fr_17rem] lg:items-baseline">
                <span className="text-sm font-medium tabular-nums text-mute">{String(i + 1).padStart(3, "0")}</span>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{r.name}</h3>
                <p className="text-mute">{r.text}</p>
                <ul className="flex flex-wrap gap-2 lg:justify-end">
                  {r.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line bg-card px-3 py-1 text-sm text-mute">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">{p.habits.title}</h2>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {p.habits.items.map((f, i) => {
              const Diagram = diagrams[i];
              return (
                <li key={f.title} className="rounded-[1.5rem] bg-wash p-6 sm:p-8">
                  <Diagram />
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{f.title}</h3>
                  <p className="mt-2 text-mute">{f.text}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">{p.workflow.title}</h2>
              <p className="mt-4 text-lg text-mute text-balance">{p.workflow.text}</p>
            </div>
            <ol className="divide-y divide-line border-y border-line">
              {p.workflow.steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6">
                  <span className="pt-0.5 text-sm font-medium tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">{s.title}</h3>
                    <p className="mt-1 text-mute">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
