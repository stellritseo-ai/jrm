import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Hammer,
  Building,
  Flame,
  Sun,
  Utensils,
  Layers,
  Smile,
  ChevronRight,
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight
} from "lucide-react";
import heroBg from "@/assets/hero-patio.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";
import imgRemodeling from "@/assets/svc-house-remodeling.jpg";
import imgKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import imgPatios from "@/assets/svc-covered-patios.jpg";
import imgHardscapes from "@/assets/svc-hardscapes.jpg";
import imgTurf from "@/assets/svc-artificial-turf.jpg";
import imgFireplace from "@/assets/svc-fireplace.jpg";

interface LocationInfo {
  city: string;
  state: string;
  slug: string;
  title: string;
  description: string;
  landmarks: string[];
  zipCodes: string[];
  lat: number;
  lng: number;
  mapEmbedUrl: string;
  intro: string;
  faqs: { q: string; a: string }[];
}

const locationsData: Record<string, LocationInfo> = {
  "san-antonio-tx": {
    city: "San Antonio",
    state: "TX",
    slug: "san-antonio-tx",
    title: "Construction Company & Remodeling Contractor in San Antonio, TX | JRM Construction",
    description: "San Antonio's trusted construction company with 35+ years experience. Expert house remodeling, custom outdoor kitchens, fireplaces, covered patios & artificial turf. Call (210) 429-5526.",
    landmarks: ["The River Walk", "The Alamo", "Pearl District", "Alamo Heights", "Stone Oak", "Dominion"],
    zipCodes: ["78201", "78209", "78216", "78230", "78248", "78258", "78257"],
    lat: 29.424122,
    lng: -98.493628,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222384.8115671569!2d-98.66579895!3d29.458319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x854728f2445b23d9!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "For over 35 years, JRM Construction Landscaping Design has served as San Antonio's premier owner-led general contractor. From luxury home additions in Alamo Heights to expansive outdoor living spaces in Stone Oak and The Dominion, Robert Thompson and his master craftsmen deliver turnkey construction, home remodeling, and custom landscape design tailored to the unique climate and architectural beauty of San Antonio, Texas.",
    faqs: [
      {
        q: "What construction and remodeling services do you provide in San Antonio?",
        a: "We offer complete residential and commercial design-build services, including house remodeling, kitchen and bath renovations, custom outdoor kitchens, covered patios, fireplaces, hardscapes, stamped concrete, artificial turf, and new home construction."
      },
      {
        q: "Are you licensed and insured to work in San Antonio, TX?",
        a: "Yes! JRM Construction is fully licensed, insured, and bonded. Owner Robert Thompson personally oversees every project to guarantee structural integrity, compliance with City of San Antonio building codes, and top-tier craftsmanship."
      },
      {
        q: "How do I schedule a free consultation in San Antonio?",
        a: "Simply call us at (210) 429-5526 or submit a consultation request on our website. We schedule on-site visits throughout San Antonio to evaluate your property and provide clear, upfront proposals."
      }
    ]
  },
  "boerne-tx": {
    city: "Boerne",
    state: "TX",
    slug: "boerne-tx",
    title: "Construction Company & Home Remodeling in Boerne, TX | JRM Construction",
    description: "Premier general contractor and outdoor living specialist in Boerne, TX. 35+ years experience in luxury remodeling, patios, stone hardscapes & land development.",
    landmarks: ["Main Plaza Boerne", "Cibolo Creek", "Cordillera Ranch", "Menger Springs"],
    zipCodes: ["78006", "78015"],
    lat: 29.794664,
    lng: -98.731971,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110825.29177874987!2d-98.80582845!3d29.794664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c71bfa3c67597%3A0x6b4545ee7ff78e3a!2sBoerne%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Nestled in the Texas Hill Country, Boerne home properties require specialized construction expertise that respects natural terrain and elevation. JRM Construction brings 35+ years of experience in custom Hill Country masonry, luxury outdoor kitchens, covered timber pergolas, and whole-home remodels to Boerne and Cordillera Ranch homeowners.",
    faqs: [
      {
        q: "Do you specialize in Texas Hill Country architectural styles in Boerne?",
        a: "Absolutely. We specialize in natural limestone stonework, cedar timber pergolas, rust-resistant outdoor kitchens, and modern rustic home remodels that harmonize perfectly with Boerne's Hill Country aesthetic."
      },
      {
        q: "Can you handle complex terrain and rock excavation in Boerne?",
        a: "Yes. Our heavy-duty hardscape and excavation equipment enables us to build solid structural foundations, retaining walls, and custom pool decks even on steep Hill Country slopes."
      }
    ]
  },
  "new-braunfels-tx": {
    city: "New Braunfels",
    state: "TX",
    slug: "new-braunfels-tx",
    title: "Construction Company & Landscape Design in New Braunfels, TX | JRM Construction",
    description: "Leading construction & remodeling contractor in New Braunfels, TX. Custom covered patios, outdoor kitchens, fireplaces & residential renovations. Call (210) 429-5526.",
    landmarks: ["Gruene Historic District", "Comal River", "Guadalupe River", "Landa Park"],
    zipCodes: ["78130", "78132"],
    lat: 29.703004,
    lng: -98.124451,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111005.61205937123!2d-98.18843!3d29.703004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cb21183141f17%3A0x6b9d6eb34f71587d!2sNew%20Braunfels%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Homeowners in New Braunfels trust JRM Construction Landscaping Design for high-end home remodels, resort-style backyard renovations, custom covered patios, and artificial turf installations. We help riverfront and residential estate owners maximize their indoor-outdoor living experience.",
    faqs: [
      {
        q: "Do you build weather-resistant outdoor kitchens in New Braunfels?",
        a: "Yes! Our outdoor kitchens feature commercial-grade stainless steel appliances, sealed natural stone counters, and heavy-duty roofing designed to withstand Texas sun and humidity."
      }
    ]
  },
  "seguin-tx": {
    city: "Seguin",
    state: "TX",
    slug: "seguin-tx",
    title: "Construction Contractor & Remodeling in Seguin, TX | JRM Construction",
    description: "Experienced general contractor serving Seguin, TX. Home remodels, concrete driveways, custom fences, and outdoor living spaces. Free consultations.",
    landmarks: ["Lake Seguin", "Guadalupe River", "Texas Theatre", "Starcke Park"],
    zipCodes: ["78155", "78156"],
    lat: 29.568843,
    lng: -97.964722,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111234.123456!2d-97.964722!3d29.568843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf51b0f590b5d%3A0x5a18db4b423ef24!2sSeguin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "JRM Construction brings 35+ years of craftsmanship to residential and commercial projects in Seguin, TX. From foundation-to-finish home remodeling to stamped concrete driveways, flagstone hardscaping, and fencing, we deliver high-quality construction tailored to Seguin property owners.",
    faqs: [
      {
        q: "What concrete services do you offer in Seguin, TX?",
        a: "We install stamped concrete patios, concrete overlays, custom paver walkways, retaining walls, and high-durability residential driveways."
      }
    ]
  },
  "canyon-lake-tx": {
    city: "Canyon Lake",
    state: "TX",
    slug: "canyon-lake-tx",
    title: "Custom Construction & Outdoor Living in Canyon Lake, TX | JRM Construction",
    description: "Canyon Lake's top choice for custom decks, covered patios, home remodeling & landscape design. Built for Hill Country lakefront homes.",
    landmarks: ["Canyon Lake Marina", "Overlook Park", "Guadalupe River Trail"],
    zipCodes: ["78133"],
    lat: 29.875221,
    lng: -98.262512,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110712.123456!2d-98.262512!3d29.875221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c970b55555555%3A0x123456789abcdef!2sCanyon%20Lake%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Living near Canyon Lake means maximizing panoramic water views and outdoor entertaining spaces. JRM Construction specializes in multi-level decks, custom stone fireplaces, covered patios, and drought-tolerant landscaping designed specifically for Canyon Lake lakefront homes.",
    faqs: [
      {
        q: "Do you build covered patios suited for lakeside winds and heat?",
        a: "Yes! All our covered patio structures engineered for Canyon Lake homes feature reinforced framing, insulated roofing, ceiling fan setups, and weatherproofing."
      }
    ]
  },
  "kerrville-tx": {
    city: "Kerrville",
    state: "TX",
    slug: "kerrville-tx",
    title: "Construction & Remodeling Contractor in Kerrville, TX | JRM Construction",
    description: "Trusted construction, remodeling, and outdoor fireplace builder in Kerrville, TX. 35+ years of craftsmanship in Texas Hill Country.",
    landmarks: ["Guadalupe River Park", "Kerrville River Trail", "Louise Hays Park"],
    zipCodes: ["78028", "78029"],
    lat: 30.04743,
    lng: -99.140317,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110300.123456!2d-99.140317!3d30.04743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865be1b2c451677d%3A0x7d877c2445b23d9!2sKerrville%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Kerrville homeowners count on JRM Construction Landscaping Design for superior craftsmanship in custom fireplaces, kitchen renovations, hardscape retaining walls, and whole-house updates. We take pride in building spaces that stand the test of time.",
    faqs: [
      {
        q: "Do you build custom wood and gas fireplaces in Kerrville?",
        a: "Yes! We build both indoor custom masonry fireplaces and outdoor fire pits or grand stone fireplace hearths."
      }
    ]
  },
  "fredericksburg-tx": {
    city: "Fredericksburg",
    state: "TX",
    slug: "fredericksburg-tx",
    title: "General Contractor & Remodeling in Fredericksburg, TX | JRM Construction",
    description: "Luxury remodeling, outdoor living spaces, ADU guest houses & landscape design in Fredericksburg, TX. Licensed & insured.",
    landmarks: ["Main Street Historic District", "Enchanted Rock", "Wine Road 290"],
    zipCodes: ["78624"],
    lat: 30.275201,
    lng: -98.871984,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000.123456!2d-98.871984!3d30.275201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865bc23183141f17%3A0x6b9d6eb34f71587d!2sFredericksburg%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Fredericksburg's unique historic architecture and thriving bed-and-breakfast market demand exceptional construction standards. JRM Construction delivers custom ADU guest casitas, kitchen remodels, outdoor wine-tasting patios, and Hill Country stonework for Fredericksburg properties.",
    faqs: [
      {
        q: "Can you build an Accessory Dwelling Unit (ADU) or guest house in Fredericksburg?",
        a: "Yes! We specialize in standalone ADUs, guest cottages, and garage conversions built to match your main property's architecture."
      }
    ]
  },
  "bulverde-tx": {
    city: "Bulverde",
    state: "TX",
    slug: "bulverde-tx",
    title: "Construction & Landscape Design in Bulverde, TX | JRM Construction",
    description: "Bulverde's trusted contractor for custom outdoor kitchens, patios, hardscapes, turf & home remodeling. 35+ years experience.",
    landmarks: ["Bulverde Community Park", "Spring Branch", "Bulverde Hills"],
    zipCodes: ["78163"],
    lat: 29.746611,
    lng: -98.419464,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110900.123456!2d-98.419464!3d29.746611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6c2183141f17%3A0x6b9d6eb34f71587d!2sBulverde%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Known as the Front Door to the Hill Country, Bulverde offers expansive home sites ideal for luxurious backyard retreats. JRM Construction creates custom covered patios, outdoor kitchens, synthetic lawn installations, and custom masonry in Bulverde and Spring Branch, TX.",
    faqs: [
      {
        q: "Why choose artificial turf in Bulverde, TX?",
        a: "Artificial turf provides a year-round lush green lawn without watering, mowing, or fertilizer—ideal for conserving water in Bulverde."
      }
    ]
  },
  "schertz-tx": {
    city: "Schertz",
    state: "TX",
    slug: "schertz-tx",
    title: "Construction Company & Home Remodeling in Schertz, TX | JRM Construction",
    description: "High-quality general contractor in Schertz, TX. Specializing in kitchen remodels, bathroom renovations, covered patios & fencing.",
    landmarks: ["Pickrell Park", "Cibolo Creek", "Schertz Corporate Park"],
    zipCodes: ["78154"],
    lat: 29.552167,
    lng: -98.269733,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111200.123456!2d-98.269733!3d29.552167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf21183141f17%3A0x6b9d6eb34f71587d!2sSchertz%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Schertz homeowners turn to JRM Construction Landscaping Design for dependable, high-quality home renovations and outdoor living upgrades. From room expansions and modern kitchen remodels to custom privacy fences and flagstone patios, we handle every detail with care.",
    faqs: [
      {
        q: "What warranty or guarantee do you offer on construction work in Schertz?",
        a: "We stand behind all our work with owner-led quality oversight, using premium grade materials and adhering strictly to structural standards."
      }
    ]
  },
  "converse-tx": {
    city: "Converse",
    state: "TX",
    slug: "converse-tx",
    title: "Remodeling & Construction Contractor in Converse, TX | JRM Construction",
    description: "Expert remodeling contractor in Converse, TX. Kitchens, bathrooms, patio covers, concrete work & fence installation.",
    landmarks: ["Converse City Park", "North East Lake", "Kneupper Field"],
    zipCodes: ["78109"],
    lat: 29.516058,
    lng: -98.316961,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111300.123456!2d-98.316961!3d29.516058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf01183141f17%3A0x6b9d6eb34f71587d!2sConverse%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "In Converse, TX, JRM Construction provides comprehensive home renovation solutions and custom outdoor living upgrades. Whether you're modernizing a kitchen, adding a patio shelter, or installing security fencing, we deliver prompt, professional results.",
    faqs: [
      {
        q: "Do you offer free estimates for Converse homeowners?",
        a: "Yes! Call (210) 429-5526 to schedule your free, no-obligation consultation at your Converse property."
      }
    ]
  },
  "helotes-tx": {
    city: "Helotes",
    state: "TX",
    slug: "helotes-tx",
    title: "Construction & Outdoor Living Spaces in Helotes, TX | JRM Construction",
    description: "Top-rated general contractor in Helotes, TX. Custom outdoor fireplaces, covered patios, home remodeling & Hill Country landscaping.",
    landmarks: ["Old Town Helotes", "Floore's Country Store", "Iron Horse Canyon"],
    zipCodes: ["78023"],
    lat: 29.578006,
    lng: -98.689744,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111150.123456!2d-98.689744!3d29.578006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6f1183141f17%3A0x6b9d6eb34f71587d!2sHelotes%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Helotes combines rustic Texas character with beautiful modern developments. JRM Construction creates custom stone fire pits, outdoor kitchens, patio covers, and softscape planting designs that highlight Helotes' unique natural landscapes.",
    faqs: [
      {
        q: "Can you integrate natural stone hardscapes into Helotes properties?",
        a: "Yes! We specialize in flagstone patios, stone retaining walls, and outdoor fireplaces built with authentic Texas stone."
      }
    ]
  },
  "universal-city-tx": {
    city: "Universal City",
    state: "TX",
    slug: "universal-city-tx",
    title: "Construction & Remodeling in Universal City, TX | JRM Construction",
    description: "Universal City's premier general contractor. 35+ years experience in house remodels, covered patios, turf & commercial projects.",
    landmarks: ["Randolph AFB", "Universal City Park", "Pat Booker Rd"],
    zipCodes: ["78148"],
    lat: 29.548839,
    lng: -98.291125,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111220.123456!2d-98.291125!3d29.548839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf11183141f17%3A0x6b9d6eb34f71587d!2sUniversal%20City%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Serving military families and residents near Randolph AFB in Universal City, JRM Construction provides reliable, high-value home remodeling, commercial build-outs, and outdoor living space design.",
    faqs: [
      {
        q: "Do you work with military families and tight project timelines in Universal City?",
        a: "Yes. We pride ourselves on clear communication, disciplined project scheduling, and dependable execution."
      }
    ]
  },
  "live-oak-tx": {
    city: "Live Oak",
    state: "TX",
    slug: "live-oak-tx",
    title: "General Contractor & Remodeling in Live Oak, TX | JRM Construction",
    description: "Trusted construction company serving Live Oak, TX. House remodeling, kitchen renovations, hardscapes & outdoor living spaces.",
    landmarks: ["Live Oak Main City Park", "Live Oak Golf Course", "Shin Oak Dr"],
    zipCodes: ["78233"],
    lat: 29.565786,
    lng: -98.336406,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111180.123456!2d-98.336406!3d29.565786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf31183141f17%3A0x6b9d6eb34f71587d!2sLive%20Oak%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "JRM Construction Landscaping Design brings over three decades of licensed general contracting expertise to Live Oak, TX. We transform older home layouts into modern, vibrant living spaces.",
    faqs: [
      {
        q: "What types of home additions do you build in Live Oak?",
        a: "We construct room additions, expanded master suites, covered patio enclosures, and detached garage studios."
      }
    ]
  },
  "leon-valley-tx": {
    city: "Leon Valley",
    state: "TX",
    slug: "leon-valley-tx",
    title: "Construction & Landscape Design in Leon Valley, TX | JRM Construction",
    description: "Licensed general contractor in Leon Valley, TX. Home remodels, artificial turf, concrete driveways & covered patio design.",
    landmarks: ["Raymond Rimkus Park", "Huebner-Onion Homestead", "Bandera Rd"],
    zipCodes: ["78238", "78240"],
    lat: 29.496061,
    lng: -98.618633,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111320.123456!2d-98.618633!3d29.496061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6d1183141f17%3A0x6b9d6eb34f71587d!2sLeon%20Valley%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Leon Valley property owners trust JRM Construction for top-grade residential remodeling, concrete installation, custom fencing, and low-maintenance turf solutions.",
    faqs: [
      {
        q: "Do you install stamped concrete in Leon Valley?",
        a: "Yes! We specialize in stamped concrete driveways, decorative walkways, and pool surrounds with protective sealers."
      }
    ]
  },
  "alamo-heights-tx": {
    city: "Alamo Heights",
    state: "TX",
    slug: "alamo-heights-tx",
    title: "Luxury Remodeling & Construction in Alamo Heights, TX | JRM Construction",
    description: "Premier luxury remodeling and outdoor living contractor in Alamo Heights, TX. High-end kitchens, baths, stone hardscapes & patio structures.",
    landmarks: ["McNay Art Museum", "Argyle Cult", "Broadway St Historic District"],
    zipCodes: ["78209"],
    lat: 29.483561,
    lng: -98.468075,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111340.123456!2d-98.468075!3d29.483561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5e1183141f17%3A0x6b9d6eb34f71587d!2sAlamo%20Heights%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Alamo Heights is home to some of San Antonio's finest architectural gems. JRM Construction Landscaping Design offers bespoke luxury remodeling, high-end custom kitchen renovations, and resort-style hardscape landscapes tailored to Alamo Heights' refined standards.",
    faqs: [
      {
        q: "Do you have experience working on historic or high-value homes in Alamo Heights?",
        a: "Yes. With 35+ years of hands-on experience, owner Robert Thompson brings meticulous architectural respect and premium finishes to every Alamo Heights home renovation."
      }
    ]
  }
};

