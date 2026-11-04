import { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { trackFormSubmission, trackPhoneClick } from "@/lib/analytics";
import { Link } from "@tanstack/react-router";
import map from "@/assets/map.webp";

const priorityServiceAreas = [
  { name: "San Antonio, TX", to: "/locations/san-antonio-tx" },
  { name: "Alamo Heights, TX", to: "/locations/alamo-heights-tx" },
  { name: "Boerne, TX", to: "/locations/boerne-tx" },
  { name: "New Braunfels, TX", to: "/locations/new-braunfels-tx" },
  { name: "Seguin, TX", to: "/locations/seguin-tx" },
  { name: "Canyon Lake, TX", to: "/locations/canyon-lake-tx" },
  { name: "Schertz, TX", to: "/locations/schertz-tx" },
  { name: "Helotes, TX", to: "/locations/helotes-tx" },
  { name: "Bulverde, TX", to: "/locations/bulverde-tx" },
  { name: "Universal City, TX", to: "/locations/universal-city-tx" },
  { name: "Kerrville, TX", to: "/locations/kerrville-tx" },
  { name: "Fredericksburg, TX", to: "/locations/fredericksburg-tx" },
  { name: "Converse, TX", to: "/locations/converse-tx" },
  { name: "Live Oak, TX", to: "/locations/live-oak-tx" },
  { name: "Leon Valley, TX", to: "/locations/leon-valley-tx" }
] as const;

export function QuoteSection() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("general-contracting");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return;

    try {
      const fullName = `${firstName} ${lastName}`;
      await addLead({
        name: fullName,
        email,
        phone,
        address: "",
        projectType: service,
        description: message,
        contactTime: "morning"
      });

      await addWebEmail({
        name: fullName,
        email,
        phone,
        service,
        message,
        source: "landing_page"
      });

      trackFormSubmission("Homepage Quote Request Form");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit landing page form:", error);
    }
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        id="consultation"
        aria-labelledby="homepage-quote-heading"
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid gap-10 lg:grid-cols-[1.05fr_1.25fr] items-stretch"
      >
        {/* Service Area Card with Crawlable Location Links */}
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center p-7 md:p-8 text-white flex flex-col justify-between shadow-lg"
          style={{ backgroundImage: `linear-gradient(to bottom right, rgba(44, 32, 24, 0.92), rgba(28, 20, 13, 0.95)), url(${map})` }}
        >
          <div className="relative z-10 w-full">
            <div className="inline-block rounded-full bg-[#221c16]/60 border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider mb-5 select-none self-start shadow-sm">
              {t("quote.area.badge")}
            </div>

            <h2 className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight tracking-tight mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Serving San Antonio &amp; Surrounding Hill Country Communities
            </h2>
            <p className="text-xs md:text-sm text-white/85 leading-relaxed mb-6">
              Select your city below to view local construction considerations, permitting information, and projects completed near your neighborhood:
            </p>

            {/* Crawlable Grid of Priority Locations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
              {priorityServiceAreas.map((area) => (
                <Link
                  key={area.to}
                  to={area.to as string}
                  className="group flex items-center justify-between rounded-full bg-[#3f4a1f] border border-[#2d3715] px-3.5 py-2 text-xs font-semibold text-white hover:text-[#23321e] hover:bg-white hover:border-white shadow-sm transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="truncate pr-1">{area.name.replace(", TX", "")}</span>
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-white group-hover:text-[#3f4a1f] opacity-90 transition-colors duration-300" />
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a5b89d] hover:text-white underline underline-offset-4"
              >
                <span>View Full 80-Mile Service Area Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:2104295526"
                onClick={() => trackPhoneClick("Service Area Map Card")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#a5b89d]"
              >
                <Phone className="w-3.5 h-3.5 text-[#a5b89d]" />
                <span>(210) 429-5526</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quote Form / Success State */}
        {isSubmitted ? (
          <div className="flex flex-col justify-center items-center text-center w-full lg:pl-6 py-12" role="status" aria-live="polite">
            <div className="bg-[#3f4a1f]/10 text-[#3f4a1f] p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#08152e] mb-2">
              Quote Request Received!
            </h3>
            <p className="text-xs text-neutral-600 max-w-sm leading-relaxed">
              Thank you, {firstName}! Your request has been sent directly to owner Robert Thompson. We will review your project details and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-start w-full lg:pl-6">
            <h3 id="homepage-quote-heading" className="text-2xl md:text-3xl font-black text-[#08152e] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              {t("quote.form.title")}
            </h3>

            <p className="text-sm leading-relaxed text-neutral-600 mb-6 max-w-2xl">
              {t("quote.form.desc")}
            </p>

            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              {/* Row 1: Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-first-name" className="block text-xs font-semibold text-[#08152e] mb-1.5">
                    {t("quote.form.first")} *
                  </label>
                  <input
                    id="quote-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-400"
                  />
                </div>
                <div>
                  <label htmlFor="quote-last-name" className="block text-xs font-semibold text-[#08152e] mb-1.5">
                    {t("quote.form.last")} *
                  </label>
                  <input
                    id="quote-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-400"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-semibold text-[#08152e] mb-1.5">
                    {t("quote.form.email")} *
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-lg border border-neutral-200 pl-4 pr-10 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-400"
                    />
                    <Mail className="absolute right-3.5 h-4 w-4 text-emerald-600/80 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold text-[#08152e] mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(210) 555-0199"
                      className="w-full rounded-lg border border-neutral-200 pl-4 pr-10 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-400"
                    />
                    <Phone className="absolute right-3.5 h-4 w-4 text-emerald-600/80 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: All 18 Services select */}
              <div>
                <label htmlFor="quote-service" className="block text-xs font-semibold text-[#08152e] mb-1.5">
                  {t("quote.form.service")}
                </label>
                <div className="relative flex items-center">
                  <select
                    id="quote-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all appearance-none cursor-pointer text-neutral-800 pr-10"
                  >
                    <option value="general-contracting">General Contracting</option>
                    <option value="house-remodeling">House Remodeling (Kitchen, Bath, Additions)</option>
                    <option value="new-construction">New Construction</option>
                    <option value="commercial-construction">Commercial Construction</option>
                    <option value="outdoor-kitchens">Outdoor Kitchens &amp; Built-In Grills</option>
                    <option value="covered-patios">Covered Patios, Pergolas &amp; Pavilions</option>
                    <option value="custom-fireplaces">Custom Fireplaces &amp; Fire Pits</option>
                    <option value="hardscaping">Hardscaping &amp; Retaining Walls</option>
                    <option value="stamped-concrete">Stamped Concrete &amp; Overlays</option>
                    <option value="custom-decks">Custom Decks (Composite &amp; Cedar)</option>
                    <option value="artificial-turf">Artificial Turf &amp; Putting Greens</option>
                    <option value="fencing">Custom Wood &amp; Wrought Iron Fencing</option>
                    <option value="adu-services">ADU Construction &amp; Guest Casitas</option>
                    <option value="landscape-design">3D Landscape &amp; Architectural Design</option>
                    <option value="softscapes">Softscapes, Native Plants &amp; Sod</option>
                    <option value="palm-trees">Cold-Hardy Palm Tree Installation</option>
                    <option value="irrigation">Irrigation &amp; Sprinkler Systems</option>
                    <option value="landscape-lighting">LED Landscape Lighting</option>
                  </select>
                  <div className="absolute right-3.5 pointer-events-none text-neutral-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Message textarea */}
              <div>
                <label htmlFor="quote-message" className="block text-xs font-semibold text-[#08152e] mb-1.5">
                  {t("quote.form.message.label")}
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("quote.form.message.placeholder")}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-[#3f4a1f] hover:bg-[#2d3715] text-white text-xs font-bold uppercase tracking-widest px-10 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  {t("quote.form.send")}
                </button>
                <span className="text-xs text-neutral-500">
                  Or call Robert directly at{" "}
                  <a
                    href="tel:2104295526"
                    onClick={() => trackPhoneClick("Quote Form Direct Link")}
                    className="font-bold text-[#3f4a1f] hover:underline"
                  >
                    (210) 429-5526
                  </a>
                </span>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
