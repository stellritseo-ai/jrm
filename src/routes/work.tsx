import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ThumbsUp,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  CheckCircle2,
  Hammer,
  Layers,
  ArrowRight
} from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import workHero from "@/assets/welcome-pool.jpg";
import { getGalleryPhotos } from "@/lib/leads-store";
import { PROJECT_CASE_STUDIES } from "@/data/project-case-studies";
import { trackPhoneClick } from "@/lib/analytics";

// Project local images from assets folder
import houseRemodeling from "@/assets/svc-house-remodeling.jpg";
import fireplace from "@/assets/svc-fireplace.jpg";
import artificialTurf from "@/assets/svc-artificial-turf.jpg";
import newConstruction from "@/assets/svc-new-construction.jpg";
import outdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import softscapes from "@/assets/svc-softscapes.jpg";
import fencing from "@/assets/svc-fencing.jpg";
import statsJobsite from "@/assets/stats-jobsite.jpg";
import coveredPatios from "@/assets/svc-covered-patios.jpg";
import customDecks from "@/assets/svc-custom-decks.jpg";
import stampedConcrete from "@/assets/svc-stamped-concrete.jpg";
import aduServices from "@/assets/svc-adu-services.jpg";
import palmTrees from "@/assets/svc-palm-trees.jpg";
import irrigation from "@/assets/svc-irrigation.jpg";
import landscapeLighting from "@/assets/svc-landscape-lighting.jpg";
import hardscapes from "@/assets/svc-hardscapes.jpg";
import imgDesign from "@/assets/svc-design-blueprint.png";

interface WorkSearchParams {
  category?: string;
}

