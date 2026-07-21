import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { seoConfig, personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.url),
  title: {
    default: seoConfig.title,
    template: `%s | ${personalInfo.name}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: personalInfo.name, url: seoConfig.url }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.url,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: personalInfo.name,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: seoConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090B" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#111111",
                color: "#FAFAFA",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
              },
            }}
          />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              url: seoConfig.url,
              jobTitle: personalInfo.headline,
              email: personalInfo.email,
              alumniOf: personalInfo.university,
              sameAs: [
                personalInfo.social.github,
                personalInfo.social.linkedin,
                personalInfo.social.twitter,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}