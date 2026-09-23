import { useState, useId } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trees,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sun,
  Droplets,
  Ruler,
  Leaf,
  Compass,
  Calendar,
  Award,
  ChevronDown,
  Eye,
  X,
  Truck,
  Shovel,
  Layers,
  HeartHandshake
} from "lucide-react";

// Top Selling Images from assets/topselling
import imgRedMaple from "@/assets/topselling/IMG_6892.webp";
import imgJapaneseBlueberry from "@/assets/topselling/IMG_6893.webp";
import imgLittleGemMagnolia from "@/assets/topselling/IMG_6894.webp";
import imgEaglestonHolly from "@/assets/topselling/IMG_6896.webp";
import imgSabalPalm from "@/assets/topselling/IMG_6897.webp";
import imgDDBlanchard from "@/assets/topselling/IMG_6898.webp";
import imgCrapeMyrtle from "@/assets/topselling/IMG_6899.webp";
import imgLiveOak from "@/assets/topselling/IMG_6900.webp";
import imgCarolinaCherry from "@/assets/topselling/IMG_6901.webp";
import imgShumardOak from "@/assets/topselling/IMG_6902.webp";
import imgContainerStock from "@/assets/topselling/IMG_9756.webp";

import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/best-selling-trees")({
  head: () => ({
    meta: [
      { title: "Best Selling Trees San Antonio TX | Specimen Tree Sourcing & Planting | JRM" },
      {
        name: "description",
        content:
          "Discover San Antonio's best-selling specimen trees: Live Oak, Sabal Palm, Japanese Blueberry, Little Gem Magnolia, Red Maple, and Shumard Oak. Hand-selected nursery stock, precision planting, 35+ years experience. Call (210) 429-5526."
      },
      {
        property: "og:title",
        content: "Best Selling Trees San Antonio TX | Specimen Tree Sourcing & Planting | JRM"
      },
      {
        property: "og:description",
        content:
          "Explore our curated selection of premier, climate-acclimated trees for San Antonio & Texas Hill Country estates. Hand-picked nursery specimens, turn-key delivery & guaranteed installation."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/best-selling-trees" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Best Selling Trees in San Antonio, TX | JRM Construction & Landscaping"
      },
      {
        name: "twitter:description",
        content:
          "Premier specimen shade trees, evergreen privacy barriers, flowering accents, and cold-hardy palms professionally planted."
      },
      { property: "og:image", content: "https://jrmconstructionservicellc.com/assets/svc-palm-trees.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "800" },
      { name: "twitter:image", content: "https://jrmconstructionservicellc.com/assets/svc-palm-trees.jpg" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/best-selling-trees" }
    ]
  }),
  component: BestSellingTreesPage
});

interface TreeItem {
  id: string;
  name: string;
  botanicalName: string;
  category: "shade" | "evergreen" | "flowering" | "palm";
  categoryLabel: string;
  badge: string;
  tagline: string;
  image: string;
  description: string;
  matureSize: string;
  growthRate: string;
  foliage: string;
  sunRequirement: string;
  droughtTolerance: "Moderate" | "High" | "Exceptional";
  idealUse: string;
  expertTip: string;
  keyBenefits: string[];
}

