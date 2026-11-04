import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationProvider } from "@/context/translation-context";
import { SettingsProvider } from "@/context/settings-context";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import appCss from "../styles.css?url";
import favIcon from "@/assets/fav.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f4f3ef] px-4 py-16 text-center">
      <div className="max-w-xl rounded-2xl border border-[#eae8e1] bg-white p-8 md:p-12 shadow-sm">
        <span className="inline-block rounded-full bg-[#577a4c]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#3d5636] mb-4">
          Error 404 · Page Not Found
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
          Looking for Construction Services?
        </h1>
        <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8">
          The page you are looking for may have been moved or updated. Explore our main construction services or contact owner Robert Thompson directly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left mb-8">
          <Link
            to="/general-contracting"
            className="rounded-xl border border-neutral-200 p-3 hover:border-[#577a4c] hover:bg-[#577a4c]/5 transition-all text-xs font-bold text-neutral-800"
          >
            General Contracting →
          </Link>
          <Link
            to="/house-remodeling"
            className="rounded-xl border border-neutral-200 p-3 hover:border-[#577a4c] hover:bg-[#577a4c]/5 transition-all text-xs font-bold text-neutral-800"
          >
            House Remodeling →
          </Link>
          <Link
            to="/outdoor-kitchens"
            className="rounded-xl border border-neutral-200 p-3 hover:border-[#577a4c] hover:bg-[#577a4c]/5 transition-all text-xs font-bold text-neutral-800"
          >
            Outdoor Kitchens →
          </Link>
          <Link
            to="/covered-patios"
            className="rounded-xl border border-neutral-200 p-3 hover:border-[#577a4c] hover:bg-[#577a4c]/5 transition-all text-xs font-bold text-neutral-800"
          >
            Covered Patios →
          </Link>
          <Link
            to="/work"
            className="rounded-xl border border-neutral-200 p-3 hover:border-[#577a4c] hover:bg-[#577a4c]/5 transition-all text-xs font-bold text-neutral-800"
          >
            Project Portfolio →
          </Link>
          <Link
            to="/service-areas"
            className="rounded-xl border border-neutral-200 p-3 hover:border-[#577a4c] hover:bg-[#577a4c]/5 transition-all text-xs font-bold text-neutral-800"
          >
            Service Areas →
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#577a4c] px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#4d6c43] transition-colors"
          >
            Back to Homepage
          </Link>
          <a
            href="tel:2104295526"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-2.5 text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            Call (210) 429-5526
          </a>
        </div>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", () => {
    window.location.reload();
  });
}

