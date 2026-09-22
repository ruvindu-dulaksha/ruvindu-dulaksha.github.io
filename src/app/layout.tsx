import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://ruvindudulaksha.dev"),
  title: {
    default: "K. D. Ruvindu Dulaksha | Mobile & WordPress Developer Portfolio",
    template: "%s | Ruvindu Dulaksha"
  },
  description: "Portfolio of K. D. Ruvindu Dulaksha - BSc (Hons) First Class Honours Graduate, Gold Medalist, Mobile Developer (Flutter, iOS, Swift), and Custom WordPress Developer.",
  applicationName: "Ruvindu Dulaksha Portfolio",
  keywords: [
    "K. D. Ruvindu Dulaksha",
    "Ruvindu Dulaksha",
    "Flutter Developer",
    "iOS Developer",
    "Swift Developer",
    "WordPress Developer",
    "Mobile App Developer",
    "BSc Computing First Class",
    "Gold Medalist",
    "Sri Lanka Software Engineer",
    "Gemini AI Chatbot",
    "Next.js Developer Portfolio"
  ],
  authors: [{ name: "K. D. Ruvindu Dulaksha", url: "https://ruvindudulaksha.dev" }],
  creator: "K. D. Ruvindu Dulaksha",
  publisher: "K. D. Ruvindu Dulaksha",
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
  icons: {
    icon: "/rd-logo.png",
    shortcut: "/rd-logo.png",
    apple: "/rd-logo.png",
  },
  openGraph: {
    title: "K. D. Ruvindu Dulaksha | Mobile & WordPress Developer Portfolio",
    description: "First Class Honours graduate, Gold Medalist & Batch Topper. Flutter, iOS, and WordPress developer portfolio.",
    url: "https://ruvindudulaksha.dev",
    siteName: "Ruvindu Dulaksha Portfolio",
    images: [
      {
        url: "/images/hero_developer_v2.png",
        width: 1200,
        height: 630,
        alt: "K. D. Ruvindu Dulaksha Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K. D. Ruvindu Dulaksha | Mobile & WordPress Developer Portfolio",
    description: "BSc (Hons) First Class Honours, Gold Medalist. Flutter, iOS, & WordPress Developer.",
    images: ["/images/hero_developer_v2.png"],
    creator: "@ruvindudulaksha",
  },
  alternates: {
    canonical: "https://ruvindudulaksha.dev",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "referrer": "strict-origin-when-cross-origin",
  }
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "K. D. Ruvindu Dulaksha",
    alternateName: "Ruvindu Dulaksha",
    url: "https://ruvindudulaksha.dev",
    image: "https://ruvindudulaksha.dev/images/hero_developer_v2.png",
    jobTitle: "Junior Mobile Developer & WordPress Developer",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Coventry University, UK",
      },
      {
        "@type": "EducationalOrganization",
        name: "National Institute of Business Management (NIBM)",
      },
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "iOS Development",
      "Swift",
      "SwiftUI",
      "WordPress",
      "Firebase",
      "Kotlin Multiplatform",
      "Google Gemini API"
    ],
    sameAs: [
      "https://github.com/ruvindu-dulaksha",
      "https://www.linkedin.com/in/ruvindu-dulaksha-28527028b/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ja-Ela / Colombo",
      addressCountry: "Sri Lanka",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/rd-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/rd-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/rd-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070B14] text-gray-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
