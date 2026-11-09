import { useState, useEffect } from "react";
import banner1 from "@/assets/banner1.jpeg";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import banner4 from "@/assets/banner4.jpeg";
import { useTranslation } from "@/context/translation-context";
import { ClipboardList, Phone, Compass, Trees } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { trackPhoneClick } from "@/lib/analytics";

const banners = [
  {
    src: banner4,
    alt: "Luxury outdoor living, custom landscaping, and construction in San Antonio, TX by JRM Construction Landscaping Design"
  },
  {
    src: banner1,
    alt: "Custom outdoor living, covered patio, and landscaping project in San Antonio, TX by JRM Construction Landscaping Design"
  },
  {
    src: banner2,
    alt: "Custom stonework, outdoor kitchen, and hardscaping built in San Antonio, TX by JRM Construction"
  },
  {
    src: banner3,
    alt: "Residential remodeling, custom patio cover, and backyard design in San Antonio, TX by Robert Thompson"
  }
];

export function HeroSection() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section
        aria-label="Hero Introduction"
        className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center"
      >
        {/* Slideshow background using crawlable, LCP-prioritized <img> */}
        <div className="absolute inset-0 overflow-hidden bg-[#111a0a]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={banners[currentSlide].src}
              alt={banners[currentSlide].alt}
              width={1400}
              height={640}
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              decoding="async"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.2, ease: "easeInOut" } }}
              className="absolute inset-0 h-full w-full object-cover object-center ken-burns-zoom"
            />
          </AnimatePresence>
        </div>
        <style>{`
          @keyframes kenBurns {
            0%   { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
          .ken-burns-zoom {
            will-change: transform;
            animation: kenBurns 6s ease-in-out forwards;
          }
        `}</style>

        {/* Premium Dark Forest & Shadow Overlay for High Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#111a0a]/95 via-[#1c2b11]/80 md:via-[#1c2b11]/55 to-transparent z-10"
        />

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-20 w-full px-6 py-16 md:px-12 md:py-24 lg:px-16 flex items-center justify-center md:justify-start text-center md:text-left">
          <div className="max-w-4xl text-white flex flex-col items-center md:items-start">
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-semibold uppercase tracking-wider mt-[60px] sm:mt-[80px] md:mt-[90px] mb-5 md:mb-6 animate-fade-in shadow-sm select-none"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t("welcome.badge")} · Licensed, Insured &amp; Bonded Since 1989</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#a5b89d] mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            >
              Owner-Led by Robert Thompson · 35+ Years of San Antonio Craftsmanship
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.2] font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("hero.title").split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-4 text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed text-white/95 max-w-3xl whitespace-pre-line drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="mt-8 md:mt-9 flex flex-wrap items-center justify-center md:justify-start gap-3.5"
            >
              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] px-6 py-3.5 text-white text-sm font-bold hover:from-[#4d6c43] hover:to-[#33472c] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_14px_rgba(87,122,76,0.35)]"
              >
                <ClipboardList className="w-4 h-4" />
                <span>{t("hero.btn.consultation")}</span>
              </Link>
              <a
                href="tel:2104295526"
                onClick={() => trackPhoneClick("Homepage Hero")}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur-md px-6 py-3.5 text-white text-sm font-bold hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
              <Link
                to="/design-service"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-5 py-3.5 text-white text-sm font-semibold hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>3D {t("hero.btn.design") || "Design Service"}</span>
              </Link>
              <Link
                to="/best-selling-trees"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-5 py-3.5 text-white text-sm font-semibold hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Trees className="w-4 h-4" />
                <span>{t("hero.btn.bestsellingtree") || "Best Selling Trees"}</span>
              </Link>
            </motion.div>

            {/* Verified Credentials & Local Service Area Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 text-white/90 text-xs sm:text-sm drop-shadow-sm border-t border-white/15 pt-4 md:pt-5 max-w-2xl mx-auto md:mx-0"
            >
              <div className="flex gap-1 text-amber-400" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium tracking-wide">
                Serving San Antonio, Alamo Heights, Boerne, New Braunfels, Canyon Lake &amp; Surrounding Communities
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}