function ErrorComponent({ error, reset }: { error: any; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    const msg = error?.message || "";
    // If a chunk failed to fetch due to a new deployment, auto-reload to get fresh assets
    if (
      msg.includes("Failed to fetch dynamically imported module") ||
      msg.includes("dynamically imported module") ||
      msg.includes("Importing a module script failed")
    ) {
      window.location.reload();
      return;
    }
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msvalidate.01", content: "028651FABCA0EB84B344A4A9221DFA02" },
      { title: "JRM Construction Landscaping Design | San Antonio Construction, Remodeling & Outdoor Living Experts" },
      { name: "description", content: "San Antonio's premier licensed, insured & bonded general contractor with 35+ years experience. Expert house remodeling, custom outdoor kitchens, fireplaces, covered patios, hardscapes & artificial turf. Call (210) 429-5526." },
      { name: "author", content: "JRM Construction Landscaping Design" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "JRM Construction Landscaping Design | San Antonio's Premier General Contractor" },
      { property: "og:description", content: "35+ years of trusted construction, remodeling, and outdoor living space design across San Antonio & 80-mile service radius. Free consultation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com" },
      { property: "og:site_name", content: "JRM Construction Landscaping Design" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JRM Construction Landscaping Design | San Antonio TX" },
      { name: "twitter:description", content: "35+ years of trusted construction, house remodeling & outdoor living in San Antonio. Licensed, insured & bonded. Call (210) 429-5526." },
      { property: "og:image", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "JRM Construction Landscaping Design - General Contractor San Antonio TX" },
      { name: "twitter:image", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { name: "twitter:image:alt", content: "JRM Construction Landscaping Design - General Contractor San Antonio TX" },
      { name: "theme-color", content: "#2c241d" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" },
    ],
    links: [
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
      {
        rel: "icon",
        type: "image/png",
        href: favIcon,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "Organization"],
              "@id": "https://jrmconstructionservicellc.com/#business",
              "name": "JRM Construction Landscaping Design",
              "legalName": "JRM Construction Services LLC",
              "alternateName": ["JRM Construction Services LLC", "JRM Construction", "JRM Landscaping Design"],
              "url": "https://jrmconstructionservicellc.com",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://jrmconstructionservicellc.com/#logo",
                "url": "https://jrmconstructionservicellc.com/assets/jrm-logo.png"
              },
              "image": "https://jrmconstructionservicellc.com/assets/svc-house-remodeling.jpg",
              "telephone": "+1-210-429-5526",
              "email": "robertsa210@icloud.com",
              "priceRange": "$$$",
              "description": "JRM Construction Landscaping Design (JRM Construction Services LLC) is a licensed, insured, and bonded general contractor, home remodeling specialist, and outdoor living & landscape builder in San Antonio, TX, led by owner Robert Thompson since 1989.",
              "foundingDate": "1989",
              "founder": {
                "@id": "https://jrmconstructionservicellc.com/#robert-thompson"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Antonio",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.424122,
                "longitude": -98.493628
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-210-429-5526",
                  "contactType": "customer service",
                  "contactOption": "TollFree",
                  "areaServed": "US-TX",
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-210-379-3505",
                  "contactType": "customer service",
                  "areaServed": "US-TX",
                  "availableLanguage": ["Spanish", "English"]
                }
              ],
              "areaServed": [
                { "@type": "City", "name": "San Antonio", "sameAs": "https://en.wikipedia.org/wiki/San_Antonio" },
                { "@type": "City", "name": "Alamo Heights", "sameAs": "https://en.wikipedia.org/wiki/Alamo_Heights,_Texas" },
                { "@type": "City", "name": "Boerne", "sameAs": "https://en.wikipedia.org/wiki/Boerne,_Texas" },
                { "@type": "City", "name": "New Braunfels", "sameAs": "https://en.wikipedia.org/wiki/New_Braunfels,_Texas" },
                { "@type": "City", "name": "Seguin", "sameAs": "https://en.wikipedia.org/wiki/Seguin,_Texas" },
                { "@type": "City", "name": "Canyon Lake", "sameAs": "https://en.wikipedia.org/wiki/Canyon_Lake,_Texas" },
                { "@type": "City", "name": "Schertz", "sameAs": "https://en.wikipedia.org/wiki/Schertz,_Texas" },
                { "@type": "City", "name": "Helotes", "sameAs": "https://en.wikipedia.org/wiki/Helotes,_Texas" },
                { "@type": "City", "name": "Bulverde", "sameAs": "https://en.wikipedia.org/wiki/Bulverde,_Texas" },
                { "@type": "City", "name": "Universal City", "sameAs": "https://en.wikipedia.org/wiki/Universal_City,_Texas" },
                { "@type": "City", "name": "Kerrville", "sameAs": "https://en.wikipedia.org/wiki/Kerrville,_Texas" },
                { "@type": "City", "name": "Fredericksburg", "sameAs": "https://en.wikipedia.org/wiki/Fredericksburg,_Texas" },
                { "@type": "City", "name": "Converse" },
                { "@type": "City", "name": "Live Oak" },
                { "@type": "City", "name": "Leon Valley" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction, Landscaping & Outdoor Living Services in San Antonio, TX",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Contracting", "url": "https://jrmconstructionservicellc.com/general-contracting" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Remodeling", "url": "https://jrmconstructionservicellc.com/house-remodeling" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction", "url": "https://jrmconstructionservicellc.com/new-construction" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction", "url": "https://jrmconstructionservicellc.com/commercial" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Kitchens", "url": "https://jrmconstructionservicellc.com/outdoor-kitchens" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Covered Patios & Pergolas", "url": "https://jrmconstructionservicellc.com/covered-patios" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Fireplaces & Fire Pits", "url": "https://jrmconstructionservicellc.com/custom-fireplaces" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardscaping & Retaining Walls", "url": "https://jrmconstructionservicellc.com/hardscapes" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stamped Concrete & Overlays", "url": "https://jrmconstructionservicellc.com/stamped-concrete-overlay" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Decks", "url": "https://jrmconstructionservicellc.com/custom-decks" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Artificial Turf Installation", "url": "https://jrmconstructionservicellc.com/artificial-turf" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Fencing", "url": "https://jrmconstructionservicellc.com/fencing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ADU Construction Services", "url": "https://jrmconstructionservicellc.com/adu-services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Landscape & Architectural Design", "url": "https://jrmconstructionservicellc.com/design-service" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Softscapes & Native Planting", "url": "https://jrmconstructionservicellc.com/softscapes" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Palm Tree Sourcing & Installation", "url": "https://jrmconstructionservicellc.com/palm-trees" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Irrigation & Sprinkler Systems", "url": "https://jrmconstructionservicellc.com/irrigation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscape Lighting", "url": "https://jrmconstructionservicellc.com/landscape-lighting" } }
                ]
              }
            },
            {
              "@type": "Person",
              "@id": "https://jrmconstructionservicellc.com/#robert-thompson",
              "name": "Robert Thompson",
              "jobTitle": "Owner & Lead General Contractor",
              "worksFor": {
                "@id": "https://jrmconstructionservicellc.com/#business"
              },
              "url": "https://jrmconstructionservicellc.com/about",
              "description": "Founder and owner of JRM Construction Landscaping Design with over 35 years of hands-on residential and commercial general contracting, remodeling, hardscaping, and outdoor living construction experience in San Antonio, Texas."
            },
            {
              "@type": "WebSite",
              "@id": "https://jrmconstructionservicellc.com/#website",
              "url": "https://jrmconstructionservicellc.com",
              "name": "JRM Construction Landscaping Design",
              "description": "Construction, Landscaping & Outdoor Living Contractors in San Antonio, TX.",
              "publisher": {
                "@id": "https://jrmconstructionservicellc.com/#business"
              }
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-[#1c140d] focus:px-4 focus:py-2.5 focus:text-xs focus:font-bold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#577a4c]"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDashboard = window.location.pathname.startsWith("/dashboard") || window.location.pathname.startsWith("/login");
      if (!isDashboard) {
        import("@/lib/api/db.functions").then(({ incrementVisitsFn }) => {
          incrementVisitsFn()
            .then((res) => console.log("[Visits Tracker] Count updated:", res))
            .catch((err) => console.error("[Visits Tracker] Error:", err));
        });
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <TranslationProvider>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <Analytics />
        </TranslationProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}
