import houseRemodeling from "@/assets/svc-house-remodeling.jpg";
import newConstruction from "@/assets/svc-new-construction.jpg";
import fireplace from "@/assets/svc-fireplace.jpg";
import fencing from "@/assets/svc-fencing.jpg";
import coveredPatios from "@/assets/svc-covered-patios.jpg";
import artificialTurf from "@/assets/svc-artificial-turf.jpg";
import softscapes from "@/assets/svc-softscapes.jpg";
import outdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import palmTrees from "@/assets/svc-palm-trees.jpg";
import hardscapes from "@/assets/svc-hardscapes.jpg";
import irrigation from "@/assets/svc-irrigation.jpg";
import lighting from "@/assets/svc-landscape-lighting.jpg";
import adu from "@/assets/svc-adu-services.jpg";
import customDecks from "@/assets/svc-custom-decks.jpg";
import stampedConcrete from "@/assets/svc-stamped-concrete.jpg";
import designService from "@/assets/svc-design-blueprint.png";
import jobsiteImg from "@/assets/stats-jobsite.jpg";
import welcomePavilion from "@/assets/welcome-pavilion.jpg";
import { useTranslation } from "@/context/translation-context";
import { ArrowRight, Hammer, Utensils, Layers, Trees } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "General Contracting",
    desc: "Licensed turnkey general contracting, permitting, structural framing, and project management across San Antonio.",
    image: jobsiteImg,
    to: "/general-contracting",
    ctaLabel: "Explore General Contracting"
  },
  {
    title: "House Remodeling",
    desc: "Whole-home renovations, custom kitchen & bathroom remodeling, structural room additions, and open-concept layouts.",
    image: houseRemodeling,
    to: "/house-remodeling",
    ctaLabel: "Explore House Remodeling"
  },
  {
    title: "Outdoor Kitchens",
    desc: "Custom masonry outdoor kitchens, built-in gas & charcoal grills, granite countertops, and covered bar islands.",
    image: outdoorKitchens,
    to: "/outdoor-kitchens",
    ctaLabel: "Explore Outdoor Kitchens"
  },
  {
    title: "New Construction",
    desc: "Ground-up custom home construction, detached structures, engineered slab foundations, and turnkey builds.",
    image: newConstruction,
    to: "/new-construction",
    ctaLabel: "Explore New Construction"
  },
  {
    title: "Commercial Construction",
    desc: "Commercial tenant finish-outs, office & retail renovations, ADA concrete flatwork, and commercial landscaping.",
    image: welcomePavilion,
    to: "/commercial",
    ctaLabel: "Explore Commercial Construction"
  },
  {
    title: "Covered Patios",
    desc: "Architectural patio covers, cedar pergolas, gable roof extensions, and insulated outdoor living pavilions.",
    image: coveredPatios,
    to: "/covered-patios",
    ctaLabel: "Explore Covered Patios"
  },
  {
    title: "Custom Fireplaces",
    desc: "Handcrafted Texas limestone outdoor fireplaces, indoor hearths, custom mantels, and gas or wood fire pits.",
    image: fireplace,
    to: "/custom-fireplaces",
    ctaLabel: "Explore Custom Fireplaces"
  },
  {
    title: "Hardscaping",
    desc: "Flagstone patios, structural retaining walls, paver walkways, stone borders, and French drainage solutions.",
    image: hardscapes,
    to: "/hardscapes",
    ctaLabel: "Explore Hardscaping"
  },
  {
    title: "Stamped Concrete",
    desc: "Decorative stamped concrete patios, driveways, pool decks, and textured stone-pattern concrete overlays.",
    image: stampedConcrete,
    to: "/stamped-concrete-overlay",
    ctaLabel: "Explore Stamped Concrete"
  },
  {
    title: "Custom Decks",
    desc: "Composite and cedar multi-level decks, hillside structural framing, wrap-around porches, and stair railings.",
    image: customDecks,
    to: "/custom-decks",
    ctaLabel: "Explore Custom Decks"
  },
  {
    title: "Artificial Turf",
    desc: "Drought-proof synthetic lawns, pet-friendly turf drainage systems, and custom backyard putting greens.",
    image: artificialTurf,
    to: "/artificial-turf",
    ctaLabel: "Explore Artificial Turf"
  },
  {
    title: "Custom Fencing",
    desc: "Western Red Cedar privacy fences, ornamental wrought iron, masonry columns, and automated entry gates.",
    image: fencing,
    to: "/fencing",
    ctaLabel: "Explore Custom Fencing"
  },
  {
    title: "ADU Services",
    desc: "Detached accessory dwelling units, backyard casitas, in-law suites, and turnkey garage conversions.",
    image: adu,
    to: "/adu-services",
    ctaLabel: "Explore ADU Construction"
  },
  {
    title: "Landscape Design",
    desc: "Photorealistic 3D architectural renderings, master site planning, drainage grading, and HOA submittal plans.",
    image: designService,
    to: "/design-service",
    ctaLabel: "Explore 3D Landscape Design"
  },
  {
    title: "Softscapes",
    desc: "Texas-native plantings, drought-tolerant xeriscaping, seasonal flower beds, soil amendment, and fresh sod.",
    image: softscapes,
    to: "/softscapes",
    ctaLabel: "Explore Softscapes & Planting"
  },
  {
    title: "Palm Trees",
    desc: "Cold-hardy Texas Sabal, Windmill, Pindo, and Mediterranean fan palms sourced and professionally planted.",
    image: palmTrees,
    to: "/palm-trees",
    ctaLabel: "Explore Palm Tree Installation"
  },
  {
    title: "Irrigation Systems",
    desc: "TCEQ-compliant sprinkler installation, smart WiFi controllers, drip irrigation zones, and leak repair.",
    image: irrigation,
    to: "/irrigation",
    ctaLabel: "Explore Irrigation Services"
  },
  {
    title: "Landscape Lighting",
    desc: "Low-voltage solid brass LED uplighting, pathway illumination, patio bistro lights, and smart night timers.",
    image: lighting,
    to: "/landscape-lighting",
    ctaLabel: "Explore Landscape Lighting"
  }
] as const;

