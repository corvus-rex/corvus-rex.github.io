import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { metadata } from "./metadata";  // Import metadata
import { Inter as FontSans1, JetBrains_Mono as FontSans } from "next/font/google";
import "./globals.css";
import CursorLightEffect from "@/components/CursorLightEffect";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export { metadata }; // Export metadata from this file if needed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Safe fallback handling for metadata properties
  const siteUrl = metadata?.metadataBase?.href || "";
  const siteTitle = metadata?.title || "Adrian Naufal Riadi - Portfolio";  // Directly use metadata.title
  const siteDescription = metadata?.description || "Software Engineer";

  // JSON-LD Structured Data
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adrian Naufal Riadi",
    "jobTitle": "Software Engineer",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/corvus-rex",
      "https://linkedin.com/in/https://www.linkedin.com/in/adrian-n-riadi-7769201b1/",
    ],
    "image": "https://drive.google.com/thumbnail?id=1nSPF60wolD_Qf92gi9LB4jJO-1Vj1Lvi",
    "description": siteDescription
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteTitle,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background dark:bg-gray-900 text-gray-900 dark:text-white font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Cursor Light Effect & Mesh Background */}
        <CursorLightEffect />

        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Moved Navbar to the top for better navigation */}
            <Navbar />

            {/* Content Wrapper with padding control */}
            <main className="max-w-2xl mx-auto px-6 py-8 sm:py-16">{children}</main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
