import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { ServiceSeoSections } from "@/components/service-seo-sections";
import { ServiceBreadcrumbBar } from "@/components/service-breadcrumb-bar";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Smile,
  Sparkles,
  Compass,
  Images,
  Play,
  Pause,
  Volume2,
  VolumeX
} from "lucide-react";

import imgTurf from "@/assets/svc-artificial-turf.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/artificial-turf")({
  head: () => ({
    meta: [
      { title: "Artificial Turf Installation San Antonio TX | Synthetic Grass | JRM" },
      { name: "description", content: "Premium artificial turf, pet turf systems & custom backyard putting greens in San Antonio, TX. 35+ years experience. Free estimate. Call (210) 429-5526." },
      { property: "og:title", content: "Artificial Turf Installation San Antonio TX | Synthetic Grass | JRM" },
      { property: "og:description", content: "Premium artificial turf, pet turf systems & custom backyard putting greens in San Antonio, TX. 35+ years experience. Free estimate. Call (210) 429-5526." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/artificial-turf" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Artificial Turf Installation San Antonio TX | JRM Construction" },
      { name: "twitter:description", content: "Low-maintenance synthetic turf, pet grass & putting greens in San Antonio & Hill Country." },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" },
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/artificial-turf" }
    ]
  }),
  component: ArtificialTurfPage,
});