const treesCatalog: TreeItem[] = [
  {
    id: "red-maple",
    name: "Red Maple",
    botanicalName: "Acer rubrum",
    category: "shade",
    categoryLabel: "Shade Tree",
    badge: "Autumn Showstopper",
    tagline: "Vibrant fiery scarlet autumn foliage paired with rapid canopy development.",
    image: imgRedMaple,
    description:
      "A celebrated North American native, the Red Maple is cherished for its breathtaking crimson fall foliage and attractive pyramidal crown. In South Texas landscapes, it serves as an eye-catching seasonal accent, delivering cool shade throughout hot summers followed by an unforgettable autumn fireworks display.",
    matureSize: "40 – 50 ft Height × 30 – 40 ft Spread",
    growthRate: "Fast (2 – 3 ft/year)",
    foliage: "Deciduous (Brilliant ruby to orange in fall)",
    sunRequirement: "Full Sun to Partial Shade",
    droughtTolerance: "Moderate",
    idealUse: "Front lawn statement tree, driveway allee, or shading outdoor patios.",
    expertTip:
      "Mulch deeply around the root zone to retain soil moisture in July and August. We condition the soil with organic sulfur to optimize iron uptake.",
    keyBenefits: [
      "Stunning red autumn coloration",
      "Fast-growing dense canopy for natural cooling",
      "Attractive smooth silver-gray bark in youth",
      "Early spring blooms that attract beneficial pollinators"
    ]
  },
  {
    id: "japanese-blueberry",
    name: "Japanese Blueberry",
    botanicalName: "Elaeocarpus decipiens",
    category: "evergreen",
    categoryLabel: "Evergreen & Privacy",
    badge: "Architectural Luxury",
    tagline: "Ultra-dense, glossy emerald foliage with stunning crimson accent leaves.",
    image: imgJapaneseBlueberry,
    description:
      "The Japanese Blueberry is an upscale designer favorite for luxury San Antonio estates. Boasting lustrous, deep-green leathery leaves, old leaves turn bright fiery red before dropping sporadically, providing year-round contrast. It grows with an elegant columnar habit that offers immediate architectural structure.",
    matureSize: "25 – 35 ft Height × 15 – 20 ft Spread",
    growthRate: "Moderate to Fast",
    foliage: "Evergreen (Year-round dense glossy foliage)",
    sunRequirement: "Full Sun to Partial Shade",
    droughtTolerance: "High once established",
    idealUse: "Formal living privacy screens, poolside framing, and tall perimeter hedges.",
    expertTip:
      "Superb choice for tight boundary lines where wide-spreading shade trees would overwhelm the fence. Plant 6–8 feet apart for a seamless green wall.",
    keyBenefits: [
      "Dense evergreen screening for total privacy",
      "Continuous display of red accent foliage throughout the year",
      "Naturally upright, orderly pyramidal habit",
      "Non-invasive root system suitable near walkways and pools"
    ]
  },
  {
    id: "little-gem-magnolia",
    name: "Little Gem Magnolia",
    botanicalName: "Magnolia grandiflora 'Little Gem'",
    category: "flowering",
    categoryLabel: "Flowering & Accent",
    badge: "Fragrant Southern Charm",
    tagline: "Prolific lemon-scented ivory blossoms and two-toned velvet leaves.",
    image: imgLittleGemMagnolia,
    description:
      "A compact cultivar of the classic Southern Magnolia, Little Gem offers all the majestic beauty of its larger parent in a scale perfectly suited for suburban yards. Enjoy enormous, cup-shaped white flowers with an intoxicating lemon-citrus fragrance from late spring through late summer.",
    matureSize: "20 – 25 ft Height × 10 – 12 ft Spread",
    growthRate: "Moderate",
    foliage: "Evergreen (Glossy dark green with fuzzy bronze undersides)",
    sunRequirement: "Full Sun to Partial Shade",
    droughtTolerance: "High once established",
    idealUse: "Courtyard focal point, flanking formal entryways, or specimen groupings.",
    expertTip:
      "Little Gem thrives in slightly acidic, well-draining soil. We integrate composted pine bark and slow-release organic fertilizers during planting.",
    keyBenefits: [
      "Fragrant 8-inch creamy white blossoms over a 5-month blooming period",
      "Rich velvety bronze leaf undersides offer dual-tone aesthetics",
      "Compact footprint won't crowd foundations or rooflines",
      "Resilient to high winds, heat, and seasonal drought"
    ]
  },
  {
    id: "eagleston-holly",
    name: "Eagleston Holly",
    botanicalName: "Ilex × attenuata 'Eagleston'",
    category: "evergreen",
    categoryLabel: "Evergreen & Privacy",
    badge: "Winter Berry Display",
    tagline: "Soft, spineless evergreen foliage loaded with brilliant winter berries.",
    image: imgEaglestonHolly,
    description:
      "A natural hybrid between Dahoon Holly and American Holly, Eagleston Holly features soft, spineless leaves and an abundance of vivid scarlet berries that persist throughout the entire winter season. Its neat conical shape makes it an exceptional choice for privacy and visual interest.",
    matureSize: "20 – 25 ft Height × 10 – 15 ft Spread",
    growthRate: "Moderate",
    foliage: "Evergreen (Soft spineless emerald foliage)",
    sunRequirement: "Full Sun to Part Sun",
    droughtTolerance: "High once established",
    idealUse: "Living privacy walls, corner lot anchoring, and courtyard screens.",
    expertTip:
      "Eagleston Hollies take pruning exceptionally well. Can be limbed up as a formal multi-trunk specimen or kept branched to the ground for solid screening.",
    keyBenefits: [
      "Stunning heavy red berries providing vibrant winter color",
      "Soft foliage without the sharp prickles of common hollies",
      "Attracts songbirds and beneficial garden wildlife",
      "Outstanding heat tolerance and low maintenance needs"
    ]
  },
  {
    id: "sabal-palm",
    name: "Sabal Palm",
    botanicalName: "Sabal palmetto / Texas Sabal",
    category: "palm",
    categoryLabel: "Texas Palm",
    badge: "Texas Freeze Hardy",
    tagline: "The rugged native palm that survived every historic Texas freeze.",
    image: imgSabalPalm,
    description:
      "The undisputed king of cold-hardy palms in Texas, the Sabal Palm brings resort-style coastal elegance to your property without the cold sensitivity of tropical palms. It withstands single-digit winter freezes, blistering Texas summers, and heavy limestone clay with unmatched vitality.",
    matureSize: "25 – 40 ft Height × 12 – 16 ft Canopy Spread",
    growthRate: "Moderate",
    foliage: "Evergreen (Deep green fan-shaped fronds)",
    sunRequirement: "Full Sun",
    droughtTolerance: "Exceptional",
    idealUse: "Swimming pool surrounds, resort backyard themes, and dramatic vertical accents.",
    expertTip:
      "Plant with the root flare exactly level with grade. Once established, Sabal Palms require virtually no supplemental water and survive Texas winter freezes effortlessly.",
    keyBenefits: [
      "Survives temperatures down to 0°F without freeze damage",
      "Deeply anchored root system virtually immune to windstorms",
      "Zero messy fruit drop or high fertilizer demands",
      "Delivers instant tropical luxury and year-round vacation ambiance"
    ]
  },
  {
    id: "dd-blanchard-magnolia",
    name: "Magnolia 'D.D. Blanchard'",
    botanicalName: "Magnolia grandiflora 'D.D. Blanchard'",
    category: "flowering",
    categoryLabel: "Flowering & Accent",
    badge: "Grand Southern Monarch",
    tagline: "Majestic scale, immense fragrant blossoms, and velvety cinnamon backing.",
    image: imgDDBlanchard,
    description:
      "The premier choice for large estates and prominent front lawns, 'D.D. Blanchard' is renowned for having the deepest rusty-cinnamon suede undersides of any Southern Magnolia. Its massive, waxy white blossoms emit a sublime lemon fragrance that fills the evening air.",
    matureSize: "45 – 55 ft Height × 25 – 35 ft Spread",
    growthRate: "Moderate",
    foliage: "Evergreen (Large leathery green leaves with rust suede undersides)",
    sunRequirement: "Full Sun to Light Shade",
    droughtTolerance: "High once established",
    idealUse: "Grand estate front lawns, wide boundary focal points, and street-facing showcases.",
    expertTip:
      "Give this tree room to grow. Its majestic natural pyramidal form requires minimal structural pruning when provided adequate breathing space.",
    keyBenefits: [
      "Iconic 10-inch lemon-scented ivory blooms",
      "Intensely colored cinnamon-brown velvet leaf undersides",
      "Maintains dense evergreen coverage even in mid-winter",
      "Adds monumental curb appeal and real estate value"
    ]
  },
  {
    id: "crape-myrtle",
    name: "Crape Myrtle",
    botanicalName: "Lagerstroemia indica",
    category: "flowering",
    categoryLabel: "Flowering & Accent",
    badge: "100 Days of Blooms",
    tagline: "Prolific summer blossoms, vibrant fall tones, and sculpted satin bark.",
    image: imgCrapeMyrtle,
    description:
      "Known as the 'Lilac of the South', Crape Myrtles are a San Antonio staple for good reason. They produce clusters of brilliant crepe-paper blooms for over three consecutive months during the hottest summer heat. In winter, their smooth, fluted trunks exhibit rich cinnamon-copper peeling bark.",
    matureSize: "15 – 25 ft Height × 12 – 18 ft Spread",
    growthRate: "Fast",
    foliage: "Deciduous (Lush green summer, vibrant scarlet/gold fall, sculpted winter bark)",
    sunRequirement: "Full Sun (6+ hours for maximum flowers)",
    droughtTolerance: "Exceptional",
    idealUse: "Patio framing, driveway borders, outdoor kitchen accent, and corner garden beds.",
    expertTip:
      "Never commit 'crape murder' by topping the tree. We prune only crossing branches and basal suckers to reveal the magnificent natural sculpted trunk architecture.",
    keyBenefits: [
      "Over 100 days of continuous summer blooming",
      "Four-season interest: flowers, fall colors, and sculptural winter bark",
      "Highly adaptable to thin limestone soils and alkaline water",
      "Available in vivid hues including watermelon red, purple, pink, and pure white"
    ]
  },
  {
    id: "live-oak",
    name: "Texas Live Oak",
    botanicalName: "Quercus virginiana",
    category: "shade",
    categoryLabel: "Shade Tree",
    badge: "The Texas Heritage Champion",
    tagline: "Generational longevity, sprawling horizontal limbs, and timeless canopy shade.",
    image: imgLiveOak,
    description:
      "The undisputed emblem of the Texas Hill Country, the Texas Live Oak is famous for its massive, picturesque horizontal branches and evergreen foliage. A single mature Live Oak creates a sprawling natural pavilion of shade that lowers surrounding temperatures by up to 15 degrees in summer.",
    matureSize: "40 – 50 ft Height × 60 – 80 ft Spread",
    growthRate: "Moderate (Long-lived for centuries)",
    foliage: "Semi-Evergreen (Retains green leaves through winter until spring bud break)",
    sunRequirement: "Full Sun",
    droughtTolerance: "Supreme once rooted",
    idealUse: "Main lawn canopy, sprawling backyards, acreage properties, and heritage investments.",
    expertTip:
      "Live Oaks thrive in shallow limestone soils. In Texas, always prune strictly between July and January to avoid oak wilt risk; our licensed arborists seal every cut.",
    keyBenefits: [
      "Provides expansive cooling shade that significantly reduces home cooling costs",
      "Increases residential property values more than almost any other landscape feature",
      "Withstands brutal Texas droughts, hail, wind, and severe ice storms",
      "Lives for 200+ years as a cherished family and estate heirloom"
    ]
  },
  {
    id: "carolina-cherry",
    name: "Carolina Cherry",
    botanicalName: "Prunus caroliniana",
    category: "evergreen",
    categoryLabel: "Evergreen & Privacy",
    badge: "Rapid Privacy Screen",
    tagline: "Dense glossy foliage, fragrant spring blossoms, and rapid green coverage.",
    image: imgCarolinaCherry,
    description:
      "A fast-growing Texas native evergreen, the Carolina Cherry Laurel is one of the most reliable selections for creating a fast living privacy buffer between homes. Its dark green, lustrous leaves release a pleasant maraschino cherry aroma when crushed, complemented by creamy spring flowers.",
    matureSize: "20 – 30 ft Height × 15 – 20 ft Spread",
    growthRate: "Fast (2 – 3 ft/year)",
    foliage: "Evergreen (Year-round dense glossy leaves)",
    sunRequirement: "Full Sun to Partial Shade",
    droughtTolerance: "High once established",
    idealUse: "Fence line privacy barriers, HOA visual buffers, windbreaks, and small shade trees.",
    expertTip:
      "Can be sheared into a crisp formal hedge or allowed to grow naturally as a graceful multi-stem small specimen tree.",
    keyBenefits: [
      "Rapid growth fills in privacy gaps within 1–2 growing seasons",
      "Tolerates poor, rocky soils and urban heat islands",
      "Pleasant fragrant spring flowers that attract native pollinators",
      "Evergreen protection from street noise, wind, and neighbor views"
    ]
  },
  {
    id: "shumard-oak",
    name: "Shumard Red Oak",
    botanicalName: "Quercus shumardii",
    category: "shade",
    categoryLabel: "Shade Tree",
    badge: "Hill Country Favorite",
    tagline: "Stately symmetrical canopy, rapid growth, and brilliant scarlet autumn foliage.",
    image: imgShumardOak,
    description:
      "The Shumard Oak is one of the fastest-growing and most adaptable red oaks for San Antonio and Hill Country properties. Unlike other oaks that yellow in alkaline limestone, Shumard Oak thrives in high-pH soils, rewarding homeowners with a broad rounded canopy and fiery autumn color.",
    matureSize: "50 – 60 ft Height × 40 – 50 ft Spread",
    growthRate: "Fast for an oak (2+ ft/year)",
    foliage: "Deciduous (Deep lobed green leaves turning brilliant scarlet in November)",
    sunRequirement: "Full Sun",
    droughtTolerance: "Very High once established",
    idealUse: "Expansive front lawn canopy, avenue planting, and southern exposure shading.",
    expertTip:
      "Planting a 45-gallon or 65-gallon container specimen gives you an instant 12–16 foot tree that quickly doubles in stature within 4 years with proper drip irrigation.",
    keyBenefits: [
      "Exceptional tolerance of rocky, high-pH South Texas caliche and limestone",
      "Fast growth provides cooling shade years ahead of traditional slow oaks",
      "Vivid scarlet and burgundy autumn display",
      "Strong branching structure resistant to severe storm breakage"
    ]
  }
];

