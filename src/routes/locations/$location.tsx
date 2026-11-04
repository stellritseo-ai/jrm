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
import { PROJECT_CASE_STUDIES } from "@/data/project-case-studies";
import { PRIORITY_SERVICE_LOCATIONS } from "@/data/service-seo-data";
import { trackPhoneClick } from "@/lib/analytics";

interface LocalConsideration {
  title: string;
  detail: string;
}

interface LocationInfo {
  city: string;
  county: string;
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
  localConsiderations: LocalConsideration[];
  faqs: { q: string; a: string }[];
}

const locationsData: Record<string, LocationInfo> = {
  "san-antonio-tx": {
    city: "San Antonio",
    county: "Bexar County",
    state: "TX",
    slug: "san-antonio-tx",
    title: "Construction, Landscaping & Outdoor Living Contractors in San Antonio, TX | JRM Construction",
    description: "San Antonio's trusted construction & landscaping company with 35+ years experience. House remodeling, outdoor kitchens, covered patios, hardscapes & turf. Call (210) 429-5526.",
    landmarks: ["Stone Oak", "The Dominion", "Alamo Ranch", "Monte Vista", "Terrell Hills", "Shavano Park", "Pearl District"],
    zipCodes: ["78201", "78209", "78216", "78230", "78248", "78258", "78257", "78253"],
    lat: 29.424122,
    lng: -98.493628,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222384.8115671569!2d-98.66579895!3d29.458319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x854728f2445b23d9!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Since 1989, JRM Construction Landscaping Design has served as San Antonio's premier owner-led general contractor and outdoor living builder. From luxury interior kitchen renovations in Monte Vista and Terrell Hills to limestone outdoor kitchens, gable covered patios, and drought-tolerant landscapes in Stone Oak, The Dominion, and Alamo Ranch, owner Robert Thompson and his master craftsmen deliver turnkey construction engineered for South Central Texas.",
    localConsiderations: [
      {
        title: "Balcones Fault Zone Soil Transition (Clay vs. Limestone)",
        detail: "North San Antonio (Stone Oak, Rogers Ranch, The Dominion) sits on shallow Edwards Plateau limestone requiring rock excavation, while South, West, and East San Antonio sit on expansive blackland clay requiring deep compacted crushed-limestone sub-bases and steel rebar reinforcement."
      },
      {
        title: "City of San Antonio Development Services (DSD) & Historic Review",
        detail: "We manage all residential and commercial permits through City of San Antonio DSD, including Office of Historic Preservation (OHP) guidelines for older districts and HOA Architectural Control Committee approvals."
      },
      {
        title: "SAWS Water Conservation & TCEQ Irrigation Rules",
        detail: "All landscaping and irrigation installations are engineered for SAWS drought-stage resilience using native perennials, pressure-regulated drip irrigation, and synthetic turf."
      }
    ],
    faqs: [
      {
        q: "What construction and landscaping services do you provide in San Antonio?",
        a: "We offer all 18 core design-build specialties in San Antonio: general contracting, house remodeling, new construction, commercial build-outs, outdoor kitchens, covered patios, custom fireplaces, hardscaping, stamped concrete, custom decks, artificial turf, fencing, ADU casitas, 3D landscape design, softscapes, palm trees, irrigation, and LED landscape lighting."
      },
      {
        q: "Do you handle City of San Antonio building permits and HOA approvals?",
        a: "Yes. JRM Construction prepares scaled site plans, structural drawings, and material specifications for City of San Antonio DSD permits and neighborhood HOAs across Stone Oak, Alamo Ranch, Cibolo Canyons, and The Dominion."
      },
      {
        q: "How do you prevent concrete patios and retaining walls from cracking in San Antonio clay soil?",
        a: "We excavate unstable clay topsoil, vibratory-compact 4–6 inches of crushed limestone road base, tie #3 deformed steel rebar grids on chairs, and install perforated French drains behind retaining walls."
      },
      {
        q: "How do I schedule a free on-site consultation with Robert Thompson in San Antonio?",
        a: "Call (210) 429-5526 (English) or (210) 379-3505 (Spanish), or submit our online consultation form. Owner Robert Thompson meets with you on-site to evaluate your property and provide an itemized written proposal."
      }
    ]
  },
  "alamo-heights-tx": {
    city: "Alamo Heights",
    county: "Bexar County",
    state: "TX",
    slug: "alamo-heights-tx",
    title: "Luxury Home Remodeling, Construction & Landscaping in Alamo Heights, TX | JRM",
    description: "Trusted luxury remodeling, custom kitchen renovations, ADU guest casitas, outdoor kitchens & stone hardscapes in Alamo Heights, TX (78209). Call (210) 429-5526.",
    landmarks: ["McNay Art Museum", "Broadway Corridor", "Olmos Basin", "Cambridge Elementary Area", "Terrell Hills Border"],
    zipCodes: ["78209"],
    lat: 29.483561,
    lng: -98.468075,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111340.123456!2d-98.468075!3d29.483561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5e1183141f17%3A0x6b9d6eb34f71587d!2sAlamo%20Heights%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Alamo Heights (78209) features some of Greater San Antonio's most distinguished historic cottages, mid-century residences, and luxury estates. JRM Construction Landscaping Design delivers architecturally sensitive kitchen and whole-home remodeling, detached garage apartments/ADUs, custom limestone outdoor living spaces, and mature Heritage Oak landscape lighting tailored to Alamo Heights' exacting standards.",
    localConsiderations: [
      {
        title: "City of Alamo Heights Independent Building Permits & Lot Coverage",
        detail: "Alamo Heights operates its own municipal building department separate from San Antonio, enforcing strict floor-area ratios, impervious cover limits, and side/rear yard setback rules that we navigate seamlessly."
      },
      {
        title: "Structural Beam Upgrades & Legacy MEP Modernization",
        detail: "Remodeling 1920s–1960s Alamo Heights homes often requires flush-mounted engineered LVL headers for open-concept kitchens, cast-iron drain replacements, and electrical panel upgrades."
      },
      {
        title: "Preserving Mature Heritage Live Oak Root Zones",
        detail: "When constructing patios, driveways, and detached casitas in 78209, we use root-safe excavation and permeable hardscape bases to protect century-old Live Oaks."
      }
    ],
    faqs: [
      {
        q: "Do you have experience remodeling older and historic homes in Alamo Heights (78209)?",
        a: "Yes. We completed our featured Alamo Heights Open-Concept Kitchen & Structural Interior Remodel in 78209, replacing load-bearing walls with flush engineered beams while matching period millwork and upgrading plumbing and electrical systems."
      },
      {
        q: "Do you handle City of Alamo Heights building permits and architectural review?",
        a: "Yes. We coordinate directly with the City of Alamo Heights Community Development Services Department for all structural remodeling, detached casita/ADU, patio cover, and flatwork permits."
      },
      {
        q: "Can you convert a detached garage into a guest casita in Alamo Heights?",
        a: "Yes. Detached garage apartments and backyard guest casitas are a signature specialty in Alamo Heights, complete with matched exterior masonry, mini-split HVAC, and private courtyard hardscaping."
      },
      {
        q: "What outdoor living upgrades are most popular for Alamo Heights backyards?",
        a: "Custom Texas limestone outdoor kitchens, cedar-lined covered pavilions, flagstone courtyards, low-voltage solid-brass Live Oak uplighting, and pet-friendly synthetic turf lawns."
      }
    ]
  },
  "boerne-tx": {
    city: "Boerne",
    county: "Kendall County",
    state: "TX",
    slug: "boerne-tx",
    title: "General Contractor, Outdoor Living & Landscaping in Boerne, TX | JRM Construction",
    description: "Premier general contractor and Hill Country outdoor living builder in Boerne, TX. Custom stone fireplaces, covered patios, remodeling & retaining walls. Call (210) 429-5526.",
    landmarks: ["Boerne Main Plaza", "Cordillera Ranch", "Fair Oaks Ranch", "Menger Springs", "Esperanza", "Cibolo Creek"],
    zipCodes: ["78006", "78015"],
    lat: 29.794664,
    lng: -98.731971,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110825.29177874987!2d-98.80582845!3d29.794664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c71bfa3c67597%3A0x6b4545ee7ff78e3a!2sBoerne%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Nestled in the Texas Hill Country in Kendall County, Boerne properties require specialized construction and masonry craftsmanship that honors natural limestone elevations and scenic views. JRM Construction brings 35+ years of experience building custom Hill Country outdoor fireplaces, gable timber pavilions, outdoor kitchens, engineered retaining walls, and luxury home renovations across Boerne, Cordillera Ranch, Esperanza, and Fair Oaks Ranch.",
    localConsiderations: [
      {
        title: "Kendall County Rocky Caliche & Sloped Terrain Engineering",
        detail: "Boerne lots sit on stepped limestone ledges and sloped topography. We use hydraulic rock-drilling for fence/deck piers and build geogrid-reinforced limestone retaining walls with French drains."
      },
      {
        title: "Hill Country Architectural Standards & Dark-Sky Lighting",
        detail: "Neighborhoods like Cordillera Ranch, Menger Springs, and Esperanza require authentic native stone masonry, heavy cedar timbers, and glare-shielded dark-sky friendly 2700K LED outdoor lighting."
      },
      {
        title: "Deer-Resistant Native Softscapes & Oak Wilt Prevention",
        detail: "Because Boerne has heavy white-tailed deer populations and Oak Wilt sensitivity, we plant Wilt-resistant Monterrey Oaks and unpalatable native perennials like Texas Sage, Red Yucca, and Muhly Grass."
      }
    ],
    faqs: [
      {
        q: "Have you completed outdoor living and fireplace projects in Boerne, TX?",
        a: "Yes! Our featured Boerne Hill Country Custom Stone Fireplace & Gable Covered Patio case study showcases our floor-to-ceiling chopped Texas limestone masonry, refractory firebox engineering, and exposed Western Red Cedar truss construction in Boerne."
      },
      {
        q: "Can you handle rock excavation and sloped backyard retaining walls in Boerne?",
        a: "Yes. Our crews operate heavy rock-breaking and grading equipment to carve level patio terraces and build engineered limestone retaining walls on sloped Boerne and Kendall County lots."
      },
      {
        q: "Do you prepare HOA approval packets for Boerne master-planned communities?",
        a: "Yes. We provide 3D architectural renderings, scaled site layouts, and stone/timber specifications for Architectural Review Committees in Esperanza, Cordillera Ranch, Fair Oaks Ranch, and Menger Springs."
      },
      {
        q: "What services do you offer for acreage and estate properties in Boerne?",
        a: "We provide detached ADU/guest casita construction, custom outdoor kitchens, covered pavilions, multi-level decks, cedar and wrought-iron fencing, specimen tree planting, and full-home interior remodeling."
      }
    ]
  },
  "new-braunfels-tx": {
    city: "New Braunfels",
    county: "Comal & Guadalupe Counties",
    state: "TX",
    slug: "new-braunfels-tx",
    title: "Construction, Outdoor Kitchens & Stamped Concrete in New Braunfels, TX | JRM",
    description: "Trusted general contractor & outdoor living builder in New Braunfels, TX. Stamped concrete patios, outdoor kitchens, covered patios, decks & home remodeling. Call (210) 429-5526.",
    landmarks: ["Gruene Historic District", "Vintage Oaks", "Veramendi", "Landa Park", "Comal River", "Guadalupe River"],
    zipCodes: ["78130", "78132"],
    lat: 29.703004,
    lng: -98.124451,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111005.61205937123!2d-98.18843!3d29.703004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cb21183141f17%3A0x6b9d6eb34f71587d!2sNew%20Braunfels%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Positioned along the Balcones Escarpment where the Texas Hill Country meets the I-35 corridor, New Braunfels homeowners trust JRM Construction Landscaping Design for structural patio covers, Ashlar slate stamped concrete patios, limestone outdoor kitchens, composite decks, and whole-home remodeling across Gruene, Vintage Oaks, Veramendi, and riverfront estates.",
    localConsiderations: [
      {
        title: "Escarpment Soil Split (Vintage Oaks Limestone vs. East I-35 Clay)",
        detail: "Properties west of I-35 (Vintage Oaks, Havenwood) sit on solid limestone bedrock, while subdivisions east toward Seguin sit on high-plasticity blackland clay. We engineer foundations and concrete sub-bases specifically for each zone."
      },
      {
        title: "City of New Braunfels Permitting & NBU Water Conservation",
        detail: "We handle City of New Braunfels building permits and design low-water xeriscapes, smart drip irrigation, and synthetic turf systems compatible with New Braunfels Utilities (NBU) drought guidelines."
      },
      {
        title: "Riverfront & Hillside Deck / Patio Engineering",
        detail: "For sloped lots near the Guadalupe and Comal rivers or Hill Country bluffs, we build deep-pier elevated composite decks and moisture-sealed stamped concrete terraces."
      }
    ],
    faqs: [
      {
        q: "Have you built stamped concrete patios and outdoor living spaces in New Braunfels?",
        a: "Yes. Our featured New Braunfels Ashlar Slate Stamped Concrete Patio & Walkway case study highlights how we excavate expansive clay soil, compact a 4-inch crushed limestone base, tie #3 steel rebar, and pour two-tone stamped concrete."
      },
      {
        q: "Do you work in Vintage Oaks, Veramendi, and Gruene in New Braunfels?",
        a: "Yes. We regularly build custom outdoor kitchens, gable covered patios, stone fireplaces, privacy fences, and home additions throughout Vintage Oaks, Veramendi, Gruene, and all of Comal County."
      },
      {
        q: "Can you build commercial outdoor dining patios in New Braunfels?",
        a: "Yes. We construct commercial covered dining pavilions, ADA concrete flatwork, commercial fencing, and low-maintenance landscaping for New Braunfels hospitality and retail venues."
      },
      {
        q: "How do I get an estimate for a project in New Braunfels, TX?",
        a: "Call Robert Thompson at (210) 429-5526 or request a consultation online for a free on-site evaluation at your New Braunfels property."
      }
    ]
  },
  "seguin-tx": {
    city: "Seguin",
    county: "Guadalupe County",
    state: "TX",
    slug: "seguin-tx",
    title: "General Contractor, Remodeling & Concrete Patios in Seguin, TX | JRM Construction",
    description: "Experienced general contractor serving Seguin, TX. Home remodeling, stamped concrete patios, covered patios, ADUs, custom fencing & landscaping. Call (210) 429-5526.",
    landmarks: ["Lake Placid", "Meadowlake", "Guadalupe River", "Starcke Park", "Historic Downtown Seguin"],
    zipCodes: ["78155", "78156"],
    lat: 29.568843,
    lng: -97.964722,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111234.123456!2d-97.964722!3d29.568843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf51b0f590b5d%3A0x5a18db4b423ef24!2sSeguin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "With rapid residential growth across Guadalupe County and scenic waterfront homes along the Guadalupe River and Lake Placid, Seguin property owners rely on JRM Construction Landscaping Design for structural home remodeling, reinforced concrete flatwork, covered patios, custom decks, and acreage fencing.",
    localConsiderations: [
      {
        title: "Guadalupe County Expansive Clay & Alluvial Soil Reinforcement",
        detail: "Seguin's deep blackland clay and river-bottom soils expand and contract significantly between wet springs and dry summers; we reinforce all concrete patios, driveways, and foundations with compacted aggregate sub-bases and deformed steel rebar."
      },
      {
        title: "Waterfront Outdoor Living Along the Guadalupe River",
        detail: "For riverfront homes near Lake Placid and Meadowlake, we build rot-proof capped composite decks, marine-grade 304 stainless outdoor kitchens, and erosion-control stone retaining walls."
      },
      {
        title: "New-Build Backyard Completion Packages",
        detail: "For homeowners in Seguin's newest residential subdivisions, we replace tiny builder concrete pads with full covered patios, privacy fences, irrigation systems, and Zoysia sod."
      }
    ],
    faqs: [
      {
        q: "What concrete and hardscaping services do you offer in Seguin, TX?",
        a: "We install steel-reinforced stamped concrete patios, decorative concrete overlays, interlocking paver walkways, limestone retaining walls, and heavy-duty residential driveways across Seguin."
      },
      {
        q: "Can you build a covered patio and outdoor kitchen for a new home in Seguin?",
        a: "Yes. We specialize in upgrading new-construction backyards in Seguin with roofline-integrated covered patios, custom stone BBQ islands, sprinkler systems, and sod or artificial turf."
      },
      {
        q: "Do you build detached guest houses (ADUs) or workshops in Seguin?",
        a: "Yes. We handle ground-up new construction, detached guest casitas (ADUs), room additions, and whole-house interior remodeling throughout Seguin and Guadalupe County."
      },
      {
        q: "How far in advance should I schedule a consultation in Seguin?",
        a: "Call (210) 429-5526 anytime—we typically schedule free on-site consultations in Seguin within a few business days."
      }
    ]
  },
  "canyon-lake-tx": {
    city: "Canyon Lake",
    county: "Comal County",
    state: "TX",
    slug: "canyon-lake-tx",
    title: "Custom Decks, Outdoor Living & Remodeling in Canyon Lake, TX | JRM Construction",
    description: "Canyon Lake's trusted builder for multi-level hillside decks, covered patios, stone retaining walls, outdoor kitchens & home remodeling. Call (210) 429-5526.",
    landmarks: ["Canyon Lake Marina", "Mystic Shores", "Peninsula at Mystic Shores", "Overlook Park", "Hancock", "Sattler"],
    zipCodes: ["78133"],
    lat: 29.875221,
    lng: -98.262512,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110712.123456!2d-98.262512!3d29.875221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c970b55555555%3A0x123456789abcdef!2sCanyon%20Lake%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Living at Canyon Lake is all about maximizing panoramic Hill Country water views and sloped limestone bluffs. JRM Construction Landscaping Design specializes in multi-level hillside composite and cedar decks, engineered stone retaining walls, wind-rated covered pavilions, outdoor kitchens, and lakehouse remodeling across Mystic Shores, Sattler, and Canyon Lake.",
    localConsiderations: [
      {
        title: "Bedrock Pier Anchoring on Steep Limestone Slopes",
        detail: "Canyon Lake properties often feature dramatic elevation drops over solid limestone. We core-drill and pour steel-reinforced concrete piers anchored directly into bedrock for elevated decks and pavilions."
      },
      {
        title: "High Lakeside Wind Uplift & UV Exposure",
        detail: "Elevated lakeside structures face strong prevailing winds and intense reflected sunlight. We use Simpson Strong-Tie hurricane hardware, 12-inch OC deck joist spacing, and UV-capped composite decking."
      },
      {
        title: "Terraced Erosion Control & Low-Maintenance Xeriscaping",
        detail: "For vacation homes and primary residences around Canyon Lake, we build terraced limestone retaining walls, dry creek beds, and deer-resistant native landscapes."
      }
    ],
    faqs: [
      {
        q: "Have you built multi-level decks on sloped lots in Canyon Lake, TX?",
        a: "Yes! Our featured Canyon Lake Hillside Multi-Level Composite & Cedar Deck case study demonstrates how we anchor concrete piers into solid limestone bedrock and frame two-tier capped composite decks with unobstructed sightline railings."
      },
      {
        q: "Do you build covered patios and outdoor kitchens engineered for lakeside winds?",
        a: "Yes. All covered patios and pavilions we build in Canyon Lake feature deep pier foundations, heavy structural cedar or steel framing, hurricane uplift ties, and marine-grade 304 stainless steel outdoor kitchen appliances."
      },
      {
        q: "Can you remodel a lake house or build a detached guest casita in Canyon Lake?",
        a: "Yes. We provide complete interior kitchen and bathroom remodeling, structural room expansions, and detached guest casitas (ADUs) for Canyon Lake homeowners."
      },
      {
        q: "What decking material lasts longest in Canyon Lake sun and humidity?",
        a: "Light-toned capped composite or advanced PVC decking installed over pressure-treated joists with butyl flashing tape offers 25–50 years of splinter-free, fade-resistant performance."
      }
    ]
  },
  "kerrville-tx": {
    city: "Kerrville",
    county: "Kerr County",
    state: "TX",
    slug: "kerrville-tx",
    title: "General Contractor, Custom Fireplaces & Remodeling in Kerrville, TX | JRM",
    description: "Trusted Hill Country general contractor serving Kerrville, TX. Custom stone fireplaces, covered patios, home remodeling, decks & retaining walls. Call (210) 429-5526.",
    landmarks: ["Guadalupe River Park", "Comanche Trace", "Riverhill", "Kerrville River Trail", "Ingram Border"],
    zipCodes: ["78028", "78029"],
    lat: 30.04743,
    lng: -99.140317,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110300.123456!2d-99.140317!3d30.04743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865be1b2c451677d%3A0x7d877c2445b23d9!2sKerrville%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Located in the heart of Kerr County along the Guadalupe River, Kerrville estates and retirement residences demand authentic Hill Country stone masonry and dependable project management. JRM Construction Landscaping Design delivers custom limestone fireplaces, covered timber patios, accessibility-friendly home remodels, and deer-resistant landscapes across Comanche Trace, Riverhill, and Kerrville.",
    localConsiderations: [
      {
        title: "Higher Hill Country Elevation & Winter Freeze Resilience",
        detail: "At ~1,650 feet elevation, Kerrville experiences colder winter nights than central San Antonio. We engineer freeze-protected irrigation backflow assemblies, refractory stone fireplaces, and cold-hardy plantings."
      },
      {
        title: "Aging-in-Place & Luxury Retirement Home Remodeling",
        detail: "Many Kerrville homeowners hire us for zero-threshold curbless tile showers, widened doorways, ergonomic chef's kitchens, and safe, well-lit flagstone walkways."
      },
      {
        title: "Ranch & Estate Stone Masonry",
        detail: "From Comanche Trace golf course homes to Guadalupe River ranches, we craft hand-chiseled Texas limestone retaining walls, outdoor kitchens, and custom entry columns."
      }
    ],
    faqs: [
      {
        q: "Do you travel to Kerrville for remodeling and outdoor living construction?",
        a: "Yes. Kerrville is well within our verified 80-mile Hill Country service radius, and owner Robert Thompson personally oversees our Kerr County projects."
      },
      {
        q: "Do you build custom wood-burning and gas stone fireplaces in Kerrville?",
        a: "Yes. We build both indoor floor-to-ceiling limestone fireplaces and outdoor patio fireplaces and fire pits with refractory firebrick liners."
      },
      {
        q: "Can you remodel bathrooms and kitchens for accessibility in Kerrville?",
        a: "Yes. We specialize in luxury aging-in-place bathroom and kitchen renovations featuring curbless walk-in showers, custom cabinetry, and slip-resistant flooring."
      },
      {
        q: "What plants and trees survive Kerrville's deer and winter freezes?",
        a: "We install cold-hardy Monterrey and Live Oaks, Windmill and Sabal Palms, and deer-resistant perennials including Texas Sage, Red Yucca, Rosemary, and Muhly Grass."
      }
    ]
  },
  "fredericksburg-tx": {
    city: "Fredericksburg",
    county: "Gillespie County",
    state: "TX",
    slug: "fredericksburg-tx",
    title: "ADU Casita Builders, Remodeling & Outdoor Living in Fredericksburg, TX | JRM",
    description: "Custom ADU guest casitas, historic home remodeling, outdoor fireplaces, covered patios & Hill Country stonework in Fredericksburg, TX. Call (210) 429-5526.",
    landmarks: ["Main Street Historic District", "Wine Road 290", "Enchanted Rock Area", "Boot Ranch Area", "Cross Mountain"],
    zipCodes: ["78624"],
    lat: 30.275201,
    lng: -98.871984,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000.123456!2d-98.871984!3d30.275201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865bc23183141f17%3A0x6b9d6eb34f71587d!2sFredericksburg%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Fredericksburg's German Hill Country heritage, Wine Road 290 estates, and thriving guest-house market demand artisan masonry and turnkey general contracting. JRM Construction Landscaping Design builds detached ADU guest casitas, custom limestone outdoor fireplaces, shaded wine-tasting pavilions, and high-end interior remodels across Gillespie County.",
    localConsiderations: [
      {
        title: "Detached Guest Casita (ADU) & Hospitality Construction",
        detail: "We design and build turnkey detached backyard casitas and guest cottages with full kitchens, luxury baths, private porches, and stone exteriors matching Fredericksburg's limestone architecture."
      },
      {
        title: "Authentic Texas Limestone & Timber Craftsmanship",
        detail: "Our masons work with hand-pitched Texas limestone, flagstone courtyards, and heavy Western Red Cedar timbers that honor Gillespie County's architectural heritage."
      },
      {
        title: "Granite Gravel Xeriscapes & Dark-Sky Outdoor Lighting",
        detail: "We install decomposed granite courtyards, stone fire pit lounges, drought-hardy native beds, and shielded 2700K brass LED lighting that preserves Fredericksburg's stargazing skies."
      }
    ],
    faqs: [
      {
        q: "Can you build a detached guest house or ADU casita in Fredericksburg, TX?",
        a: "Yes! Turnkey detached guest casitas and ADUs are one of our core specialties—we manage foundation engineering, framing, stone/siding exteriors, MEP utilities, interior finishes, and courtyard hardscaping."
      },
      {
        q: "Do you build outdoor fireplaces and fire pit courtyards for Fredericksburg properties?",
        a: "Yes. We construct custom limestone outdoor fireplaces, sunken stone fire pit lounges, flagstone patios, and cedar pergolas ideal for cool Hill Country evenings."
      },
      {
        q: "Can you remodel existing homes or commercial hospitality spaces in Fredericksburg?",
        a: "Yes. We perform full kitchen and bathroom renovations, structural room additions, and commercial outdoor patio expansions across Fredericksburg."
      },
      {
        q: "How do I schedule an on-site consultation in Fredericksburg?",
        a: "Call owner Robert Thompson at (210) 429-5526 or submit our online consultation request to set up a site visit in Fredericksburg."
      }
    ]
  },
  "bulverde-tx": {
    city: "Bulverde",
    county: "Comal County",
    state: "TX",
    slug: "bulverde-tx",
    title: "Outdoor Living, Custom Fencing, Patios & Remodeling in Bulverde, TX | JRM",
    description: "Bulverde's trusted contractor for rock-drilled cedar fencing, outdoor kitchens, covered patios, retaining walls, turf & remodeling. Call (210) 429-5526.",
    landmarks: ["Johnson Ranch", "Singing Hills", "Belle Oaks", "Bulverde Hills", "Spring Branch", "Guadalupe River State Park Area"],
    zipCodes: ["78163", "78070"],
    lat: 29.746611,
    lng: -98.419464,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110900.123456!2d-98.419464!3d29.746611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6c2183141f17%3A0x6b9d6eb34f71587d!2sBulverde%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Known as the 'Front Door to the Texas Hill Country,' Bulverde and Spring Branch feature expansive acreage lots and master-planned communities like Johnson Ranch and Belle Oaks. JRM Construction Landscaping Design builds rock-drilled Western Red Cedar and wrought-iron fences, custom limestone outdoor kitchens, gable covered patios, artificial turf lawns, and home additions across Bulverde.",
    localConsiderations: [
      {
        title: "Pneumatic Rock-Drilling into Solid Bulverde Limestone",
        detail: "Bulverde sits directly on hard Edwards and Glen Rose limestone shelf. Whether setting steel fence posts, deck piers, or patio cover footings, we core-drill into solid rock rather than pouring shallow pads."
      },
      {
        title: "Acreage Water Conservation & Well-Friendly Landscaping",
        detail: "Many Bulverde and Spring Branch estates rely on private wells or strict water districts; our synthetic turf lawns, native xeriscapes, and drip irrigation systems slash outdoor water demand."
      },
      {
        title: "HOA Compliance in Johnson Ranch, Belle Oaks & Singing Hills",
        detail: "We design masonry columns, cedar board-on-board fences, wrought-iron view fences, and patio roofs that meet strict Bulverde subdivision covenants."
      }
    ],
    faqs: [
      {
        q: "Have you built custom fences and masonry projects in Bulverde, TX?",
        a: "Yes! Our featured Bulverde Western Red Cedar Board-on-Board Fence & Stone Columns case study highlights how we rock-drill galvanized steel posts 30–36 inches into solid limestone caliche for wind-proof durability."
      },
      {
        q: "Do you build outdoor kitchens and covered patios in Johnson Ranch and Belle Oaks?",
        a: "Yes. We build custom Texas limestone outdoor kitchens, cedar-beamed covered pavilions, stone fire pits, and stamped concrete patios throughout Bulverde and Spring Branch."
      },
      {
        q: "Why is artificial turf popular for Bulverde backyards and pool surrounds?",
        a: "Because Bulverde's rocky caliche soil requires heavy irrigation to keep natural grass alive in 100°F summers, synthetic turf delivers a mud-free, zero-water lawn and putting green year-round."
      },
      {
        q: "Can you build a detached workshop, garage addition, or guest casita in Bulverde?",
        a: "Yes. As a full-service general contractor, we construct detached ADU casitas, garage additions, and whole-home interior remodels in Bulverde."
      }
    ]
  },
  "schertz-tx": {
    city: "Schertz",
    county: "Guadalupe, Bexar & Comal Counties",
    state: "TX",
    slug: "schertz-tx",
    title: "Construction, Covered Patios, Artificial Turf & Remodeling in Schertz, TX | JRM",
    description: "Top-rated general contractor in Schertz, TX (78154). Pet-friendly artificial turf, covered patios, stamped concrete, kitchen remodeling & fencing. Call (210) 429-5526.",
    landmarks: ["Crossvine", "Homestead", "Pickrell Park", "Cibolo Creek", "Randolph AFB Corridor"],
    zipCodes: ["78154", "78108"],
    lat: 29.552167,
    lng: -98.269733,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111200.123456!2d-98.269733!3d29.552167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf21183141f17%3A0x6b9d6eb34f71587d!2sSchertz%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Schertz (78154) and neighboring Cibolo are among the fastest-growing family and military-friendly communities in the Northeast I-35 corridor. JRM Construction Landscaping Design helps Schertz homeowners upgrade builder-grade houses and backyards with pet-friendly artificial turf lawns, custom putting greens, roofed patio extensions, stamped concrete slabs, and full kitchen and bathroom renovations.",
    localConsiderations: [
      {
        title: "Expansive Clay Drainage & Sub-Base Engineering in Schertz",
        detail: "Much of Schertz and Cibolo sits on heavy clay soil that holds standing water after storms and cracks unreinforced slabs. We install 4-inch compacted crushed granite bases for turf and #3 steel rebar grids for concrete."
      },
      {
        title: "City of Schertz Permitting & HOA Submittals (The Crossvine, Homestead)",
        detail: "We manage all City of Schertz building permits for patio covers, decks, sheds/ADUs, and interior remodels, plus HOA architectural approval packets."
      },
      {
        title: "Turnkey Backyard Upgrades for Newer Subdivisions",
        detail: "We transform bare new-construction backyards in Schertz into shaded outdoor living rooms with covered patios, outdoor kitchens, sprinkler systems, and cedar privacy fences."
      }
    ],
    faqs: [
      {
        q: "Have you installed artificial turf and putting greens in Schertz, TX?",
        a: "Yes! Our featured Schertz Pet-Friendly Artificial Turf Lawn & Backyard Putting Green case study details how we excavated native clay soil, compacted a 4-inch crushed granite drainage sub-base, and installed antimicrobial pet turf and a 3-hole putting green."
      },
      {
        q: "Can you extend our builder patio and add a roofed patio cover in Schertz?",
        a: "Yes. Extending undersized 10x10 builder concrete pads with steel-reinforced stamped concrete and tying a shingled or cedar-lined gable patio roof into the home is one of our most requested services in Schertz."
      },
      {
        q: "Do you offer kitchen and bathroom remodeling in Schertz (78154)?",
        a: "Yes. We provide complete interior kitchen, bathroom, flooring, and structural wall-removal remodeling throughout Schertz and Cibolo."
      },
      {
        q: "Do you install and repair sprinkler systems in Schertz?",
        a: "Yes. We install TCEQ-compliant multi-zone sprinkler systems, drip irrigation, and smart WiFi controllers across Schertz."
      }
    ]
  },
  "converse-tx": {
    city: "Converse",
    county: "Bexar County",
    state: "TX",
    slug: "converse-tx",
    title: "Remodeling, Concrete Patios & Construction Contractor in Converse, TX | JRM",
    description: "Trusted general contractor in Converse, TX (78109). House remodeling, stamped concrete patios, covered patios, fencing & landscaping. Call (210) 429-5526.",
    landmarks: ["Converse City Park", "Northampton", "Miramar", "Loop 1604 East Corridor"],
    zipCodes: ["78109"],
    lat: 29.516058,
    lng: -98.316961,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111300.123456!2d-98.316961!3d29.516058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf01183141f17%3A0x6b9d6eb34f71587d!2sConverse%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "In Converse, TX (78109), JRM Construction Landscaping Design delivers high-value home remodeling, reinforced concrete patios and driveways, custom covered patios, cedar privacy fencing, and drought-tolerant landscaping backed by 35+ years of local building experience.",
    localConsiderations: [
      {
        title: "Heavy Clay Foundation & Flatwork Reinforcement",
        detail: "Converse's expansive dark clay soil requires compacted crushed limestone road-base and #3 steel rebar reinforcement on all concrete driveways, walkways, and patio extensions."
      },
      {
        title: "City of Converse Building Permits & Code Compliance",
        detail: "We coordinate all residential permits and inspections for room additions, patio covers, and structural remodels in Converse."
      },
      {
        title: "Wind-Resistant Cedar Fencing & Shade Patios",
        detail: "We replace aging builder fences with steel-post Western Red Cedar privacy fencing and build insulated patio covers that block afternoon heat."
      }
    ],
    faqs: [
      {
        q: "Do you offer free on-site estimates for Converse homeowners?",
        a: "Yes! Call (210) 429-5526 to schedule your free, no-obligation consultation at your Converse property."
      },
      {
        q: "What remodeling and outdoor living services do you provide in Converse?",
        a: "We handle kitchen and bathroom remodels, room additions, stamped concrete patios, covered patios, cedar fencing, artificial turf, and sprinkler installations."
      },
      {
        q: "Can you replace a cracked concrete driveway or patio in Converse?",
        a: "Yes. We demolish settled concrete, excavate unstable clay, compact a crushed limestone base, tie steel rebar, and pour 4,000 PSI brushed or stamped concrete."
      },
      {
        q: "Do you offer Spanish-speaking project consultations?",
        a: "Yes! You can call Robert at (210) 429-5526 (English) or Arturo at (210) 379-3505 (Español)."
      }
    ]
  },
  "helotes-tx": {
    city: "Helotes",
    county: "Bexar County",
    state: "TX",
    slug: "helotes-tx",
    title: "Retaining Walls, Outdoor Living & Remodeling in Helotes, TX | JRM Construction",
    description: "Premier general contractor in Helotes, TX (78023). Engineered stone retaining walls, flagstone patios, outdoor kitchens, covered patios & remodeling. Call (210) 429-5526.",
    landmarks: ["Old Town Helotes", "Sonoma Ranch", "Iron Horse Canyon", "Triana", "Los Reyes Canyons", "Government Canyon Area"],
    zipCodes: ["78023"],
    lat: 29.578006,
    lng: -98.689744,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111150.123456!2d-98.689744!3d29.578006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6f1183141f17%3A0x6b9d6eb34f71587d!2sHelotes%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Where Northwest San Antonio transitions into the scenic canyons of the Texas Hill Country, Helotes (78023) properties feature dramatic elevation changes, mature oak canopies, and limestone ledges. JRM Construction Landscaping Design specializes in engineered stone retaining walls, flagstone patios, custom outdoor kitchens, cedar covered pavilions, and full-home remodeling across Sonoma Ranch, Iron Horse Canyon, Triana, and Los Reyes.",
    localConsiderations: [
      {
        title: "Canyon Slope Erosion Control & Terraced Retaining Walls",
        detail: "Helotes canyon lots experience rapid stormwater runoff during heavy rains. We build terraced Texas limestone retaining walls with perforated PVC French drains and washed gravel backfill to stop erosion and create level patio terraces."
      },
      {
        title: "Edwards Aquifer Recharge Zone & Tree Canopy Protection",
        detail: "Many Helotes neighborhoods sit over sensitive aquifer recharge zones and dense live oak stands; we design permeable flagstone/paver hardscapes and root-safe grading."
      },
      {
        title: "Deer-Resistant Native Softscapes & Custom Masonry",
        detail: "We pair hand-cut Texas limestone outdoor kitchens and fireplaces with deer-resistant native plantings (Cenizo, Esperanza, Red Yucca, Muhly Grass) that thrive in Helotes."
      }
    ],
    faqs: [
      {
        q: "Have you built retaining walls and flagstone patios on sloped lots in Helotes, TX?",
        a: "Yes! Our featured Helotes Sloped Backyard Retaining Wall & Flagstone Patio Hardscape case study showcases how we solved severe backyard runoff in Helotes using terraced limestone retaining walls, subsurface French drains, and natural flagstone."
      },
      {
        q: "Do you build custom outdoor kitchens and covered patios in Sonoma Ranch and Iron Horse Canyon?",
        a: "Yes. We design and build HOA-approved roofed patio extensions, Western Red Cedar pergolas, stone fireplaces, and built-in outdoor kitchens throughout Helotes (78023)."
      },
      {
        q: "Can you remodel interiors as well as backyards in Helotes?",
        a: "Yes. Owner Robert Thompson oversees complete kitchen renovations, master bathroom remodels, structural wall removals, and detached guest casitas (ADUs) in Helotes."
      },
      {
        q: "What plants won't get eaten by deer in Helotes neighborhoods?",
        a: "Our Helotes softscape plans focus on proven deer-resistant Texas natives including Texas Sage, Red Yucca, Autumn Sage, Esperanza, Rosemary, Agave, and Gulf Muhly Grass."
      }
    ]
  },
  "universal-city-tx": {
    city: "Universal City",
    county: "Bexar County",
    state: "TX",
    slug: "universal-city-tx",
    title: "Construction, Remodeling & Outdoor Living in Universal City, TX | JRM",
    description: "Universal City's trusted general contractor near Randolph AFB (78148). House remodeling, covered patios, stamped concrete, turf & fencing. Call (210) 429-5526.",
    landmarks: ["Randolph AFB", "Olympia Hills Golf & Event Center", "Universal City Park", "Pat Booker Rd Corridor"],
    zipCodes: ["78148"],
    lat: 29.548839,
    lng: -98.291125,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111220.123456!2d-98.291125!3d29.548839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf11183141f17%3A0x6b9d6eb34f71587d!2sUniversal%20City%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Serving military families, retirees, and homeowners near JBSA-Randolph and Olympia Hills in Universal City (78148), JRM Construction Landscaping Design provides dependable whole-home remodeling, covered patios, stamped concrete, custom decks, artificial turf, and commercial tenant build-outs.",
    localConsiderations: [
      {
        title: "Modernizing Established Olympia Hills & Universal City Homes",
        detail: "We update 1970s–1990s Universal City floor plans with open-concept kitchens, curbless walk-in tile showers, upgraded electrical panels, and energy-efficient windows."
      },
      {
        title: "Golf Course & Sloped Lot Hardscaping in Olympia Hills",
        detail: "For sloped lots bordering Olympia Hills, we construct stone retaining walls, composite view decks, wrought-iron fencing, and low-glare LED landscape lighting."
      },
      {
        title: "Disciplined Scheduling for Military & PCS Timelines",
        detail: "We respect tight PCS move-in/move-out and pre-sale renovation schedules with direct owner supervision and transparent milestone pricing."
      }
    ],
    faqs: [
      {
        q: "Do you work with military families and PCS timelines in Universal City (78148)?",
        a: "Yes. We pride ourselves on clear daily communication, disciplined scheduling, and turnkey execution for homeowners around JBSA-Randolph and Olympia Hills."
      },
      {
        q: "What services are most popular for Universal City homeowners?",
        a: "Kitchen and bathroom remodeling, attached covered patios, stamped concrete patio extensions, cedar and wrought-iron fencing, and water-saving artificial turf."
      },
      {
        q: "Do you handle City of Universal City building permits?",
        a: "Yes. We coordinate all required municipal permits and inspections for structural remodeling, patio roofs, decks, and commercial build-outs in Universal City."
      },
      {
        q: "Can you also handle commercial construction along Pat Booker Rd or Loop 1604?",
        a: "Yes. We provide retail and office tenant finish-outs, ADA concrete flatwork, commercial fencing, and commercial xeriscaping."
      }
    ]
  },
  "live-oak-tx": {
    city: "Live Oak",
    county: "Bexar County",
    state: "TX",
    slug: "live-oak-tx",
    title: "General Contractor, Remodeling & Outdoor Living in Live Oak, TX | JRM",
    description: "Trusted construction & landscaping company serving Live Oak, TX (78233). Kitchen & bath remodeling, covered patios, concrete & tree care. Call (210) 429-5526.",
    landmarks: ["Live Oak Main City Park", "Woodcrest Park", "I-35 / Loop 1604 Interchange", "Toepperwein Rd Corridor"],
    zipCodes: ["78233"],
    lat: 29.565786,
    lng: -98.336406,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111180.123456!2d-98.336406!3d29.565786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf31183141f17%3A0x6b9d6eb34f71587d!2sLive%20Oak%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "JRM Construction Landscaping Design brings over 35 years of general contracting and outdoor living expertise to Live Oak, TX (78233). We modernize established homes with open-concept kitchens, spa bathrooms, structural room additions, covered patios, and shade-tolerant landscaping beneath mature live oaks.",
    localConsiderations: [
      {
        title: "Landscaping Under Dense Live Oak Shade Canopies",
        detail: "Where mature live oaks block sunlight and grass struggles to grow, we install permeable artificial turf, flagstone walkways, shade-adapted softscapes, and brass tree uplighting."
      },
      {
        title: "Interior Remodeling & Cast-Iron Plumbing Updates",
        detail: "For established Live Oak homes, we combine modern kitchen and bath renovations with updated PEX plumbing, electrical circuits, and crack-isolated tile flooring."
      },
      {
        title: "Commercial Corridor Contracting (I-35 & Loop 1604)",
        detail: "We also serve Live Oak medical, retail, and office properties with tenant improvements, ADA concrete ramps, and commercial grounds maintenance."
      }
    ],
    faqs: [
      {
        q: "What types of home remodeling and additions do you build in Live Oak?",
        a: "We construct kitchen and bathroom renovations, load-bearing wall removals, expanded master suites, covered patio enclosures, and detached backyard casitas (ADUs)."
      },
      {
        q: "What is the best solution for bare dirt under shady oak trees in Live Oak?",
        a: "Installing synthetic turf over a permeable crushed granite base or building a mortared flagstone patio with shade-tolerant perennial beds solves bare, muddy shade zones permanently."
      },
      {
        q: "Do you handle City of Live Oak building permits?",
        a: "Yes. We manage all municipal permit filings and inspections with the City of Live Oak."
      },
      {
        q: "How do I schedule a free estimate in Live Oak, TX?",
        a: "Call Robert Thompson at (210) 429-5526 or submit our online consultation request form."
      }
    ]
  },
  "leon-valley-tx": {
    city: "Leon Valley",
    county: "Bexar County",
    state: "TX",
    slug: "leon-valley-tx",
    title: "Construction, Remodeling & Stamped Concrete in Leon Valley, TX | JRM",
    description: "Licensed general contractor in Leon Valley, TX (78238 / 78240). House remodeling, stamped concrete driveways, covered patios, fencing & turf. Call (210) 429-5526.",
    landmarks: ["Raymond Rimkus Park", "Huebner-Onion Natural Area", "Bandera Rd Corridor", "Medical Center Proximity"],
    zipCodes: ["78238", "78240"],
    lat: 29.496061,
    lng: -98.618633,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111320.123456!2d-98.618633!3d29.496061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6d1183141f17%3A0x6b9d6eb34f71587d!2sLeon%20Valley%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    intro: "Located in Northwest Bexar County near the South Texas Medical Center, Leon Valley (78238 / 78240) homeowners trust JRM Construction Landscaping Design for whole-home interior remodeling, steel-reinforced stamped concrete driveways and patios, custom covered patios, cedar privacy fencing, and ADU in-law casitas.",
    localConsiderations: [
      {
        title: "Whole-Home Modernization & In-Law Suite Additions",
        detail: "Leon Valley's established ranch-style homes on generous lots are ideal for open-concept kitchen remodels, bathroom renovations, and detached or attached ADU suites."
      },
      {
        title: "Drainage Grading Along Huebner Creek Watershed",
        detail: "We engineer positive lot grading, French drains, and reinforced concrete flatwork to protect foundations during heavy Northwest San Antonio rainstorms."
      },
      {
        title: "City of Leon Valley Permitting & Commercial Build-Outs",
        detail: "We coordinate residential and commercial building permits along the Bandera Road corridor and throughout Leon Valley neighborhoods."
      }
    ],
    faqs: [
      {
        q: "Do you install stamped concrete patios and driveways in Leon Valley?",
        a: "Yes! We specialize in 4,000 PSI steel-reinforced stamped concrete driveways, decorative patio overlays, and slip-resistant pool surrounds across Leon Valley."
      },
      {
        q: "Can you remodel a 1960s or 1970s ranch home in Leon Valley?",
        a: "Yes. We frequently open up compartmentalized Leon Valley floor plans, modernize kitchens and bathrooms, replace flooring, and add covered outdoor living rooms."
      },
      {
        q: "Do you build custom cedar fences on steel posts in Leon Valley?",
        a: "Yes. We build Western Red Cedar board-on-board and side-by-side privacy fences anchored on deep concrete-set galvanized steel posts."
      },
      {
        q: "How can I request a free quote in Leon Valley?",
        a: "Call (210) 429-5526 to speak directly with owner Robert Thompson and schedule a free on-site consultation."
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

  const cityProjects = PROJECT_CASE_STUDIES.filter(
    (p) => p.locationSlug === info.slug
  );
  const featuredProjects =
    cityProjects.length >= 2
      ? cityProjects
      : [
          ...cityProjects,
          ...PROJECT_CASE_STUDIES.filter((p) => p.locationSlug !== info.slug).slice(
            0,
            2 - cityProjects.length
          ),
        ];

  const allEighteenServices = [
    { name: "General Contracting", to: "/general-contracting" },
    { name: "House Remodeling", to: "/house-remodeling" },
    { name: "New Construction", to: "/new-construction" },
    { name: "Commercial Construction", to: "/commercial" },
    { name: "Outdoor Kitchens", to: "/outdoor-kitchens" },
    { name: "Covered Patios", to: "/covered-patios" },
    { name: "Custom Fireplaces", to: "/custom-fireplaces" },
    { name: "Hardscaping & Retaining Walls", to: "/hardscapes" },
    { name: "Stamped Concrete", to: "/stamped-concrete-overlay" },
    { name: "Custom Decks", to: "/custom-decks" },
    { name: "Artificial Turf", to: "/artificial-turf" },
    { name: "Custom Fencing", to: "/fencing" },
    { name: "ADU Services & Casitas", to: "/adu-services" },
    { name: "3D Landscape Design", to: "/design-service" },
    { name: "Softscapes & Planting", to: "/softscapes" },
    { name: "Cold-Hardy Palm Trees", to: "/palm-trees" },
    { name: "Sprinkler & Drip Irrigation", to: "/irrigation" },
    { name: "LED Landscape Lighting", to: "/landscape-lighting" },
  ];

  const servicesList = [
    { title: "House Remodeling", image: imgRemodeling, link: "/house-remodeling", desc: `Comprehensive interior renovations, open-concept kitchen updates, and bathroom remodels in ${info.city}, TX.` },
    { title: "Outdoor Kitchens", image: imgKitchens, link: "/outdoor-kitchens", desc: `Custom Texas limestone outdoor kitchen islands, built-in grills, and granite bars built for ${info.city} entertaining.` },
    { title: "Covered Patios", image: imgPatios, link: "/covered-patios", desc: `Solid roof covered patio extensions, gable pavilions, and cedar pergolas tailored for ${info.city} homes.` },
    { title: "Hardscapes & Concrete", image: imgHardscapes, link: "/hardscapes", desc: `Engineered stone retaining walls, flagstone patios, and steel-reinforced stamped concrete across ${info.city}.` },
    { title: "Artificial Turf", image: imgTurf, link: "/artificial-turf", desc: `Drought-proof synthetic grass lawns, pet turf systems, and custom putting greens in ${info.city}, TX.` },
    { title: "Custom Fireplaces", image: imgFireplace, link: "/custom-fireplaces", desc: `Handcrafted Texas limestone outdoor fireplaces and custom stone fire pits for ${info.city} backyards.` }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />
      <main id="main-content">

      {/* JSON-LD Structured Data Schema (@graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `https://www.jrmconstructionservicellc.com/locations/${info.slug}#service`,
                "name": `Construction, Landscaping & Outdoor Living Services in ${info.city}, TX`,
                "serviceType": "General Contracting, Remodeling, Outdoor Living & Landscaping",
                "description": info.description,
                "url": `https://www.jrmconstructionservicellc.com/locations/${info.slug}`,
                "provider": {
                  "@id": "https://www.jrmconstructionservicellc.com/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": `${info.city}, TX`,
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": info.lat,
                    "longitude": info.lng
                  }
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": `https://www.jrmconstructionservicellc.com/locations/${info.slug}#breadcrumb`,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.jrmconstructionservicellc.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Service Areas",
                    "item": "https://www.jrmconstructionservicellc.com/service-areas"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": `${info.city}, TX`,
                    "item": `https://www.jrmconstructionservicellc.com/locations/${info.slug}`
                  }
                ]
              },
              ...(info.faqs && info.faqs.length > 0
                ? [
                    {
                      "@type": "FAQPage",
                      "@id": `https://www.jrmconstructionservicellc.com/locations/${info.slug}#faq`,
                      "mainEntity": info.faqs.map((faq) => ({
                        "@type": "Question",
                        "name": faq.q,
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": faq.a
                        }
                      }))
                    }
                  ]
                : [])
            ]
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
              📍 Verified Service Area: {info.city}, {info.state} ({info.county})
            </span>

            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Construction, Landscaping &amp; Remodeling in {info.city}, TX
            </h1>

            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              {info.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                onClick={() => trackPhoneClick(`Location Hero - ${info.city}`)}
                className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-7 py-3 text-white text-sm font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call (210) 429-5526</span>
              </a>
              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-7 py-3 text-white text-sm font-bold backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <span>Free Consultation in {info.city}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── CITY OVERVIEW, LANDMARKS & LOCAL CONSTRUCTION CONSIDERATIONS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#577a4c] block mb-2">
                  Local Construction &amp; Geotechnical Expertise
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  Building for {info.city}'s Soil, Terrain &amp; Municipal Codes
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  With 35+ years of continuous active leadership since 1989, owner Robert Thompson provides direct on-site supervision for every construction, remodeling, and landscaping project in {info.city} ({info.zipCodes.join(", ")}). Here is how we engineer projects specifically for {info.city} properties:
                </p>
              </div>

              <div className="space-y-4">
                {info.localConsiderations.map((factor, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-xs"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#577a4c] shrink-0" />
                      {factor.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pl-6">
                      {factor.detail}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase text-neutral-700 block">
                  {info.city} Communities, Landmarks &amp; ZIP Codes ({info.zipCodes.join(", ")}):
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {info.landmarks.map((l) => (
                    <span key={l} className="bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 px-3 py-1 rounded-full text-xs font-medium">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md h-[320px]">
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

              <div className="bg-[#1c140d] text-white rounded-2xl p-6 border border-neutral-800">
                <h3 className="text-base font-bold mb-2">
                  Schedule an On-Site Consultation in {info.city}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                  Speak directly with owner Robert Thompson for an itemized written estimate:
                </p>
                <div className="space-y-2 text-xs">
                  <a
                    href="tel:2104295526"
                    onClick={() => trackPhoneClick(`Location Sidebar - ${info.city}`)}
                    className="flex items-center gap-2 text-[#a5b89d] font-bold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    (210) 429-5526 — Robert (English)
                  </a>
                  <a
                    href="tel:2103793505"
                    onClick={() => trackPhoneClick(`Location Sidebar ES - ${info.city}`)}
                    className="flex items-center gap-2 text-white/90 font-semibold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#a5b89d]" />
                    (210) 379-3505 — Arturo (Español)
                  </a>
                  <a
                    href="mailto:robertsa210@icloud.com"
                    className="flex items-center gap-2 text-white/80 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#a5b89d]" />
                    robertsa210@icloud.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── GENUINE COMPLETED PROJECTS IN / NEAR THIS CITY ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="inline-flex items-center bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                  Verified Portfolio
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
                  Completed Projects Serving {info.city} &amp; Surrounding Areas
                </h2>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3d5636] hover:text-[#577a4c]"
              >
                <span>View All 10 Project Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#fcfbf8] rounded-2xl border border-[#eae8e1] overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="h-60 overflow-hidden relative bg-neutral-900">
                      <img
                        src={proj.image}
                        alt={proj.imageAlt}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#1c140d]/90 text-white text-[11px] font-bold">
                          {proj.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/95 text-neutral-900 text-[11px] font-bold">
                          {proj.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
                        {proj.projectName}
                      </h3>
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        <strong className="font-semibold text-neutral-800">Challenge &amp; Solution:</strong>{" "}
                        {proj.constructionChallenges}
                      </p>
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        <strong className="font-semibold text-neutral-800">Outcome:</strong>{" "}
                        {proj.finalOutcome}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
                    {proj.relevantServices.map((svc) => (
                      <Link
                        key={svc.to}
                        to={svc.to}
                        className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#577a4c] text-[11px] font-bold text-[#3d5636] transition-colors"
                      >
                        {svc.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── LOCALIZED SERVICES GRID & FULL 18-SERVICE DIRECTORY ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              Services in {info.city}
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Construction &amp; Landscaping Services Available in {info.city}, TX
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {servicesList.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={s.image} alt={`${s.title} in ${info.city}, TX`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                    <span>Explore {s.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All 18 Services Directory for this Location */}
          <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Complete 18-Specialty Directory for {info.city}, TX Property Owners:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {allEighteenServices.map((svc) => (
                <Link
                  key={svc.to}
                  to={svc.to}
                  className="px-3 py-2.5 rounded-xl bg-[#fcfbf8] border border-neutral-200 hover:border-[#577a4c] hover:bg-[#577a4c]/5 text-xs font-semibold text-neutral-800 hover:text-[#3d5636] transition-colors flex items-center justify-between"
                >
                  <span>{svc.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#577a4c] shrink-0" />
                </Link>
              ))}
            </div>
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

            {/* Nearby Service Areas Cross-Links */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-700 mb-3">
                Explore Nearby JRM Service Areas:
              </h3>
              <div className="flex flex-wrap gap-2">
                {PRIORITY_SERVICE_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to="/locations/$location"
                    params={{ location: loc.slug }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                      loc.slug === info.slug
                        ? "bg-[#3d5636] text-white border-[#3d5636]"
                        : "bg-white text-neutral-700 border-neutral-200 hover:border-[#577a4c]"
                    }`}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
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
                onClick={() => trackPhoneClick(`Location Bottom CTA - ${info.city}`)}
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

      </main>
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
