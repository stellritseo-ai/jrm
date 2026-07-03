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
  Layers,
  Wrench,
  Sparkles,
  ArrowRight,
  Info,
  Layers3,
  Calendar,
  Grid,
  Check
} from "lucide-react";

import imgHeroPatio from "@/assets/hero-patio.jpg";
import imgHardscapes from "@/assets/svc-hardscapes.jpg";
import imgPool from "@/assets/welcome-pool.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/stamped-concrete-overlay")({
  head: () => ({
    meta: [
      { title: "Stamped Concrete Contractor San Antonio | Overlay Surfaces — JRM" },
      { name: "description", content: "Transform your patios, driveways, walkways, and pool decks with custom stamped concrete and overlay. Over 35 years of hardscape design in San Antonio. Free quote. Call (210) 429-5526." },
      { property: "og:title", content: "Stamped Concrete & Decorative Overlays in San Antonio, TX" },
      { property: "og:description", content: "Professional slate, flagstone, cobblestone, and brick patterns. High-durability finishes sealed for San Antonio climates by Robert Thompson." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: StampedConcretePage,
});

function StampedConcretePage() {
  const { t } = useTranslation();

  const services = [
    {
      title: "Residential Stamped Concrete",
      items: [
        "Patios & Outdoor Living: Create beautiful entertainment and relaxation zones",
        "Driveways: Elevate curb appeal with robust decorative cobblestone or slate",
        "Walkways & Pathways: Guide visitors with stylish, durable stone walks",
        "Pool Decks: Slip-resistant, heat-reflective, and premium pool surrounds",
        "Courtyards & Entryways: Make an imposing, premium first impression",
        "Outdoor Kitchen Floors: Oil-resistant, easily washable stamped floors"
      ]
    },
    {
      title: "Commercial Stamped Concrete",
      items: [
        "Entryways & Plazas: Professional, welcoming commercial spaces built to code",
        "Parking Lots & Driveways: Durable, high-traffic commercial concrete paving",
        "Sidewalks & Pedestrian Walkways: Safe, attractive, and ADA-compliant paths",
        "Restaurant Dining Patios: Inviting, high-character outdoor dining floors"
      ]
    }
  ];

  const patterns = [
    { name: "Ashlar Slate", desc: "Irregular stone pattern with natural slate texture", bestFor: "Patios, walkways, entryways" },
    { name: "Flagstone", desc: "Natural-looking stone layout with irregular chiseled edges", bestFor: "Pool decks, pathways, courtyards" },
    { name: "Cobblestone", desc: "Classic Old-World rounded stone look", bestFor: "Driveways, plazas, entryways" },
    { name: "Brick Herringbone", desc: "Elegant brick pattern with interlocking V-shaped layout", bestFor: "Patios, walkways, outdoor rooms" },
    { name: "Brick Running Bond", desc: "Classic traditional brick layout with offset joints", bestFor: "Driveways, pathways, patios" },
    { name: "Slate Tile", desc: "Smooth, sophisticated chiseled tile grid look", bestFor: "Pool decks, outdoor kitchens, patios" },
    { name: "Wood Plank", desc: "Realistic weathered wood grain and board texture", bestFor: "Patios, decks, outdoor living areas" },
    { name: "Travertine", desc: "Elegant, porous stone texture with rich pits", bestFor: "Pool decks, luxury patios" }
  ];

  const processSteps = [
    { number: "01", title: "Design & Feasibility", desc: "We evaluate your space, discuss your layout goals, and recommend patterns and colors that enhance your architecture." },
    { number: "02", title: "Pattern & Color Choice", desc: "Robert guides you through selecting the ideal stamp mats, base color pigments, and highlight release agents." },
    { number: "03", title: "Site Prep & Sub-Base", desc: "We excavate, grade, install structural forms, and compact a gravel base to prevent settling or structural shifting." },
    { number: "04", title: "Pouring & Stamping", desc: "We pour structural concrete, apply color hardeners/integrals, and imprint patterns with master craftsmanship." },
    { number: "05", title: "Joints & Sealing", desc: "We cut control joints strategically to direct stress, powerwash residues, and apply deep-penetrating UV sealers." },
    { number: "06", title: "Final Inspection", desc: "Robert checks color consistency and sealer thickness, explaining winter and cleaning maintenance guidelines." }
  ];

  const comparisonTable = [
    { feat: "Cost", concrete: "Highly cost-effective vs natural stone", stone: "Premium material and freight cost" },
    { feat: "Installation", concrete: "Fast, poured in large unified slabs", stone: "Slow, piecemeal, labor-intensive" },
    { feat: "Maintenance", concrete: "Low (periodic washing and resealing)", stone: "High (weeds grow in joints, tiles shift)" },
    { feat: "Design Options", concrete: "Endless custom patterns and color blends", stone: "Limited to natural color availability" },
    { feat: "Uniformity", concrete: "Consistent texture and grade height", stone: "Natural variations, potential trip hazards" },
    { feat: "Weather Resistance", concrete: "Excellent (sealed against Texas heat/water)", stone: "Excellent, but joints can crack or erode" }
  ];

  const maintenanceTips = [
    { title: "Reseal Every 2-3 Years", desc: "Apply a premium acrylic sealer to lock in color vibrancy, repel stains, and prevent UV damage." },
    { title: "Regular Cleaning", desc: "Regular sweeping and occasional power-washing with a pH-neutral cleaner maintains the chiseled sheen." },
    { title: "Avoid Deicing Salts", desc: "Harsh chemical salts can damage sealers and spall concrete. Use sand or kitty litter for traction instead." },
    { title: "Clean Spills Quickly", desc: "Although sealed, motor oil, grease, or acidic fluids should be cleaned promptly to prevent shadowing." }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[450px] md:min-h-[520px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHeroPatio})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#577a4c]/20 border border-[#577a4c]/30 backdrop-blur-md text-[#8fa886] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Premium Hardscaping & Overlay</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white leading-tight font-serif tracking-tight max-w-3xl">
              Stamped Concrete Services in San Antonio
            </h1>

            <p className="text-sm md:text-base text-neutral-300 font-light mt-6 max-w-2xl leading-relaxed">
              Elevate Your Property with Durable, Decorative Concrete Surfaces mimicking premium stone, brick, slate, and wood planks.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-free-consultation"
                className="bg-[#577a4c] hover:bg-[#3d5636] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:2104295526"
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-md text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── DESCRIPTION SECTION with IMAGE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 leading-tight font-serif">
              Artistic Concrete Surfacing & Stone Replication
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm font-light leading-relaxed">
              Stamped concrete offers the perfect blend of durability, affordability, and aesthetic appeal—transforming ordinary poured concrete into stunning surfaces that mimic natural stone, brick, slate, flagstone, tile, or wood planks.
            </p>
            <p className="text-neutral-600 text-xs md:text-sm font-light leading-relaxed">
              At JRM Construction Landscaping Design, we specialize in professional stamped concrete installation for patios, driveways, walkways, pool decks, and more. With over 35 years of construction and hardscape experience, owner Robert Thompson brings unmatched expertise in creating beautiful, long-lasting decorative concrete surfaces that enhance your property's curb appeal and value.
            </p>
            <p className="text-neutral-700 text-xs md:text-sm font-bold leading-relaxed">
              As a fully licensed, insured, and bonded contractor, we ensure every stamped concrete project is installed with precision, proper sub-grade surface preparation, and high-strength concrete mixes for results that stand the test of Texas weather.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#eae8e1] shadow-xs group h-[220px] md:h-[260px]">
              <img
                src={imgHardscapes}
                alt="Stamped concrete flagstone finish"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[9px] font-black uppercase bg-[#577a4c] px-3 py-1 rounded-md">
                  Stone Replication finish
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-serif">
                What is Stamped Concrete?
              </h3>
              <p className="text-neutral-500 text-[11px] md:text-xs font-light leading-relaxed">
                Stamped concrete is a decorative technique where freshly poured concrete is colored (using integral pigments or surface hardeners) and imprinted with textured rubber mats. This process produces durable, slip-resistant pathways, decks, and patios resembling chiseled rock or timber at a fraction of natural stone costs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── OUR SERVICES SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Specialized Scope
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Our Decorative Concrete Services
            </h2>
            <p className="text-neutral-500 text-xs font-light mt-3">
              We design and construct premium textured concrete slabs for both residential and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-6 shadow-xs space-y-4">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider border-b border-neutral-100 pb-3 font-serif">
                  {svc.title}
                </h4>
                <ul className="space-y-2">
                  {svc.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-[11px] text-neutral-500 font-light leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#577a4c] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── PATTERNS TABLE & IMAGE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Finishes & Textures
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
                Stamped Concrete Patterns & Finishes
              </h2>
              <p className="text-neutral-500 text-xs font-light mt-2">
                Choose from our popular slate, brick, cobblestone, and chiseled wood grain stamps.
              </p>
            </div>

            <div className="overflow-x-auto border border-[#eae8e1] rounded-2xl bg-white shadow-xs">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fcfbf8] border-b border-[#eae8e1]">
                    <th className="px-4 py-3 text-[10px] font-bold text-neutral-800 uppercase tracking-wider font-serif">Pattern</th>
                    <th className="px-4 py-3 text-[10px] font-bold text-neutral-800 uppercase tracking-wider font-serif">Description</th>
                    <th className="px-4 py-3 text-[10px] font-bold text-neutral-800 uppercase tracking-wider font-serif">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-[11px] text-neutral-600 font-light">
                  {patterns.map((p, idx) => (
                    <tr key={idx} className="hover:bg-[#fcfbf8]/50 transition-colors">
                      <td className="px-4 py-2.5 font-bold text-neutral-900">{p.name}</td>
                      <td className="px-4 py-2.5">{p.desc}</td>
                      <td className="px-4 py-2.5 text-neutral-500">{p.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#eae8e1] shadow-xs group h-[220px] lg:h-[260px]">
              <img
                src={imgPool}
                alt="Stamped concrete pool surround"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[9px] font-black uppercase bg-[#577a4c] px-3 py-1 rounded-md">
                  Textured Pool Deck Finish
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs space-y-4">
              <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-serif">
                Popular Color Selections
              </h4>
              <div className="grid grid-cols-2 gap-3 text-[10px] text-neutral-500 font-medium">
                <div>
                  <span className="font-bold text-neutral-800 block">Earth Tones:</span>
                  Terracotta, Desert Tan, Adobe, Sienna
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">Grays:</span>
                  Charcoal, Slate, Silver, Warm Gray
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">Browns:</span>
                  Chestnut, Coffee, Chocolate, Walnut
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">Blends:</span>
                  Custom color blends & gradients
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── COMPARISON TABLE SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left">
          <div className="max-w-2xl mb-8">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Cost & Durability Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Stamped Concrete vs. Natural Stone
            </h2>
            <p className="text-neutral-500 text-xs font-light mt-2">
              Why structured, textured concrete is preferred by San Antonio homeowners for durability and budget.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#eae8e1] rounded-2xl shadow-xs">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#fcfbf8] border-b border-[#eae8e1]">
                  <th className="px-6 py-3.5 text-[10px] font-bold text-neutral-800 uppercase tracking-wider font-serif">Feature</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold text-[#577a4c] uppercase tracking-wider font-serif">Stamped Concrete</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold text-neutral-800 uppercase tracking-wider font-serif">Natural Stone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-[11px] text-neutral-600 font-light">
                {comparisonTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#fcfbf8]/50 transition-colors">
                    <td className="px-6 py-3 font-bold text-neutral-900">{item.feat}</td>
                    <td className="px-6 py-3 text-neutral-700 font-semibold">{item.concrete}</td>
                    <td className="px-6 py-3 text-neutral-500">{item.stone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* ── THE JRM PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Artisan Installation Steps
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              The JRM Stamped Concrete Process
            </h2>
            <p className="text-neutral-500 text-xs font-light mt-3">
              Engineered for lasting beauty and chiseled definition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#eae8e1] p-6 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Step {step.number}
                  </span>
                  <span className="text-2xl font-black text-[#577a4c]/15">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-serif">
                  {step.title}
                </h4>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── BENEFITS & MAINTENANCE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Why Choose Concrete?
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Benefits of Stamped Concrete
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <span className="flex items-center gap-2 text-xs text-neutral-700 font-semibold"><Check className="w-4 h-4 text-[#577a4c]" /> Cost-Effective</span>
              <span className="flex items-center gap-2 text-xs text-neutral-700 font-semibold"><Check className="w-4 h-4 text-[#577a4c]" /> Durable & Long-Lasting</span>
              <span className="flex items-center gap-2 text-xs text-neutral-700 font-semibold"><Check className="w-4 h-4 text-[#577a4c]" /> Low Maintenance</span>
              <span className="flex items-center gap-2 text-xs text-neutral-700 font-semibold"><Check className="w-4 h-4 text-[#577a4c]" /> Slip-Resistant Texture</span>
              <span className="flex items-center gap-2 text-xs text-neutral-700 font-semibold"><Check className="w-4 h-4 text-[#577a4c]" /> Design Flexibility</span>
              <span className="flex items-center gap-2 text-xs text-neutral-700 font-semibold"><Check className="w-4 h-4 text-[#577a4c]" /> Increased Property Value</span>
            </div>

            <div className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-serif">
                Why Choose JRM Concrete?
              </h4>
              <p className="text-neutral-500 text-[11px] font-light leading-relaxed">
                With 35 years of hardscape expertise, owner Robert Thompson oversees every pour, color dilution, stamp timing, and control joint cutting personally to guarantee complete satisfaction.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#23321e] text-white rounded-2xl p-8 flex flex-col justify-between border border-[#1a2516] shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay" style={{ backgroundImage: `url(${welBg})` }} />
            
            <div className="space-y-5 relative z-10">
              <span className="inline-block bg-[#577a4c] text-white text-[8px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Surface Protection
              </span>
              <h3 className="text-lg font-bold font-serif leading-snug">
                Stamped Concrete Maintenance Tips
              </h3>
              
              <div className="space-y-4">
                {maintenanceTips.map((tip, idx) => (
                  <div key={idx} className="space-y-1">
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8fa886]" />
                      {tip.title}
                    </h5>
                    <p className="text-neutral-300 text-[11px] font-light leading-relaxed pl-3">
                      {tip.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-[#8fa886] text-[10px] font-bold mt-6 relative z-10">
              * Detailed custom maintenance instructions are provided with every final project walk-through.
            </p>
          </div>
        </section>
      </div>

      {/* ── CONTACT / CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[30px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#1a2516] bg-[#23321e] text-white shadow-[0_16px_48px_rgb(0,0,0,0.12)] relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay select-none pointer-events-none" style={{ backgroundImage: `url(${welBg})` }} />

          <div className="relative z-10 px-8 py-16 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6">
            <img src={logo} alt="JRM Logo" className="h-10 md:h-12 w-auto mb-2 opacity-90 select-none pointer-events-none" />

            <span className="bg-[#577a4c] text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Schedule Your Free Consultation
            </span>

            <h2 className="text-2xl md:text-4xl font-black font-serif tracking-tight leading-tight max-w-2xl">
              Ready to Transform Your Concrete Surfaces?
            </h2>

            <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed max-w-xl">
              Stamped concrete offers the beauty of natural stone with the durability and affordability of concrete. Contact Robert today for a free design assessment and project proposal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4 text-left">
              <a
                href="tel:2104295526"
                className="bg-white/5 border border-white/15 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-9 w-9 rounded-xl bg-[#577a4c] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-neutral-400 uppercase tracking-wider block">Call Direct</span>
                  <span className="text-xs font-black text-white">(210) 429-5526</span>
                </div>
              </a>

              <a
                href="mailto:robertsa210@icloud.com"
                className="bg-white/5 border border-white/15 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-9 w-9 rounded-xl bg-[#577a4c] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-neutral-400 uppercase tracking-wider block">Email Robert</span>
                  <span className="text-xs font-black text-white truncate">robertsa210@icloud.com</span>
                </div>
              </a>
            </div>

            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest pt-2">
              Proudly installing stamped concrete overlays across San Antonio, New Braunfels, Boerne, Canyon Lake, and surrounding 80-mile areas.
            </p>

            <div className="border-t border-white/10 w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-400">
              <span className="font-extrabold uppercase tracking-wider text-neutral-300">
                Licensed · Insured · Bonded
              </span>
              <span>
                Building Trust, One Project at a Time, Since 1989
              </span>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
