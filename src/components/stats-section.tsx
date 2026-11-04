import { useRef, useEffect } from "react";
import hit1 from "@/assets/hit1.webp";
import hit2 from "@/assets/hit2.webp";
import hit3 from "@/assets/hit3.webp";
import exp from "@/assets/exp.webp";
import { useTranslation } from "@/context/translation-context";
import { Link } from "@tanstack/react-router";
import { trackPhoneClick } from "@/lib/analytics";

const credibilityIndicators = [
  { icon: exp, value: "35+", label: "Years Experience" },
  { icon: hit1, value: "Since 1989", label: "San Antonio Legacy" },
  { icon: hit3, value: "18", label: "Core Specialties" },
  { icon: hit2, value: "80-Mile", label: "Verified Service Area" }
] as const;

export function StatsSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start/pause video only when it enters the viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {/* ignore autoplay block */});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-8 py-16 md:px-12 lg:px-14 lg:py-16 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative overflow-hidden">

        {/* Left Column: Title, Description, and Buttons */}
        <div className="w-full flex flex-col justify-between z-10 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2">
          <div>
            {/* Title */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[35px] font-black text-neutral-900 leading-tight mb-6 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              {t("stats.title")}
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed mb-8 max-w-[760px] font-medium">
              {t("stats.desc")}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 mb-8 lg:mb-0 select-none">
              {/* Call Us Now */}
              <a
                href="tel:2104295526"
                onClick={() => trackPhoneClick("Homepage Credibility Section")}
                className="inline-flex items-center justify-center bg-[#577a4c] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:bg-[#4d6c43] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                {t("stats.btn.call")} · (210) 429-5526
              </a>

              {/* Get a Free Consultation */}
              <Link
                to="/lets-talk"
                className="inline-flex items-center justify-center bg-[#2c241d] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:bg-[#1a1511] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                {t("stats.btn.consultation")}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Jobsite Video Container with premium rounded styling */}
        <div className="w-full lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3 z-0 h-[320px] lg:h-[540px] relative rounded-3xl overflow-hidden border border-neutral-200/20 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dgpdydebp/video/upload/v1781725575/IMG_5680_inkpef.mov"
            playsInline
            muted
            loop
            preload="none"
            aria-label="JRM Construction Landscaping Design active jobsite construction video in San Antonio, TX"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Row: 4 Authentic Credibility Cards */}
        <div className="w-full lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-3 z-10 relative lg:-mt-[50px] mt-8 self-end">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {credibilityIndicators.map(({ icon, value, label }, i) => (
              <div
                key={i}
                className="mt-[50px] bg-white border border-neutral-100/90 rounded-2xl p-4 md:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col items-center justify-center text-center select-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-neutral-200/80"
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <img
                    src={icon}
                    alt={`${value} ${label}`}
                    width={36}
                    height={36}
                    loading="lazy"
                    className="h-9 w-auto object-contain"
                  />
                </div>

                <div className="text-xl md:text-2xl font-black text-neutral-900 leading-none tracking-tight">
                  {value}
                </div>

                <div className="text-[9px] md:text-[10px] font-extrabold text-neutral-500 uppercase tracking-widest mt-2 leading-none">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