const plantingProcess = [
  {
    step: "01",
    title: "On-Site Evaluation & Specimen Match",
    icon: Compass,
    description:
      "Robert Thompson visits your property to evaluate sun paths, soil depth, underground utility clearances, and architectural framing to recommend species that thrive for decades."
  },
  {
    step: "02",
    title: "Hand-Picked Nursery Selection",
    icon: Trees,
    description:
      "We hand-select robust, acclimatized specimen trees directly from premier Texas grower nurseries—inspecting root structure, trunk taper, and branch symmetry."
  },
  {
    step: "03",
    title: "Soil Excavation & Conditioning",
    icon: Shovel,
    description:
      "We excavate wide, saucer-shaped planting pits with fractured sidewalls, enriching the native soil with compost, mycorrhizal fungi, and organic root stimulants."
  },
  {
    step: "04",
    title: "Turnkey Planting, Staking & Drip Sync",
    icon: Droplets,
    description:
      "We handle heavy crane and machinery placement, install double arbor-tie staking, apply hardwood mulch rings, and coordinate automated drip irrigation for guaranteed rooting."
  }
];

const treeFaqs = [
  {
    question: "What is the best time of year to plant specimen trees in San Antonio?",
    answer:
      "While fall and early winter (October through February) are ideal because roots establish during the dormant period before summer heat arrives, container-grown specimen trees sourced by JRM can be successfully installed year-round thanks to our specialized soil preparation, root stimulants, and calibrated drip irrigation."
  },
  {
    question: "Do you supply mature and large-caliper trees, or only small saplings?",
    answer:
      "We specialize exclusively in mature, large-scale specimen trees—from 45-gallon and 100-gallon container stock to massive 200+ gallon ball-and-burlap specimen trees. We provide turnkey delivery, hydraulic equipment, crane placement, and structural planting."
  },
  {
    question: "How do you protect trees from Texas summer heat and freeze events?",
    answer:
      "Every species in our top-selling lineup is hand-picked for proven resilience in South Texas Zone 8b/9a climates. Furthermore, we install deep-root soaking rings and 3-inch hardwood mulch barriers that regulate root temperature during both 105°F heatwaves and single-digit winter freezes."
  },
  {
    question: "Can JRM integrate automatic drip irrigation for newly planted trees?",
    answer:
      "Yes. JRM is a licensed irrigation contractor. We can tap into your existing sprinkler system or build a dedicated low-volume drip irrigation zone with emitter rings calibrated to deliver the precise gallonage required for deep root establishment without water waste."
  },
  {
    question: "Are your trees protected by a planting and health warranty?",
    answer:
      "Yes. When JRM provides turnkey specimen sourcing, professional soil preparation, and irrigation integration, we stand behind the health and viability of our trees. Robert Thompson Personally oversees every installation."
  }
];

function BestSellingTreesPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "shade" | "evergreen" | "flowering" | "palm">("all");
  const [activeTreeModal, setActiveTreeModal] = useState<TreeItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const filterId = useId();

  const filteredTrees =
    selectedCategory === "all"
      ? treesCatalog
      : treesCatalog.filter((tree) => tree.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-neutral-900 font-sans selection:bg-[#577a4c] selection:text-white">
      {/* JSON-LD Schema: Service + ItemList + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://jrmconstructionservicellc.com/best-selling-trees#service",
                "name": "Best Selling Specimen Trees & Tree Installation San Antonio TX",
                "serviceType": "Tree Sourcing and Professional Tree Planting Contractor",
                "provider": { "@id": "https://jrmconstructionservicellc.com/#business" },
                "areaServed": "San Antonio, TX and 80-mile regional service radius",
                "description": "Curated selection and turnkey installation of top-selling Texas-acclimated specimen trees including Texas Live Oak, Sabal Palm, Japanese Blueberry, Little Gem Magnolia, and Red Maple."
              },
              {
                "@type": "ItemList",
                "@id": "https://jrmconstructionservicellc.com/best-selling-trees#itemlist",
                "name": "Top 10 Best Selling Trees for San Antonio & Texas Hill Country",
                "itemListElement": treesCatalog.map((tree, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": `${tree.name} (${tree.botanicalName})`,
                  "description": tree.description
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://jrmconstructionservicellc.com/best-selling-trees#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jrmconstructionservicellc.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://jrmconstructionservicellc.com/services" },
                  { "@type": "ListItem", "position": 3, "name": "Best Selling Trees", "item": "https://jrmconstructionservicellc.com/best-selling-trees" }
                ]
              }
            ]
          })
        }}
      />

      <SiteHeader />

      {/* ── HERO BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[520px] md:min-h-[600px] lg:min-h-[660px] flex items-center justify-center text-center px-6 py-20">
          {/* Background image & gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center ken-burns-hero"
            style={{ backgroundImage: `url(${imgLiveOak})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#182312]/82 to-[#0e1608]/94 z-10" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Pill Badge */}
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[#d5e4cf] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 shadow-sm">
              <Trees className="w-4 h-4 text-[#a5b89d]" />
              Premier Texas Specimen Collection
            </span>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              San Antonio's Best Selling Trees
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-200 font-light leading-relaxed max-w-3xl drop-shadow-sm">
              Elevate your estate with hand-selected, Texas-acclimated specimen trees. From majestic Live Oaks and freeze-hardy Sabal Palms to lush Japanese Blueberries and fragrant Magnolias—sourced directly from premier nurseries and planted with 35+ years of master craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] px-7 py-3.5 text-white text-sm font-bold tracking-wide uppercase hover:from-[#4d6c43] hover:to-[#33472c] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_16px_rgba(87,122,76,0.4)]"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Top 10 Trees</span>
              </a>
              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3.5 text-white text-sm font-bold tracking-wide uppercase hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Tree Consultation</span>
              </Link>
            </div>

            {/* Quick Stat Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-white/15 pt-8 w-full max-w-3xl">
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white">35+</span>
                <span className="text-xs text-neutral-300 font-medium">Years Local Experience</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white">100%</span>
                <span className="text-xs text-neutral-300 font-medium">Texas Climate Tested</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white">Turnkey</span>
                <span className="text-xs text-neutral-300 font-medium">Delivery & Crane Planting</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white">A+</span>
                <span className="text-xs text-neutral-300 font-medium">Licensed & Bonded Pro</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <style>{`
        @keyframes kenBurnsHero {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
        .ken-burns-hero {
          animation: kenBurnsHero 10s ease-in-out infinite alternate;
        }
      `}</style>

      {/* ── EDITORIAL STORY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 items-center">
            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Horticultural Precision
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Sourcing the Right Tree Matters in South Texas
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#3d5636] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                San Antonio and the surrounding Texas Hill Country present unique environmental challenges: shallow alkaline caliche soils, intense summer heat exceeding 100°F, periodic severe droughts, and occasional sub-freezing polar plunges. Generic nursery stock from big-box stores simply does not withstand these rigorous conditions.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                At JRM Construction Landscaping Design, founder Robert Thompson brings over 35 years of hands-on local experience. We curate, hand-pick, transport, and install premier containerized and specimen trees specifically chosen for their proven resilience, root vitality, and timeless aesthetic power.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Whether you need a stately Texas Live Oak for an expansive lawn, dense Japanese Blueberries for resort-like privacy, or cold-hardy Sabal Palms framing your pool, every tree we plant is an investment in permanent beauty and long-term estate value.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="tel:2104295526"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3d5636] hover:bg-[#2d4028] px-6 py-3 text-white text-sm font-semibold transition-all duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Robert: (210) 429-5526</span>
                </a>
                <Link
                  to="/palm-trees"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3d5636] hover:text-[#577a4c] transition-colors"
                >
                  <span>Also see Palm Tree Specialty</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[460px] mx-auto flex items-center justify-center py-6"
            >
              <div className="absolute top-2 left-2 right-[-6px] bottom-[-6px] sm:right-[-10px] sm:bottom-[-10px] border-2 border-[#577a4c]/20 rounded-2xl z-0 select-none pointer-events-none" />
              <img
                src={imgDDBlanchard}
                alt="Magnolia D.D. Blanchard Specimen Tree"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/5]"
              />
              <div className="absolute -bottom-2 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20 max-w-[210px]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3d5636]">100% Acclimated</span>
                <span className="text-xs text-neutral-600 font-light mt-0.5 leading-snug">
                  Grown and hardened for South Texas limestone soils.
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── TOP SELLING CATALOG & SHOWCASE ── */}
      <div id="catalog" className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px] scroll-mt-6">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Curated Specimen Catalog
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The 10 Best Selling Trees
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Filter by landscape purpose or click any specimen to view comprehensive growth habits, mature dimensions, sun requirements, and expert planting tips.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: "all", label: "All Top Sellers" },
              { id: "shade", label: "Shade Trees" },
              { id: "evergreen", label: "Evergreen & Privacy" },
              { id: "flowering", label: "Flowering & Accent" },
              { id: "palm", label: "Texas Hardy Palms" }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`${filterId}-${tab.id}`}
                onClick={() => setSelectedCategory(tab.id as typeof selectedCategory)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? "bg-[#3d5636] text-white shadow-md scale-105"
                    : "bg-white text-neutral-700 border border-neutral-200/80 hover:bg-neutral-100 hover:border-neutral-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tree Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTrees.map((tree, idx) => (
              <motion.div
                key={tree.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }}
                className="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#577a4c]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative aspect-square overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setActiveTreeModal(tree)}>
                    <img
                      src={tree.image}
                      alt={tree.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2d4028] text-[11px] font-bold shadow-sm">
                        <Leaf className="w-3.5 h-3.5 text-[#577a4c]" />
                        {tree.badge}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {tree.categoryLabel}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3
                        className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {tree.name}
                      </h3>
                      <p className="text-xs text-neutral-300 italic font-light tracking-wide">
                        {tree.botanicalName}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-neutral-600 leading-relaxed font-light line-clamp-2">
                      {tree.description}
                    </p>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 text-[11px] text-neutral-600 border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        <Ruler className="w-3.5 h-3.5 text-[#577a4c] shrink-0" />
                        <span className="truncate">{tree.matureSize.split("×")[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{tree.sunRequirement.split("to")[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>Drought: {tree.droughtTolerance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{tree.growthRate.split("(")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-neutral-100">
                  <button
                    onClick={() => setActiveTreeModal(tree)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#3d5636]/30 text-[#3d5636] hover:bg-[#3d5636] hover:text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </button>
                  <Link
                    to="/lets-talk"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#577a4c] hover:bg-[#47673e] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── NURSERY SPECIMEN STOCK SPOTLIGHT ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#23321e] text-white border border-neutral-800 shadow-[0_12px_40px_rgb(0,0,0,0.08)] px-6 py-20 md:px-12 lg:px-16 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(35,50,30,0.96), rgba(20,30,16,0.95)), url(${welBg})`,
            backgroundSize: "cover"
          }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-16 items-center">
            {/* Left Photo of Nursery Container Stock */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[480px] mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[3/4]">
                <img
                  src={imgContainerStock}
                  alt="Real containerized specimen trees at our nursery ready for immediate planting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block bg-[#577a4c] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                    Direct Nursery Stock
                  </span>
                  <h4 className="text-lg font-bold">Heavy-Caliber Container Specimens</h4>
                  <p className="text-xs text-neutral-300 font-light mt-1">
                    Vigorous, intact root systems with zero transplant setback. Ready for estate installation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-flex items-center bg-white/10 border border-white/20 text-[#a5b89d] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-wider">
                The Nursery Difference
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Large Container Specimens Deliver Instant Impact
              </h2>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light">
                Unlike bare-root saplings that take a decade to provide meaningful shade or privacy, JRM sources robust 45-gallon, 65-gallon, and 100+ gallon container specimen trees.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#a5b89d] border border-white/15">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">100% Intact Root Architecture</h4>
                    <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed mt-1">
                      Containerized trees preserve the entire fine fibrous root system, ensuring immediate water uptake and vigorous growth in week one.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#a5b89d] border border-white/15">
                    <Truck className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">Turnkey Equipment & Crane Placement</h4>
                    <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed mt-1">
                      Our commercial boom trucks and specialized machinery maneuver heavy specimen root balls safely into your yard without damaging turf or structures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#a5b89d] border border-white/15">
                    <HeartHandshake className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">Soil Prep & Establishment Guarantee</h4>
                    <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed mt-1">
                      We condition native caliche with rich organic compost and mycorrhizal inoculants, ensuring 100% successful acclimatization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/lets-talk"
                  className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] text-white px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl hover:scale-[1.03]"
                >
                  <span>Inquire About Nursery Stock</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── 4-STEP PLANTING PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Proven Standards
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The JRM Precision Planting Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Tree longevity depends 80% on planting depth, soil prep, and initial irrigation. Here is how we ensure your trees thrive for generations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plantingProcess.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/60 p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-[#577a4c]/25">{step.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── FAQ ACCORDION SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
                Got Questions?
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Tree Selection & Planting FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {treeFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-neutral-200/80 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-neutral-900 text-sm md:text-base hover:text-[#3d5636] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#3d5636]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ── BOTTOM CALL TO ACTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(${welBg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Enhance Your Landscape with Specimen Trees?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Schedule an on-site consultation with Robert Thompson. We will assess your space, recommend the ideal species, source healthy containerized specimens, and provide full turnkey planting with deep watering and mulch.
            </p>

            <p className="text-sm font-bold text-[#a5b89d] mb-10 tracking-widest uppercase">
              Call (210) 429-5526 for Immediate Consultation & Pricing
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                JRM Construction Landscaping Design
              </h3>

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
                  <MapPin className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Serving San Antonio, Boerne, New Braunfels, Canyon Lake & Surrounding Areas</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Fully Licensed, Insured & Bonded | 35+ Years Local Experience</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Robert Directly
              </a>
              <Link
                to="/lets-talk"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── MODAL: SPECIFICATIONS & EXPERT TIPS ── */}
      <AnimatePresence>
        {activeTreeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTreeModal(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveTreeModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-neutral-800 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image */}
              <div className="relative md:w-5/12 bg-neutral-900 h-64 md:h-auto shrink-0">
                <img
                  src={activeTreeModal.image}
                  alt={activeTreeModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                  <h3 className="text-xl font-bold">{activeTreeModal.name}</h3>
                  <p className="text-xs text-neutral-300 italic">{activeTreeModal.botanicalName}</p>
                </div>
              </div>

              {/* Right Column: Details & Specs (Scrollable) */}
              <div className="p-6 md:p-8 md:w-7/12 overflow-y-auto space-y-6">
                <div className="hidden md:block">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#577a4c]/10 text-[#3d5636] font-bold text-xs uppercase tracking-wider mb-2">
                    {activeTreeModal.categoryLabel}
                  </span>
                  <h3
                    className="text-2xl lg:text-3xl font-extrabold text-neutral-900"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {activeTreeModal.name}
                  </h3>
                  <p className="text-sm text-neutral-500 italic mt-0.5">
                    {activeTreeModal.botanicalName}
                  </p>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed font-light">
                  {activeTreeModal.description}
                </p>

                {/* Specs Table */}
                <div className="bg-[#f8f8f6] rounded-2xl p-4 border border-neutral-200/70 space-y-2.5 text-xs text-neutral-700">
                  <div className="flex justify-between py-1 border-b border-neutral-200/50">
                    <span className="font-semibold text-neutral-900">Mature Dimensions:</span>
                    <span>{activeTreeModal.matureSize}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/50">
                    <span className="font-semibold text-neutral-900">Growth Rate:</span>
                    <span>{activeTreeModal.growthRate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/50">
                    <span className="font-semibold text-neutral-900">Foliage Type:</span>
                    <span>{activeTreeModal.foliage}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/50">
                    <span className="font-semibold text-neutral-900">Sunlight Needs:</span>
                    <span>{activeTreeModal.sunRequirement}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/50">
                    <span className="font-semibold text-neutral-900">Drought Resilience:</span>
                    <span className="font-semibold text-[#3d5636]">{activeTreeModal.droughtTolerance}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-neutral-900">Ideal Application:</span>
                    <span className="text-right max-w-[220px]">{activeTreeModal.idealUse}</span>
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                    Key Landscape Advantages
                  </h4>
                  <ul className="space-y-1.5">
                    {activeTreeModal.keyBenefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#577a4c] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expert Tip */}
                <div className="p-3.5 rounded-xl bg-[#577a4c]/10 border border-[#577a4c]/20 text-xs text-[#2b3e26]">
                  <span className="font-bold block mb-1">Expert Tip from Robert Thompson:</span>
                  <span className="font-light">{activeTreeModal.expertTip}</span>
                </div>

                {/* Modal CTA */}
                <div className="pt-2 flex gap-3">
                  <Link
                    to="/lets-talk"
                    onClick={() => setActiveTreeModal(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#3d5636] hover:bg-[#2d4028] text-white py-3 px-5 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Request Pricing & Planting</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:2104295526"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-800 py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