const servicePillars = [
  {
    category: "Construction & Remodeling",
    icon: Hammer,
    items: [
      { name: "General Contracting", to: "/general-contracting", summary: "Full-scope residential & commercial project management" },
      { name: "House Remodeling", to: "/house-remodeling", summary: "Kitchens, bathrooms, additions & whole-home renovations" },
      { name: "New Construction", to: "/new-construction", summary: "Custom homes, structural framing & engineered slabs" },
      { name: "Commercial Construction", to: "/commercial", summary: "Tenant build-outs, retail, office & commercial flatwork" },
      { name: "ADU Construction Services", to: "/adu-services", summary: "Detached casitas, guest houses & in-law suites" }
    ]
  },
  {
    category: "Outdoor Living Structures",
    icon: Utensils,
    items: [
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", summary: "Built-in grills, stone islands, bars & utility hookups" },
      { name: "Covered Patios & Pergolas", to: "/covered-patios", summary: "Roofline-integrated patio covers, pavilions & arbors" },
      { name: "Custom Fireplaces", to: "/custom-fireplaces", summary: "Texas limestone outdoor fireplaces & gas fire pits" },
      { name: "Custom Decks", to: "/custom-decks", summary: "Composite & cedar multi-tier decks for sloped yards" }
    ]
  },
  {
    category: "Hardscaping, Concrete & Fencing",
    icon: Layers,
    items: [
      { name: "Hardscaping & Retaining Walls", to: "/hardscapes", summary: "Flagstone patios, stone retaining walls & walkways" },
      { name: "Stamped Concrete & Overlays", to: "/stamped-concrete-overlay", summary: "Textured stone-pattern concrete patios & driveways" },
      { name: "Custom Fencing & Gates", to: "/fencing", summary: "Cedar privacy fences, wrought iron & stone columns" },
      { name: "Artificial Turf Installation", to: "/artificial-turf", summary: "Pet-friendly synthetic lawns & custom putting greens" }
    ]
  },
  {
    category: "Landscape Design, Planting & Systems",
    icon: Trees,
    items: [
      { name: "3D Landscape & Architectural Design", to: "/design-service", summary: "3D renderings, blueprints & HOA packages" },
      { name: "Softscapes & Native Planting", to: "/softscapes", summary: "Xeriscaping, perennial beds, sod & soil prep" },
      { name: "Palm Tree Installation", to: "/palm-trees", summary: "Cold-hardy specimen palms for South Texas" },
      { name: "Irrigation & Sprinkler Systems", to: "/irrigation", summary: "Smart WiFi controllers, drip zones & sprinkler repair" },
      { name: "LED Landscape Lighting", to: "/landscape-lighting", summary: "Architectural uplighting, path & patio illumination" }
    ]
  }
];

