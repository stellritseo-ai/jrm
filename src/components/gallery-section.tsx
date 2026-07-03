import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/context/translation-context";
import { X, ZoomIn } from "lucide-react";
import faqPavilion from "@/assets/faq-pavilion.jpg";
import heroPatio from "@/assets/hero-patio.jpg";
import statsJobsite from "@/assets/stats-jobsite.jpg";
import svcArtificialTurf from "@/assets/svc-artificial-turf.jpg";
import svcFencing from "@/assets/svc-fencing.jpg";
import svcFireplace from "@/assets/svc-fireplace.jpg";
import svcHardscapes from "@/assets/svc-hardscapes.jpg";
import svcHouseRemodeling from "@/assets/svc-house-remodeling.jpg";
import svcNewConstruction from "@/assets/svc-new-construction.jpg";
import svcOutdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import svcSoftscapes from "@/assets/svc-softscapes.jpg";
import welcomePavilion from "@/assets/welcome-pavilion.jpg";
import welcomePool from "@/assets/welcome-pool.jpg";

import { getGalleryPhotos, GalleryPhoto } from "@/lib/leads-store";
import { useMemo } from "react";

const CATEGORY_ROUTE_MAP: Record<string, string> = {
  "Palm Trees": "/palm-trees",
  "House Remodeling": "/house-remodeling",
  "New Construction": "/new-construction",
  "Fireplace": "/custom-fireplaces",
  "Fencing": "/fencing",
  "Hardscapes": "/hardscapes",
  "Covered Patios": "/covered-patios",
  "Artificial Turf": "/artificial-turf",
  "Softscapes": "/softscapes",
  "Outdoor Kitchens": "/outdoor-kitchens",
  "Custom Fireplaces": "/custom-fireplaces",
  "Irrigation": "/irrigation",
  "Landscape Lighting": "/landscape-lighting",
  "ADU Services": "/adu-services",
  "Stamped Concrete / Overlay": "/stamped-concrete-overlay",
  "General": "/services"
};

const DEFAULT_PHOTOS: GalleryPhoto[] = [
  { id: "default-1", url: svcOutdoorKitchens, category: "Outdoor Kitchens", title: "Luxury Outdoor Kitchen", caption: "Premium built-in grill station with bar seating." },
  { id: "default-2", url: welcomePavilion, category: "Remodeling", title: "Cedar Wood Pavilion", caption: "Solid timber framed pavilion with custom lighting." },
  { id: "default-3", url: svcOutdoorKitchens, category: "Outdoor Kitchens", title: "Outdoor Cooking Station", caption: "Complete stainless grill setup and custom stonework." },
  { id: "default-4", url: faqPavilion, category: "Remodeling", title: "Backyard Shade Pergola", caption: "Draped shade pergola with integrated fireplace seating." },
  { id: "default-5", url: welcomePavilion, category: "Remodeling", title: "Timber Framed Gazebo", caption: "Spacious outdoor shelter overlooking manicured yard." },
  { id: "default-6", url: welcomePool, category: "Hardscapes", title: "Inground Pool Pavers", caption: "Flagstone coping and travertine pavers pool surround." },
  { id: "default-7", url: welcomePool, category: "Hardscapes", title: "Resort Style Swimming Pool", caption: "Crystal clear custom inground pool with paving." },
  { id: "default-8", url: heroPatio, category: "Hardscapes", title: "Stamped Concrete Patio", caption: "Decorative stained and stamped concrete living area." },
  { id: "default-9", url: statsJobsite, category: "General", title: "Framing Worksite", caption: "Ongoing professional framing work on client property." },
  { id: "default-10", url: svcSoftscapes, category: "Landscaping", title: "Tropical Landscape Garden", caption: "Drought tolerant custom softscape layout with mulch beds." },
  { id: "default-11", url: svcArtificialTurf, category: "Artificial Turf", title: "Premium Synthetic Lawn", caption: "Durable year-round low maintenance artificial grass." },
  { id: "default-12", url: svcSoftscapes, category: "Landscaping", title: "Lush Palm Garden", caption: "Custom low maintenance landscaping with palm trees." },
  { id: "default-13", url: svcHardscapes, category: "Hardscapes", title: "Custom Paver Walkway", caption: "Interlocking stone pavers walk linking driveway to patio." },
  { id: "default-14", url: svcFireplace, category: "Outdoor Fireplaces", title: "Custom Stone Fireplace", caption: "Outdoor fireplace with natural stone finish and rustic mantel." },
  { id: "default-15", url: svcSoftscapes, category: "Landscaping", title: "Texas Flowerbeds", caption: "Native plants and rocks surrounding exterior foundation." },
  { id: "default-16", url: svcFencing, category: "Fencing", title: "Horizontal Cedar Fence", caption: "Horizontal slat cedar privacy fencing surrounding yard." },
  { id: "default-17", url: svcNewConstruction, category: "New Construction", title: "Custom Home Foundation", caption: "Poured structural concrete foundation for residential project." },
  { id: "default-18", url: svcOutdoorKitchens, category: "Outdoor Kitchens", title: "Stone Cooking Island", caption: "Built-in stainless steel appliances with granite countertop." },
  { id: "default-19", url: svcHouseRemodeling, category: "Remodeling", title: "Exterior Siding & Remodel", caption: "Stunning interior and exterior structural remodeling work." }
];

