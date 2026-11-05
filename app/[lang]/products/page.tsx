import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { Contact, Footer, Header, pageMetadata } from "../site";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(lang, "/products", (await getDictionary(lang)).products.meta);
}

export default async function Products({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const p = t.products;

  return (
    <>
      <Header lang={lang} t={t} path="/products" />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-6xl">{p.title}</h1>
            <p className="mt-4 text-lg text-mute text-balance">{p.text}</p>
          </div>

          <ul className="mt-16 flex flex-col gap-16 sm:gap-24">
            {p.items.map((item, i) => (
              <li key={item.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-balance sm:text-4xl">{item.headline}</h2>
                  <p className="mt-4 text-lg text-mute">{item.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line bg-card px-3 py-1 text-sm text-mute">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Spec sheet drawn from the project's real parts: internal systems have no public screenshots, so none are invented. */}
                <div className={`rounded-[2rem] border border-line bg-card p-6 sm:p-8 ${i % 2 ? "" : "lg:order-first"}`}>
                  <p className="text-xl font-semibold tracking-[-0.02em]">{item.name}</p>
                  <p className="mt-1 text-sm text-mute">{item.meta}</p>
                  <dl className="mt-6 divide-y divide-line border-t border-line">
                    {item.parts.map((part) => (
                      <div key={part.name} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3 text-sm">
                        <dt className="font-medium">{part.name}</dt>
                        <dd className="text-mute">{part.role}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-center text-mute">{p.note}</p>
        </section>
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
