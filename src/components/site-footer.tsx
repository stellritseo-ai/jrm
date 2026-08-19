import { Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import { useTranslation } from "@/context/translation-context";
import { useSettings } from "@/context/settings-context";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const { t, language } = useTranslation();
  const { settings } = useSettings();
  const phoneClean = settings.officePhone.replace(/\D/g, "");

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Services", to: "/services" },
    { label: "Service Areas (80 Miles)", to: "/service-areas" },
    { label: "Our Work", to: "/work" },
    { label: "Customer Reviews", to: "/reviews" },
    { label: "Blog / Guides", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
  ];

  const serviceLinks = [
    { label: "General Contracting", to: "/general-contracting" },
    { label: "House Remodeling", to: "/house-remodeling" },
    { label: "New Construction", to: "/new-construction" },
    { label: "Commercial Services", to: "/commercial" },
    { label: "Covered Patios", to: "/covered-patios" },
    { label: "Outdoor Kitchens", to: "/outdoor-kitchens" },
    { label: "Custom Fireplaces", to: "/custom-fireplaces" },
    { label: "Hardscapes", to: "/hardscapes" },
    { label: "All 18 Services", to: "/services" },
  ];

  return (
    <div className="w-full bg-[#f4f3ef] pt-0 pb-[15px] px-[15px]">
      <footer
        className="mx-auto max-w-[1400px] w-full bg-[#1c140d] text-white px-8 md:px-12 py-16 rounded-t-none rounded-b-[10px] mt-0 border border-neutral-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.97), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main 4-Column Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 relative z-10">
          {/* Column 1: Business Logo & Description (Width: 5/12) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="JRM Construction Landscape Design" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light pr-0 lg:pr-8">
              {t("footer.desc")}
            </p>
          </div>

          {/* Column 2: Services (Width: 2/12) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              {t("footer.title.services")}
            </h4>
            <ul className="mt-4 space-y-3.5 text-[15px] text-neutral-300 font-light">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (Width: 2/12) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              {t("footer.title.links")}
            </h4>
            <ul className="mt-4 space-y-3.5 text-[15px] text-neutral-300 font-light">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials (Width: 3/12) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              {t("footer.title.contact")}
            </h4>
            <ul className="mt-4 space-y-3 text-[14px] text-neutral-300 font-light">
              <li className="text-white font-semibold">
                Principal & Design Consultant:
                <div className="text-neutral-200 font-normal">Robert Thompson</div>
              </li>
              <li>
                <span className="text-neutral-400">Robert:</span>{" "}
                <a
                  href={`tel:${phoneClean || "2104295526"}`}
                  className="font-medium text-white hover:underline transition-all"
                >
                  {settings.officePhone || "(210) 429-5526"}
                </a>
              </li>
              <li>
                <span className="text-neutral-400">Arturo (Spanish) :</span>{" "}
                <a
                  href="tel:2103793505"
                  className="font-medium text-white hover:underline transition-all"
                >
                  (210) 379-3505
                </a>
              </li>
              <li>
                <span className="text-neutral-400">Email:</span>{" "}
                <a
                  href={`mailto:${settings.adminEmail || "robertsa210@icloud.com"}`}
                  className="font-medium text-white hover:underline transition-all"
                >
                  {settings.adminEmail || "robertsa210@icloud.com"}
                </a>
              </li>
              <li className="leading-snug">
                <span className="text-neutral-400">Address:</span>{" "}
                <span className="text-neutral-200">San Antonio, TX (80-Mile Service Area)</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Categorized SEO & Service Directory (Pixel-Perfect Structure) */}
        <div className="mt-14 pt-8 border-t border-white/10 relative z-10 w-full">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Category 1: Construction & Remodeling */}
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#577a4c]" />
                  Construction & Remodeling
                </h5>
                <ul className="space-y-2.5 text-[13px] text-neutral-400 font-light">
                  <li>
                    <Link to="/general-contracting" className="hover:text-white transition-colors duration-150">
                      General Contractor San Antonio TX
                    </Link>
                  </li>
                  <li>
                    <Link to="/house-remodeling" className="hover:text-white transition-colors duration-150">
                      Licensed Home Remodeler San Antonio
                    </Link>
                  </li>
                  <li>
                    <Link to="/new-construction" className="hover:text-white transition-colors duration-150">
                      Custom Home Builder & Additions
                    </Link>
                  </li>
                  <li>
                    <Link to="/commercial" className="hover:text-white transition-colors duration-150">
                      Commercial Construction Contractor
                    </Link>
                  </li>
                  <li>
                    <Link to="/adu-services" className="hover:text-white transition-colors duration-150">
                      ADU & Guest House Builders
                    </Link>
                  </li>
                  <li>
                    <Link to="/stamped-concrete-overlay" className="hover:text-white transition-colors duration-150">
                      Stamped Concrete & Overlay Patios
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 2: Outdoor Living & Landscaping */}
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#577a4c]" />
                  Outdoor Living & Landscaping
                </h5>
                <ul className="space-y-2.5 text-[13px] text-neutral-400 font-light">
                  <li>
                    <Link to="/covered-patios" className="hover:text-white transition-colors duration-150">
                      Covered Patio Builder & Pergolas
                    </Link>
                  </li>
                  <li>
                    <Link to="/outdoor-kitchens" className="hover:text-white transition-colors duration-150">
                      Custom Outdoor Kitchens & BBQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-fireplaces" className="hover:text-white transition-colors duration-150">
                      Outdoor Fireplaces & Stone Fire Pits
                    </Link>
                  </li>
                  <li>
                    <Link to="/hardscapes" className="hover:text-white transition-colors duration-150">
                      Hardscaping & Retaining Walls
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-decks" className="hover:text-white transition-colors duration-150">
                      Custom Composite & Wood Decks
                    </Link>
                  </li>
                  <li>
                    <Link to="/artificial-turf" className="hover:text-white transition-colors duration-150">
                      Artificial Turf & Putting Greens
                    </Link>
                  </li>
                  <li>
                    <Link to="/fencing" className="hover:text-white transition-colors duration-150">
                      Wood Privacy & Iron Fencing
                    </Link>
                  </li>
                  <li>
                    <Link to="/landscape-lighting" className="hover:text-white transition-colors duration-150">
                      Landscape Lighting & 3D Design
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 3: Regional Service Areas (80-Mile Radius) */}
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#577a4c]" />
                  Central Texas Service Areas
                </h5>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    to="/locations/$location"
                    params={{ location: "san-antonio-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    San Antonio
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "alamo-heights-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Alamo Heights
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "boerne-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Boerne
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "new-braunfels-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    New Braunfels
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "seguin-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Seguin
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "canyon-lake-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Canyon Lake
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "kerrville-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Kerrville
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "fredericksburg-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Fredericksburg
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "bulverde-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Bulverde
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "schertz-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Schertz
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "helotes-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Helotes
                  </Link>
                  <Link
                    to="/locations/$location"
                    params={{ location: "universal-city-tx" }}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150"
                  >
                    Universal City
                  </Link>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5">
                  <Link
                    to="/service-areas"
                    className="inline-flex items-center gap-1.5 text-xs text-[#a5b89d] hover:text-white font-medium transition-colors"
                  >
                    View All 15 Service Areas & Coverage Map &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright & Branding */}
        <div className="mt-12 mb-[-32px] rounded-2xl sm:rounded-full bg-white/[0.02] border border-white/5 py-3 sm:py-3.5 text-xs text-neutral-400 tracking-wide relative z-10 w-full backdrop-blur-md px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
          <span>
            {t("footer.copyright")}{" "}
            <span className="mx-1.5 text-neutral-700">|</span>{" "}
            <a href="/dashboard" className="hover:text-white hover:underline transition-all">
              Admin Portal
            </a>
          </span>
          <span className="md:text-right shrink-0">
            {language === "es" ? "Diseño por" : "Design By"}{" "}
            <a
              href="https://stellrit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a5b89d] hover:text-white font-bold transition-colors duration-200 hover:underline"
            >
              StellR IT LLC
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}