export function GallerySection() {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchGallery = async () => {
      const shuffleArray = (arr: GalleryPhoto[]) => {
        const list = [...arr];
        for (let i = list.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [list[i], list[j]] = [list[j], list[i]];
        }
        return list;
      };

      try {
        const photos = await getGalleryPhotos();
        if (photos && photos.length > 0) {
          setGalleryPhotos(shuffleArray(photos));
        } else {
          setGalleryPhotos(shuffleArray(DEFAULT_PHOTOS));
        }
      } catch (error) {
        console.error("Failed to load gallery photos from DB, falling back to defaults:", error);
        setGalleryPhotos(shuffleArray(DEFAULT_PHOTOS));
      }
    };
    fetchGallery();
  }, []);

  const categories = useMemo(() => {
    const list = new Set<string>();
    galleryPhotos.forEach(p => {
      if (p.category) list.add(p.category);
    });
    return ["All", ...Array.from(list)];
  }, [galleryPhotos]);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") return galleryPhotos;
    return galleryPhotos.filter(p => (p.category || "General") === activeCategory);
  }, [galleryPhotos, activeCategory]);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section id="gallery" className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#2d3f26] border border-[#23321e] text-white text-[10px] md:text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-widest mb-4 shadow-sm select-none">
          {t("gallery.badge")}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black text-neutral-900 tracking-tight mb-6">
          {t("gallery.title")}
        </h2>

        {/* Category Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-8 max-w-3xl mx-auto">
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
                alt={photo.title || "JRM Construction Project Detail"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              
              {/* Category Badge overlay on hover */}
              <div className="absolute top-2.5 left-2.5 bg-[#2d3f26]/90 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {photo.category || "General"}
              </div>

              {/* Title & Description Overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <span className="text-white text-[10px] font-extrabold font-serif block truncate">
                  {photo.title || "Project Detail"}
                </span>
                <span className="text-neutral-300 text-[8px] font-light block truncate mt-0.5">
                  {photo.category || "General"}
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
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out select-none animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer z-10"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] md:max-h-[90vh] flex flex-col items-center justify-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title || "JRM Construction Project Detail Large View"}
              className="max-w-full max-h-[65vh] md:max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            
            {/* Caption Metadata Block */}
            <div className="mt-4 bg-[#23321e]/90 border border-[#23321e]/50 backdrop-blur-md rounded-xl p-4 text-left max-w-md w-full shadow-2xl border border-white/15 flex flex-col gap-3">
              <div>
                <span className="inline-block bg-[#577a4c] text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow-sm">
                  {selectedPhoto.category || "General"}
                </span>
                <h4 className="text-white text-xs font-bold leading-tight font-serif mt-0.5">
                  {selectedPhoto.title || "Project Detail"}
                </h4>
                {selectedPhoto.caption && (
                  <p className="text-neutral-300 text-[10px] font-light mt-1.5 leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                )}
              </div>
              
              <div className="border-t border-white/10 pt-3 flex justify-end">
                <Link
                  to={CATEGORY_ROUTE_MAP[selectedPhoto.category || "General"] || "/services"}
                  className="bg-white hover:bg-neutral-100 text-neutral-900 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 shadow-md hover:scale-[1.02]"
                >
                  View Service
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Keyframes Injection */}
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
