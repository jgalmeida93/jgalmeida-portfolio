import { ImageResponse } from "next/og";
import { dictionary } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { SITE_NAME } from "@/lib/site";
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

  const [fraunces, bigShoulders, spaceMono] = await Promise.all([
    loadGoogleFont(
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,500&display=swap"
    ),
    loadGoogleFont(
      "https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@900&display=swap"
    ),
    loadGoogleFont(
      "https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
    ),
  ]);

  const issueLabel = locale === "pt" ? "EDIÇÃO" : "ISSUE";
  const portfolioLabel = locale === "pt" ? "PORTFÓLIO" : "PORTFOLIO";
  const lastName = SITE_NAME.replace("Jonas G. ", "").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#16110d",
          padding: 64,
          fontFamily: "BigShoulders",
          color: "#f4ead5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 14,
            borderBottom: "1px solid #3a2e22",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "SpaceMono",
              fontSize: 20,
              letterSpacing: "0.22em",
              color: "#998771",
              gap: 16,
            }}
          >
            <span>VOL. 01</span>
            <span style={{ color: "#5a4a3a" }}>/</span>
            <span>{`${issueLabel} № 26`}</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "SpaceMono",
              fontSize: 20,
              letterSpacing: "0.22em",
              color: "#998771",
            }}
          >
            MARINGÁ — PR
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                background: "#d94545",
                color: "#f4ead5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                fontSize: 60,
                fontFamily: "BigShoulders",
                fontWeight: 900,
                transform: "rotate(-3deg)",
                boxShadow: "6px 6px 0 #ecb736",
              }}
            >
              JG
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "SpaceMono",
                  fontSize: 20,
                  letterSpacing: "0.22em",
                  color: "#ecb736",
                }}
              >
                {portfolioLabel}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "SpaceMono",
                  fontSize: 14,
                  letterSpacing: "0.22em",
                  color: "#998771",
                }}
              >
                EST. 2018
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "BigShoulders",
              fontWeight: 900,
              fontSize: 150,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#f4ead5",
            }}
          >
            JONAS GABRIEL
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 500,
              color: "#d94545",
              fontSize: 150,
              lineHeight: 0.92,
            }}
          >
            almeida.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontSize: 32,
              color: "#d9c8a6",
              maxWidth: 920,
              lineHeight: 1.25,
            }}
          >
            {t.hero.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 16,
            borderTop: "1px solid #3a2e22",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "SpaceMono",
              fontSize: 20,
              letterSpacing: "0.22em",
              color: "#f4ead5",
            }}
          >
            {portfolioData.title[locale].toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "SpaceMono",
              fontSize: 20,
              letterSpacing: "0.22em",
              color: "#998771",
            }}
          >
            {`${lastName} · BR`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "italic", weight: 500 },
        { name: "BigShoulders", data: bigShoulders, style: "normal", weight: 900 },
        { name: "SpaceMono", data: spaceMono, style: "normal", weight: 700 },
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