function ArtificialTurfPage() {
  const { t } = useTranslation();

  const turfSolutions = [
    {
      title: "Primary Lawn Replacement",
      icon: Smile,
      items: [
        "Full Lawns: High-density, multi-tonal turf that looks and feels like lush natural grass underfoot.",
        "Pet-Friendly Systems: Engineered with antimicrobial infills, odor-control backings, and rapid-drainage profiles.",
        "Drought-Resistant Xeriscaping: The ultimate water-saving lawn solution that keeps front curb appeal green."
      ]
    },
    {
      title: "Specialty & Decorative Applications",
      icon: Sparkles,
      items: [
        "Custom Putting Greens: Custom golf greens with sand fills, custom breaks, fringe grass, and target cups.",
        "Pool & Patio Surrounds: Cool, clean, mud-free turf borders around pool copings and patio decks.",
        "Commercial entryways: Durable turf installations for high-traffic common areas, office borders, and retail entries."
      ]
    },
    {
      title: "Integrated Hardscape Design",
      icon: Compass,
      items: [
        "Turf with Paver Inlays: Precision cutting turf to frame stone pathways, diamond patterns, and driveways.",
        "Bordered Landscape Beds: Creating clean metal, brick, or stone border transitions to planting beds.",
        "Erosion-Prone Slopes: Anchoring synthetic grass to steep slopes where mowing is dangerous or impossible."
      ]
    }
  ];

  const turfProcess = [
    {
      number: "01",
      title: "Evaluation & Samples",
      desc: "We analyze soil drainage, select the optimal turf weight for pet usage or golf play, and present real turf samples."
    },
    {
      number: "02",
      title: "Precise Excavation",
      desc: "Our crew removes existing grass, roots, and organic soil down to a consistent depth to prepare the subgrade."
    },
    {
      number: "03",
      title: "Drainage Base Construction",
      desc: "We lay, level, and compact crushed stone and granite sand, setting up a permeable, solid base that prevents settling."
    },
    {
      number: "04",
      title: "Turf Laying & Seaming",
      desc: "We align grass roll direction, join seams using professional seaming tape and adhesives, secure edges, and brush in infill."
    },
    {
      number: "05",
      title: "Final Groom & Inspection",
      desc: "Using power brooms, we stand up the synthetic fibers, clean the yard borders, and do a final walkthrough."
    }
  ];

  const whyChooseUs = [
    {
      title: "Construction-Grade Foundation",
      desc: "We build our turf bases with the same leveling standards as concrete patios. It won't buckle, wrinkle, or shift."
    },
    {
      title: "Superior Drainage Engineering",
      desc: "We verify the sub-base is graded to handle heavy Texas rainstorms, ensuring water drains immediately without puddling."
    },
    {
      title: "35 Years of Design Integration",
      desc: "Unlike simple carpet installers, we coordinate turf layouts with custom stone paths, planting beds, and landscape lights."
    },
    {
      title: "Premium UV-Stabilized Materials",
      desc: "We use high-grade, heat-reflective, lead-free synthetic yarns that resist fading and flattening over time."
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Full general contractor backing guarantees the durability of your lawn and the quality of base compaction."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />
      <main id="main-content">

      {/* ── BREADCRUMB & GALLERY SHORTCUT BAR ── */}
      <ServiceBreadcrumbBar serviceTitle="Artificial Turf" category="Artificial Turf" />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
          {/* Zooming Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgTurf})` }}
          />

          {/* Forest Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Evergreen Lawns & Putting Greens
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Artificial Turf Installation in San Antonio, TX
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              A Flawless, Green Yard 365 Days a Year—With No Maintenance
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/work"
                search={{ category: "Artificial Turf" }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#577a4c] hover:bg-[#46653c] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group"
              >
                <Images className="w-4 h-4 text-white/80 group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-white/25 transition-all active:scale-95"
              >
                <span>Request Free Quote</span>
              </Link>
            </div>
          </motion.div>

          {/* Floating scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <span className="text-[9px] font-bold text-white uppercase tracking-widest select-none">Scroll Down</span>
            <div className="w-[1.5px] h-10 bg-white/20 relative rounded-full overflow-hidden">
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-full h-1/3 bg-[#a5b89d] rounded-full"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── EDITORIAL STORY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Timeless Greenery
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                A Lawn That Stays Perfectly Lush Year-Round
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#3d5636] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Imagine a lawn that stays perfectly green and lush through the hottest Texas summer, requires no watering, and never needs mowing, fertilizing, or pesticides. At JRM Construction Landscaping Design, we specialize in premium artificial turf installation that delivers exactly that: timeless beauty with permanent practicality.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 35 years of landscaping and construction expertise, owner Robert Thompson understands that superior artificial grass is about more than the blade—it's about expert site preparation, professional base compaction, and seamless integration with your overall landscape design.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We go beyond a simple roll-out. As a fully licensed, insured, and bonded contractor, we engineer every synthetic lawn project for optimal drainage, durability, and natural aesthetics, creating a safe, usable green space that enhances your property value and frees up your weekends for years to come.
              </p>
            </motion.div>

            {/* Right Visual Showcase Video */}
            <TurfShowcaseVideo />
          </div>
        </section>
      </div>

      {/* ── TURF SOLUTIONS GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Premium Selections
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Artificial Turf Solutions
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Tailoring density, cushion base, and blade heights for residential and commercial spaces.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {turfSolutions.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-8 shadow-sm hover:shadow-xl hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-4">
                      {pillar.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3.5 items-start text-xs text-neutral-700 font-light leading-relaxed">
                          <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/15 text-[#3d5636] select-none font-bold text-[9px]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── THE PROCESS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Quality Sub-Base
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The JRM Artificial Turf Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Artificial grass performance relies entirely on base compaction and grading.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {turfProcess.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white rounded-xl border border-neutral-200/50 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#577a4c]/20 block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-[14px] font-bold text-neutral-900 tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE US SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-5"
            >
              <span className="inline-flex items-center bg-[#2d3f26] border border-[#23321e]/30 text-white rounded-full px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                Compaction & Grading
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose JRM for Your Artificial Turf?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We build synthetic lawns using construction-grade base layers. Our deep drainage bases prevent sagging, pooling, and wrinkles for years to come.
              </p>
            </motion.div>

            {/* Right Column Grid */}
            <div className="grid gap-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 select-none">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-neutral-900 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── READY TO TRANSFORM BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(${welBg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Logo */}
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Reclaim Your Weekends & Your Water Bill
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Stop working on your lawn and start enjoying it. A professionally installed artificial turf lawn from JRM Construction delivers immediate savings on maintenance while looking beautiful year-round.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                JRM Construction Landscaping Design
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-5 text-[15px] font-light">
                <a href="tel:2104295526" className="flex items-center gap-3.5 hover:text-[#a5b89d] transition-colors">
                  <Phone className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>(210) 429-5526</span>
                </a>
                <a href="mailto:robertsa210@icloud.com" className="flex items-center gap-3.5 hover:text-[#a5b89d] transition-colors">
                  <Mail className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>robertsa210@icloud.com</span>
                </a>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Serving San Antonio, Boerne, New Braunfels, Schertz & surrounding areas</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Licensed · Insured · Bonded | Building Trust Since 1989</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Robert Now
              </a>
              <Link
                to="/lets-talk"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <ServiceSeoSections slug="artificial-turf" />
      </main>
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}

const TURF_VIDEO_BASE = "https://res.cloudinary.com/dgpdydebp/video/upload";
const TURF_VIDEO_ID = "v1794334696/artificial_turf_usyljk";

function TurfShowcaseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const userPausedRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure DOM muted flags are set before autoplay runs across all browsers & React hydration
    video.defaultMuted = true;
    video.muted = true;

    const attemptPlay = () => {
      if (userPausedRef.current || prefersReducedMotionRef.current) return;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAutoplayBlocked(false);
            setIsPlaying(true);
          })
          .catch((err) => {
            // Only show paused fallback if browser policy blocked autoplay (e.g. Low Power Mode)
            if (err?.name === "NotAllowedError") {
              setAutoplayBlocked(true);
              setIsPlaying(false);
            }
          });
      }
    };

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = reducedMotionQuery.matches;

    if (reducedMotionQuery.matches) {
      video.removeAttribute("autoplay");
      video.pause();
      setIsPlaying(false);
    } else {
      attemptPlay();
    }

    const handleMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = event.matches;
      if (event.matches) {
        video.removeAttribute("autoplay");
        video.pause();
        setIsPlaying(false);
      } else if (!userPausedRef.current) {
        attemptPlay();
      }
    };
    reducedMotionQuery.addEventListener("change", handleMotionChange);

    // Pause when scrolled far offscreen; auto-play seamlessly whenever near or inside viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          attemptPlay();
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.01, rootMargin: "250px 0px" }
    );

    observer.observe(video);

    const onPlay = () => {
      setIsPlaying(true);
      setAutoplayBlocked(false);
    };
    const onPause = () => {
      if (userPausedRef.current || prefersReducedMotionRef.current) {
        setIsPlaying(false);
      }
    };
    const onCanPlay = () => attemptPlay();
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoadedMetadata = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        setDuration(video.duration);
      }
    };
    const onVolumeChange = () => setIsMuted(video.muted);

    video.addEventListener("play", onPlay);
    video.addEventListener("playing", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("volumechange", onVolumeChange);

    if (Number.isFinite(video.duration) && video.duration > 0) {
      setDuration(video.duration);
    }

    return () => {
      observer.disconnect();
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("playing", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onCanPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      userPausedRef.current = false;
      setAutoplayBlocked(false);
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      userPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const formatSeconds = (secs: number) => {
    const total = Math.max(0, Math.floor(secs));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;
  const showPausedState = !isPlaying || autoplayBlocked;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[310px] sm:max-w-[350px] mx-auto py-4"
    >
      <figure className="m-0">
        {/* Video Frame Stage */}
        <div className="relative">
          {/* Architectural Offset Frame hugging only the video card */}
          <div
            className="absolute top-3 left-3 -right-2.5 -bottom-2.5 sm:-right-3.5 sm:-bottom-3.5 border-2 border-[#577a4c]/25 rounded-[22px] z-0 select-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Experience Card positioned top-right so bottom controls remain unobstructed */}
          <div className="absolute -top-4 -right-2 sm:-right-7 bg-white/95 backdrop-blur-md border border-[#eae8e1] rounded-xl px-4 py-3 shadow-[0_12px_30px_rgba(17,26,10,0.12)] flex flex-col select-none z-30">
            <span className="text-2xl sm:text-3xl font-black text-[#3d5636] leading-none tracking-tight">35+</span>
            <span className="text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-1">
              Years Experience
            </span>
          </div>

          {/* Video Frame */}
          <div className="relative z-10 w-full aspect-[9/16] rounded-[18px] overflow-hidden bg-[#111a0a] shadow-[0_24px_60px_-15px_rgba(17,26,10,0.28)] ring-1 ring-black/10 group">
          {/* Interactive surface for pointer/touch play-pause without duplicate keyboard tab stop */}
          <div onClick={togglePlayPause} className="relative w-full h-full cursor-pointer">
            <video
              ref={videoRef}
              width={720}
              height={1280}
              poster={`${TURF_VIDEO_BASE}/so_0,f_auto,w_720,q_auto/${TURF_VIDEO_ID}.jpg`}
              autoPlay
              playsInline
              muted={isMuted}
              loop
              preload="auto"
              aria-label="Custom artificial turf lawn and backyard putting green walkthrough in San Antonio, TX"
              className="w-full h-full object-cover block"
            >
              <source
                src={`${TURF_VIDEO_BASE}/w_720,f_mp4,vc_h264,q_auto/${TURF_VIDEO_ID}.mp4`}
                type="video/mp4"
              />
              <source
                src={`${TURF_VIDEO_BASE}/w_720,f_webm,q_auto/${TURF_VIDEO_ID}.webm`}
                type="video/webm"
              />
              <source src={`${TURF_VIDEO_BASE}/${TURF_VIDEO_ID}.mov`} type="video/quicktime" />
            </video>

            {/* Top Subtle Gradient Scrim */}
            <div
              className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#111a0a]/55 via-[#111a0a]/20 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Bottom Subtle Gradient Scrim */}
            <div
              className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#111a0a]/75 via-[#111a0a]/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Top-Left Live Status Pill */}
            <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111a0a]/65 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold uppercase tracking-widest select-none pointer-events-none">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  !showPausedState ? "bg-emerald-400 motion-safe:animate-pulse" : "bg-amber-300"
                }`}
                aria-hidden="true"
              />
              <span>{!showPausedState ? "Project Showcase" : "Paused"}</span>
            </div>

            {/* Center Visual Play Indicator when Paused */}
            {showPausedState && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-[#111a0a]/25 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.35)] border border-white flex items-center justify-center text-[#3d5636] transition-transform duration-300 group-hover:scale-105">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Frosted Glass Controls Bar */}
          <div className="absolute bottom-3 left-3 right-3 z-20 rounded-xl bg-[#111a0a]/80 backdrop-blur-md border border-white/15 px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
            <div
              className="h-[3px] w-full rounded-full bg-white/15 overflow-hidden mb-2.5"
              aria-hidden="true"
            >
              <div
                className="h-full w-full bg-gradient-to-r from-[#8eb581] to-emerald-400 origin-left transition-transform duration-150 ease-linear"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={!showPausedState ? "Pause showcase video" : "Play showcase video"}
                className="inline-flex items-center gap-1.5 min-h-[36px] min-w-[36px] px-3.5 py-1.5 rounded-lg bg-[#577a4c] hover:bg-[#49683f] active:scale-95 text-white text-[11px] font-bold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
              >
                {!showPausedState ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <span className="text-[11px] font-medium text-white/85 tabular-nums select-none">
                {formatSeconds(currentTime)}
                {duration > 0 ? ` / ${formatSeconds(duration)}` : ""}
              </span>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute showcase video" : "Mute showcase video"}
                className="inline-flex items-center justify-center min-h-[36px] min-w-[36px] px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Volume2 className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          </div>
        </div>

        <figcaption className="mt-6 flex items-center justify-between gap-3 px-0.5 text-[11px] text-neutral-600 font-medium">
          <span className="truncate">Putting Green &amp; Turf · San Antonio, TX</span>
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#3d5636]">
            Walkthrough
          </span>
        </figcaption>
      </figure>
    </motion.div>
  );
}
