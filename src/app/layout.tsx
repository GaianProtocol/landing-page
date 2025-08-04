// import type { Metadata } from "next";
import "./globals.css";
import LayoutContainer from "@/layouts/LayoutContainer";
import ContentLayout from "@/layouts/ContentLayout";
import PageLayout from "@/layouts/PageLayout";
import ClientWrapper from "@/layouts/ClientWrapper";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import "../lib/i18n";
import { Metadata } from "next";
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Gaian Network – Stablecoin Neobank for APAC",
  description:
    "Gaian is building the stablecoin payment infrastructure for APAC, in partnership with Fystack.",
  keywords: [
    "Gaian",
    "Stablecoin",
    "Web3",
    "Crypto",
    "Payments",
    "Neobank",
    "APAC",
  ],
  metadataBase: new URL("https://gaian.network"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gaian.network",
    title: "Gaian Network – Stablecoin Neobank for APAC",
    description:
      "Building the stablecoin neobank infrastructure for APAC with secure wallet integration.",
    siteName: "Gaian",
    images: [
      {
        url: "https://gaian.network/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gaian Stablecoin Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gaian – Stablecoin Neobank for APAC",
    description:
      "Secure, automated Web3 payment infrastructure with stablecoin support across APAC.",
    images: ["https://gaian.network/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/logo.svg",
    shortcut: "/favicon.ico",
  },

  themeColor: "#ffffff",
  // manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body>
        <ClientWrapper>
          <PageLayout>
            <LayoutContainer>
              <Header />
              <ContentLayout>{children}</ContentLayout>
              <Footer />
            </LayoutContainer>
          </PageLayout>
        </ClientWrapper>
      </body>
    </html>
  );
}