export const Route = createFileRoute("/work")({
  validateSearch: (search: Record<string, unknown>): WorkSearchParams => {
    return {
      category: typeof search.category === "string" && search.category ? search.category : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Construction, Remodeling & Outdoor Living Portfolio & Case Studies | San Antonio TX | JRM" },
      { name: "description", content: "Explore completed project case studies and jobsite photography from JRM Construction Landscaping Design in San Antonio, Alamo Heights, Boerne, New Braunfels & Canyon Lake. Call (210) 429-5526." },
      { property: "og:title", content: "Construction, Remodeling & Outdoor Living Portfolio & Case Studies | San Antonio TX | JRM" },
      { property: "og:description", content: "Explore completed project case studies and jobsite photography from JRM Construction Landscaping Design in San Antonio, Alamo Heights, Boerne, New Braunfels & Canyon Lake." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/work" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Project Portfolio | JRM Construction San Antonio TX" },
      { name: "twitter:description", content: "Over 35 years of completed construction, remodeling and outdoor living projects in San Antonio, TX." },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" },
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/work" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://jrmconstructionservicellc.com/work#webpage",
              "url": "https://jrmconstructionservicellc.com/work",
              "name": "Project Portfolio & Recent Work | JRM Construction",
              "description": "Gallery of completed general contracting, house remodeling, covered patios, and outdoor living projects across San Antonio, TX.",
              "isPartOf": { "@id": "https://jrmconstructionservicellc.com/#website" }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://jrmconstructionservicellc.com/work#breadcrumb",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jrmconstructionservicellc.com/" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://jrmconstructionservicellc.com/work" }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: OurWorkPage,
});

const CATEGORY_ROUTE_MAP: Record<string, string> = {
  "Palm Trees": "/palm-trees",
  "House Remodeling": "/house-remodeling",
  "New Construction": "/new-construction",
  "Fireplace": "/custom-fireplaces",
  "Custom Fireplaces": "/custom-fireplaces",
  "Fencing": "/fencing",
  "Hardscapes": "/hardscapes",
  "Covered Patios": "/covered-patios",
  "Artificial Turf": "/artificial-turf",
  "Softscapes": "/softscapes",
  "Outdoor Kitchens": "/outdoor-kitchens",
  "Irrigation": "/irrigation",
  "Landscape Lighting": "/landscape-lighting",
  "ADU Services": "/adu-services",
  "Stamped Concrete / Overlay": "/stamped-concrete-overlay",
  "Custom Decks": "/custom-decks",
  "Commercial Services": "/commercial",
  "General Contracting": "/general-contracting",
  "Design Service": "/design-service",
  "General": "/services"
};

const DEFAULT_WORK_CATEGORIES = [
  "All",
  "House Remodeling",
  "Covered Patios",
  "Outdoor Kitchens",
  "Custom Fireplaces",
  "Hardscapes",
  "Stamped Concrete / Overlay",
  "Custom Decks",
  "Artificial Turf",
  "Fencing",
  "ADU Services",
  "Design Service",
  "Softscapes",
  "Palm Trees",
  "Irrigation",
  "Landscape Lighting",
  "New Construction",
  "Commercial Services",
  "General Contracting"
];

const STATIC_PROJECTS = [
  {
    title: "Complete Home Remodel & Backyard Transformation",
    location: "San Antonio, TX",
    image: houseRemodeling,
    category: "House Remodeling",
    services: ["House Remodeling", "Covered Patio", "Outdoor Kitchen", "Hardscapes", "Softscapes"],
  },
  {
    title: "Custom Covered Patio & Cedar Pergola Pavilion",
    location: "Boerne, TX",
    image: coveredPatios,
    category: "Covered Patios",
    services: ["Covered Patios", "Outdoor Living", "Carpentry", "Ceiling Fans"],
  },
  {
    title: "Custom Outdoor Kitchen & Stainless BBQ Station",
    location: "New Braunfels, TX",
    image: outdoorKitchens,
    category: "Outdoor Kitchens",
    services: ["Outdoor Kitchens", "Granite Countertops", "Bar Seating", "Hardscapes"],
  },
  {
    title: "Custom Indoor & Outdoor Stone Fireplace",
    location: "Boerne, TX",
    image: fireplace,
    category: "Custom Fireplaces",
    services: ["Custom Fireplaces", "Masonry", "Stone Mantel", "Interior Finishing"],
  },
  {
    title: "Limestone Hardscape Pavers & Retaining Wall",
    location: "San Antonio, TX",
    image: hardscapes,
    category: "Hardscapes",
    services: ["Hardscapes", "Travertine Pavers", "Retaining Wall", "Steps"],
  },
  {
    title: "Decorative Stamped Concrete Patio & Overlay",
    location: "Schertz, TX",
    image: stampedConcrete,
    category: "Stamped Concrete / Overlay",
    services: ["Stamped Concrete / Overlay", "Stained Concrete", "Pool Deck"],
  },
  {
    title: "Custom Multi-Level Composite & Cedar Deck",
    location: "Bulverde, TX",
    image: customDecks,
    category: "Custom Decks",
    services: ["Custom Decks", "Trex Composite", "Railing", "Outdoor Living"],
  },
  {
    title: "Resort-Style Backyard & Premium Artificial Turf",
    location: "San Antonio, TX",
    image: artificialTurf,
    category: "Artificial Turf",
    services: ["Artificial Turf", "Pet Turf", "Putting Green", "Drainage"],
  },
  {
    title: "Horizontal Cedar Privacy Fence & Custom Gate",
    location: "San Antonio, TX",
    image: fencing,
    category: "Fencing",
    services: ["Fencing", "Horizontal Cedar", "Steel Posts", "Privacy Screen"],
  },
  {
    title: "Modern Backyard ADU & Guest House Suite",
    location: "Alamo Heights, TX",
    image: aduServices,
    category: "ADU Services",
    services: ["ADU Services", "Guest House", "Framing", "Interior Finishing"],
  },
  {
    title: "Native Texas Planting, Beds & Softscape Design",
    location: "Canyon Lake, TX",
    image: softscapes,
    category: "Softscapes",
    services: ["Softscapes", "Drip Irrigation", "Texas Native Plants", "Mulch"],
  },
  {
    title: "Lush Tropical Palm Tree Delivery & Installation",
    location: "San Antonio, TX",
    image: palmTrees,
    category: "Palm Trees",
    services: ["Palm Trees", "Specimen Palms", "Tropical Landscaping"],
  },
  {
    title: "Smart Water-Efficient Irrigation & Sprinkler System",
    location: "Seguin, TX",
    image: irrigation,
    category: "Irrigation",
    services: ["Irrigation", "Smart Controller", "Drip Lines", "Backflow Testing"],
  },
  {
    title: "Architectural Low-Voltage Landscape Lighting",
    location: "Boerne, TX",
    image: landscapeLighting,
    category: "Landscape Lighting",
    services: ["Landscape Lighting", "LED Uplighting", "Pathway Lights", "Security"],
  },
  {
    title: "New Custom Home Construction & Structural Framing",
    location: "Schertz, TX",
    image: statsJobsite,
    category: "New Construction",
    services: ["New Construction", "Structural Framing", "Foundation", "Masonry"],
  },
  {
    title: "Commercial Build-Out & Structural Renovation",
    location: "San Antonio Medical Center",
    image: newConstruction,
    category: "Commercial Services",
    services: ["Commercial Services", "Tenant Improvement", "General Contracting"],
  },
  {
    title: "Turnkey Residential General Contracting & Structural Additions",
    location: "San Antonio, TX",
    image: statsJobsite,
    category: "General Contracting",
    services: ["General Contracting", "Turnkey Construction", "Additions", "Framing"],
  },
  {
    title: "3D Landscape & Architectural Blueprint Master Design",
    location: "Boerne, TX",
    image: imgDesign,
    category: "Design Service",
    services: ["Design Service", "3D Blueprints", "Landscape Architecture", "Site Planning"],
  },
];

function OurWorkPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>(search.category || "All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<any[]>(STATIC_PROJECTS);

  // Synchronize category state when search param in URL changes
  useEffect(() => {
    if (search.category) {
      setActiveCategory(search.category);
    } else {
      setActiveCategory("All");
    }
  }, [search.category]);

  const categories = useMemo(() => {
    const list = new Set<string>(DEFAULT_WORK_CATEGORIES);
    projects.forEach((p) => {
      if (p.category && p.category.trim() && p.category !== "General") {
        list.add(p.category.trim());
      }
    });
    return Array.from(list);
  }, [projects]);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const photos = await getGalleryPhotos();
        if (photos && photos.length > 0) {
          const mapped = photos.map((photo, index) => {
            const url = (photo.url || "").toLowerCase();
            let category = photo.category || "General";
            let title = photo.title || "JRM Custom Craftsmanship";
            const caption = photo.caption || "";
            let services = caption ? [caption] : ["Design-Build", "Custom Masonry"];

            // Infer category and details based on file name patterns ONLY if category is General or blank
            if (category === "General" || !category) {
              if (url.includes("kitchen")) {
                category = "Outdoor Kitchens";
                title = photo.title || "Custom Outdoor Kitchen & Grill Station";
                services = caption ? [caption] : ["Outdoor Kitchen", "Granite Countertops", "Hardscapes"];
              } else if (url.includes("pavilion") || url.includes("patio")) {
                category = "Covered Patios";
                title = photo.title || "Rustic Covered Pavilion & Patio";
                services = caption ? [caption] : ["Covered Patio", "Cedar Pergola", "Carpentry"];
              } else if (url.includes("pool")) {
                category = "Hardscapes";
                title = photo.title || "Resort-Style Pool Deck & Masonry";
                services = caption ? [caption] : ["Pool Deck", "Flagstone Coping", "Hardscapes"];
              } else if (url.includes("fireplace")) {
                category = "Custom Fireplaces";
                title = photo.title || "Custom Floor-to-Ceiling Stone Fireplace";
                services = caption ? [caption] : ["Masonry Fireplace", "Stone Accent Wall", "Hardscapes"];
              } else if (url.includes("turf")) {
                category = "Artificial Turf";
                title = photo.title || "Premium Artificial Turf Installation";
                services = caption ? [caption] : ["Artificial Turf", "Soil Preparation", "Drainage System"];
              } else if (url.includes("softscapes")) {
                category = "Softscapes";
                title = photo.title || "Native Texas Planting & Softscape Design";
                services = caption ? [caption] : ["Softscapes", "Drip Irrigation", "Planting Beds"];
              } else if (url.includes("hardscapes")) {
                category = "Hardscapes";
                title = photo.title || "Limestone Retaining Wall & Steps";
                services = caption ? [caption] : ["Retaining Wall", "Limestone Steps", "Hardscapes"];
              } else if (url.includes("fence") || url.includes("fencing")) {
                category = "Fencing";
                title = photo.title || "Horizontal Cedar Privacy Fence";
                services = caption ? [caption] : ["Cedar Fencing", "Steel Posts", "Privacy Screen"];
              } else if (url.includes("palm")) {
                category = "Palm Trees";
                title = photo.title || "Specimen Palm Tree Installation";
                services = caption ? [caption] : ["Palm Trees", "Landscape Accent"];
              } else if (url.includes("construction") || url.includes("jobsite")) {
                category = "New Construction";
                title = photo.title || "Custom Construction & Structural Framing";
                services = caption ? [caption] : ["New Construction", "Framing", "Foundation Work"];
              } else if (url.includes("remodeling")) {
                category = "House Remodeling";
                title = photo.title || "Complete Kitchen & Bath Home Renovation";
                services = caption ? [caption] : ["House Remodeling", "Custom Cabinetry", "Tile Backsplash"];
              }
            }

            // Distribute locations based on index
            const locations = [
              "San Antonio, TX",
              "Boerne, TX",
              "New Braunfels, TX",
              "Seguin, TX",
              "Bulverde, TX",
              "Schertz, TX"
            ];
            const location = locations[index % locations.length];

            return {
              title,
              location,
              image: photo.url,
              category,
              services
            };
          });

          // Combine with STATIC_PROJECTS for unmatched categories to ensure comprehensive display
          const combined = [...mapped];
          STATIC_PROJECTS.forEach(staticP => {
            const existsInMapped = mapped.some(
              m => m.category.toLowerCase().replace(/[^a-z0-9]/g, "") ===
                   staticP.category.toLowerCase().replace(/[^a-z0-9]/g, "")
            );
            if (!existsInMapped) {
              combined.push(staticP);
            }
          });

          setProjects(combined);
        } else {
          setProjects(STATIC_PROJECTS);
        }
      } catch (err) {
        console.error("Failed to fetch gallery for work page:", err);
        setProjects(STATIC_PROJECTS);
      }
    };
    loadGallery();
  }, []);

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setLightboxIndex(null);
    navigate({
      to: "/work",
      search: { category: cat === "All" ? undefined : cat },
      replace: true,
    });
  };

  const filtered = useMemo(() => {
    if (!activeCategory || activeCategory === "All") {
      return projects;
    }

    const norm = (val: unknown): string => {
      if (typeof val === "string") return val.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (val && typeof val === "object") {
        const obj = val as Record<string, unknown>;
        const text = typeof obj.name === "string" ? obj.name : typeof obj.title === "string" ? obj.title : "";
        return text.toLowerCase().replace(/[^a-z0-9]/g, "");
      }
      return "";
    };

    const target = norm(activeCategory);

    return projects.filter((p) => {
      const pCat = norm(p.category || "General");
      if (pCat === target || (pCat && target && (pCat.includes(target) || target.includes(pCat)))) return true;
      if (p.services && Array.isArray(p.services)) {
        if (p.services.some((s: unknown) => {
          const sNorm = norm(s);
          return sNorm === target || (sNorm && target && (sNorm.includes(target) || target.includes(sNorm)));
        })) {
          return true;
        }
      }
      return false;
    });
  }, [projects, activeCategory]);

  const matchingCaseStudies = useMemo(() => {
    if (!activeCategory || activeCategory === "All") return PROJECT_CASE_STUDIES;

    const norm = (val: unknown): string => {
      if (typeof val === "string") return val.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (val && typeof val === "object") {
        const obj = val as Record<string, unknown>;
        const text = typeof obj.name === "string" ? obj.name : typeof obj.title === "string" ? obj.title : "";
        return text.toLowerCase().replace(/[^a-z0-9]/g, "");
      }
      return "";
    };

    const target = norm(activeCategory);

    const matched = PROJECT_CASE_STUDIES.filter((cs) => {
      const cNorm = norm(cs.category);
      if (cNorm === target || (cNorm && target && (cNorm.includes(target) || target.includes(cNorm)))) return true;
      if (norm(cs.projectName).includes(target)) return true;
      if (Array.isArray(cs.relevantServices)) {
        if (cs.relevantServices.some((svc) => {
          const sNorm = norm(svc.name);
          return sNorm === target || (sNorm && target && (sNorm.includes(target) || target.includes(sNorm)));
        })) {
          return true;
        }
      }
      return false;
    });

    return matched.length > 0 ? matched : PROJECT_CASE_STUDIES;
  }, [activeCategory]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://jrmconstructionservicellc.com/work#webpage",
                "url": "https://jrmconstructionservicellc.com/work",
                "name": "Construction, Remodeling & Outdoor Living Portfolio & Project Case Studies | JRM Construction",
                "description": "Detailed construction, remodeling, hardscaping, and landscaping project case studies completed across San Antonio, Alamo Heights, Boerne, New Braunfels, Canyon Lake, and surrounding Texas communities.",
                "isPartOf": { "@id": "https://jrmconstructionservicellc.com/#website" },
                "about": { "@id": "https://jrmconstructionservicellc.com/#business" }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://jrmconstructionservicellc.com/work#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jrmconstructionservicellc.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Portfolio & Project Case Studies", "item": "https://jrmconstructionservicellc.com/work" }
                ]
              }
            ]
          })
        }}
      />
      <SiteHeader />
      <main id="main-content">

      {/* ── CINEMATIC HERO ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          <img
            src={workHero}
            alt="Completed travertine pool deck and outdoor living portfolio in San Antonio, TX by JRM Construction"
            width={1400}
            height={460}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              {activeCategory === "All" ? "San Antonio Portfolio & Case Studies" : `${activeCategory} Portfolio`}
            </span>
            <h1 className="text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" style={{ fontFamily: "Georgia, serif" }}>
              Completed Construction, Remodeling &amp; Outdoor Living Case Studies
            </h1>
            <p className="mt-6 text-sm md:text-base text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto">
              Explore detailed project case studies and original jobsite photographs from real residential and commercial projects built by owner Robert Thompson and JRM Construction Landscaping Design across San Antonio, Alamo Heights, Boerne, New Braunfels, Canyon Lake, and the Texas Hill Country.
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── DETAILED PROJECT CASE STUDIES SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          aria-labelledby="case-studies-heading"
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-3">
              <Hammer className="w-3.5 h-3.5" /> In-Depth Project Breakdowns
            </span>
            <h2 id="case-studies-heading" className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Featured San Antonio &amp; Hill Country Case Studies
            </h2>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Every property in South Central Texas presents unique soil, terrain, and architectural challenges. Review how JRM Construction plans, engineers, and builds lasting transformations.
            </p>
          </div>

          <div className="space-y-10">
            {matchingCaseStudies.map((cs, index) => (
              <article
                key={cs.id}
                id={cs.id}
                className="rounded-2xl border border-[#eae8e1] bg-[#fcfbf8] overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid lg:grid-cols-[0.95fr_1.35fr] items-stretch">
                  {/* Left: Original Project Photographs */}
                  <div className="relative bg-neutral-900 flex flex-col justify-between min-h-[280px] lg:min-h-full">
                    <img
                      src={cs.image}
                      alt={cs.imageAlt}
                      width={640}
                      height={480}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-[#23321e]/95 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        Case Study #{String(index + 1).padStart(2, "0")} · {cs.category}
                      </span>
                      <Link
                        to="/locations/$location"
                        params={{ location: cs.locationSlug }}
                        className="inline-flex items-center gap-1 bg-white/95 text-[#23321e] hover:bg-[#577a4c] hover:text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm transition-colors"
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{cs.location}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right: Structured Case Study Details */}
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-snug" style={{ fontFamily: "Georgia, serif" }}>
                        {cs.projectName}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4 mt-5">
                        <div className="bg-white rounded-xl p-4 border border-neutral-200/80">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#3d5636] mb-1.5">
                            Customer Requirements
                          </h4>
                          <p className="text-xs text-neutral-700 leading-relaxed">
                            {cs.customerRequirements}
                          </p>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-neutral-200/80">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#3d5636] mb-1.5">
                            Design Concept
                          </h4>
                          <p className="text-xs text-neutral-700 leading-relaxed">
                            {cs.designConcept}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 bg-amber-50/60 border border-amber-200/70 rounded-xl p-4">
                        <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 mb-1">
                          San Antonio / Hill Country Construction Challenges
                        </h4>
                        <p className="text-xs text-neutral-700 leading-relaxed">
                          {cs.constructionChallenges}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5 mt-5">
                        <div>
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[#577a4c]" />
                            <span>Materials Used</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {cs.materialsUsed.map((mat) => (
                              <li key={mat} className="flex items-start gap-2 text-xs text-neutral-700 leading-snug">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] shrink-0 mt-0.5" />
                                <span>{mat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-1.5">
                            <Hammer className="w-3.5 h-3.5 text-[#577a4c]" />
                            <span>Work Performed</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {cs.workPerformed.map((work) => (
                              <li key={work} className="flex items-start gap-2 text-xs text-neutral-700 leading-snug">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] shrink-0 mt-0.5" />
                                <span>{work}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-5 bg-[#577a4c]/10 border border-[#577a4c]/25 rounded-xl p-4">
                        <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#23321e] mb-1">
                          Final Outcome
                        </h4>
                        <p className="text-xs text-neutral-800 font-medium leading-relaxed">
                          {cs.finalOutcome}
                        </p>
                      </div>
                    </div>

                    {/* Footer: Relevant Services + Contact CTA */}
                    <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mr-1">
                          Relevant Services:
                        </span>
                        {cs.relevantServices.map((svc) => (
                          <Link
                            key={svc.to}
                            to={svc.to}
                            className="inline-flex items-center gap-1 rounded-full bg-white border border-neutral-300 hover:border-[#577a4c] hover:text-[#3d5636] px-3 py-1 text-[11px] font-bold text-neutral-800 transition-colors"
                          >
                            <span>{svc.name}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        <Link
                          to="/lets-talk"
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#2d3f26] hover:bg-[#23321e] text-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors"
                        >
                          <span>Request Similar Build Quote</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href="tel:2104295526"
                          onClick={() => trackPhoneClick(`Case Study: ${cs.projectName}`)}
                          className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 px-3.5 py-2 text-[11px] font-bold"
                        >
                          <Phone className="w-3 h-3 text-[#577a4c]" />
                          <span>(210) 429-5526</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ── GALLERY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16"
          style={{
            backgroundImage: `url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Featured Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              {activeCategory === "All" ? "Our Completed Masterpieces" : `${activeCategory} Projects`}
            </h2>
            <p className="mt-3 text-sm text-neutral-500 font-light leading-relaxed">
              Click any photo to view it full screen. Use arrow keys or swipe to navigate.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-1 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#577a4c] text-white border-[#577a4c] shadow-md scale-[1.02]"
                    : "bg-white/80 text-neutral-600 border-neutral-200 hover:border-[#577a4c] hover:text-[#577a4c] hover:bg-white"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Sub-menu Specific Category View Bar */}
          {activeCategory !== "All" && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 pb-4 border-b border-neutral-200/60 max-w-2xl mx-auto text-center">
              <span className="text-sm text-neutral-600 font-medium">
                Showing <strong className="text-[#3d5636] font-bold">{filtered.length}</strong> project{filtered.length === 1 ? "" : "s"} under <strong className="text-[#3d5636] font-bold">&ldquo;{activeCategory}&rdquo;</strong>
              </span>
              <button
                type="button"
                onClick={() => handleCategorySelect("All")}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#577a4c]/30 text-[#3d5636] text-xs font-bold hover:bg-[#577a4c] hover:text-white transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                View All Projects
              </button>
            </div>
          )}

          {/* 4-Column Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, idx) => (
                <motion.div
                  key={`${p.title}-${p.image}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 bg-neutral-200 aspect-[4/3]"
                  onClick={() => openLightbox(idx)}
                >
                  {/* Image */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-[11px] font-bold leading-snug line-clamp-2 mb-1">{p.title}</p>
                        <div className="flex items-center gap-1 text-white/70 text-[10px]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>{p.location}</span>
                        </div>
                      </div>
                      <div className="shrink-0 ml-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    {/* Category pill */}
                    <span className="absolute top-3 right-3 bg-[#577a4c]/90 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>

                  {/* Always visible location for mobile */}
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-[#3d5636] text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-sm select-none group-hover:opacity-0 transition-opacity duration-200">
                    <MapPin className="w-2.5 h-2.5" />
                    {p.location}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white/50 rounded-2xl border border-dashed border-neutral-300 my-6">
              <p className="text-neutral-500 text-sm font-medium">
                No projects found under &ldquo;{activeCategory}&rdquo; yet.
              </p>
              <button
                type="button"
                onClick={() => handleCategorySelect("All")}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#577a4c] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#45623c] transition-colors shadow-sm cursor-pointer"
              >
                View All Projects
              </button>
            </div>
          )}
        </section>
      </div>

      {/* ── CTA SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Start Your Project?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Every project in our portfolio began with a conversation. Let's discuss how we can bring your vision to life with the same craftsmanship, integrity, and attention to detail that defines our work.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Contact us today to schedule your free consultation.
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
                  <span>Proudly Serving San Antonio & 80-Mile Surrounding Area</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ThumbsUp className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Licensed · Insured · Bonded Since 1989</span>
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
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
      </main>

      <SiteFooter />
      <FloatingChat />

      {/* ── LIGHTBOX OVERLAY ── */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="relative z-10 flex flex-col items-center max-w-[92vw] max-h-[92vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] max-h-[75vh] w-full flex items-center justify-center bg-black">
                <img
                  src={filtered[lightboxIndex].image}
                  alt={filtered[lightboxIndex].title}
                  className="max-h-[75vh] max-w-full object-contain"
                />
                {/* Image counter */}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-[#577a4c]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {filtered[lightboxIndex].category}
                </span>
              </div>

              {/* Info bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full px-1">
                <div>
                  <h3 className="text-white text-sm md:text-base font-bold leading-snug">
                    {filtered[lightboxIndex].title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-neutral-400 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{filtered[lightboxIndex].location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0 items-center">
                  {filtered[lightboxIndex].services.map((s: string) => (
                    <span key={s} className="bg-white/10 border border-white/15 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                  <Link
                    to={CATEGORY_ROUTE_MAP[filtered[lightboxIndex].category || "General"] || "/services"}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#577a4c] hover:bg-[#45623c] text-white text-[10px] font-bold uppercase rounded-md tracking-wider transition-colors ml-2"
                  >
                    View Service
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 md:left-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
