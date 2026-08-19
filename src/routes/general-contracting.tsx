import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Building,
  Hammer,
  Sparkles,
  Home,
  FileText,
  Eye,
  Compass,
  Briefcase,
  Users,
  HardHat,
  Scale,
  Award,
  Layers,
  ArrowRight
} from "lucide-react";

import imgConstruction from "@/assets/svc-new-construction.jpg";
import imgRemodeling from "@/assets/svc-house-remodeling.jpg";
import imgHardscapes from "@/assets/svc-hardscapes.jpg";
import welBg from "@/assets/wel-bg.png";
import heroBg from "@/assets/hero-patio.jpg";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/general-contracting")({
  head: () => ({
    meta: [
      { title: "General Contractor San Antonio TX | Licensed General Contracting | JRM Construction" },
      { name: "description", content: "San Antonio's trusted licensed, insured & bonded general contractor with 35+ years experience. Turnkey residential & commercial construction, remodeling & project management. Call (210) 429-5526." },
      { property: "og:title", content: "General Contractor San Antonio TX | Licensed General Contracting | JRM Construction" },
      { property: "og:description", content: "San Antonio's trusted licensed, insured & bonded general contractor with 35+ years experience. Turnkey residential & commercial construction, remodeling & project management. Call (210) 429-5526." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/general-contracting" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor San Antonio TX | JRM Construction Services LLC" },
      { name: "twitter:description", content: "35+ years of trusted general contracting in San Antonio & 80-mile radius. Owner Robert Thompson oversees every project." },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/general-contracting" }
    ]
  }),
  component: GeneralContractingPage,
});

