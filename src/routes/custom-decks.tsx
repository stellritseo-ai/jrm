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
  Home,
  Sun,
  LayoutGrid,
  Sparkles,
  Compass,
  FileText,
  Hammer,
  Layers
} from "lucide-react";

import imgDecks from "@/assets/svc-custom-decks.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/custom-decks")({
  head: () => ({
    meta: [
      { title: "Custom Decks San Antonio | Composite & Wood Deck Contractors | JRM Construction" },
      { name: "description", content: "Transform your outdoor living with custom decks in San Antonio, TX. Composite & hardwood decks, multi-tier platforms, railing systems & built-in seating. 35+ years experience. Call (210) 429-5526." },
      { property: "og:title", content: "Custom Decks San Antonio | Composite & Wood Deck Contractors | JRM Construction" },
      { property: "og:description", content: "Transform your outdoor living with custom decks in San Antonio, TX. Composite & hardwood decks, multi-tier platforms, railing systems & built-in seating. 35+ years experience." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/custom-decks" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/custom-decks" }
    ]
  }),
  component: CustomDecksPage,
});

function CustomDecksPage() {
  const { t } = useTranslation();

  const deckStyles = [
    {
      title: "Decking Materials & Options",
      icon: Layers,
      items: [
        "Composite & PVC Decking: Premium low-maintenance decking from Trex & TimberTech. Moisture, stain, and fade resistant with realistic wood grain textures.",
        "Natural Hardwoods & Cedar: Premium Western Red Cedar, Ipe, and treated pine crafted for natural elegance and long-lasting structural strength.",
        "Multi-Tier & Elevated Decks: Masterfully engineered multi-level platforms designed for sloping yards, second-story balconies, and elevated view decks."
      ]
    },
    {
      title: "Custom Features & Add-ons",
      icon: LayoutGrid,
      items: [
        "Built-in Seating & Planters: Integrated wooden bench seating, fire pit surrounds, and custom planter boxes crafted seamlessly into your deck layout.",
        "Modern Railing Systems: Powder-coated aluminum, stainless steel cable railing, and tempered glass panels for unobstructed Hill Country views.",
        "Low-Voltage LED Lighting: Integrated stair riser lights, post cap lights, and under-rail accent lighting for nocturnal ambiance and safety."
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Design & Consultation",
      desc: "We measure your site, review slope and sun orientation, and craft a custom layout tailored to your aesthetic and lifestyle goals.",
      icon: Compass
    },
    {
      step: "02",
      title: "Permitting & Material Selection",
      desc: "Our team handles local San Antonio permitting, HOA submissions, and guides you through durable composite, hardwood, and railing options.",
      icon: FileText
    },
    {
      step: "03",
      title: "Precision Construction",
      desc: "Master carpenters excavate concrete footings, frame heavy-duty joists, and meticulously install decking boards, railings, and LED fixtures.",
      icon: Hammer
    }
  ];

  const faqs = [
    {
      q: "What is the lifespan of a composite deck versus a wood deck in Texas?",
      a: "Quality composite decks (like Trex or TimberTech) can last 25 to 30+ years with minimal maintenance and no splintering or fading. Natural wood decks typically last 15 to 20 years when properly stained and sealed every 2 to 3 years."
    },
    {
      q: "Do I need a permit to build a custom deck in San Antonio?",
      a: "Yes, most elevated decks or decks attached to a residence in San Antonio and surrounding counties require building permits. JRM Construction handles all engineering specifications, permits, and HOA documentation for you."
    },
    {
      q: "Can you build a multi-level deck on a steep slope?",
      a: "Absolutely. We specialize in deep concrete footings and heavy steel/timber posts engineered for steep slopes in the Texas Hill Country."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://jrmconstructionservicellc.com/custom-decks/#service",
                "name": "Custom Deck Construction San Antonio",
                "serviceType": "Deck Contracting, Composite Decking, Hardwood Decks, Multi-Tier Balconies",
                "provider": {
                  "@id": "https://jrmconstructionservicellc.com/#business"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Texas"
                },
                "description": "Custom composite and natural wood deck construction, elevated balconies, and integrated seating in San Antonio, TX."
              },
              {
                "@type": "BreadcrumbList",
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
                    "name": "Custom Decks",
                    "item": "https://jrmconstructionservicellc.com/custom-decks"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[440px] flex items-center justify-center text-center px-6 py-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgDecks})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/90 via-[#111a0a]/75 to-[#111a0a]/90 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-xs text-neutral-300 uppercase tracking-widest font-semibold mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Custom Decks</span>
            </div>

            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Custom Decks & Elevated Balconies in San Antonio
            </h1>

            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Expand your living space outdoors with master-built composite and natural hardwood decks. Built for Texas weather by founder <strong>Robert Thompson</strong> (35+ years of structural experience).
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:2104295526"
                className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-neutral-900 border border-white/30 px-7 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
              >
                <span>Request Free Quote</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── OVERVIEW SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block">
                Premium Outdoor Living
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Decking Materials & Design Options
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                Your choice of decking materials is essential for your deck's design and long-term cost and should be discussed with your builder. Wood decks have been popular recently because they often look beautiful and complement your home well. Cedar is an excellent choice if you want a natural-looking finish that will last a long time. We offer <strong>Ipe, Tigerwood, Cedar, and Treated Pine</strong>.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                With composite and PVC materials, you can get all of this classic elegance with way less maintenance hassle...which also means you save more money on upkeep! But what's even better? Both varieties come in many colors, so picking one is easy! We carry all lines of <strong>TREX, TimberTech, and AZEK</strong>.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs md:text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#577a4c] shrink-0" />
                  <span>Wood Decks: Ipe, Tigerwood, Cedar, and Treated Pine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#577a4c] shrink-0" />
                  <span>Composite & PVC: Official installers for TREX, TimberTech & AZEK</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#577a4c] shrink-0" />
                  <span>35+ years of master carpentry, engineering & local permitting expertise</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 h-80 md:h-96">
              <img src={imgDecks} alt="Custom Decks San Antonio" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </div>

      {/* ── BACKYARD SANCTUARY CALLOUT SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Your Outdoor Sanctuary
            </span>
            <h3 className="text-xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Your Backyard Deserves To Be Your Sanctuary
            </h3>
            <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed max-w-3xl mx-auto">
              Imagine lounging in the sun with a glass of lemonade and enjoying nature's sounds, sights, and smells. Your family will love hosting game nights or cooking together on your new deck while you show off your mad grill skills!
            </p>
            <div className="pt-4">
              <p className="text-sm md:text-base font-bold text-[#3d5636] tracking-wide uppercase">
                Give us a call today to start <span className="underline decoration-[#577a4c] decoration-2">INTEGRATING</span> your outdoor <span className="underline decoration-[#577a4c] decoration-2">DREAMS</span> into a <span className="underline decoration-[#577a4c] decoration-2">REALITY</span>.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── STYLES & OPTIONS GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
                Custom Decking Features & Materials
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 font-light mt-2">
                We craft tailored deck installations with premium materials engineered to thrive in the Central Texas climate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {deckStyles.map((sec, i) => (
                <div key={i} className="bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4">
                    <sec.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                    {sec.title}
                  </h3>
                  <ul className="space-y-3">
                    {sec.items.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed flex items-start gap-2">
                        <span className="text-[#577a4c] font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── PROCESS STEPS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
                Our 3-Step Deck Building Process
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((p, i) => (
                <div key={i} className="bg-[#fcfbf8] border border-neutral-200/80 rounded-2xl p-6 relative flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-[#577a4c]/20 block mb-2">{p.step}</span>
                    <h3 className="text-base font-bold text-neutral-900 mb-2">{p.title}</h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── FAQS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
                Custom Decks FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6">
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-16 text-center border border-neutral-800 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Ready to Design Your Custom Outdoor Deck?
            </h2>
            <p className="text-sm text-neutral-300 font-light mb-8 leading-relaxed">
              Schedule a free consultation with founder Robert Thompson. 35+ years of master craftsmanship across San Antonio and Central Texas.
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
