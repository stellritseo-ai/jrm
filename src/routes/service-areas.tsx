import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Building,
  Hammer,
  Sparkles,
  Compass,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import heroBg from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | General Contractor in San Antonio & 80-Mile Radius | JRM Construction" },
      { name: "description", content: "Explore JRM Construction's 80-mile service radius across San Antonio, Boerne, New Braunfels, Schertz, Seguin, Canyon Lake, Kerrville & Fredericksburg. Call (210) 429-5526." },
      { property: "og:title", content: "Service Areas | General Contractor in San Antonio & 80-Mile Radius | JRM Construction" },
      { property: "og:description", content: "Explore JRM Construction's 80-mile service radius across San Antonio, Boerne, New Braunfels, Schertz, Seguin, Canyon Lake, Kerrville & Fredericksburg. Call (210) 429-5526." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/service-areas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Service Areas | JRM Construction Landscaping Design" },
      { name: "twitter:description", content: "Proudly serving San Antonio and surrounding Texas Hill Country communities within an 80-mile radius." },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/service-areas" }
    ]
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  const regions = [
    {
      name: "San Antonio Metro Area",
      description: "Our home base and primary market. We build across all premier neighborhoods from Stone Oak to Southtown.",
      locations: [
        { name: "San Antonio", slug: "san-antonio-tx", desc: "Turnkey general contracting, remodeling & outdoor living across Bexar County." },
        { name: "Alamo Heights", slug: "alamo-heights-tx", desc: "Luxury architectural renovations, kitchen overhauls & bespoke hardscapes." },
        { name: "Leon Valley", slug: "leon-valley-tx", desc: "Residential home additions, decorative concrete & artificial turf." },
        { name: "Live Oak", slug: "live-oak-tx", desc: "Whole-home remodels, covered patios & modern kitchen expansions." },
        { name: "Universal City", slug: "universal-city-tx", desc: "Dependable renovations & outdoor rooms near Randolph AFB." },
        { name: "Converse", slug: "converse-tx", desc: "Custom fencing, concrete driveways & covered patio shelters." },
        { name: "Helotes", slug: "helotes-tx", desc: "Hill Country stone fire pits, outdoor kitchens & rustic pergolas." }
      ]
    },
    {
      name: "Texas Hill Country & North",
      description: "Specialized construction engineered for elevation, natural limestone masonry, and panoramic views.",
      locations: [
        { name: "Boerne", slug: "boerne-tx", desc: "Hill Country masonry, luxury outdoor kitchens & whole-home remodels." },
        { name: "Bulverde", slug: "bulverde-tx", desc: "Spacious covered patio extensions, outdoor kitchens & synthetic lawns." },
        { name: "Canyon Lake", slug: "canyon-lake-tx", desc: "Multi-level custom decks, outdoor fire pits & lakefront living spaces." },
        { name: "Kerrville", slug: "kerrville-tx", desc: "Custom fireplaces, stone retaining walls & comprehensive interior remodels." },
        { name: "Fredericksburg", slug: "fredericksburg-tx", desc: "ADU guest casitas, wine tasting patios & historic home renovations." }
      ]
    },
    {
      name: "Northeast / I-35 Corridor",
      description: "Fast-growing residential communities seeking high-quality construction and long-lasting outdoor living.",
      locations: [
        { name: "New Braunfels", slug: "new-braunfels-tx", desc: "Riverfront outdoor kitchens, custom decks & turnkey renovations." },
        { name: "Schertz", slug: "schertz-tx", desc: "Room additions, covered patio roofs, privacy fencing & interior remodels." }
      ]
    },
    {
      name: "East & South Central",
      description: "Turnkey residential and commercial construction throughout Guadalupe County.",
      locations: [
        { name: "Seguin", slug: "seguin-tx", desc: "Stamped concrete overlays, flagstone patios, fencing & home remodeling." }
      ]
    }
  ];

  const faqs = [
    {
      q: "What is JRM Construction's service radius?",
      a: "We proudly serve homeowners and businesses within an approximate 80-mile radius of San Antonio, Texas. This includes Bexar, Kendall, Comal, Guadalupe, Gillespie, Kerr, and surrounding Texas Hill Country counties."
    },
    {
      q: "Do you charge extra travel fees for Hill Country or outlying cities?",
      a: "No! We provide upfront, transparent estimates with no surprise travel fees for projects located within our verified 80-mile service zone."
    },
    {
      q: "Are you licensed and insured in all surrounding cities?",
      a: "Yes. JRM Construction Services LLC maintains comprehensive general liability insurance, workers' compensation, and adheres to municipal building codes and permitting requirements across all served cities and counties."
    },
    {
      q: "How can I check if my property is within your service area?",
      a: "Simply call owner Robert Thompson at (210) 429-5526 or submit our online consultation request form. We will verify your location and schedule an on-site visit."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── JSON-LD STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://jrmconstructionservicellc.com/service-areas#webpage",
                "url": "https://jrmconstructionservicellc.com/service-areas",
                "name": "JRM Construction Regional Service Areas (80-Mile Radius)",
                "description": "Comprehensive regional coverage for general contracting, remodeling, and outdoor living across San Antonio and Central Texas.",
                "isPartOf": {
                  "@id": "https://jrmconstructionservicellc.com/#website"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://jrmconstructionservicellc.com/service-areas#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://jrmconstructionservicellc.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Service Areas",
                    "item": "https://jrmconstructionservicellc.com/service-areas"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://jrmconstructionservicellc.com/service-areas#faq",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* ── HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/80 to-[#111a0a]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6">
              📍 Central Texas & Hill Country Coverage
            </span>

            <h1
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Service Areas: San Antonio & 80-Mile Radius
            </h1>

            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Since 1989, JRM Construction Services LLC has delivered top-tier general contracting, home remodeling, and custom outdoor living architecture across San Antonio and 15 surrounding communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-7 py-3 text-white text-sm font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
              <Link
                to="/get-free-consultation"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-7 py-3 text-white text-sm font-bold backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <span>Free On-Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── REGIONAL SERVICE AREA GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
              Communities We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Explore Our Regional Service Locations
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
              Click on any city below to explore dedicated local project galleries, city-specific building expertise, landmark highlights, and localized FAQs.
            </p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {regions.map((region) => (
              <div key={region.name} className="border-b border-neutral-200 pb-10 last:border-b-0 last:pb-0">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1" style={{ fontFamily: "Georgia, serif" }}>
                    {region.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">{region.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {region.locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/locations/${loc.slug}`}
                      className="group bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#577a4c]/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#3d5636] transition-colors flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[#577a4c] shrink-0" />
                            <span>{loc.name}, TX</span>
                          </h4>
                          <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#577a4c] group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <p className="text-xs text-neutral-600 font-light leading-relaxed">
                          {loc.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center text-[11px] font-bold text-[#3d5636]">
                        <span>View Location Details</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── REGIONAL MAP EMBED SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
                Local Presence
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Centrally Located in San Antonio, Texas
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light mb-6">
                Our central base in San Antonio allows our fleet of project managers, master stone masons, carpenters, and excavation equipment to deploy rapidly across the Texas Hill Country and I-35 corridor.
              </p>
              <div className="space-y-3 text-xs text-neutral-700 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#577a4c]" />
                  <span>Serving Bexar, Comal, Kendall, Guadalupe & Gillespie Counties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#577a4c]" />
                  <span>Owner Robert Thompson directly oversees all regional jobsites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#577a4c]" />
                  <span>Licensed, insured & bonded for every municipal jurisdiction</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md h-[340px]">
              <iframe
                title="JRM Construction San Antonio Service Radius Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444769.6231343138!2d-98.80582845!3d29.458319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x854728f2445b23d9!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── REGIONAL FAQS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
              Service Area Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#577a4c] shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-16 text-center border border-neutral-800 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Ready to Build in Your Community?
            </h2>
            <p className="text-sm text-neutral-300 font-light mb-8 leading-relaxed">
              Call owner Robert Thompson at (210) 429-5526 to schedule your free on-site estimate anywhere within our 80-mile Texas service area.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
              >
                Call Robert: (210) 429-5526
              </a>
              <Link
                to="/lets-talk"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
