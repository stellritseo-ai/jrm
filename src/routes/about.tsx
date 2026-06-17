import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  Construction,
  Layers,
  Utensils,
  Trees,
  Flame,
  Wrench,
  ChevronRight,
  ClipboardList
} from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import welImg from "@/assets/wel-img.webp";
import heroImage from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JRM Construction Landscape Design — San Antonio, TX" },
      { name: "description", content: "Learn about JRM Construction Landscape Design, our 35 years of experience in San Antonio, TX, and our commitment to quality." },
      { property: "og:title", content: "About JRM Construction Landscape Design" },
      { property: "og:description", content: "Premier landscaping and construction services in San Antonio, TX with 35 years of experience." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  const expertiseItems = [
    {
      title: "House Remodeling & New Construction",
      desc: "Complete home renovations, kitchen updates, custom builds, and extensions executed to perfection.",
      icon: Construction,
    },
    {
      title: "Custom Hardscapes & Flagstone Patios",
      desc: "Exquisite stone pathways, brick retaining walls, custom flagstone work, and premium concrete solutions.",
      icon: Layers,
    },
    {
      title: "Outdoor Kitchens & Covered Patios",
      desc: "Gourmet outdoor entertainment areas, built-in BBQ grills, pavilions, and robust patio covers.",
      icon: Utensils,
    },
    {
      title: "Creative Landscape Design & Softscapes",
      desc: "Lush garden layouts, strategic sod installation, palm tree styling, and native plant selections.",
      icon: Trees,
    },
    {
      title: "Artificial Turf Solutions & Fencing",
      desc: "Low-maintenance putting greens, pristine artificial turf, and secure wood or iron perimeter fencing.",
      icon: Wrench,
    },
    {
      title: "Custom Indoor & Outdoor Fireplaces",
      desc: "Elegant and safe stone fireplaces, custom mantels, and cozy outdoor fire pit structures.",
      icon: Flame,
    },
  ];

  const benefits = [
    {
      title: "35 Years of Local Experience",
      desc: "Deep-rooted knowledge of San Antonio architectural styles, local building codes, soil requirements, and climate conditions.",
    },
    {
      title: "Owner-Led Oversight",
      desc: "Robert Thompson is directly involved in the planning and execution of every project, ensuring superior quality control and attention to detail.",
    },
    {
      title: "Full-Service Design & Build",
      desc: "We manage your entire project from initial creative blueprint concepts, permits, and construction, to the final site cleanup.",
    },
    {
      title: "Commitment to Lasting Quality",
      desc: "We source premium commercial-grade materials and employ time-tested construction methods to ensure your investment stands the test of time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section
          className="relative mx-auto max-w-[1400px] w-full bg-cover bg-center rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[320px] md:min-h-[380px] flex items-center justify-center text-center px-6 py-12"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dark Forest overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/90 via-[#111a0a]/75 to-[#111a0a]/90 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
              About JRM Construction
            </span>

            {/* Title */}
            <h1 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Building San Antonio's Trust,<br className="hidden sm:inline" /> One Project at a Time
            </h1>
          </motion.div>
        </section>
      </div>

      {/* ── EDITORIAL STORY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Our Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                About JRM Construction Landscaping Design
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                For over 35 years, JRM Construction Landscaping Design has stood as a pillar of quality, integrity, and craftsmanship in the San Antonio community. Founded and led by Robert Thompson, our family-owned and operated business was built on a simple, unwavering principle: to transform our clients' visions into enduring realities with unmatched reliability and skill.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                What began as a dedicated landscaping operation has, through three decades of trusted service, grown into a full-service design and construction firm. We specialize in seamlessly blending indoor remodeling with outdoor living spaces, creating cohesive environments that enhance both the beauty and functionality of your property.
              </p>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[500px] mx-auto flex items-center justify-center"
            >
              <img
                src={welImg}
                alt="Beautiful JRM outdoor transformation project"
                className="w-full h-auto object-contain rounded-2xl shadow-lg border border-neutral-200/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none">
                <span className="text-2xl font-black text-[#3d5636]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years of Trust</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── PILLARS OF INTEGRITY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-16 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Integrity in Every Detail
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Licensed, Insured & Bonded */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-md border border-neutral-200/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#577a4c]/10 border border-[#577a4c]/20 flex items-center justify-center mb-6 text-[#3d5636]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 capitalize">
                Licensed, Insured & Bonded
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                Your peace of mind is the cornerstone of our business. That is why we are a fully licensed, insured, and bonded Texas contractor. This commitment protects you and your investment, ensuring every project meets the highest standards of safety and professionalism.
              </p>
            </motion.div>

            {/* Card 2: Consultation & Honesty */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-md border border-neutral-200/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#577a4c]/10 border border-[#577a4c]/20 flex items-center justify-center mb-6 text-[#3d5636]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 capitalize">
                Transparency & Clear Communication
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                We believe in clear communication and transparency from the very first conversation. That’s why every project begins with a comprehensive, free consultation. We take the time to listen, understand your goals, and provide honest, upfront assessments.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── EXPERTISE grid SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Where Vision Meets Craftsmanship
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base">
              Our extensive experience encompasses both residential and commercial projects across an 80-mile radius around San Antonio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 flex items-center justify-center mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-md font-bold text-neutral-900 mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-[#4a6e28] gap-1 group cursor-pointer hover:opacity-85 select-none w-fit">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── WHY JRM COMPONENT ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-16 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-5"
            >
              <span className="inline-flex items-center bg-[#2d3f26] border border-[#23321e]/30 text-white rounded-full px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Why Property Owners Choose JRM
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Whether you need 24/7 emergency service or are planning a dream renovation, our skilled team brings the same level of dedication, precision, and hands-on expertise that owner Robert Thompson has personally guaranteed since day one.
              </p>
            </motion.div>

            {/* Right Column Grid */}
            <div className="grid gap-6">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 select-none">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-neutral-900 tracking-wide">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CALL TO ACTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-16 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Logo */}
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Let's Build Something Remarkable Together
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              At JRM Construction, we don't just build patios and remodel kitchens—we build relationships and trust that last for generations. We are proud to be a part of the San Antonio community and are dedicated to contributing to its beauty and growth, one exceptional project at a time.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-lg font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Ready to discuss your vision?
              </h3>
              <p className="text-sm text-neutral-300 font-light mb-6 text-center sm:text-left">
                Contact us today to schedule your free, no-obligation consultation with Robert.
              </p>

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
                  <Clock className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Mon-Sat: 8am-5pm | 24/7 Support</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>San Antonio & 80-Mile Surrounding Area</span>
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
              <a
                href="/#consultation"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Request Free Consultation
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
