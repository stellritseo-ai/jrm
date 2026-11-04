import { useState, useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/context/translation-context";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import faqPavilion from "@/assets/faq-pavilion.jpg";
import heroPatio from "@/assets/hero-patio.jpg";
import statsJobsite from "@/assets/stats-jobsite.jpg";
import svcArtificialTurf from "@/assets/svc-artificial-turf.jpg";
import svcCoveredPatios from "@/assets/svc-covered-patios.jpg";
import svcCustomDecks from "@/assets/svc-custom-decks.jpg";
import svcFencing from "@/assets/svc-fencing.jpg";
import svcFireplace from "@/assets/svc-fireplace.jpg";
import svcHardscapes from "@/assets/svc-hardscapes.jpg";
import svcHouseRemodeling from "@/assets/svc-house-remodeling.jpg";
import svcLandscapeLighting from "@/assets/svc-landscape-lighting.jpg";
import svcNewConstruction from "@/assets/svc-new-construction.jpg";
import svcOutdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import svcPalmTrees from "@/assets/svc-palm-trees.jpg";
import svcSoftscapes from "@/assets/svc-softscapes.jpg";
import svcStampedConcrete from "@/assets/svc-stamped-concrete.jpg";
import welcomePavilion from "@/assets/welcome-pavilion.jpg";
import welcomePool from "@/assets/welcome-pool.jpg";

import { getGalleryPhotos, GalleryPhoto } from "@/lib/leads-store";

const CATEGORY_ROUTE_MAP: Record<string, string> = {
  "Palm Trees": "/palm-trees",
  "House Remodeling": "/house-remodeling",
  "Remodeling": "/house-remodeling",
  "New Construction": "/new-construction",
  "Fireplace": "/custom-fireplaces",
  "Outdoor Fireplaces": "/custom-fireplaces",
  "Custom Fireplaces": "/custom-fireplaces",
  "Fencing": "/fencing",
  "Hardscapes": "/hardscapes",
  "Covered Patios": "/covered-patios",
  "Custom Decks": "/custom-decks",
  "Artificial Turf": "/artificial-turf",
  "Softscapes": "/softscapes",
  "Landscaping": "/softscapes",
  "Outdoor Kitchens": "/outdoor-kitchens",
  "Irrigation": "/irrigation",
  "Landscape Lighting": "/landscape-lighting",
  "ADU Services": "/adu-services",
  "Stamped Concrete / Overlay": "/stamped-concrete-overlay",
  "General": "/general-contracting"
};

const DEFAULT_PHOTOS: GalleryPhoto[] = [
  {
    id: "default-1",
    url: svcOutdoorKitchens,
    category: "Outdoor Kitchens",
    title: "Stone Oak Custom Limestone Outdoor Kitchen & Bar",
    caption: "Built-in stainless steel gas grill, granite countertops, stone veneer island, and dedicated utility lines in San Antonio, TX."
  },
  {
    id: "default-2",
    url: svcCoveredPatios,
    category: "Covered Patios",
    title: "Alamo Heights Gable Covered Patio Extension",
    caption: "Roofline-integrated timber patio cover with tongue-and-groove ceiling, recessed LED lighting, and ceiling fan framing."
  },
  {
    id: "default-3",
    url: svcHouseRemodeling,
    category: "House Remodeling",
    title: "San Antonio Open-Concept Kitchen & Interior Remodel",
    caption: "Structural load-bearing wall modification, custom shaker cabinetry, quartz island, and recessed lighting package."
  },
  {
    id: "default-4",
    url: svcFireplace,
    category: "Custom Fireplaces",
    title: "Boerne Hill Country Limestone Outdoor Fireplace",
    caption: "Hand-laid Texas limestone hearth and chimney with cedar mantel and flagstone seating patio in Boerne, TX."
  },
  {
    id: "default-5",
    url: svcHardscapes,
    category: "Hardscapes",
    title: "Helotes Multi-Tier Retaining Wall & Flagstone Walkway",
    caption: "Engineered limestone block retaining wall with French drain stabilization and mortared Oklahoma flagstone path."
  },
  {
    id: "default-6",
    url: svcStampedConcrete,
    category: "Stamped Concrete / Overlay",
    title: "New Braunfels Ashlar Slate Stamped Concrete Patio",
    caption: "Steel-reinforced concrete slab with integral earth-tone coloring, hand-tooled stone texture, and UV-resistant sealer."
  },
  {
    id: "default-7",
    url: svcCustomDecks,
    category: "Custom Decks",
    title: "Canyon Lake Multi-Level Composite & Cedar Deck",
    caption: "Elevated hillside deck framed on concrete piers with heat-resistant composite decking and custom safety railings."
  },
  {
    id: "default-8",
    url: svcArtificialTurf,
    category: "Artificial Turf",
    title: "Schertz Pet-Friendly Synthetic Lawn & Putting Green",
    caption: "Permeable crushed granite sub-base with antimicrobial pet turf and custom contoured backyard golf green."
  },
  {
    id: "default-9",
    url: svcFencing,
    category: "Fencing",
    title: "Bulverde Western Red Cedar Board-on-Board Privacy Fence",
    caption: "Heavy-duty cedar privacy fence set on deep concrete steel posts to withstand South Texas wind loads."
  },
  {
    id: "default-10",
    url: svcSoftscapes,
    category: "Softscapes",
    title: "San Antonio Drought-Tolerant Native Xeriscape & Beds",
    caption: "Amended planting beds with Texas sage, ornamental grasses, river rock borders, and drip irrigation."
  },
  {
    id: "default-11",
    url: svcPalmTrees,
    category: "Palm Trees",
    title: "Resort-Style Cold-Hardy Sabal & Windmill Palm Installation",
    caption: "Mature specimen palms crane-set and planted with custom root-zone drainage around a San Antonio pool deck."
  },
  {
    id: "default-12",
    url: svcLandscapeLighting,
    category: "Landscape Lighting",
    title: "Architectural Brass LED Uplighting & Pathway Illumination",
    caption: "2700K warm-white low-voltage LED fixtures illuminating live oaks, stone facades, and walkways."
  },
  {
    id: "default-13",
    url: welcomePavilion,
    category: "Covered Patios",
    title: "Freestanding Cedar Timber Frame Backyard Pavilion",
    caption: "Custom heavy-timber pavilion creating a shaded outdoor living room in North San Antonio."
  },
  {
    id: "default-14",
    url: welcomePool,
    category: "Hardscapes",
    title: "Travertine Pool Deck & Flagstone Coping Surround",
    caption: "Slip-resistant cool-touch travertine pavers and natural stone coping engineered for expansive Texas soils."
  },
  {
    id: "default-15",
    url: svcNewConstruction,
    category: "New Construction",
    title: "Engineered Slab Foundation & Custom Structural Framing",
    caption: "Turnkey residential construction and structural framing overseen by owner Robert Thompson."
  },
  {
    id: "default-16",
    url: faqPavilion,
    category: "Covered Patios",
    title: "Custom Backyard Shade Pergola & Lounge Patio",
    caption: "Architectural cedar pergola paired with stone seating and outdoor living finishes."
  },
  {
    id: "default-17",
    url: heroPatio,
    category: "Hardscapes",
    title: "Custom Flagstone & Stamped Concrete Courtyard",
    caption: "Seamless indoor-to-outdoor courtyard transition built for year-round entertaining."
  },
  {
    id: "default-18",
    url: statsJobsite,
    category: "General",
    title: "Active San Antonio Residential Addition & Framing Jobsite",
    caption: "Code-compliant structural framing and jobsite management by JRM Construction."
  }
];

export function GallerySection() {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>(DEFAULT_PHOTOS);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const photos = await getGalleryPhotos();
        if (photos && photos.length > 0) {
          // Deduplicate by URL to ensure no duplicate images appear on the homepage
          const seen = new Set<string>();
          const unique = photos.filter((p) => {
            if (!p.url || seen.has(p.url)) return false;
            seen.add(p.url);
            return true;
          });
          setGalleryPhotos(unique.length > 0 ? unique : DEFAULT_PHOTOS);
        } else {
          setGalleryPhotos(DEFAULT_PHOTOS);
        }
      } catch (error) {
        console.error("Failed to load gallery photos from DB, falling back to defaults:", error);
        setGalleryPhotos(DEFAULT_PHOTOS);
      }
    };
    fetchGallery();
  }, []);

  const categories = useMemo(() => {
    const list = new Set<string>();
    galleryPhotos.forEach((p) => {
      if (p.category) list.add(p.category);
    });
    return ["All", ...Array.from(list)];
  }, [galleryPhotos]);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") return galleryPhotos;
    return galleryPhotos.filter((p) => (p.category || "General") === activeCategory);
  }, [galleryPhotos, activeCategory]);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        id="gallery"
        aria-labelledby="homepage-gallery-heading"
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[24px] md:px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center bg-[#2d3f26] border border-[#23321e] text-white text-[10px] md:text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-widest mb-4 shadow-sm select-none">
          {t("gallery.badge")}
        </div>

        {/* Title */}
        <h2
          id="homepage-gallery-heading"
          className="text-2xl md:text-3xl lg:text-[34px] font-black text-neutral-900 tracking-tight mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Featured Construction, Remodeling &amp; Outdoor Living Projects in San Antonio
        </h2>
        <p className="text-xs md:text-sm text-neutral-600 max-w-2xl mx-auto mb-6">
          Explore real completed residential and commercial projects built by JRM Construction Landscaping Design across San Antonio, Alamo Heights, Boerne, New Braunfels, Canyon Lake, and surrounding Texas Hill Country communities.
        </p>

        {/* Category Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-8 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2d3f26] text-white border-[#2d3f26] shadow-xs scale-[1.02]"
                    : "bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 border-neutral-200"
                }`}
              >
                {cat === "All" ? "Show All" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Justified Centered Flex Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
          {filteredPhotos.slice(0, 15).map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 aspect-[4/3] w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)] min-w-[140px] sm:min-w-[180px] lg:min-w-[200px] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title ? `${photo.title} - JRM Construction San Antonio` : "JRM Construction completed project in San Antonio, TX"}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Category Badge overlay on hover */}
              <div className="absolute top-2.5 left-2.5 bg-[#2d3f26]/90 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {photo.category || "General"}
              </div>

              {/* Title & Description Overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3 pt-8 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <span className="text-white text-[11px] font-extrabold font-serif block truncate">
                  {photo.title || "Completed Project"}
                </span>
                <span className="text-neutral-300 text-[9px] font-light block truncate mt-0.5">
                  {photo.caption || photo.category || "San Antonio, TX"}
                </span>
              </div>

              {/* Zoom Overlay */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Case Studies CTA */}
        <div className="mt-8 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-[#2d3f26] hover:bg-[#23321e] text-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-sm transition-all duration-300"
          >
            <span>Explore Detailed Project Case Studies &amp; Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/lets-talk"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300"
          >
            <span>Request an Estimate for Your Property</span>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out select-none animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer z-10"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh] md:max-h-[90vh] flex flex-col items-center justify-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title || "JRM Construction Project Detail Large View"}
              className="max-w-full max-h-[65vh] md:max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />

            <div className="mt-4 bg-[#23321e]/95 border border-white/15 backdrop-blur-md rounded-xl p-4 text-left max-w-md w-full shadow-2xl flex flex-col gap-3">
              <div>
                <span className="inline-block bg-[#577a4c] text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow-sm">
                  {selectedPhoto.category || "General"}
                </span>
                <h3 className="text-white text-xs font-bold leading-tight font-serif mt-0.5">
                  {selectedPhoto.title || "Completed Project"}
                </h3>
                {selectedPhoto.caption && (
                  <p className="text-neutral-300 text-[10px] font-light mt-1.5 leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                )}
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2">
                <Link
                  to="/work"
                  className="text-[10px] font-bold text-[#a5b89d] hover:underline"
                >
                  Read Case Studies →
                </Link>
                <Link
                  to={CATEGORY_ROUTE_MAP[selectedPhoto.category || "General"] || "/services"}
                  className="bg-white hover:bg-neutral-100 text-neutral-900 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 shadow-md hover:scale-[1.02]"
                >
                  <span>Explore {selectedPhoto.category || "Service"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}
