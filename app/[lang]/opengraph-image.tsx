import { ImageResponse } from "next/og";
import { getDictionary, hasLocale } from "./dictionaries";

export const alt = "Adittya Pratama, full-stack developer and system analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { hero } = await getDictionary(hasLocale(lang) ? lang : "en");
  // "Adittya Pratama, full-stack developer ..." -> "Full-stack developer ..."
  const rest = hero.sub.replace(/^Adittya Pratama,\s*/, "").replace(/\.$/, "");
  const tagline = rest.charAt(0).toUpperCase() + rest.slice(1);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111113",
          color: "#fafafa",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 40, color: "#ff8a3d" }}>adittya-pratama.vercel.app</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Adittya Pratama</div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#c9c9cf" }}>{tagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
