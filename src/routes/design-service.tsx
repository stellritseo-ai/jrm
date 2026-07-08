import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  CheckCircle2,
  Compass,
  Layers,
  Sparkles,
  ArrowRight,
  ClipboardList,
  Eye,
  PenTool,
  Grid
} from "lucide-react";

import imgBlueprint from "@/assets/svc-design-blueprint.png";
import imgSportsCourt from "@/assets/svc-design-sports-court.png";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";
import heroBg from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/design-service")({
  head: () => ({
    meta: [
      { title: "3D Design & Space Planning Services San Antonio — JRM Construction" },
      { name: "description", content: "Visualize your home remodeling, covered patio, outdoor kitchen, or landscape project in beautiful 3D before building. Over 35 years of trusted design-build experience. Call (210) 429-5526." },
      { property: "og:title", content: "3D Rendering, Site Planning & Architectural Design in San Antonio" },
      { property: "og:description", content: "Get high-end 3D renderings, floor plans, elevations, and site layouts for your next project. Custom architectural and space planning services." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: DesignServicePage,
});

function DesignServicePage() {
  const { t } = useTranslation();

  const designCapabilities = [
    {
      title: "3D Architectural Renderings",
      desc: "See your home extension, guest house, or complete remodel from multiple angles before construction starts.",
      bullets: [
        "Photorealistic material and color visualization",
        "Day and night lighting perspectives",
        "Walkthrough tours and interactive views",
        "Clear alignment on expectations before breaking ground"
      ]
    },
    {
      title: "Detailed Site & Floor Plans",
      desc: "Comprehensive 2D dimension layouts and side elevations that detail the exact structural parameters.",
      bullets: [
        "Accurate floor plans with exact room/structure sizes",
        "Detailed front, side, and rear elevation schematics",
        "Perfect mapping of doors, windows, and partition walls",
        "Crucial data for construction accuracy and building permits"
      ]
    },
    {
      title: "Sports Court & Putting Greens",
      desc: "Specialized layouts for tennis, pickleball, and custom golf putting greens mapped exactly to your site.",
      bullets: [
        "Pickleball and tennis court dimension layouts",
        "Golf putting green contouring and cup placements",
        "Fencing, borders, and surrounding hardscape integration",
        "Optimized space utilization for family recreation"
      ]
    },
    {
      title: "Landscape & Hardscape Layouts",
      desc: "Seamless integration of outdoor kitchens, patios, walkways, pool decks, palm trees, and lighting.",
      bullets: [
        "Custom outdoor kitchen island shape planning",
        "Paver pathways, pool surrounds, and fireplace layouts",
        "Palm tree, sod, and plant selection placement guides",
        "Low-voltage uplighting and path light positions"
      ]
    }
  ];

  const designServices = [
    {
      title: "Custom Design & Space Planning",
      icon: Compass,
      items: [
        "Accurate measurements and site assessments",
        "Custom floor plans and layout conceptualization",
        "Optimized space planning for tight lot conditions",
        "Material selections and finishes coordination"
      ]
    },
    {
      title: "Comprehensive Blueprint Drafting",
      icon: ClipboardList,
      items: [
        "City permit coordination and local code compliance blueprints",
        "Elevation drawings for homeowner association (HOA) approvals",
        "Foundation, framing, and roofing layout guides",
        "Detailed material schedules and dimensions"
      ]
    },
    {
      title: "Advanced 3D Modeling & Renders",
      icon: Eye,
      items: [
        "Exterior modeling of ADUs, custom fireplace surrounds, and patio covers",
        "Full kitchen and bathroom cabinetry and countertop layout previews",
        "Accurate representation of stamped concrete, flagstone, and pavers",
        "Immersive scene rendering for premium presentation"
      ]
    },
    {
      title: "Site & Recreational Planning",
      icon: Grid,
      items: [
        "Integrated landscape and outdoor living layouts",
        "Recreational zoning (pickleball courts, putting greens, playgrounds)",
        "Drainage routes, slope levels, and retaining wall placements",
        "Property boundary line and utility setback calculations"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Scoping consultation",
      subtitle: "Initial Site Assessment",
      desc: "We begin with a free site visit to take precise measurements, review boundary lines, check setbacks, and map out your property footprint."
    },
    {
      number: "02",
      title: "Concept mapping",
      subtitle: "2D Layout & Floor Plans",
      desc: "We create a scale 2D layout mapping the spatial arrangements, rooms, doorways, or landscape features to set the overall configuration."
    },
    {
      number: "03",
      title: "3D Modeling",
      subtitle: "High-End Renderings",
      desc: "We build an accurate 3D model, applying realistic textures, colors, and elevations so you can visually experience the finished space."
    },
    {
      number: "04",
      title: "Review & Refine",
      subtitle: "Revision Workshops",
      desc: "We meet with you to adjust materials, shift layouts, alter colors, and refine details until the design represents your exact vision."
    },
    {
      number: "05",
      title: "Permit drafting",
      subtitle: "Final Construction Blueprints",
      desc: "We compile detailed elevation sheets, floor plans, and structural details required for HOA, city approvals, and building permit files."
    },
    {
      number: "06",
      title: "Seamless execution",
      subtitle: "Ready to Build",
      desc: "With finalized blueprints and designs, we transition smoothly to building. JRM's expert crew constructs the design to exact specifications under Robert's oversight."
    }
  ];

  const whyChooseUs = [
    {
      title: "Constructibility-First Design",
      desc: "We don't just design pretty pictures; we are contractors. We design structures that are code-compliant and built to last."
    },
    {
      title: "All-in-One Design-Build",
      desc: "Save time and eliminate gaps. The same company that handles your blueprints, models, and permits builds the project."
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "35+ years of certified work in San Antonio, protecting your property value and investment."
    },
    {
      title: "Local San Antonio Expertise",
      desc: "Deep knowledge of local zoning codes, utility connections, HOA rules, and San Antonio soil profiles."
    },
    {
      title: "Precision 3D Renderings",
      desc: "Clear visual communication that takes the guesswork out of remodeling and landscaping."
    },
    {
      title: "Owner-Led Consultation",
      desc: "Principal & Design Consultant Robert Thompson directly oversees the project design to ensure absolute quality."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Premium 3D & Blueprint Services
            </span>

            <h1
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Visualize Your Dreams In Full 3D
            </h1>

            <p className="mt-6 text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Don't guess how your home remodel, custom fireplace, covered patio, or sports court will look. JRM Construction provides state-of-the-art architectural blueprints and photorealistic 3D renderings to plan your project down to the millimeter.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/lets-talk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] text-white font-bold text-sm shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
              >
                Schedule A Design Meeting
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:2104295526"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
              >
                Call (210) 429-5526
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── DESIGN SHOWCASE / GALLERY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-6 md:px-12 py-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Our Designs in Action
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Blueprints & Wireframe Renderings
            </h2>
            <p className="text-neutral-500 text-xs md:text-sm font-light">
              Explore actual design documentation and 3D wireframes created for our custom residential and recreational space planning projects in San Antonio.
            </p>
          </div>

          {/* TWO DEDICATED IMAGES DISPLAY */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto text-left">
            {/* Image 1: Blueprint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl overflow-hidden shadow-sm flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border-b border-[#eae8e1]">
                <img
                  src={imgBlueprint}
                  alt="Custom ADU Floor Plan and elevations"
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase bg-[#577a4c] text-white px-2.5 py-1 rounded-md mb-3 inline-block">
                    Architectural Layouts
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 font-serif">
                    ADU Elevations & Floor Plan Guides
                  </h3>
                  <p className="text-neutral-500 text-xs font-light mt-2 leading-relaxed">
                    Detailed blueprint drawings including front and side elevations, floor plans, outdoor kitchen specs, and dimensions. Crucial for city permitting, HOA approvals, and ensuring builder precision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image 2: Sports Court */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl overflow-hidden shadow-sm flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border-b border-[#eae8e1]">
                <img
                  src={imgSportsCourt}
                  alt="Pickleball and Sports Court wireframe 3D design"
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase bg-[#577a4c] text-white px-2.5 py-1 rounded-md mb-3 inline-block">
                    Recreational 3D Modeling
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 font-serif">
                    Sports Court & Putting Green Wireframes
                  </h3>
                  <p className="text-neutral-500 text-xs font-light mt-2 leading-relaxed">
                    Multi-angle 3D wireframe models designed for backyard pickleball courts, multi-sport setups, and custom golf putting greens. Perfect for visualizing dimensions, angles, and site integration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── DESIGN CAPABILITIES GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] px-6 md:px-12 py-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              What We Plan & Design
            </h2>
            <p className="text-neutral-500 text-xs md:text-sm font-light">
              We provide full-service space planning for all residential remodels, structural additions, and outdoor recreation areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-2">
                    <PenTool className="w-4.5 h-4.5 text-[#577a4c] shrink-0" />
                    <span>{cap.title}</span>
                  </h3>
                  <p className="text-neutral-500 text-xs font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="border-t border-[#eae8e1] pt-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] md:text-xs text-neutral-600 font-medium">
                    {cap.bullets.map((b, bidx) => (
                      <li key={bidx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── DESIGN-BUILD SERVICE SPECTRUM ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-6 md:px-12 py-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Full Spectrum Services
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Comprehensive Planning Tools
            </h2>
            <p className="text-neutral-500 text-xs font-light">
              From site measures to full HOA submittals, our designs are optimized for quick approvals and flawless builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-5 shadow-xs space-y-4 hover:-translate-y-1 transition-transform duration-350 flex flex-col">
                  <div className="h-10 w-10 rounded-xl bg-[#577a4c]/10 flex items-center justify-center text-[#577a4c] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wider leading-tight">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5 text-[10px] text-neutral-500 font-light flex-1">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c]/50 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── THE DESIGN & PLANNING PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] px-6 md:px-12 py-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Step-By-Step Journey
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Our Structured Design Process
            </h2>
            <p className="text-neutral-500 text-xs font-light">
              We follow a rigorous planning method that removes surprises, aligns budgets, and delivers layouts tailored perfectly to your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#eae8e1] p-6 rounded-2xl shadow-xs relative flex flex-col justify-between group hover:border-[#577a4c]/50 transition-colors">
                <span className="absolute top-4 right-6 text-2xl font-black text-neutral-200 group-hover:text-[#577a4c]/20 transition-colors">
                  {step.number}
                </span>
                <div className="space-y-2 mt-4">
                  <span className="text-[8px] font-extrabold text-[#577a4c] uppercase tracking-wider block">
                    {step.title}
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                    {step.subtitle}
                  </h4>
                  <p className="text-neutral-500 text-[10px] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE JRM ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-6 md:px-12 py-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Why Choose JRM
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
                Why Choose JRM for Your Design?
              </h2>
              <p className="text-neutral-500 text-xs font-light mt-3">
                We are builders first. That means our designs are grounded in 35 years of real-world structural construction, budget management, and city codes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-[#fcfbf8] border border-[#eae8e1] p-4 rounded-xl shadow-xs space-y-1.5">
                  <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] shrink-0" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-neutral-500 text-[10px] font-light leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#eae8e1] shadow-xs relative min-h-[300px] group">
            <img
              src={imgBlueprint}
              alt="JRM Blueprint drafting overlay"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111a0a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="text-[9px] font-black uppercase bg-[#577a4c] px-2 py-0.5 rounded-md">
                3D Site Modeling
              </span>
              <h4 className="text-sm font-bold font-serif leading-tight">
                Architectural dimension plans and elevations built for local approvals.
              </h4>
            </div>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CONTACT & CTA SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[30px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#1a2516] bg-[#23321e] text-white shadow-[0_16px_48px_rgb(0,0,0,0.12)] relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay select-none pointer-events-none" style={{ backgroundImage: `url(${welBg})` }} />

          <div className="relative z-10 px-8 py-16 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6">
            <img src={logo} alt="JRM Logo" className="h-10 md:h-12 w-auto mb-2 opacity-90 select-none pointer-events-none" />

            <span className="bg-[#577a4c] text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Schedule Your Site Consultation
            </span>

            <h2 className="text-2xl md:text-4xl font-black font-serif tracking-tight leading-tight max-w-2xl">
              Ready to Design Your Remodeling or Outdoor Project?
            </h2>

            <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed max-w-xl">
              Start your construction or landscaping journey with a custom layout design. Contact us today to discuss floor plans, 3D renderings, and spatial zoning with Principal Consultant Robert Thompson.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4 text-left">
              <a
                href="tel:2104295526"
                className="bg-white/5 border border-white/15 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-9 w-9 rounded-xl bg-[#577a4c] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-neutral-400 uppercase tracking-wider block">Call Direct</span>
                  <span className="text-xs font-black text-white">(210) 429-5526</span>
                </div>
              </a>

              <a
                href="mailto:robertsa210@icloud.com"
                className="bg-white/5 border border-white/15 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-9 w-9 rounded-xl bg-[#577a4c] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-neutral-400 uppercase tracking-wider block">Email Robert</span>
                  <span className="text-xs font-black text-white truncate">robertsa210@icloud.com</span>
                </div>
              </a>
            </div>

            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest pt-2">
              Proudly designing & building custom spaces in San Antonio, New Braunfels, Boerne, Canyon Lake, and surrounding 80-mile areas.
            </p>

            <div className="border-t border-white/10 w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-400">
              <span className="font-extrabold uppercase tracking-wider text-neutral-300">
                Licensed · Insured · Bonded
              </span>
              <span>
                Building Trust, One Project at a Time, Since 1989
              </span>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