function GeneralContractingPage() {
  const { t } = useTranslation();

  const gcServices = [
    {
      title: "Residential General Contracting",
      icon: Home,
      desc: "From ground-up custom home builds to whole-home structural renovations, we coordinate every phase including framing, electrical, plumbing, mechanical, drywall, and luxury finishes.",
      features: ["Custom Home Construction", "Whole-House Remodeling", "Room & Second-Story Additions", "Structural Wall Modifications", "Architectural Plan Execution"]
    },
    {
      title: "Commercial General Contracting",
      icon: Building,
      desc: "Turnkey tenant improvements, retail build-outs, and commercial facilities designed to meet strict commercial building codes, ADA accessibility guidelines, and tight timelines.",
      features: ["Retail & Office Build-Outs", "Restaurant & Hospitality Spaces", "Commercial Foundation & Framing", "ADA Code Compliance", "Municipal Permitting & Inspections"]
    },
    {
      title: "Outdoor Living & Structural Additions",
      icon: Layers,
      desc: "Seamlessly connecting indoor spaces with heavy-duty exterior builds including covered patios, outdoor kitchens, guest casitas (ADUs), and masonry structures.",
      features: ["Solid-Roof Covered Patios", "Custom Outdoor Kitchens", "Detached Guest Casitas / ADUs", "Engineered Retaining Walls", "Custom Masonry Fireplaces"]
    }
  ];

  const gcProcess = [
    {
      step: "01",
      title: "Discovery & Feasibility",
      desc: "We meet on-site for a free consultation to evaluate your project scope, site conditions, zoning requirements, and budget expectations. Owner Robert Thompson provides direct, practical guidance based on 35+ years of local building experience."
    },
    {
      step: "02",
      title: "Detailed Proposal & Transparent Pricing",
      desc: "You receive an itemized, transparent scope of work with guaranteed milestone timelines and zero surprise fees. We review material selections, engineering requirements, and city permitting logistics."
    },
    {
      step: "03",
      title: "Permitting, Engineering & Sourcing",
      desc: "We coordinate architectural blueprints, structural engineering seals, and navigate municipal approvals with the City of San Antonio Development Services Department or surrounding county offices."
    },
    {
      step: "04",
      title: "Owner-Led Construction & Quality Control",
      desc: "Our skilled craftsmen execute foundation, framing, MEP trades, and finish carpentry under the daily, hands-on supervision of founder Robert Thompson. Work sites are kept clean, safe, and organized."
    },
    {
      step: "05",
      title: "Rigorous Inspection & Final Handover",
      desc: "We perform comprehensive code inspections, punch-list walkthroughs, and deliver all warranty documentation, ensuring your project exceeds every structural and visual standard."
    }
  ];

  const gcStandards = [
    {
      title: "Licensed, Insured & Bonded",
      desc: "Full comprehensive general liability and workers' compensation coverage protecting you and your property throughout the entire build.",
      icon: ShieldCheck
    },
    {
      title: "35+ Years of Proven Craftsmanship",
      desc: "Deep knowledge of San Antonio's expansive clay soil conditions, local structural requirements, and Texas climate demands.",
      icon: Award
    },
    {
      title: "Direct Owner Oversight",
      desc: "Robert Thompson is personally on-site managing trades, inspecting welds, framing, and finishes—no unaccountable third-party handoffs.",
      icon: HardHat
    },
    {
      title: "Turnkey Project Management",
      desc: "Single point of contact from architectural design and permitting to final paint and landscape integration.",
      icon: Compass
    }
  ];

  const faqs = [
    {
      q: "What does a General Contractor do on a construction project?",
      a: "A general contractor oversees and manages the entire construction lifecycle. JRM Construction coordinates architectural plans, secures municipal permits, schedules specialized trades (plumbing, electrical, masonry, framing), purchases high-grade materials, maintains strict jobsite safety, and guarantees that work meets local building codes and client specifications."
    },
    {
      q: "Are you licensed and insured to work in San Antonio and surrounding Texas counties?",
      a: "Yes. JRM Construction Services LLC is fully licensed, insured, and bonded in the State of Texas and registered with the City of San Antonio and regional municipal building departments across Bexar, Comal, Kendall, Guadalupe, and surrounding counties."
    },
    {
      q: "How does JRM Construction handle building permits and HOA approvals?",
      a: "We manage all permitting documentation from start to finish. We submit structural blueprints, coordinate mechanical/electrical/plumbing (MEP) reviews with the City of San Antonio Development Services Department, and prepare architectural packages for HOA architectural review committees (ARCs)."
    },
    {
      q: "Do you handle both residential and commercial general contracting?",
      a: "Yes. We manage custom home builds, luxury renovations, room additions, and ADUs, as well as commercial retail build-outs, office renovations, and commercial exterior transformations."
    },
    {
      q: "How far from San Antonio do you provide general contracting services?",
      a: "We provide comprehensive general contracting across an 80-mile service radius, including San Antonio, Boerne, New Braunfels, Schertz, Seguin, Canyon Lake, Kerrville, Fredericksburg, Bulverde, Helotes, Converse, Live Oak, and Alamo Heights."
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
                "@type": "Service",
                "@id": "https://jrmconstructionservicellc.com/general-contracting#service",
                "name": "General Contracting Services San Antonio TX",
                "serviceType": "General Contractor & Turnkey Construction",
                "provider": {
                  "@id": "https://jrmconstructionservicellc.com/#business"
                },
                "areaServed": [
                  { "@type": "City", "name": "San Antonio" },
                  { "@type": "City", "name": "Boerne" },
                  { "@type": "City", "name": "New Braunfels" },
                  { "@type": "City", "name": "Schertz" },
                  { "@type": "City", "name": "Seguin" },
                  { "@type": "City", "name": "Helotes" },
                  { "@type": "City", "name": "Alamo Heights" }
                ],
                "description": "Premier licensed, insured & bonded general contractor in San Antonio, TX. 35+ years experience in turnkey residential and commercial construction, remodeling, and project management.",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "description": "Free Initial Consultation & Detailed Project Estimate"
                  }
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://jrmconstructionservicellc.com/general-contracting#breadcrumb",
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
                    "name": "Services",
                    "item": "https://jrmconstructionservicellc.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "General Contracting",
                    "item": "https://jrmconstructionservicellc.com/general-contracting"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://jrmconstructionservicellc.com/general-contracting#faq",
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

      {/* ── HERO BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[440px] md:min-h-[520px] flex items-center justify-center text-center px-6 py-16">
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
              🔨 35+ Years Proven Craftsmanship · San Antonio, TX
            </span>

            <h1
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Trusted General Contractor in San Antonio, TX
            </h1>

            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              From full-scale residential construction and whole-home remodeling to commercial build-outs and luxury outdoor living spaces, JRM Construction Services LLC delivers turnkey general contracting with owner-led oversight, unyielding structural integrity, and transparent communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-7 py-3 text-white text-sm font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Robert: (210) 429-5526</span>
              </a>
              <Link
                to="/get-free-consultation"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-7 py-3 text-white text-sm font-bold backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── INTRO OVERVIEW ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
              Full-Spectrum General Contracting
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
              What General Contracting Means at JRM Construction
            </h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light mb-6 text-left">
              Hiring a general contractor means entrusting your most valuable asset to a master builder who coordinates every architectural detail, structural requirement, municipal permit, and trade specialty. Since 1989, founder <strong>Robert Thompson</strong> has managed complex construction projects across San Antonio, Alamo Heights, Boerne, and New Braunfels. We eliminate the stress of hiring multiple disjointed sub-contractors by providing a unified, accountable, and experienced build team.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                <div className="text-xl font-bold text-[#577a4c] mb-1">35+ Years</div>
                <div className="text-xs text-neutral-600 font-light">Continuous active construction leadership in San Antonio.</div>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                <div className="text-xl font-bold text-[#577a4c] mb-1">100% Licensed</div>
                <div className="text-xs text-neutral-600 font-light">Fully insured & bonded for your complete peace of mind.</div>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                <div className="text-xl font-bold text-[#577a4c] mb-1">80-Mile Radius</div>
                <div className="text-xs text-neutral-600 font-light">Turnkey service across San Antonio & Central Texas.</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── CORE GC CAPABILITIES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Comprehensive General Contracting Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {gcServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
                      {svc.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      {svc.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── 5-STEP CONSTRUCTION PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
                Proven Methodology
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
                Our 5-Step General Contracting Process
              </h2>
            </div>

            <div className="space-y-6">
              {gcProcess.map((p) => (
                <div key={p.step} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
                  <div className="text-2xl font-extrabold text-[#577a4c] bg-[#577a4c]/10 rounded-lg px-4 py-2 shrink-0">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE JRM ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
              The JRM Difference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Why San Antonio Chooses JRM Construction
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gcStandards.map((std) => {
              const Icon = std.icon;
              return (
                <div key={std.title} className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">{std.title}</h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{std.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── FAQS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
              General Contracting Frequently Asked Questions
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
              Start Your Construction Project with San Antonio's Best
            </h2>
            <p className="text-sm text-neutral-300 font-light mb-8 leading-relaxed">
              Schedule your free, on-site consultation with owner Robert Thompson. We evaluate your goals, provide transparent proposals, and bring 35+ years of master craftsmanship to your build.
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