function getLocationInfo(loc?: string): LocationInfo {
  if (!loc) return locationsData["san-antonio-tx"];
  if (locationsData[loc]) return locationsData[loc];
  if (locationsData[`${loc}-tx`]) return locationsData[`${loc}-tx`];
  const cleaned = loc.replace(/-tx$/, "");
  if (locationsData[cleaned]) return locationsData[cleaned];
  return locationsData["san-antonio-tx"];
}

export const Route = createFileRoute("/locations/$location")({
  head: ({ params }) => {
    const info = getLocationInfo(params.location);
    return {
      meta: [
        { title: info.title },
        { name: "description", content: info.description },
        { property: "og:title", content: info.title },
        { property: "og:description", content: info.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://jrmconstructionservicellc.com/locations/${info.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: info.title },
        { name: "twitter:description", content: info.description },
        { name: "geo.region", content: "US-TX" },
        { name: "geo.placename", content: `${info.city}, TX` },
        { name: "geo.position", content: `${info.lat};${info.lng}` },
        { name: "ICBM", content: `${info.lat}, ${info.lng}` }
      ],
      links: [
        { rel: "canonical", href: `https://jrmconstructionservicellc.com/locations/${info.slug}` }
      ]
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const params = Route.useParams();
  const info = getLocationInfo(params.location);

  const servicesList = [
    { title: "House Remodeling", image: imgRemodeling, link: "/house-remodeling", desc: `Comprehensive interior renovations, kitchen updates, and bathroom remodels in ${info.city}.` },
    { title: "Outdoor Kitchens", image: imgKitchens, link: "/outdoor-kitchens", desc: `Custom outdoor kitchen islands, built-in grills, and dining counters built for ${info.city} entertaining.` },
    { title: "Covered Patios", image: imgPatios, link: "/covered-patios", desc: `Solid roof covered patio extensions and pergolas tailored for ${info.city} homes.` },
    { title: "Hardscapes & Concrete", image: imgHardscapes, link: "/hardscapes", desc: `Flagstone patios, retaining walls, and stamped concrete overlays across ${info.city}.` },
    { title: "Artificial Turf", image: imgTurf, link: "/artificial-turf", desc: `Lush, water-conserving synthetic grass installation in ${info.city}, TX.` },
    { title: "Custom Fireplaces", image: imgFireplace, link: "/custom-fireplaces", desc: `Handcrafted stone fireplaces and outdoor fire pits for ${info.city} backyards.` }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* JSON-LD LocalBusiness Schema for Location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
            "name": `JRM Construction Landscaping Design - ${info.city}`,
            "description": info.description,
            "url": `https://jrmconstructionservicellc.com/locations/${info.slug}`,
            "telephone": "+12104295526",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": info.city,
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": info.lat,
              "longitude": info.lng
            },
            "areaServed": info.city,
            "priceRange": "$$$"
          })
        }}
      />

      {/* ── HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/80 to-[#111a0a]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6">
              📍 Service Area: {info.city}, {info.state}
            </span>

            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Construction Company & Remodeling in {info.city}, TX
            </h1>

            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              {info.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-7 py-3 text-white text-sm font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
              <Link
                to="/get-free-consultation"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-7 py-3 text-white text-sm font-bold backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── CITY OVERVIEW & LANDMARKS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
                Local Expertise
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Serving Homes & Businesses Throughout {info.city}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                With 35+ years of experience, owner Robert Thompson provides hands-on oversight for every remodeling and construction project in {info.city}. We know the local soil conditions, HOA guidelines, and Texas heat—ensuring your structure or outdoor room is built for lasting durability.
              </p>
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-neutral-700 block">Nearby Landmarks & Neighborhoods:</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {info.landmarks.map((l) => (
                    <span key={l} className="bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 px-3 py-1 rounded-full text-xs font-medium">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md h-[300px]">
              <iframe
                title={`Google Map - ${info.city} TX`}
                src={info.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── LOCALIZED SERVICES GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              Services in {info.city}
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Our Core Services for {info.city} Property Owners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {servicesList.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={s.image} alt={`${s.title} ${info.city}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-white text-lg font-bold" style={{ fontFamily: "Georgia, serif" }}>
                      {s.title}
                    </h3>
                  </div>
                  <p className="p-5 text-xs text-neutral-600 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="px-5 pb-5 pt-0">
                  <Link to={s.link} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3d5636] hover:text-[#577a4c]">
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── LOCAL FAQS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
              Frequently Asked Questions in {info.city}, TX
            </h2>

            <div className="space-y-4">
              {info.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#577a4c] shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-16 text-center border border-neutral-800 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Ready to Upgrade Your Property in {info.city}, TX?
            </h2>
            <p className="text-sm text-neutral-300 font-light mb-8 leading-relaxed">
              Contact owner Robert Thompson today for a free, on-site estimate in {info.city}. 35+ years of trusted construction, remodeling, and outdoor living design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
              >
                Call Robert: (210) 429-5526
              </a>
              <Link
                to="/lets-talk"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
