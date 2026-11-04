import svcOutdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import svcCoveredPatios from "@/assets/svc-covered-patios.jpg";
import svcHouseRemodeling from "@/assets/svc-house-remodeling.jpg";
import svcHardscapes from "@/assets/svc-hardscapes.jpg";
import svcFireplace from "@/assets/svc-fireplace.jpg";
import svcStampedConcrete from "@/assets/svc-stamped-concrete.jpg";
import svcArtificialTurf from "@/assets/svc-artificial-turf.jpg";
import svcFencing from "@/assets/svc-fencing.jpg";
import svcCustomDecks from "@/assets/svc-custom-decks.jpg";
import bestAduConstruction from "@/assets/best-adu-construction.webp";
import svcPalmTrees from "@/assets/svc-palm-trees.jpg";
import svcLandscapeLighting from "@/assets/svc-landscape-lighting.jpg";
import welcomePavilion from "@/assets/welcome-pavilion.jpg";
import welcomePool from "@/assets/welcome-pool.jpg";
import svcSoftscapes from "@/assets/svc-softscapes.jpg";
import svcNewConstruction from "@/assets/svc-new-construction.jpg";
import statsJobsite from "@/assets/stats-jobsite.jpg";

export interface ProjectCaseStudy {
  id: string;
  projectName: string;
  location: string;
  locationSlug: string;
  category: "Remodeling" | "Outdoor Living" | "Hardscapes" | "Landscaping" | "Construction";
  image: string;
  secondaryImage?: string;
  imageAlt: string;
  customerRequirements: string;
  designConcept: string;
  constructionChallenges: string;
  materialsUsed: string[];
  workPerformed: string[];
  finalOutcome: string;
  relevantServices: { name: string; to: string }[];
}

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "stone-oak-outdoor-kitchen-pavilion",
    projectName: "Stone Oak Custom Limestone Outdoor Kitchen & Covered Pavilion",
    location: "San Antonio, TX (Stone Oak)",
    locationSlug: "san-antonio-tx",
    category: "Outdoor Living",
    image: svcOutdoorKitchens,
    secondaryImage: welcomePavilion,
    imageAlt: "Completed custom Texas limestone outdoor kitchen with built-in stainless steel grill, granite bar island, and timber pavilion in Stone Oak, San Antonio, TX",
    customerRequirements:
      "The homeowners wanted to replace an unshaded builder-grade concrete slab with a covered, year-round outdoor cooking and entertaining room capable of hosting family gatherings even during peak South Texas summer heat.",
    designConcept:
      "An L-shaped masonry cooking island anchored beneath a heavy-timber covered patio pavilion, combining hand-cut Texas limestone veneer with heat-resistant granite countertops and bar-height seating for six.",
    constructionChallenges:
      "Excavating over shallow Edwards Plateau limestone shelf to trench dedicated natural gas, GFCI electrical circuits, and water/drain lines while tying the pavilion roof structure seamlessly into the existing two-story fascia.",
    materialsUsed: [
      "Hand-quarried Texas white & buff limestone veneer",
      "304 marine-grade stainless steel built-in gas grill, side burner, and access doors",
      "Level-3 sealed granite countertops with chiseled edge profile",
      "Heavy structural Western Red Cedar posts and beams",
      "Cementitious non-combustible concrete board framing and steel studs"
    ],
    workPerformed: [
      "Poured reinforced 4,000 PSI concrete foundation extension dowelled into the existing patio",
      "Trenched and pressure-tested underground gas line and dedicated 20-amp weatherproof electrical circuits",
      "Framed non-combustible steel-stud kitchen island and laid natural Texas limestone masonry",
      "Constructed structural timber patio cover with recessed LED task lighting and ceiling fan rough-in",
      "Installed granite countertops, stainless steel appliances, and proper grill hood ventilation"
    ],
    finalOutcome:
      "Delivered a fully functional, code-compliant outdoor kitchen and shaded dining pavilion that stays comfortable through San Antonio summers and functions as a seamless extension of the indoor kitchen.",
    relevantServices: [
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens" },
      { name: "Covered Patios", to: "/covered-patios" },
      { name: "Landscape Lighting", to: "/landscape-lighting" }
    ]
  },
  {
    id: "alamo-heights-kitchen-interior-remodel",
    projectName: "Alamo Heights Open-Concept Kitchen & Structural Interior Remodel",
    location: "Alamo Heights, TX",
    locationSlug: "alamo-heights-tx",
    category: "Remodeling",
    image: svcHouseRemodeling,
    secondaryImage: statsJobsite,
    imageAlt: "Completed open-concept kitchen remodel with custom cabinetry, quartz waterfall island, and recessed lighting in Alamo Heights, TX",
    customerRequirements:
      "Modernize a compartmentalized mid-century kitchen and dining room in Alamo Heights into an open, light-filled culinary workspace while preserving the architectural integrity of the home.",
    designConcept:
      "Remove the dividing partition wall to create an expansive center island layout featuring custom solid-wood shaker cabinetry, a quartz prep and seating island, under-cabinet LED task illumination, and wide-plank flooring.",
    constructionChallenges:
      "Replacing a load-bearing interior partition wall with a flush-mounted engineered LVL structural beam inside an older ceiling cavity without dropping soffit height, while upgrading legacy electrical panels and plumbing lines to current code.",
    materialsUsed: [
      "Engineered laminated veneer lumber (LVL) structural header beam",
      "Custom solid maple shaker cabinetry with soft-close hardware",
      "Non-porous engineered quartz countertops and full-height tile backsplash",
      "Dedicated 20-amp kitchen small-appliance circuits and recessed 3000K LED fixtures",
      "Moisture-resistant luxury vinyl plank and porcelain tile flooring"
    ],
    workPerformed: [
      "Installed temporary structural shoring walls and removed load-bearing interior partition",
      "Set flush engineered beam and completed municipal structural framing inspection",
      "Rough-in upgraded PEX supply lines, drain relocation, and NEC-compliant electrical circuits",
      "Installed custom cabinetry, quartz countertops, tile backsplash, and trim carpentry",
      "Completed dust-controlled drywall finishing, low-VOC painting, and fixture commissioning"
    ],
    finalOutcome:
      "Transformed a closed-off floor plan into a bright, ergonomic chef's kitchen and gathering space, completed on schedule with full City of Alamo Heights code compliance.",
    relevantServices: [
      { name: "House Remodeling", to: "/house-remodeling" },
      { name: "General Contracting", to: "/general-contracting" },
      { name: "3D Design Service", to: "/design-service" }
    ]
  },
  {
    id: "boerne-limestone-fireplace-covered-patio",
    projectName: "Boerne Hill Country Custom Stone Fireplace & Gable Covered Patio",
    location: "Boerne, TX",
    locationSlug: "boerne-tx",
    category: "Outdoor Living",
    image: svcFireplace,
    secondaryImage: svcCoveredPatios,
    imageAlt: "Custom floor-to-ceiling Texas limestone outdoor fireplace and cedar-beamed covered patio in Boerne, TX",
    customerRequirements:
      "Create an authentic Hill Country outdoor living room in Boerne anchored by a wood-burning and gas-assisted stone fireplace capable of blocking prevailing northern winter winds.",
    designConcept:
      "A gable-roofed covered patio with exposed cedar trusses framing a massive hand-chiseled Texas limestone hearth, rough-hewn cedar mantel, raised stone hearth bench, and integrated media alcove.",
    constructionChallenges:
      "Engineering a deep reinforced concrete footing on sloped rocky caliche terrain to support the concentrated dead load of a full-masonry limestone chimney and firebox, while ensuring proper draft clearance above the roof ridge.",
    materialsUsed: [
      "Chopped Texas Hill Country limestone and natural flagstone hearth caps",
      "Firebrick refractory liner and high-temperature refractory mortar",
      "Hand-selected kiln-dried Western Red Cedar mantel beam and roof trusses",
      "Architectural shingles matched to the primary residence",
      "Rebar-reinforced concrete pier and footing foundation"
    ],
    workPerformed: [
      "Excavated into limestone sub-base and poured steel-reinforced structural fireplace footing",
      "Constructed CMU block core, refractory firebrick chamber, smoke shelf, and damper assembly",
      "Hand-laid chopped Texas limestone veneer with custom flagstone hearth extensions",
      "Framed and roofed gable patio extension tied into the main residence roofline",
      "Wired weather-rated outdoor television receptacle and sconce lighting into stone columns"
    ],
    finalOutcome:
      "Built a commanding architectural focal point that provides radiant warmth during Hill Country winters and shaded comfort all summer.",
    relevantServices: [
      { name: "Custom Fireplaces", to: "/custom-fireplaces" },
      { name: "Covered Patios", to: "/covered-patios" },
      { name: "Hardscaping", to: "/hardscapes" }
    ]
  },
  {
    id: "helotes-retaining-wall-flagstone-hardscape",
    projectName: "Helotes Sloped Backyard Retaining Wall & Flagstone Patio Hardscape",
    location: "Helotes, TX",
    locationSlug: "helotes-tx",
    category: "Hardscapes",
    image: svcHardscapes,
    secondaryImage: welcomePool,
    imageAlt: "Engineered stone retaining wall, interlocking paver walkway, and flagstone patio on a sloped lot in Helotes, TX",
    customerRequirements:
      "Stop severe stormwater runoff and soil erosion on a sloped Helotes backyard while reclaiming level, usable terrace space for a patio and walkway.",
    designConcept:
      "A terraced stone retaining wall system with integrated subsurface French drainage, paired with a mortared flagstone and interlocking stone paver patio.",
    constructionChallenges:
      "Managing hydrostatic water pressure during heavy South Texas flash rains and transitioning across steep grade changes without disturbing mature live oak root zones.",
    materialsUsed: [
      "Heavy structural limestone retaining wall blocks and natural stone caps",
      "Perforated schedule-40 PVC French drain pipe and washed #57 drainage gravel",
      "Non-woven geotextile filter fabric and biaxial geogrid reinforcement",
      "Natural Oklahoma and Texas flagstone slabs with polymeric and mortared joints",
      "Compacted crushed limestone road-base sub-grade"
    ],
    workPerformed: [
      "Surveyed site elevations and excavated stepped footing trenches along the slope contour",
      "Installed compacted aggregate leveling pad, first-course pin alignment, and geogrid layers",
      "Constructed perforated French drain pipe wrapped in washed gravel and filter fabric behind wall",
      "Installed weep outlets and graded upper terrace for positive drainage away from the home",
      "Laid natural flagstone patio and stone walkway borders"
    ],
    finalOutcome:
      "Eliminated backyard soil washout and created two level, usable outdoor terraces with enduring structural stability.",
    relevantServices: [
      { name: "Hardscaping", to: "/hardscapes" },
      { name: "Softscapes", to: "/softscapes" },
      { name: "Irrigation Systems", to: "/irrigation" }
    ]
  },
  {
    id: "new-braunfels-stamped-concrete-patio",
    projectName: "New Braunfels Ashlar Slate Stamped Concrete Patio & Walkway",
    location: "New Braunfels, TX",
    locationSlug: "new-braunfels-tx",
    category: "Hardscapes",
    image: svcStampedConcrete,
    imageAlt: "Ashlar slate stamped and stained concrete patio and walkway in New Braunfels, TX",
    customerRequirements:
      "Upgrade a cracked, undersized rear patio in New Braunfels into a spacious, low-maintenance entertaining terrace with the look of natural hand-laid slate.",
    designConcept:
      "A monolithic steel-reinforced concrete slab finished with an Ashlar cut-slate stamp pattern, two-tone integral and antiquing release color, and a slip-resistant UV-stable acrylic sealer.",
    constructionChallenges:
      "Mitigating expansive blackland clay soil movement common in the New Braunfels and I-35 corridor by excavating unstable topsoil and installing a thick compacted crushed limestone cushion with #3 rebar grid reinforcement.",
    materialsUsed: [
      "4,000 PSI fiber-reinforced ready-mix concrete",
      "#3 deformed steel rebar tied on 16-inch centers over compacted crushed base",
      "Integral iron-oxide earth-tone pigment and secondary antiquing release agent",
      "Rigid polyurethane Ashlar slate and seamless texture stamping mats",
      "Commercial-grade breathable UV-resistant concrete sealer with non-slip grit additive"
    ],
    workPerformed: [
      "Demolished and hauled away fractured existing concrete slab and excavated clay sub-soil",
      "Installed and vibratory-compacted 4-inch crushed limestone base and set perimeter forms",
      "Tied steel rebar reinforcement grid and dowelled into the house foundation with expansion joint isolation",
      "Poured, screeded, bull-floated, and stamped concrete at optimal plasticity",
      "Saw-cut control joints, pressure-washed release detail, and applied two coats of protective sealer"
    ],
    finalOutcome:
      "Delivered a crack-resistant, easy-to-clean stamped concrete patio that captures the rich texture of natural stone at a fraction of individual stone masonry maintenance.",
    relevantServices: [
      { name: "Stamped Concrete", to: "/stamped-concrete-overlay" },
      { name: "Hardscaping", to: "/hardscapes" },
      { name: "Covered Patios", to: "/covered-patios" }
    ]
  },
  {
    id: "canyon-lake-multi-level-composite-deck",
    projectName: "Canyon Lake Hillside Multi-Level Composite & Cedar Deck",
    location: "Canyon Lake, TX",
    locationSlug: "canyon-lake-tx",
    category: "Outdoor Living",
    image: svcCustomDecks,
    imageAlt: "Custom multi-level composite and cedar deck built on a sloped lot in Canyon Lake, TX",
    customerRequirements:
      "Build an elevated, low-maintenance outdoor deck on a steep Canyon Lake property to capture scenic Hill Country views while resisting intense UV sun exposure and moisture.",
    designConcept:
      "A two-tier structural deck featuring capped composite decking boards, concealed fasteners, wide wrap-around stairs, built-in perimeter seating, and unobstructed sightline railings.",
    constructionChallenges:
      "Anchoring structural support posts into steep, uneven limestone bedrock and framing for high wind-load stability and zero ledger-board water intrusion.",
    materialsUsed: [
      "Capped composite decking engineered for high thermal and UV resistance",
      "UC4A ground-contact pressure-treated Southern Yellow Pine substructure joists",
      "Hot-dipped galvanized and stainless steel Simpson Strong-Tie hurricane ties and post bases",
      "Reinforced concrete piers anchored directly into limestone bedrock",
      "Custom cedar and powder-coated metal safety railings"
    ],
    workPerformed: [
      "Drilled and poured reinforced concrete piers anchored into solid limestone strata",
      "Installed flashed ledger board and framed heavy-duty pressure-treated beams and joists on 12-inch centers",
      "Laid composite deck boards with hidden clip fasteners for a splinter-free, barefoot-safe surface",
      "Constructed wide multi-landing staircase, custom railing system, and integrated stair riser LED lights"
    ],
    finalOutcome:
      "Turned an unusable rocky drop-off into the homeowners' primary outdoor dining and sunset-viewing deck with decades of rot-free performance.",
    relevantServices: [
      { name: "Custom Decks", to: "/custom-decks" },
      { name: "Landscape Lighting", to: "/landscape-lighting" },
      { name: "Fencing", to: "/fencing" }
    ]
  },
  {
    id: "schertz-artificial-turf-putting-green",
    projectName: "Schertz Pet-Friendly Artificial Turf Lawn & Backyard Putting Green",
    location: "Schertz, TX",
    locationSlug: "schertz-tx",
    category: "Landscaping",
    image: svcArtificialTurf,
    imageAlt: "Installed pet-friendly artificial turf lawn and custom backyard putting green in Schertz, TX",
    customerRequirements:
      "Eliminate muddy dog paths, dead shaded grass, and high summer SAWS/municipal water bills in a family backyard in Schertz while adding a practice golf green.",
    designConcept:
      "Full backyard synthetic turf conversion featuring a contoured 3-hole PGA-grade nylon putting green framed by lush 80-oz multi-tone fescue turf and stone edging.",
    constructionChallenges:
      "Engineering rapid vertical drainage over heavy clay soil so pet urine and torrential Texas downpours drain immediately without puddling or odor.",
    materialsUsed: [
      "Lead-free, UV-stabilized polyethylene landscape turf with permeable hole-punched backing",
      "Textured nylon short-pile putting green turf with regulation aluminum cups and flags",
      "4 inches of compacted crushed granite and decomposed granite (DG) drainage sub-base",
      "Commercial weed-barrier geotextile membrane",
      "Antimicrobial silica sand and zeolite deodorizing infill"
    ],
    workPerformed: [
      "Excavated 4 inches of native clay soil and capped unused lawn sprinkler heads",
      "Laid geotextile membrane and compacted dual-layer crushed aggregate sub-base with laser grading",
      "Shaped custom putting green undulations, fringe transitions, and set regulation cups",
      "Seamed turf panels with commercial urethane adhesive, spiked perimeter edges, and power-broomed infill"
    ],
    finalOutcome:
      "Created a mud-free, zero-mowing, evergreen lawn that stays clean for pets and children 365 days a year while cutting outdoor irrigation water consumption by over 75%.",
    relevantServices: [
      { name: "Artificial Turf", to: "/artificial-turf" },
      { name: "Hardscaping", to: "/hardscapes" },
      { name: "Irrigation Systems", to: "/irrigation" }
    ]
  },
  {
    id: "bulverde-cedar-privacy-fence-masonry",
    projectName: "Bulverde Western Red Cedar Board-on-Board Fence & Stone Columns",
    location: "Bulverde, TX",
    locationSlug: "bulverde-tx",
    category: "Outdoor Living",
    image: svcFencing,
    imageAlt: "Custom Western Red Cedar board-on-board privacy fence with trim cap in Bulverde, TX",
    customerRequirements:
      "Replace a wind-damaged builder fence in Bulverde with an HOA-approved, zero-gap privacy fence engineered to survive Hill Country wind gusts and intense sun.",
    designConcept:
      "A 6-foot-6-inch Western Red Cedar board-on-board privacy fence with a rot-board base, top cap rail, decorative fascia trim, and heavy-duty welded steel gate frames.",
    constructionChallenges:
      "Rock-drilling post holes through solid limestone caliche to achieve proper post embedment depth rather than shallow digging that leads to leaning fences.",
    materialsUsed: [
      "#1 Grade Western Red Cedar pickets, rails, top cap, and trim fascia",
      "Heavy-gauge galvanized steel posts concealed inside cedar post wraps",
      "High-strength concrete post footings drilled 30–36 inches deep",
      "Exterior-grade coated ring-shank fasteners (no rusting staples)",
      "UV-blocking penetrating oil stain and water seal"
    ],
    workPerformed: [
      "Completed Texas 811 utility locate verification and demolished leaning pine fence",
      "Core-drilled limestone post holes and set heavy-gauge steel posts in concrete footings",
      "Framed three horizontal cedar rails per span with pressure-treated kickboards at grade",
      "Installed overlapping board-on-board cedar pickets, top cap rail, and sag-free steel-framed walk gates"
    ],
    finalOutcome:
      "Delivered a furniture-grade cedar perimeter fence that provides total poolside privacy and structural wind resistance.",
    relevantServices: [
      { name: "Custom Fencing", to: "/fencing" },
      { name: "Hardscaping", to: "/hardscapes" },
      { name: "General Contracting", to: "/general-contracting" }
    ]
  },
  {
    id: "san-antonio-detached-adu-casita",
    projectName: "San Antonio Turnkey Detached Backyard ADU & In-Law Casita",
    location: "San Antonio, TX",
    locationSlug: "san-antonio-tx",
    category: "Construction",
    image: bestAduConstruction,
    secondaryImage: svcNewConstruction,
    imageAlt: "Custom detached ADU backyard guest house and casita built in San Antonio, TX",
    customerRequirements:
      "Design and build a self-contained, single-level backyard guest casita (ADU) in San Antonio for multi-generational family living with full kitchen, accessible bathroom, and private covered porch.",
    designConcept:
      "A 650-square-foot detached accessory dwelling unit matching the primary residence's exterior masonry and roofline, featuring high ceilings, energy-efficient insulation, zero-threshold shower, and independent HVAC.",
    constructionChallenges:
      "Navigating City of San Antonio setback rules, impervious cover limits, and trenching long-run sewer, water, and electrical sub-panel connections from the main house with minimal yard disruption.",
    materialsUsed: [
      "Engineered post-tensioned / rebar-reinforced concrete slab foundation",
      "Kiln-dried 2x6 structural wall framing and engineered roof trusses",
      "Fiber-cement lap siding, Texas stone wainscoting, and architectural shingles",
      "High-SEER ductless mini-split HVAC, tankless water heater, and spray-foam insulation",
      "Custom kitchen cabinetry, quartz counters, and ADA-accessible curbless tile shower"
    ],
    workPerformed: [
      "Prepared site plan, architectural drawings, and secured City of San Antonio building permits",
      "Trenched underground plumbing, sewer tie-in, and electrical feeder conduit",
      "Poured engineered concrete slab, framed structure, and dried-in roof and Low-E windows",
      "Completed full MEP rough-ins, insulation, drywall, interior cabinetry, flooring, and exterior porch"
    ],
    finalOutcome:
      "Created a private, comfortable, and code-compliant backyard residence that increased the property's functional square footage and long-term equity.",
    relevantServices: [
      { name: "ADU Services", to: "/adu-services" },
      { name: "New Construction", to: "/new-construction" },
      { name: "General Contracting", to: "/general-contracting" }
    ]
  },
  {
    id: "san-antonio-native-softscape-palm-installation",
    projectName: "North San Antonio Xeriscape Softscapes, Specimen Palms & LED Lighting",
    location: "San Antonio, TX",
    locationSlug: "san-antonio-tx",
    category: "Landscaping",
    image: svcSoftscapes,
    secondaryImage: svcPalmTrees,
    imageAlt: "Completed drought-tolerant softscape garden, cold-hardy palm trees, and stone borders in San Antonio, TX",
    customerRequirements:
      "Revitalize a sun-scorched front and backyard landscape with freeze-hardy specimen palms, drought-tolerant Texas native perennials, smart drip irrigation, and architectural night lighting.",
    designConcept:
      "Layered resort-inspired planting beds combining cold-hardy Texas Sabal and Windmill palms with deer-resistant native shrubs, amended organic soil beds, chopped stone borders, and 2700K brass LED uplighting.",
    constructionChallenges:
      "Ensuring rapid root establishment and winter freeze resilience for mature palms planted in compacted alkaline clay-caliche soil while complying with SAWS water conservation rules.",
    materialsUsed: [
      "Cold-hardy Sabal texana (Texas Sabal) and Trachycarpus fortunei (Windmill) palms",
      "Texas native perennials (Texas Sage, Red Yucca, Esperanza, Muhly Grass, Lantana)",
      "Organic compost soil amendment, palm-specific sandy loam mix, and hardwood mulch",
      "TCEQ-compliant pressure-compensating drip irrigation and smart WiFi controller",
      "Solid cast-brass 12V LED landscape uplights and pathway fixtures"
    ],
    workPerformed: [
      "Excavated planting pits and amended native soil with organic compost and drainage sand",
      "Crane-set and hand-planted mature cold-hardy palms and layered perennial softscape beds",
      "Retrofitted existing sprinkler zones into targeted root-zone drip irrigation with rain/freeze sensor",
      "Installed low-voltage transformer and buried brass LED uplights on palms and stone walls"
    ],
    finalOutcome:
      "Delivered a vibrant, water-wise landscape that thrives in 100°F+ summers and winter freezes while showcasing dramatic nighttime curb appeal.",
    relevantServices: [
      { name: "Softscapes", to: "/softscapes" },
      { name: "Palm Trees", to: "/palm-trees" },
      { name: "Irrigation Systems", to: "/irrigation" },
      { name: "Landscape Lighting", to: "/landscape-lighting" }
    ]
  }
];

