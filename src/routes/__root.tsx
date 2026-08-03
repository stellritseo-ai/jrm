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

import appCss from "../styles.css?url";
import favIcon from "@/assets/fav.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
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
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: favIcon,
      },
      {
        rel: "canonical",
        href: "https://jrmconstructionservicellc.com",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LandscapeArchitect"],
                "@id": "https://jrmconstructionservicellc.com/#business",
                "name": "JRM Construction Landscaping Design",
                "alternateName": ["JRM Construction Services LLC", "JRM Construction", "JRM Landscaping Design"],
                "url": "https://jrmconstructionservicellc.com",
                "logo": "https://jrmconstructionservicellc.com/assets/jrm-logo.png",
                "image": "https://jrmconstructionservicellc.com/assets/svc-house-remodeling.jpg",
                "telephone": "+12104295526",
                "email": "robertsa210@icloud.com",
                "priceRange": "$$$",
                "description": "San Antonio's trusted licensed, insured, and bonded general contractor and landscape design firm with over 35 years of owner-led craftsmanship.",
                "foundingDate": "1989",
                "founder": {
                  "@type": "Person",
                  "name": "Robert Thompson",
                  "jobTitle": "Owner & Founder"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "San Antonio",
                  "addressRegion": "TX",
                  "postalCode": "78201",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 29.424122,
                  "longitude": -98.493628
                },
                "areaServed": [
                  { "@type": "City", "name": "San Antonio", "sameAs": "https://en.wikipedia.org/wiki/San_Antonio" },
                  { "@type": "City", "name": "Boerne", "sameAs": "https://en.wikipedia.org/wiki/Boerne,_Texas" },
                  { "@type": "City", "name": "New Braunfels", "sameAs": "https://en.wikipedia.org/wiki/New_Braunfels,_Texas" },
                  { "@type": "City", "name": "Seguin" },
                  { "@type": "City", "name": "Canyon Lake" },
                  { "@type": "City", "name": "Kerrville" },
                  { "@type": "City", "name": "Fredericksburg" },
                  { "@type": "City", "name": "Bulverde" },
                  { "@type": "City", "name": "Schertz" },
                  { "@type": "City", "name": "Converse" },
                  { "@type": "City", "name": "Helotes" },
                  { "@type": "City", "name": "Universal City" },
                  { "@type": "City", "name": "Live Oak" },
                  { "@type": "City", "name": "Leon Valley" },
                  { "@type": "City", "name": "Alamo Heights" }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "07:00",
                    "closes": "19:00"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "58",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "sameAs": [
                  "https://www.facebook.com/jrmconstruction",
                  "https://www.instagram.com/jrmconstruction",
                  "https://www.houzz.com/pro/jrmconstruction"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Construction & Outdoor Living Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Remodeling San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Home Construction San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Covered Patios & Pergolas San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor Kitchens San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Fireplaces San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardscapes & Stamped Concrete San Antonio" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Artificial Turf Installation San Antonio" } }
                  ]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://jrmconstructionservicellc.com/#website",
                "url": "https://jrmconstructionservicellc.com",
                "name": "JRM Construction Landscaping Design",
                "description": "San Antonio's premier construction, remodeling and outdoor living contractor.",
                "publisher": {
                  "@id": "https://jrmconstructionservicellc.com/#business"
                }
              }
            ]
          })}
        </script>
      </head>
      <body>
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
        </TranslationProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}
