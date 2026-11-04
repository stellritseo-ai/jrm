import { useState } from "react";
import { Mail, MapPin, ChevronDown, Phone } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { trackFormSubmission, trackPhoneClick } from "@/lib/analytics";
import welBg from "@/assets/wel-bg.png";

export function CTASection() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    try {
      await addLead({
        name,
        email,
        phone,
        address,
        projectType: service || "general-contracting",
        description: message,
        contactTime: "morning"
      });

      await addWebEmail({
        name,
        email,
        phone,
        service: service || "general-contracting",
        message: message + (address ? ` (Address: ${address})` : ""),
        source: "landing_page"
      });

      trackFormSubmission("Homepage Bottom CTA Form");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit CTA contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-0 pt-[5px] pb-0 px-[15px]">
      <section
        id="contact"
        aria-labelledby="homepage-cta-heading"
        className="mx-auto max-w-[1400px] w-full rounded-t-[10px] rounded-b-none bg-[#2c241d] py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[150px] border border-neutral-800 shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden text-center"
      >
        <div
          className="w-full rounded-[8px] bg-cover bg-center border border-[#eae8e1]/70 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative z-10 p-5 sm:p-8 md:p-10 lg:p-[40px_50px]"
          style={{ backgroundImage: `url(${welBg})`, backgroundColor: "#fbfaf7" }}
        >
          {/* Badge */}
          <div className="inline-block bg-[#3f4a1f] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-6 select-none shadow-sm">
            {t("cta.badge")}
          </div>

          {/* Title */}
          <h2
            id="homepage-cta-heading"
            className="text-2xl md:text-[32px] text-neutral-900 leading-tight tracking-tight font-bold mb-2.5 -mt-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("cta.title")}
          </h2>

          {/* Description */}
          <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto text-sm mb-6">
            {t("cta.desc")} Call Robert Thompson directly at{" "}
            <a
              href="tel:2104295526"
              onClick={() => trackPhoneClick("Homepage Bottom CTA Description")}
              className="font-bold text-[#3f4a1f] underline"
            >
              (210) 429-5526
            </a>{" "}
            or submit your project details below.
          </p>

          {isSubmitted ? (
            <div className="flex flex-col justify-center items-center text-center w-full py-12 space-y-4" role="status" aria-live="polite">
              <div className="bg-[#3f4a1f]/10 text-[#3f4a1f] p-4 rounded-full animate-bounce">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-serif">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-neutral-700 max-w-md">
                We have received your message and Robert Thompson or our team will get in touch with you within 24 hours.
              </p>
            </div>
          ) : (
            <form className="w-full space-y-4 text-left" onSubmit={handleSubmit}>
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cta-name" className="block text-xs font-semibold text-neutral-800 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("cta.form.name")}
                    className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-200 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="cta-phone" className="block text-xs font-semibold text-neutral-800 mb-1">
                    Phone Number
                  </label>
                  <div className="relative w-full">
                    <input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("cta.form.phone")}
                      className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-200 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/30 transition-all"
                    />
                    <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3f4a1f]/75 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 2: Email and Address with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cta-email" className="block text-xs font-semibold text-neutral-800 mb-1">
                    Email Address *
                  </label>
                  <div className="relative w-full">
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("cta.form.email")}
                      className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-200 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/30 transition-all"
                    />
                    <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3f4a1f]/75 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cta-address" className="block text-xs font-semibold text-neutral-800 mb-1">
                    Property City or Address
                  </label>
                  <div className="relative w-full">
                    <input
                      id="cta-address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={t("cta.form.address")}
                      className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-200 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/30 transition-all"
                    />
                    <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3f4a1f]/75 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: All 18 Services select dropdown */}
              <div>
                <label htmlFor="cta-service" className="block text-xs font-semibold text-neutral-800 mb-1">
                  Select Primary Service
                </label>
                <div className="relative w-full">
                  <select
                    id="cta-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-200 py-3 pl-4 pr-10 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/30 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">{t("cta.form.services")}</option>
                    <option value="general-contracting">General Contracting</option>
                    <option value="house-remodeling">House Remodeling</option>
                    <option value="new-construction">New Construction</option>
                    <option value="commercial-construction">Commercial Construction</option>
                    <option value="outdoor-kitchens">Outdoor Kitchens</option>
                    <option value="covered-patios">Covered Patios &amp; Pergolas</option>
                    <option value="custom-fireplaces">Custom Fireplaces &amp; Fire Pits</option>
                    <option value="hardscaping">Hardscaping &amp; Retaining Walls</option>
                    <option value="stamped-concrete">Stamped Concrete &amp; Overlays</option>
                    <option value="custom-decks">Custom Decks</option>
                    <option value="artificial-turf">Artificial Turf Installation</option>
                    <option value="fencing">Custom Fencing &amp; Gates</option>
                    <option value="adu-services">ADU Construction Services</option>
                    <option value="landscape-design">3D Landscape &amp; Architectural Design</option>
                    <option value="softscapes">Softscapes &amp; Native Planting</option>
                    <option value="palm-trees">Palm Tree Sourcing &amp; Installation</option>
                    <option value="irrigation">Irrigation &amp; Sprinkler Systems</option>
                    <option value="landscape-lighting">LED Landscape Lighting</option>
                  </select>
                  <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                    <ChevronDown className="h-4 w-4 text-[#3f4a1f]/75" />
                  </div>
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <div>
                <label htmlFor="cta-message" className="block text-xs font-semibold text-neutral-800 mb-1">
                  Project Details &amp; Goals
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("cta.form.message")}
                  className="w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-200 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/30 transition-all resize-none"
                />
              </div>

              {/* Row 5: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2c241d] hover:bg-[#1a1511] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-[5px] py-3.5 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer text-center disabled:opacity-75 disabled:pointer-events-none"
              >
                {isSubmitting ? "Submitting..." : t("cta.form.btn")}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
