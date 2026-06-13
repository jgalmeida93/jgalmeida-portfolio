import { ImageResponse } from "next/og";
import { dictionary } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";

export const runtime = "edge";

export const alt = "Jonas G. Almeida — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const isValidLocale = (v: string): v is Locale => v === "en" || v === "pt";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isValidLocale(raw) ? raw : "en";
  const t = dictionary[locale];

  const [bricolageLight, bricolageSemi, manrope] = await Promise.all([
    loadGoogleFont(
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300&display=swap"
    ),
    loadGoogleFont(
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&display=swap"
    ),
    loadGoogleFont(
      "https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap"
    ),
  ]);

  const portfolioLabel = locale === "pt" ? "PORTFÓLIO — 2026" : "PORTFOLIO — 2026";
  const eyebrow = {
    fontFamily: "Manrope",
    fontSize: 19,
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c11",
          padding: 72,
          fontFamily: "Bricolage",
          color: "#f3f2ee",
          position: "relative",
        }}
      >
        {/* Ambient accent glow */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 720,
            height: 720,
            background:
              "radial-gradient(circle, rgba(189,147,249,0.22), transparent 70%)",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ ...eyebrow, color: "#bd93f9" }}>{portfolioLabel}</div>
          <div style={{ ...eyebrow, color: "#8b88a0" }}>MARINGÁ — BR</div>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 168,
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            Jonas
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 168,
              lineHeight: 0.9,
            }}
          >
            <span style={{ fontWeight: 600 }}>Almeida</span>
            <span style={{ color: "#bd93f9", fontWeight: 300 }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontWeight: 300,
              fontSize: 36,
              color: "#c6c3d0",
              maxWidth: 880,
            }}
          >
            {t.hero.tagline}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 22,
            borderTop: "1px solid rgba(243,242,238,0.14)",
          }}
        >
          <div style={{ ...eyebrow, color: "#f3f2ee" }}>
            {portfolioData.title[locale].toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 54,
              height: 54,
              border: "1px solid rgba(243,242,238,0.2)",
              fontSize: 28,
              color: "#bd93f9",
            }}
          >
            JG
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bricolageLight, style: "normal", weight: 300 },
        { name: "Bricolage", data: bricolageSemi, style: "normal", weight: 600 },
        { name: "Manrope", data: manrope, style: "normal", weight: 500 },
      ],
    }
  );
}

async function loadGoogleFont(cssUrl: string): Promise<ArrayBuffer> {
  const css = await fetch(cssUrl).then((r) => r.text());
  const match = css.match(
    /src:\s*url\((https:\/\/[^)]+)\)\s+format\(['"](opentype|truetype)['"]\)/
  );
  if (!match) throw new Error(`Could not parse font URL from: ${cssUrl}`);
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error(`Font fetch failed: ${match[1]}`);
  return res.arrayBuffer();
}
