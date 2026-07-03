import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Building,
  DollarSign,
  Layers,
  Home,
  Wrench,
  Sparkles,
  ArrowRight,
  Grid,
  ClipboardList
} from "lucide-react";

import imgConstruction from "@/assets/svc-new-construction.jpg";
import imgPavilion from "@/assets/welcome-pavilion.jpg";
import imgRemodelSvc from "@/assets/svc-house-remodeling.jpg";
import imgJobsite from "@/assets/stats-jobsite.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/adu-services")({
  head: () => ({
    meta: [
      { title: "Accessory Dwelling Unit (ADU) Builders San Antonio — JRM Construction" },
      { name: "description", content: "Expand your property with a custom backyard cottage, guest house, or garage conversion. Over 35 years of expert ADU design & construction in San Antonio. Free consultation. Call (210) 429-5526." },
      { property: "og:title", content: "Accessory Dwelling Unit (ADU) Construction & Design in San Antonio" },
      { property: "og:description", content: "Professional custom ADUs, in-law suites, and garage apartments built to code. Seamlessly integrated into your property with owner-led construction." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ADUServicesPage,
});

function ADUServicesPage() {
  const { t } = useTranslation();

  const aduTypes = [
    {
      title: "Detached ADUs",
      desc: "A standalone structure in your backyard, offering complete privacy and independence.",
      bullets: [
        "Perfect for rental units or guest houses",
        "Full kitchen, bathroom, and living/sleeping areas",
        "Private entrance and outdoor space options",
        "Can include a covered patio or small yard"
      ]
    },
    {
      title: "Attached ADUs",
      desc: "An addition connected to your primary home, sharing one wall while maintaining separate entrances.",
      bullets: [
        "Ideal for in-law suites or multi-generational living",
        "Integrated utilities for structural efficiency",
        "Shared or separate outdoor garden spaces",
        "Seamless architectural integration with main house"
      ]
    },
    {
      title: "Garage Conversions",
      desc: "Transforming an existing garage into a fully functional and insulated living space.",
      bullets: [
        "Cost-effective use of existing foundations/walls",
        "Can maintain some space for garage storage",
        "Complete conversion with insulation, windows, and ventilation",
        "Modern, comfortable, and fully integrated living space"
      ]
    },
    {
      title: "Above-Garage ADUs",
      desc: "Building a living space above your existing garage to maximize vertical footprint.",
      bullets: [
        "Maximizes your property's ground-floor footprint",
        "Offers excellent privacy and distinct separation",
        "Can include a private balcony, deck, or staircase",
        "Highly efficient use of vertical yard space"
      ]
    }
  ];

  const aduServices = [
    {
      title: "Custom ADU Design & Construction",
      icon: Home,
      items: [
        "Detached backyard cottages and guest houses",
        "Attached in-law suites and home additions",
        "Garage conversions and above-garage apartments",
        "Custom floor plans tailored to your specific needs"
      ]
    },
    {
      title: "Full-Service Project Management",
      icon: ClipboardList,
      items: [
        "Site evaluation and zoning feasibility assessment",
        "Custom architectural design and space planning",
        "City permit coordination and local code compliance",
        "Complete structural construction and project oversight",
        "Final landscaping and site integration"
      ]
    },
    {
      title: "ADU Features & Finishes",
      icon: Sparkles,
      items: [
        "Full kitchens with modern, energy-efficient appliances",
        "Bathrooms with premium tile work and fixtures",
        "High-performance windows and climate insulation",
        "Smart home technology and lighting integration",
        "Private entrances and custom outdoor living areas",
        "Tailored interior trims, flooring, and cabinetry"
      ]
    },
    {
      title: "Property & Utility Integration",
      icon: Layers,
      items: [
        "Seamless connection to existing water, sewer, and electric utilities",
        "Hardscape pathways and softscape landscaping integration",
        "Privacy fencing and green buffer landscape design",
        "Dedicated parking solutions and private access layouts"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Feasibility study",
      subtitle: "Property Assessment",
      desc: "We begin with a free, on-site consultation to evaluate your property, discuss zoning requirements, and assess the feasibility of your ADU project."
    },
    {
      number: "02",
      title: "Design phase",
      subtitle: "Custom Design & Planning",
      desc: "Robert works directly with you to create a floor plan that meets your needs and complements the architectural style of your existing home."
    },
    {
      number: "03",
      title: "Building codes",
      subtitle: "Permitting & Compliance",
      desc: "We navigate the complex permitting process, ensuring your ADU meets all local zoning, building, energy, and utility requirements."
    },
    {
      number: "04",
      title: "Detailed quote",
      subtitle: "Proposal & Timeline",
      desc: "You receive a detailed, itemized quote and a realistic construction timeline with no hidden costs or surprises."
    },
    {
      number: "05",
      title: "Ground up",
      subtitle: "Expert Construction",
      desc: "Our skilled builders execute every phase of construction with precision, from foundation and framing to interior finishes and exterior landscaping."
    },
    {
      number: "06",
      title: "Ready to move in",
      subtitle: "Final Walkthrough & Handover",
      desc: "We conduct a thorough final inspection with you, ensuring every detail is perfect before handing over the keys to your new space."
    }
  ];

  const whyChooseUs = [
    {
      title: "35 Years of Construction Expertise",
      desc: "Deep knowledge of structural building, permitting, and code compliance."
    },
    {
      title: "Design-Build Capability",
      desc: "One trusted company handles everything from initial design to final landscaping."
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Total protection for you, your family, and your property investment."
    },
    {
      title: "Local San Antonio Knowledge",
      desc: "Complete understanding of San Antonio zoning laws and ADU regulations."
    },
    {
      title: "Seamless Property Integration",
      desc: "We design your ADU to complement your existing home and landscape."
    },
    {
      title: "Owner-Led Oversight",
      desc: "Robert Thompson is personally involved in every project's quality check."
    },
    {
      title: "Quality Craftsmanship",
      desc: "Meticulous attention to detail and premium materials used throughout."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[450px] md:min-h-[520px] flex items-center justify-center text-center px-6 py-16">
          {/* Zooming Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgConstruction})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#577a4c]/20 border border-[#577a4c]/30 backdrop-blur-md text-[#8fa886] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Building className="w-3.5 h-3.5" />
              <span>Premium Accessory Dwelling Units</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white leading-tight font-serif tracking-tight max-w-3xl">
              ADU Construction & Design Services in San Antonio
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-neutral-300 font-light mt-6 max-w-2xl leading-relaxed">
              Expand Your Property with a Custom Accessory Dwelling Unit built with 35+ years of trusted contracting experience.
            </p>

            {/* Call to Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-free-consultation"
                className="bg-[#577a4c] hover:bg-[#3d5636] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:2104295526"
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-md text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── CORE DESCRIPTION SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 leading-tight font-serif">
              Accessory Dwelling Units: The Smart Property Investment
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm font-light leading-relaxed">
              An Accessory Dwelling Unit (ADU) is one of the smartest investments you can make in your property. Whether you need extra space for family, a dedicated home office, a rental unit for additional income, or a private guest suite, JRM Construction Landscaping Design specializes in designing and building custom ADUs that seamlessly integrate with your existing property.
            </p>
            <p className="text-neutral-600 text-xs md:text-sm font-light leading-relaxed">
              With over 35 years of construction and design experience, owner Robert Thompson brings the expertise to navigate local regulations, optimize your space, and deliver a beautifully crafted structure that enhances both your lifestyle and property value.
            </p>
            <p className="text-neutral-700 text-xs md:text-sm font-bold leading-relaxed">
              As a fully licensed, insured, and bonded contractor, we manage every aspect of your ADU project—from initial design and permitting to construction and final landscaping—ensuring a smooth, stress-free experience from start to finish.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#eae8e1] shadow-xs group h-[220px] md:h-[260px]">
              <img
                src={imgPavilion}
                alt="Custom detached ADU structure"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[9px] font-black uppercase bg-[#577a4c] px-3 py-1 rounded-md">
                  Detached Guest House Suite
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-serif">
                What is an ADU?
              </h3>
              <p className="text-neutral-500 text-[11px] md:text-xs font-light leading-relaxed">
                An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. Also known as granny flats, in-law suites, backyard cottages, or guest houses, ADUs are fully functional living spaces with their own kitchen, bathroom, sleeping area, and private entrance.
              </p>
              <div className="border-t border-neutral-100 pt-4 space-y-2">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                  ADU Formats We Build:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-600 font-bold">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c]" /> Detached Cottage</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c]" /> Attached Addition</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c]" /> Garage Conversion</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c]" /> Above Garage</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── OUR ADU SERVICES SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Specialized Scope
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Our Comprehensive ADU Services
            </h2>
            <p className="text-neutral-500 text-xs font-light mt-3 leading-relaxed">
              We handle every aspect of design, permitting, utility tie-ins, and buildout under Robert's direct oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {aduServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-6 shadow-xs flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#577a4c]/15 text-[#3d5636] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                      {service.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-[11px] text-neutral-500 font-light leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#577a4c] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── ADU TYPES GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Core Configurations
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              ADU Types We Build
            </h2>
            <p className="text-neutral-500 text-xs font-light mt-3">
              Explore the four primary structures that can transform your San Antonio backyard footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {aduTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-serif">
                    {type.title}
                  </h4>
                  <p className="text-neutral-500 text-[11px] font-light leading-relaxed">
                    {type.desc}
                  </p>
                </div>
                <div className="border-t border-neutral-100 mt-5 pt-4 space-y-2">
                  {type.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-2 text-[10px] text-neutral-600 font-medium leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── THE JRM ADU PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Workflow Sequence
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              The JRM ADU Process: Built with Precision
            </h2>
            <p className="text-neutral-500 text-xs font-light mt-3 leading-relaxed">
              We manage the entire lifecycle from blueprinting and zoning verification to framing and landscaping layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group bg-[#fcfbf8] border border-[#eae8e1] p-6 rounded-2xl shadow-xs space-y-4 hover:border-[#577a4c]/30 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    {step.title}
                  </span>
                  <span className="text-2xl font-black text-[#577a4c]/15">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-serif">
                  {step.subtitle}
                </h4>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── INVESTMENT BENEFITS & FINANCING ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Value Add
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
              Why Build an ADU?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-[#577a4c]" /> Additional Income</h4>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">Generate monthly rental income from long-term or short-term stays.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5"><Home className="w-4 h-4 text-[#577a4c]" /> Multi-Generational</h4>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">Provide comfortable, private space for aging parents or adult children.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5"><Wrench className="w-4 h-4 text-[#577a4c]" /> Private Home Office</h4>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">Create a dedicated, quiet workspace detached from the primary living area.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#577a4c]" /> Boost Property Value</h4>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">Increase resale value and add flexible living square footage to the lot.</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-[#eae8e1] shadow-xs group h-[160px] md:h-[185px] mt-4">
              <img
                src={imgJobsite}
                alt="JRM Construction framing and jobsite verification"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#577a4c] px-3 py-1 rounded-md">
                  Active Framing & Jobsite Oversight
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-[#23321e] text-white rounded-2xl p-8 flex flex-col justify-between border border-[#1a2516] shadow-md relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-cover bg-center opacity-5 select-none pointer-events-none" style={{ backgroundImage: `url(${welBg})` }} />
            
            <div className="space-y-4 relative z-10">
              <span className="inline-block bg-[#577a4c] text-white text-[8px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Financial Planning
              </span>
              <h3 className="text-lg font-bold font-serif leading-snug">
                Financing Your ADU
              </h3>
              <p className="text-neutral-300 text-[11px] font-light leading-relaxed">
                ADUs are a significant investment that can provide substantial financial returns. We offer personalized guidance and insights on:
              </p>
              <ul className="space-y-2 text-[10px] text-neutral-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8fa886] shrink-0" /> Construction loans and lending programs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8fa886] shrink-0" /> Estimated property appreciation profiles</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#8fa886] shrink-0" /> San Antonio rental income potential</li>
              </ul>
            </div>
            
            <p className="text-[#8fa886] text-[10px] font-bold mt-6 relative z-10">
              * We're happy to discuss specific financing and ROI calculations during your free consultation.
            </p>
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE JRM ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-[30px] py-[60px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Why Choose JRM
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-serif">
                Why Choose JRM for Your ADU?
              </h2>
              <p className="text-neutral-500 text-xs font-light mt-3">
                Our 35-year legacy of quality craftsmanship and owner-led construction gives you complete peace of mind.
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
              src={imgRemodelSvc}
              alt="JRM Custom finished interiors"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111a0a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="text-[9px] font-black uppercase bg-[#577a4c] px-2 py-0.5 rounded-md">
                Modern Interiors
              </span>
              <h4 className="text-sm font-bold font-serif leading-tight">
                Premium custom interior finishes and layout designs built to last.
              </h4>
            </div>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CONTACT & CTA SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[30px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#1a2516] bg-[#23321e] text-white shadow-[0_16px_48px_rgb(0,0,0,0.12)] relative">
          {/* Background Map Graphic Overlay */}
          <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay select-none pointer-events-none" style={{ backgroundImage: `url(${welBg})` }} />

          <div className="relative z-10 px-8 py-16 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6">
            <img src={logo} alt="JRM Logo" className="h-10 md:h-12 w-auto mb-2 opacity-90 select-none pointer-events-none" />

            <span className="bg-[#577a4c] text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Schedule Your Site Consultation
            </span>

            <h2 className="text-2xl md:text-4xl font-black font-serif tracking-tight leading-tight max-w-2xl">
              Ready to Design & Build Your ADU in San Antonio?
            </h2>

            <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed max-w-xl">
              An Accessory Dwelling Unit is a versatile, highly valuable addition to your property. Contact us today to discuss floor plans, budget options, and zoning requirements with Robert Thompson.
            </p>

            {/* Direct Contact Numbers & Info */}
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
              Proudly designing & building custom ADUs in San Antonio, New Braunfels, Boerne, Canyon Lake, and surrounding 80-mile areas.
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
