import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { ChatWidget } from "@/components/layout/ChatWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B2E55",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alltimeplumbers.com"),
  title: {
    default: "San Diego Plumber | All Time Plumbers | CSLB #1134776",
    template: "%s",
  },
  description:
    "All Time Plumbers: Owner-operated San Diego plumber. 24/7 emergency service, water heaters, leak repair, drain cleaning. Call (760) 201-6461. CSLB #1134776.",
  authors: [{ name: "Pete", url: "https://alltimeplumbers.com" }],
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alltimeplumbers.com",
    siteName: "All Time Plumbers",
    title: "San Diego Plumber | All Time Plumbers",
    description: "Owner-operated San Diego plumber serving North County and beyond. 24/7 service. CSLB #1134776.",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Plumber | All Time Plumbers",
    description: "Owner-operated San Diego plumber. 24/7 emergency service.",
  },
  verification: {
    google: "placeholder-google-verification", // Replace with real token
    other: {
      msvalidate: "placeholder-bing-verification", // Replace with real token
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plumberSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://alltimeplumbers.com/#org",
    "name": "All Time Plumbers, Inc.",
    "description": "Owner-operated San Diego plumbing company serving residential and commercial properties.",
    "url": "https://alltimeplumbers.com",
    "telephone": "+17602016461",
    "image": "https://alltimeplumbers.com/opengraph-image",
    "logo": "https://alltimeplumbers.com/images/logo_alltime.webp",
    "priceRange": "$$",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Peter A. McNamara",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "postalCode": "92127",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.9962024,
      "longitude": -117.1358175,
    },
    "areaServed": [
      { "@type": "City", "name": "San Diego", "sameAs": "https://en.wikipedia.org/wiki/San_Diego" },
      { "@type": "City", "name": "Rancho Bernardo" },
      { "@type": "City", "name": "Poway" },
      { "@type": "City", "name": "4S Ranch" },
      { "@type": "City", "name": "Carmel Mountain" },
      { "@type": "City", "name": "Escondido" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      }
    ],
    "sameAs": [
      "https://maps.app.goo.gl/27B8SeJbJJDSWqRv6",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://alltimeplumbers.com/#website",
    "url": "https://alltimeplumbers.com",
    "name": "All Time Plumbers",
    "publisher": {
      "@id": "https://alltimeplumbers.com/#org",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <GoogleAnalytics gaId="G-PLACEHOLDER" />
        <ChatWidget />
      </body>
    </html>
  );
}
