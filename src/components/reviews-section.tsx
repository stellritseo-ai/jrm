import { Star, User, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import reviewComp from "@/assets/review-comp.webp";
import { Link } from "@tanstack/react-router";

const testimonials = [
  {
    name: "The Carter Family",
    location: "San Antonio, TX",
    locationTo: "/locations/san-antonio-tx",
    serviceName: "House Remodeling & Outdoor Kitchen",
    serviceTo: "/outdoor-kitchens",
    text: "Robert and his team finished a complete remodel and backyard overhaul for us. From the new kitchen to the covered patio and outdoor kitchen, the entire process was professional and seamless. His 35 years of experience showed at every turn."
  },
  {
    name: "Melissa & Ben R.",
    location: "Boerne, TX",
    locationTo: "/locations/boerne-tx",
    serviceName: "Flagstone Patio, Pergola & Softscapes",
    serviceTo: "/hardscapes",
    text: "JRM built a stunning flagstone patio, a custom pergola, and a softscape garden that looks like it's always been there. Robert's design eye is incredible, and knowing they are licensed and insured gave us complete peace of mind."
  },
  {
    name: "Sofia & Mark T.",
    location: "Alamo Heights / San Antonio, TX",
    locationTo: "/locations/alamo-heights-tx",
    serviceName: "Custom Kitchen Remodeling",
    serviceTo: "/house-remodeling",
    text: "We interviewed several contractors for our kitchen remodel. Robert from JRM stood out immediately. His quote was detailed and transparent with no hidden fees, and the craftsmanship on the custom cabinets and tilework is beautiful."
  },
  {
    name: "James & Linda K.",
    location: "Canyon Lake, TX",
    locationTo: "/locations/canyon-lake-tx",
    serviceName: "Custom Stone Fireplace",
    serviceTo: "/custom-fireplaces",
    text: "Robert designed and built a floor-to-ceiling stone fireplace that completely transformed our living space. His team handled everything from the gas line to the final mantel. This is the level of skill you get with 35 years in the business."
  }
] as const;

export function ReviewsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        id="reviews"
        aria-labelledby="homepage-reviews-heading"
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid gap-10 lg:grid-cols-[0.85fr_2fr] items-center overflow-hidden"
      >
        {/* Left Column: Rating & Trust */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[420px] mx-auto lg:mx-0 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#23321e]/30 bg-[#2d3f26]/90 backdrop-blur-md text-white text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm select-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("reviews.badge")}</span>
          </div>

          {/* Title */}
          <h2
            id="homepage-reviews-heading"
            className="text-[22px] sm:text-[25px] md:text-[28px] font-extrabold text-neutral-900 leading-tight mb-4 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("reviews.title")}
          </h2>

          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-5">
            Read real feedback from San Antonio, Boerne, New Braunfels, and Hill Country homeowners who partnered with owner Robert Thompson for remodeling, outdoor living, and landscaping projects.
          </p>

          {/* Google Rating Widget Image */}
          <img
            src={reviewComp}
            alt="Verified Customer Reviews for JRM Construction Landscaping Design"
            width={340}
            height={110}
            loading="lazy"
            className="w-full max-w-[320px] mb-6 object-contain rounded-xl"
          />

          {/* CTA Button */}
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-[#2c241d] to-[#1a1511] hover:from-[#3d3228] hover:to-[#221c16] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(34,28,22,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{t("reviews.readall")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Right Column: Non-Duplicated Client Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-5 w-full">
          {testimonials.map((r) => (
            <article
              key={r.name}
              className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#23321e] flex items-center justify-center text-white shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-bold text-neutral-900 text-[14px] leading-tight truncate">
                        {r.name}
                      </h3>
                      <Link
                        to={r.locationTo as string}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#577a4c] hover:underline mt-0.5"
                      >
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span>{r.location}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-0.5 shrink-0" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-[13px] text-neutral-700 leading-relaxed italic mb-4">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                <span className="text-neutral-500 font-medium">Project Scope:</span>
                <Link
                  to={r.serviceTo}
                  className="font-bold text-[#3d5636] hover:text-[#23321e] underline underline-offset-2"
                >
                  {r.serviceName}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