export function ServicesSection() {
  const { t } = useTranslation();

  // First 3 items for the top row grid
  const topItems = services.slice(0, 3);
  // Remaining 15 items for the second row carousel slider (unique — no DOM duplication)
  const slideItems = services.slice(3);

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section id="services" aria-labelledby="homepage-services-heading" className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] px-[24px] md:px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] overflow-hidden">

        {/* Top Row Grid: Left Text Column + 3 Right Image Cards */}
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full"
          >
            <div className="pr-2 mb-6 lg:mb-0">
              <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-5">
                18 Integrated Design-Build Specialties
              </span>
              <h2 id="homepage-services-heading" className="text-[30px] md:text-[35px] -mt-[5px] leading-tight font-black text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Complete Construction, Remodeling &amp; Landscaping Services in San Antonio
              </h2>
              <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                Unlike single-trade contractors, JRM Construction Landscaping Design handles structural building, interior home remodeling, engineered concrete flatwork, custom outdoor living structures, and complete landscape installation under one roof with owner Robert Thompson on-site.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] text-white rounded-full px-6 py-3 text-[13px] font-bold shadow-[0_4px_14px_rgba(87,122,76,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  <span>Browse All 18 Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 rounded-full px-6 py-3 text-[13px] font-bold transition-all duration-300"
                >
                  <span>{t("services.btn.more")}</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Service Cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {topItems.map((s, idx) => (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              >
                <Link
                  to={s.to}
                  className="group relative block rounded-2xl overflow-hidden shadow-md bg-neutral-950 h-[240px] sm:h-[280px] lg:h-[340px] xl:h-[360px] border border-neutral-900/5 cursor-pointer"
                >
                  <img
                    src={s.image}
                    alt={`${s.title} in San Antonio, TX by JRM Construction`}
                    width={420}
                    height={360}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                    <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                      <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                        {s.title}
                      </h3>

                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                        <p className="text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                          {s.desc}
                        </p>

                        <div className="pt-2">
                          <span className="relative inline-flex items-center gap-1 text-[#84a377] font-bold text-[10px] uppercase tracking-widest pb-0.5">
                            <span>{s.ctaLabel}</span>
                            <ArrowRight className="w-3 h-3" />
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#84a377]" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row Grid: Non-duplicated Carousel of Remaining 15 Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 relative px-2 md:px-0"
        >
          <Carousel
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-5">
              {slideItems.map((s) => (
                <CarouselItem key={s.to} className="pl-5 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Link
                    to={s.to}
                    className="group relative block rounded-2xl overflow-hidden shadow-md bg-neutral-950 h-[240px] sm:h-[280px] lg:h-[320px] border border-neutral-900/5 cursor-pointer"
                  >
                    <img
                      src={s.image}
                      alt={`${s.title} in San Antonio, TX by JRM Construction`}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                    <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                      <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                          {s.title}
                        </h3>

                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                          <p className="text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                            {s.desc}
                          </p>

                          <div className="pt-2">
                            <span className="relative inline-flex items-center gap-1 text-[#84a377] font-bold text-[10px] uppercase tracking-widest pb-0.5">
                              <span>{s.ctaLabel}</span>
                              <ArrowRight className="w-3 h-3" />
                              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#84a377]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Categorized 18-Service Crawlable Directory for Direct Navigation & SEO */}
        <div className="mt-12 pt-10 border-t border-neutral-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3d5636]">
                Full-Scope Capabilities
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-1" style={{ fontFamily: "Georgia, serif" }}>
                Explore All 18 Construction, Hardscaping &amp; Landscaping Services
              </h3>
            </div>
            <Link
              to="/best-selling-trees"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3d5636] hover:text-[#23321e] underline underline-offset-4"
            >
              <span>View San Antonio Best-Selling Specimen Trees Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.category}
                  className="rounded-2xl bg-white border border-[#eae8e1] p-5 shadow-xs flex flex-col"
                >
                  <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-neutral-100">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#577a4c]/10 text-[#3d5636]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
                      {pillar.category}
                    </h4>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {pillar.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="group block rounded-lg p-1.5 -mx-1.5 hover:bg-[#577a4c]/5 transition-colors"
                        >
                          <span className="flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-[#3d5636]">
                            <span>{item.name}</span>
                            <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-[#3d5636] group-hover:translate-x-0.5 transition-all" />
                          </span>
                          <span className="block text-[11px] text-neutral-500 font-light leading-snug mt-0.5">
                            {item.summary}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
