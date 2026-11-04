export interface ServiceMaterialOption {
  name: string;
  spec: string;
  benefit: string;
}

export interface ServiceSanAntonioFactor {
  title: string;
  detail: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  city: string;
  citySlug: string;
  projectSummary: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceSeoEntry {
  slug: string;
  serviceName: string;
  serviceType: string;
  shortSummary: string;
  materialsAndOptions: ServiceMaterialOption[];
  sanAntonioConsiderations: ServiceSanAntonioFactor[];
  featuredCaseStudyId: string;
  beforeState: string;
  afterState: string;
  testimonials: ServiceTestimonial[];
  faqs: ServiceFaqItem[];
  relatedServices: { name: string; to: string; desc: string }[];
  relatedBlogSlugs: string[];
}

export const PRIORITY_SERVICE_LOCATIONS = [
  { name: "San Antonio, TX", slug: "san-antonio-tx" },
  { name: "Alamo Heights, TX", slug: "alamo-heights-tx" },
  { name: "Boerne, TX", slug: "boerne-tx" },
  { name: "New Braunfels, TX", slug: "new-braunfels-tx" },
  { name: "Seguin, TX", slug: "seguin-tx" },
  { name: "Canyon Lake, TX", slug: "canyon-lake-tx" },
  { name: "Schertz, TX", slug: "schertz-tx" },
  { name: "Helotes, TX", slug: "helotes-tx" },
  { name: "Bulverde, TX", slug: "bulverde-tx" },
  { name: "Universal City, TX", slug: "universal-city-tx" },
  { name: "Kerrville, TX", slug: "kerrville-tx" },
  { name: "Fredericksburg, TX", slug: "fredericksburg-tx" },
];

export const SERVICE_SEO_DATA: Record<string, ServiceSeoEntry> = {
  "general-contracting": {
    slug: "general-contracting",
    serviceName: "General Contracting Services in San Antonio, TX",
    serviceType: "Residential & Commercial General Contracting",
    shortSummary:
      "Turnkey general contracting, structural project management, code permitting, and multi-trade coordination across San Antonio and South Central Texas.",
    materialsAndOptions: [
      {
        name: "Engineered Concrete & Post-Tensioned Foundations",
        spec: "3,500–4,500 PSI ready-mix concrete, deformed steel rebar grids, and post-tension cable systems.",
        benefit: "Prevents slab differential settlement across San Antonio's expansive clay and rocky limestone soils."
      },
      {
        name: "Structural Wood, LVL & Steel Framing",
        spec: "Kiln-dried #1 Southern Yellow Pine, engineered Laminated Veneer Lumber (LVL) headers, and structural steel I-beams.",
        benefit: "Enables wide open-concept interior spans and hurricane-strapped wind-load resilience."
      },
      {
        name: "Texas Masonry, Stucco & Fiber-Cement Exteriors",
        spec: "Quarried Texas limestone, clay brick, 3-coat elastomeric stucco, and James Hardie fiber-cement siding.",
        benefit: "Delivers Class-A fire resistance, hail durability, and authentic South Texas architectural aesthetics."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "City of San Antonio Development Services (DSD) Permitting",
        detail: "Full management of residential and commercial building permits, suburban municipality approvals (Alamo Heights, Boerne, Schertz, New Braunfels), and staged municipal inspections."
      },
      {
        title: "Balcones Escarpment Geotechnical Engineering",
        detail: "Properties north of Loop 1604 require rock-anchored footings in Edwards limestone, while southern and eastern lots require piers or reinforced slabs engineered for high-plasticity blackland clay."
      },
      {
        title: "CPS Energy & SAWS Utility Coordination",
        detail: "Seamless coordination of electrical service panel upgrades, gas meter sizing, water tap fees, and Texas 811 underground utility locates."
      }
    ],
    featuredCaseStudyId: "alamo-heights-kitchen-interior-remodel",
    beforeState:
      "Aging, compartmentalized structure with load-bearing partition walls, outdated electrical distribution, and fragmented trade scheduling.",
    afterState:
      "Fully permitted, structurally engineered open-concept build completed on schedule under single-point owner supervision by Robert Thompson.",
    testimonials: [
      {
        quote: "Robert and his crews handled every phase of our structural remodel and patio addition without us having to chase subcontractors. Every city inspection passed on the first visit.",
        author: "Mark & Jennifer L.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Full-Home Structural Renovation & Outdoor Addition"
      },
      {
        quote: "Having one seasoned general contractor oversee both the interior construction and exterior hardscaping saved us months of scheduling headaches.",
        author: "David R.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "Custom Home Addition & Sitework"
      }
    ],
    faqs: [
      {
        question: "Do you handle all City of San Antonio building permits and trade inspections?",
        answer: "Yes. JRM Construction Landscaping Design manages architectural plan submittals, structural engineering sign-offs, municipal building permits, HOA architectural review packages, and all staged city inspections."
      },
      {
        question: "Can JRM manage both interior construction and exterior landscaping under one contract?",
        answer: "Yes. Unlike contractors who only handle interior framing or only mow lawns, we integrate structural construction, remodeling, concrete flatwork, outdoor living structures, and complete landscaping under one unified schedule."
      }
    ],
    relatedServices: [
      { name: "House Remodeling", to: "/house-remodeling", desc: "Complete kitchen, bathroom, and whole-home interior renovations." },
      { name: "New Construction", to: "/new-construction", desc: "Ground-up custom residential builds and structural additions." },
      { name: "Commercial Construction", to: "/commercial", desc: "Tenant finish-outs, commercial flatwork, and site construction." },
      { name: "ADU Services", to: "/adu-services", desc: "Turnkey detached guest houses, casitas, and garage apartments." }
    ],
    relatedBlogSlugs: [
      "kitchen-remodeling-costs-san-antonio",
      "adu-construction-planning-texas"
    ]
  },
  "house-remodeling": {
    slug: "house-remodeling",
    serviceName: "House Remodeling Contractors in San Antonio, TX",
    serviceType: "Kitchen, Bathroom & Whole-Home Remodeling",
    shortSummary:
      "Custom kitchen remodeling, luxury bathroom renovations, load-bearing wall removal, and whole-house interior remodeling in San Antonio, TX.",
    materialsAndOptions: [
      {
        name: "Custom Solid-Wood Cabinetry & Millwork",
        spec: "3/4-inch furniture-grade plywood boxes, dovetail drawers, soft-close European hinges, and custom shaker or inset doors.",
        benefit: "Resists warping in humid Texas kitchens and bath environments while maximizing storage ergonomics."
      },
      {
        name: "Quartz, Granite & Natural Stone Countertops",
        spec: "Non-porous engineered quartz, sealed Level-3 Brazilian granite, and honed quartzite slabs with mitered waterfall edges.",
        benefit: "Stain-resistant, heat-tolerant surfaces custom-fabricated to laser-templated dimensions."
      },
      {
        name: "Waterproof Shower Systems & Porcelain Tile",
        spec: "Schluter-KERDI waterproof membranes, curbless linear drains, large-format rectified porcelain, and natural travertine.",
        benefit: "Guarantees leak-free wet areas with spa-grade aesthetics and ADA-friendly zero-threshold entry."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Cast-Iron Drain Line & Legacy Electrical Upgrades",
        detail: "Many established neighborhoods like Alamo Heights, Terrell Hills, and Monte Vista have aging cast-iron drain piping and undersized electrical panels that we modernize while walls are open."
      },
      {
        title: "Foundation Movement & Tile Crack Isolation",
        detail: "Because Bexar County slabs flex seasonally, we install uncoupling membranes beneath all large-format tile flooring to prevent grout and tile cracking."
      },
      {
        title: "High-Efficiency HVAC & Attic Insulation",
        detail: "During whole-home remodels, we upgrade duct layouts, Low-E window glazing, and attic thermal barriers to cut summer CPS Energy cooling bills."
      }
    ],
    featuredCaseStudyId: "alamo-heights-kitchen-interior-remodel",
    beforeState:
      "Closed-off 1970s kitchen with dark soffits, laminate counters, cramped traffic flow, and outdated electrical circuits.",
    afterState:
      "Bright open-concept chef's kitchen anchored by a structural LVL flush beam, custom maple shaker cabinetry, quartz waterfall island, and recessed LED lighting.",
    testimonials: [
      {
        quote: "JRM removed the wall between our kitchen and living room, installed a flush beam, and built our dream kitchen in Alamo Heights. Their dust control and daily communication were outstanding.",
        author: "Sarah & Thomas M.",
        city: "Alamo Heights, TX",
        citySlug: "alamo-heights-tx",
        projectSummary: "Open-Concept Kitchen & Living Room Remodel"
      },
      {
        quote: "Our master bathroom was completely gutted and rebuilt with a curbless walk-in shower and custom double vanity. The tile craftsmanship is flawless.",
        author: "Patricia G.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Primary Suite & Bathroom Renovation"
      }
    ],
    faqs: [
      {
        question: "Can we live in our San Antonio home during a kitchen or bathroom remodel?",
        answer: "Yes. We isolate active work zones using zippered dust-containment barriers, negative-air HEPA scrubbers, and floor protection runners, and we maintain utility access outside working hours."
      },
      {
        question: "Can you safely remove a load-bearing wall to create an open floor plan?",
        answer: "Yes. We coordinate structural load calculations, install temporary shoring walls, and set engineered LVL or steel headers flush inside the ceiling cavity so your rooms open up seamlessly."
      }
    ],
    relatedServices: [
      { name: "General Contracting", to: "/general-contracting", desc: "Full permitting, structural engineering, and multi-trade supervision." },
      { name: "ADU Services", to: "/adu-services", desc: "Detached guest casitas and in-law suite construction." },
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", desc: "Extend your indoor kitchen remodel onto a covered patio." },
      { name: "3D Design Service", to: "/design-service", desc: "Visualize floor plans, finishes, and elevations before demolition." }
    ],
    relatedBlogSlugs: [
      "kitchen-remodeling-costs-san-antonio",
      "adu-construction-planning-texas"
    ]
  },
  "new-construction": {
    slug: "new-construction",
    serviceName: "New Construction Builders in San Antonio, TX",
    serviceType: "Ground-Up Residential & Custom Home Construction",
    shortSummary:
      "Ground-up custom home construction, structural home additions, detached garages, and barndominium/estate builds across San Antonio and the Texas Hill Country.",
    materialsAndOptions: [
      {
        name: "Geotechnically Engineered Slab & Pier Foundations",
        spec: "Post-tensioned monolithic slabs, deep drilled concrete piers, and steel-reinforced grade beams.",
        benefit: "Custom-designed to the exact soil plasticity index (PI) or limestone depth of your building lot."
      },
      {
        name: "High-Performance Building Envelope",
        spec: "2x6 exterior structural framing, ZIP System structural sheathing, open/closed-cell spray foam insulation, and Low-E argon windows.",
        benefit: "Exceeds Texas IECC energy codes and keeps interior temperatures stable during 105°F+ summer highs."
      },
      {
        name: "Hill Country Stone, Stucco & Standing-Seam Metal Roofs",
        spec: "Full-bed Texas limestone masonry, elastomeric stucco, architectural shingles, and 24-gauge standing-seam metal roofing.",
        benefit: "Combines timeless Texas architectural character with multi-decade hail and wind durability."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Edwards Aquifer Recharge Zone & Impervious Cover Rules",
        detail: "Building lots in North San Antonio, Helotes, Boerne, and Bulverde often fall within TCEQ Edwards Aquifer zones requiring water pollution abatement compliance and impervious cover calculations."
      },
      {
        title: "Rural & Hill Country Utility Infrastructure",
        detail: "For acreage properties in Boerne, Canyon Lake, Bulverde, and Seguin, we coordinate rock excavation, well/septic interfaces, long-run underground electrical trenches, and paved driveways."
      },
      {
        title: "Unified Home + Landscape Site Planning",
        detail: "Because JRM builds both the residence and the surrounding outdoor living spaces, we grade the lot, pour patio foundations, and sleeve irrigation conduits during initial groundwork."
      }
    ],
    featuredCaseStudyId: "san-antonio-detached-adu-casita",
    beforeState:
      "Undeveloped residential lot area requiring site clearing, utility trenching, foundation engineering, and municipal permitting.",
    afterState:
      "Turnkey ground-up structure with engineered slab, 2x6 framing, stone/fiber-cement exterior, high-SEER HVAC, and integrated covered porch.",
    testimonials: [
      {
        quote: "Robert Thompson's 35+ years of building experience in San Antonio showed from day one. When our lot excavation hit solid limestone, his team handled the foundation engineering without missing a beat.",
        author: "Carlos & Elena V.",
        city: "Helotes, TX",
        citySlug: "helotes-tx",
        projectSummary: "Custom Ground-Up Residential Build"
      },
      {
        quote: "Building our structural addition and outdoor pavilion simultaneously with JRM meant our roofline, stonework, and grading matched our existing home seamlessly.",
        author: "gregory H.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "Master Wing Addition & Covered Pavilion"
      }
    ],
    faqs: [
      {
        question: "How long does ground-up new construction or a major structural addition take in San Antonio?",
        answer: "Structural room additions typically take 10 to 16 weeks, detached guest houses/ADUs take 4 to 6 months, and full custom homes take 8 to 14 months depending on permitting, lot topography, and custom finish selections."
      },
      {
        question: "Can you build on sloped or rocky Texas Hill Country lots?",
        answer: "Yes. We regularly build in Boerne, Helotes, Canyon Lake, Bulverde, and Kerrville where hydraulic rock-breaking, stepped grade beams, and engineered retaining walls are required."
      },
      {
        question: "Do you provide architectural drafting and structural engineering for new builds?",
        answer: "Yes. Through our design-build process, we coordinate architectural construction drawings, Texas PE-stamped foundation and framing plans, energy compliance reports (REScheck), and municipal permit filings."
      },
      {
        question: "What warranty is included on new construction projects?",
        answer: "All new construction builds follow Texas residential construction standards, including a 1-year workmanship and materials warranty, 2-year mechanical/electrical/plumbing systems coverage, and 10-year structural foundation coverage."
      }
    ],
    relatedServices: [
      { name: "General Contracting", to: "/general-contracting", desc: "End-to-end construction management and municipal permitting." },
      { name: "ADU Services", to: "/adu-services", desc: "Backyard guest houses, casitas, and detached in-law suites." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Driveways, retaining walls, walkways, and structural stone patios." },
      { name: "3D Design Service", to: "/design-service", desc: "Architectural 3D renderings and complete site layout planning." }
    ],
    relatedBlogSlugs: [
      "adu-construction-planning-texas",
      "retaining-wall-design-construction-san-antonio"
    ]
  },
  "commercial": {
    slug: "commercial",
    serviceName: "Commercial Construction & Landscaping Contractors in San Antonio, TX",
    serviceType: "Commercial Tenant Finish-Outs, Concrete & Grounds Construction",
    shortSummary:
      "Commercial tenant improvements, retail/office build-outs, ADA concrete flatwork, commercial hardscaping, irrigation, and exterior property enhancements in San Antonio.",
    materialsAndOptions: [
      {
        name: "Commercial-Grade Metal Stud Framing & Fire-Rated Drywall",
        spec: "20-gauge structural steel studs, 5/8-inch Type-X fire-rated gypsum assemblies, acoustical ACT ceilings, and commercial storefront glass.",
        benefit: "Meets strict International Building Code (IBC) occupancy and fire-separation requirements."
      },
      {
        name: "Heavy-Duty Commercial Concrete & ADA Access Ramps",
        spec: "4,000–5,000 PSI reinforced concrete flatwork, tactile truncated domes, steel pipe bollards, and commercial dumpster pads.",
        benefit: "Withstands heavy commercial vehicular loads while ensuring full Texas Accessibility Standards (TAS/ADA) compliance."
      },
      {
        name: "Drought-Tolerant Commercial Xeriscaping & Irrigation",
        spec: "Commercial multi-zone smart irrigation controllers, backflow prevention assemblies, crushed granite beds, and hardy native trees.",
        benefit: "Minimizes HOA/property management maintenance costs and complies with SAWS commercial watering regulations."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Texas Accessibility Standards (TAS) & Fire Marshal Compliance",
        detail: "Every commercial build-out and exterior walkway is built to strict ADA slope ratios, egress clearances, and City of San Antonio Fire Marshal inspection standards."
      },
      {
        title: "Off-Hours Scheduling for Active Businesses",
        detail: "For occupied retail centers, medical offices, restaurants, and HOA common areas, we schedule noisy demolition and concrete pours to avoid disrupting tenants and customers."
      },
      {
        title: "Restaurant & Hospitality Outdoor Patio Expansions",
        detail: "We build revenue-generating covered dining patios, commercial outdoor bars, architectural lighting, and perimeter fencing for San Antonio restaurants and venues."
      }
    ],
    featuredCaseStudyId: "helotes-retaining-wall-flagstone-hardscape",
    beforeState:
      "Unimproved commercial frontage and sloped exterior perimeter suffering from stormwater erosion and non-compliant pedestrian walkways.",
    afterState:
      "Engineered stone retaining walls, code-compliant concrete walkways, commercial LED security lighting, and water-wise native landscaping.",
    testimonials: [
      {
        quote: "JRM completed our office suite remodel and upgraded our exterior entry walkways and xeriscaping on time and within budget. Having one contractor handle both interior and exterior scopes was huge.",
        author: "straton Commercial Properties",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Office Finish-Out & Exterior Hardscape"
      },
      {
        quote: "They built a shaded outdoor dining patio with stamped concrete and commercial lighting for our venue in New Braunfels, immediately adding 40 outdoor seats.",
        author: "Marcus T.",
        city: "New Braunfels, TX",
        citySlug: "new-braunfels-tx",
        projectSummary: "Commercial Hospitality Covered Patio"
      }
    ],
    faqs: [
      {
        question: "What types of commercial construction projects does JRM handle in San Antonio?",
        answer: "We specialize in retail and office tenant finish-outs, restaurant outdoor dining patios, HOA monument signage and common-area hardscaping, ADA concrete walkways/ramps, commercial fencing, and large-scale commercial landscape/irrigation installations."
      },
      {
        question: "Are you insured for commercial construction and HOA community contracts?",
        answer: "Yes. JRM Construction Services LLC carries commercial general liability coverage and provides certificates of insurance (COI), W-9 documentation, and detailed schedule-of-values billing for property managers and commercial owners."
      },
      {
        question: "Can you upgrade existing commercial landscapes to reduce SAWS water bills?",
        answer: "Yes. We convert high-water commercial turf islands into low-maintenance Texas native xeriscapes, commercial synthetic turf zones, and smart drip irrigation systems that cut water consumption significantly."
      },
      {
        question: "Do you build commercial retaining walls and drainage structures?",
        answer: "Yes. We construct engineered segmental block and limestone retaining walls, French drain networks, and reinforced concrete flumes to solve commercial lot drainage and erosion issues."
      }
    ],
    relatedServices: [
      { name: "General Contracting", to: "/general-contracting", desc: "Permitted structural construction and multi-trade project management." },
      { name: "Stamped Concrete", to: "/stamped-concrete-overlay", desc: "High-traffic decorative concrete patios, courtyards, and walkways." },
      { name: "Irrigation Systems", to: "/irrigation", desc: "Commercial multi-zone smart irrigation and backflow compliance." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Commercial architectural uplighting, pathway, and security lighting." }
    ],
    relatedBlogSlugs: [
      "stamped-concrete-vs-pavers-san-antonio",
      "retaining-wall-design-construction-san-antonio"
    ]
  },
  "outdoor-kitchens": {
    slug: "outdoor-kitchens",
    serviceName: "Custom Outdoor Kitchen Builders in San Antonio, TX",
    serviceType: "Custom Masonry Outdoor Kitchens & BBQ Islands",
    shortSummary:
      "Custom Texas limestone outdoor kitchens, built-in gas and charcoal grills, granite countertops, outdoor bars, and covered cooking pavilions in San Antonio.",
    materialsAndOptions: [
      {
        name: "Non-Combustible Steel Stud & Concrete Board Framing",
        spec: "Heavy-gauge galvanized structural steel studs clad in cementitious backer board over a 4,000 PSI concrete slab.",
        benefit: "100% fireproof, rot-proof, and termite-proof substructure that never warps under high grill temperatures."
      },
      {
        name: "Hand-Cut Texas Limestone, Stucco & Brick Veneer",
        spec: "Quarried Texas white/buff chopped limestone, Lueders stone accents, natural stone ledger, or matched stucco.",
        benefit: "Blends seamlessly with San Antonio and Hill Country home exteriors while resisting freeze-thaw and heat."
      },
      {
        name: "304 Stainless Appliances & Heat-Safe Countertops",
        spec: "304 marine-grade stainless steel built-in gas grills, side burners, outdoor-rated refrigerators, and Level-3 granite or quartzite tops.",
        benefit: "Unlike resin-bound indoor quartz that yellows in direct Texas UV sun, granite and quartzite stay color-stable for decades."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Countertop UV Stability in Direct South Texas Sun",
        detail: "In uncovered or west-facing San Antonio patios, standard indoor quartz resins can discolor from UV rays; we specify UV-stable sealed granite, soapstone, Lueders limestone, or porcelain slabs."
      },
      {
        title: "Code-Compliant Gas, GFCI Electrical & Vent Hoods",
        detail: "We install dedicated underground natural gas lines (or ventilated propane compartments), 20-amp weather-resistant GFCI circuits, and commercial CFM vent hoods when cooking under a ceiling."
      },
      {
        title: "Thermal Comfort Integration with Covered Patios",
        detail: "Pairing your outdoor kitchen with an insulated covered patio roof and high-CFM ceiling fans lowers cooking-zone temperatures by 15–20°F during July and August."
      }
    ],
    featuredCaseStudyId: "stone-oak-outdoor-kitchen-pavilion",
    beforeState:
      "Unshaded builder-grade concrete slab with a freestanding rolling grill exposed to intense afternoon sun and rain.",
    afterState:
      "L-shaped Texas limestone outdoor kitchen with built-in 40-inch stainless gas grill, granite bar seating for six, outdoor refrigerator, and timber pavilion.",
    testimonials: [
      {
        quote: "Our Stone Oak outdoor kitchen and covered pavilion completely changed how we entertain. The limestone masonry matches our house as if it were built with the original home.",
        author: "Michael & Kristen B.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "L-Shaped Limestone Outdoor Kitchen & Pavilion"
      },
      {
        quote: "Robert's crew trenched the gas and electric lines cleanly, built a gorgeous stone island with granite counters, and finished ahead of our family reunion.",
        author: "Richard S.",
        city: "New Braunfels, TX",
        citySlug: "new-braunfels-tx",
        projectSummary: "Custom Grill Island & Bar Seating"
      }
    ],
    faqs: [
      {
        question: "How much does a custom outdoor kitchen cost in San Antonio?",
        answer: "Straight masonry grill islands typically range from $8,500 to $14,500, mid-range L-shaped stone outdoor kitchens with bar seating and refrigeration run $15,000 to $26,000, and complete luxury outdoor kitchen pavilions range from $28,000 to $55,000+."
      },
      {
        question: "Do I need an insulated jacket for a built-in grill in an outdoor kitchen?",
        answer: "We frame all outdoor kitchen islands with non-combustible steel studs and cement board, and Whenever any wood trim or combustible material is near the firebox, we install a manufacturer-certified stainless steel insulated grill liner."
      }
    ],
    relatedServices: [
      { name: "Covered Patios", to: "/covered-patios", desc: "Roofed cedar and insulated patio covers to shade your outdoor kitchen." },
      { name: "Custom Fireplaces", to: "/custom-fireplaces", desc: "Pair your cooking island with a stone outdoor fireplace or fire pit." },
      { name: "Stamped Concrete", to: "/stamped-concrete-overlay", desc: "Grease-sealed decorative concrete foundations for outdoor kitchens." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "LED task lighting, bar under-counter illumination, and patio uplights." }
    ],
    relatedBlogSlugs: [
      "outdoor-kitchen-construction-costs-san-antonio",
      "covered-patio-vs-pergola-texas"
    ]
  },
  "covered-patios": {
    slug: "covered-patios",
    serviceName: "Covered Patio & Pergola Builders in San Antonio, TX",
    serviceType: "Custom Roofed Patio Covers, Cedar Pavilions & Pergolas",
    shortSummary:
      "Structural roofed patio covers, custom Western Red Cedar pergolas, gable pavilions, and insulated patio extensions in San Antonio and the Texas Hill Country.",
    materialsAndOptions: [
      {
        name: "Integrated Roofline Extensions (Gable, Hip & Shed)",
        spec: "Structural rafters tied into existing roof trusses, OSB decking, synthetic underlayment, and matched architectural shingles or standing-seam metal.",
        benefit: "100% weatherproof protection that looks original to your home's architecture and adds appraised outdoor living value."
      },
      {
        name: "Western Red Cedar Tongue-and-Groove Ceilings & Trusses",
        spec: "Kiln-dried Western Red Cedar 6x6 or 8x8 posts, exposed timber beams, and stained tongue-and-groove ceiling planking.",
        benefit: "Naturally rot- and insect-resistant timber that creates warm, resort-style Hill Country character."
      },
      {
        name: "Custom Cedar & Steel Shade Pergolas",
        spec: "Heavy-timber cedar rafters with 2x2 shade purlins or polycarbonate UV/rain canopy panels anchored on stone-wrapped columns.",
        benefit: "Cuts direct solar heat gain by up to 65% while maintaining open-air circulation."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Bexar County Wind Uplift & Pier Footing Engineering",
        detail: "We never anchor heavy patio cover posts onto thin 4-inch builder concrete pads. We saw-cut and pour dedicated steel-reinforced concrete piers 24–36 inches deep."
      },
      {
        title: "Radiant Heat Protection for West-Facing Patios",
        detail: "In San Antonio, west-facing backyards absorb intense afternoon solar radiation; we design deep overhangs, radiant-barrier roof decking, and high-velocity ceiling fan rough-ins."
      },
      {
        title: "HOA Architectural Control Committee (ACC) Packages",
        detail: "We prepare scaled elevation drawings, roof pitch specs, and material samples to secure fast HOA approval in Stone Oak, Alamo Ranch, Cibolo Canyons, Boerne, and Schertz."
      }
    ],
    featuredCaseStudyId: "boerne-limestone-fireplace-covered-patio",
    beforeState:
      "Sun-drenched rear slab unusable between May and October due to 100°F+ heat and zero overhead shade.",
    afterState:
      "Gable-roofed covered patio with exposed Western Red Cedar trusses, limestone columns, recessed LED lights, ceiling fans, and integrated stone fireplace.",
    testimonials: [
      {
        quote: "Our west-facing backyard in San Antonio was an oven every summer until JRM built our gable covered patio with cedar tongue-and-groove ceilings. Now we sit outside every evening.",
        author: "Daniel & Lauren K.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Gable Roofed Patio Extension with Cedar Ceiling"
      },
      {
        quote: "They handled our HOA approval packet, poured deep pier footings, and tied the new roof into our existing shingles seamlessly.",
        author: "Brian W.",
        city: "Schertz, TX",
        citySlug: "schertz-tx",
        projectSummary: "Attached Covered Patio & Stamped Concrete Slab"
      }
    ],
    faqs: [
      {
        question: "Should I build a solid roofed covered patio or an open pergola in San Antonio?",
        answer: "If you want full protection from rain and maximum shade for an outdoor kitchen, TV, and ceiling fans, a solid roofed covered patio is the best investment. If you want filtered sunlight and architectural definition at a lower cost, a heavy cedar pergola is ideal."
      },
      {
        question: "Can a covered patio be built over my existing concrete slab?",
        answer: "Yes, provided we cut structural footing pockets at the post locations to pour reinforced concrete piers below the slab so the weight of the roof is safely supported."
      }
    ],
    relatedServices: [
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", desc: "Complete your covered patio with a built-in limestone grill island." },
      { name: "Custom Fireplaces", to: "/custom-fireplaces", desc: "Add a wood-burning or gas stone fireplace at the end of your pavilion." },
      { name: "Stamped Concrete", to: "/stamped-concrete-overlay", desc: "Extend and resurface your patio floor with stamped concrete." },
      { name: "Custom Decks", to: "/custom-decks", desc: "Pair your patio roof with a composite or cedar deck." }
    ],
    relatedBlogSlugs: [
      "covered-patio-vs-pergola-texas",
      "outdoor-kitchen-construction-costs-san-antonio"
    ]
  },
  "custom-fireplaces": {
    slug: "custom-fireplaces",
    serviceName: "Custom Outdoor Fireplaces & Fire Pits in San Antonio, TX",
    serviceType: "Masonry Outdoor Fireplaces, Chimneys & Custom Fire Pits",
    shortSummary:
      "Handcrafted Texas limestone outdoor fireplaces, wood-burning and gas-assisted hearths, sunken fire pit lounges, and media-wall fireplaces in San Antonio.",
    materialsAndOptions: [
      {
        name: "Refractory Firebrick Chamber & CMU Structural Core",
        spec: "Reinforced concrete masonry unit (CMU) structure lined with high-heat refractory firebrick and heat-rated refractory mortar.",
        benefit: "Contains intense thermal expansion safely and reflects radiant warmth outward toward your seating area."
      },
      {
        name: "Texas Hill Country Limestone & Flagstone Veneer",
        spec: "Hand-chiseled white/cream Texas limestone, Lueders limestone mantels, and natural Oklahoma or Texas flagstone hearth benches.",
        benefit: "Creates a commanding architectural focal point that withstands outdoor weather and high firebox temperatures."
      },
      {
        name: "Wood-Burning, Gas-Log & Smokeless Burner Systems",
        spec: "Traditional wood-burning hearths with gas log lighters, 304 stainless steel gas burner rings, and lava rock or tempered fire glass media.",
        benefit: "Gives you the choice of authentic crackling oak/mesquite firewood or instant push-button natural gas flames."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "San Antonio Fire Code & Chimney Draft Engineering",
        detail: "We engineer proper 10:1 flue-to-opening ratios, spark arrestor chimney caps, and required roof ridge clearances (2 feet higher than any roof surface within 10 feet)."
      },
      {
        title: "Deep Reinforced Footings for Heavy Masonry Loads",
        detail: "A full-height stone fireplace weighs between 8,000 and 16,000 lbs; we pour dedicated rebar-reinforced concrete footings below frost and expansive clay depth."
      },
      {
        title: "Prevailing North Wind Shielding",
        detail: "Positioning your outdoor fireplace on the north or northwest perimeter of a covered patio blocks chilly winter fronts while radiating heat across the patio."
      }
    ],
    featuredCaseStudyId: "boerne-limestone-fireplace-covered-patio",
    beforeState:
      "Open patio exposed to winter north winds with no architectural focal point or cool-weather heating.",
    afterState:
      "Floor-to-ceiling chopped Texas limestone outdoor fireplace with cedar mantel beam, raised stone seating hearth, and weather-shielded TV alcove.",
    testimonials: [
      {
        quote: "Our custom limestone fireplace in Boerne looks like it belongs at a luxury Hill Country resort. It drafts perfectly with zero smoke blowing back onto the patio.",
        author: "Robert & Diane P.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "Custom Limestone Outdoor Fireplace & Hearth"
      },
      {
        quote: "JRM built a circular stone gas fire pit with a flagstone seating patio in our Helotes backyard. Our family uses it almost every weekend from October through April.",
        author: "Kevin M.",
        city: "Helotes, TX",
        citySlug: "helotes-tx",
        projectSummary: "Natural Stone Gas Fire Pit & Flagstone Lounge"
      }
    ],
    faqs: [
      {
        question: "How much does a custom stone outdoor fireplace or fire pit cost in San Antonio?",
        answer: "Custom masonry stone fire pits typically range from $2,800 to $6,500, modular masonry outdoor fireplaces range from $9,500 to $15,000, and full-custom floor-to-ceiling Texas limestone fireplaces range from $16,000 to $28,000+."
      },
      {
        question: "Can I mount an outdoor TV above a wood-burning or gas fireplace?",
        answer: "Yes. We build recessed masonry media alcoves with a thick stone or cedar mantel shelf that deflects rising heat away from the television, paired with recessed power and HDMI conduit."
      },
      {
        question: "Should I choose a wood-burning or natural gas fireplace?",
        answer: "Many San Antonio homeowners choose a wood-burning masonry firebox equipped with a plumber-installed natural gas log lighter—giving you instant gas ignition alongside real oak or mesquite logs."
      },
      {
        question: "What are the city setback rules for outdoor fire pits in San Antonio?",
        answer: "Open wood-burning fire pits generally require a 15-to-25-foot clearance from structures and combustible fences, whereas enclosed masonry fireplaces with spark arrestors and permanent gas fire pits can be integrated closer to or within covered patios."
      }
    ],
    relatedServices: [
      { name: "Covered Patios", to: "/covered-patios", desc: "Integrate a floor-to-ceiling stone fireplace into a gable patio roof." },
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", desc: "Coordinate your fireplace stone with a matching outdoor kitchen." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Surround your fire pit with flagstone patios and stone seating walls." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Accentuate stone masonry textures at night with warm LED uplights." }
    ],
    relatedBlogSlugs: [
      "custom-outdoor-fireplace-design-san-antonio",
      "covered-patio-vs-pergola-texas"
    ]
  },
  "hardscapes": {
    slug: "hardscapes",
    serviceName: "Hardscaping & Retaining Wall Contractors in San Antonio, TX",
    serviceType: "Stone Patios, Interlocking Pavers & Engineered Retaining Walls",
    shortSummary:
      "Structural limestone retaining walls, natural flagstone patios, interlocking concrete pavers, stone walkways, and French drain systems across San Antonio.",
    materialsAndOptions: [
      {
        name: "Engineered Segmental & Limestone Retaining Walls",
        spec: "Chopped Texas limestone boulders, heavy interlocking SRW concrete blocks, biaxial geogrid tie-backs, and perforated French drain backfill.",
        benefit: "Holds back sloped Hill Country terrain and relieves hydrostatic water pressure during flash rainstorms."
      },
      {
        name: "Interlocking Concrete & Travertine Pavers",
        spec: "8,000 PSI concrete pavers or natural travertine set over 4–6 inches of compacted road-base and 1 inch of bedding sand with polymeric joint sand.",
        benefit: "Flexible segmental surface that moves with expansive clay soil without cracking."
      },
      {
        name: "Mortared & Dry-Laid Natural Flagstone Patios",
        spec: "1.5-to-2-inch thick Oklahoma multi-blend or Texas sandstone flagstone slabs set over reinforced concrete or compacted decomposed granite.",
        benefit: "Authentic, slip-resistant natural stone texture ideal for pool decks, walkways, and garden terraces."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Hydrostatic Pressure & Flash Flood Drainage",
        detail: "Over 80% of retaining wall failures in San Antonio happen because builders skip drainage. Every JRM wall over 24 inches includes washed #57 gravel backfill, filter fabric, and perforated PVC weep drains."
      },
      {
        title: "City of San Antonio 48-Inch Retaining Wall Engineering Rule",
        detail: "Retaining walls exceeding 4 feet in total height (measured from bottom of footing to top of cap) require a building permit and Texas PE structural engineering, which we coordinate."
      },
      {
        title: "Expansive Blackland Clay Sub-Base Compaction",
        detail: "We excavate unstable organic topsoil and vibratory-compact crushed limestone road base in lifts so pavers and stone patios never sink or rut."
      }
    ],
    featuredCaseStudyId: "helotes-retaining-wall-flagstone-hardscape",
    beforeState:
      "Steeply sloped Helotes backyard suffering from severe soil washout during rainstorms and zero level space for outdoor seating.",
    afterState:
      "Terraced Texas limestone retaining wall with subsurface French drainage, stone steps, and a level natural flagstone entertaining patio.",
    testimonials: [
      {
        quote: "Heavy storms used to wash mud right across our back porch in Helotes. JRM built a terraced limestone retaining wall with French drains and a flagstone patio that stayed bone-dry through two major storms.",
        author: "Steven & Maria C.",
        city: "Helotes, TX",
        citySlug: "helotes-tx",
        projectSummary: "Terraced Retaining Wall & Flagstone Patio"
      },
      {
        quote: "Their masonry crew laid an interlocking paver courtyard and stone walkway at our home in Boerne. The base prep and grading were rock solid.",
        author: "Alan F.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "Interlocking Paver Courtyard & Stone Borders"
      }
    ],
    faqs: [
      {
        question: "How do you prevent retaining walls from leaning or cracking in San Antonio?",
        answer: "We excavate a level stepped trench, compact a crushed limestone base, install perforated PVC French drains wrapped in washed gravel and geotextile fabric behind the wall, and reinforce taller walls with geogrid mesh or concrete footings."
      },
      {
        question: "Are interlocking pavers or flagstone better for expansive Texas clay soil?",
        answer: "Both perform exceptionally well when installed properly. Interlocking pavers flex microscopically with soil movement and can be individually lifted if underground plumbing repairs are ever needed, while mortared flagstone over a rebar-reinforced slab offers a classic Texas stone aesthetic."
      },
      {
        question: "Can you integrate steps and landscape lighting into a retaining wall?",
        answer: "Yes. We build wide stone masonry staircases directly into terraced retaining walls and pre-wire 12V solid-brass LED under-cap lights during construction so no wires are visible."
      },
      {
        question: "How much does a retaining wall or stone patio cost in San Antonio?",
        answer: "Stone and segmental retaining walls typically range from $45 to $95+ per square foot of wall face depending on height, excavation access, and drainage requirements, while paver and flagstone patios range from $18 to $32+ per square foot."
      }
    ],
    relatedServices: [
      { name: "Stamped Concrete", to: "/stamped-concrete-overlay", desc: "Reinforced stamped and stained concrete patios and driveways." },
      { name: "Softscapes", to: "/softscapes", desc: "Fill terraced retaining wall beds with native Texas perennials." },
      { name: "Irrigation Systems", to: "/irrigation", desc: "Coordinate underground drainage and drip irrigation with hardscapes." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Hardscape under-cap LED lights and stone pathway illumination." }
    ],
    relatedBlogSlugs: [
      "retaining-wall-design-construction-san-antonio",
      "stamped-concrete-vs-pavers-san-antonio"
    ]
  },
  "stamped-concrete-overlay": {
    slug: "stamped-concrete-overlay",
    serviceName: "Stamped Concrete & Decorative Overlays in San Antonio, TX",
    serviceType: "Stamped Concrete Patios, Walkways, Driveways & Overlays",
    shortSummary:
      "Steel-reinforced stamped concrete patios, polymer-modified decorative concrete overlays, stained concrete, and slip-resistant pool decks in San Antonio.",
    materialsAndOptions: [
      {
        name: "Full-Depth 4,000 PSI Steel-Reinforced Stamped Concrete",
        spec: "4-to-5-inch 4,000 PSI concrete slab over compacted crushed limestone base with #3 steel rebar on 16-inch centers.",
        benefit: "Structural durability engineered for new patio extensions, driveways, and heavy outdoor kitchen islands."
      },
      {
        name: "Polymer-Modified Stamped Concrete Overlays",
        spec: "1/4-to-3/8-inch high-PSI polymer cement resurfacing bonded over structurally sound existing concrete slabs.",
        benefit: "Transforms plain gray builder patios into textured stone or slate without the cost of concrete demolition."
      },
      {
        name: "Integral Iron-Oxide Pigments & UV-Stable Acrylic Sealers",
        spec: "Two-tone integral base color + antiquing release agent sealed with breathable UV-resistant acrylic and SharkGrip non-slip additive.",
        benefit: "Prevents color fading under South Texas sun and ensures safe traction around pools and wet walkways."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Mitigating Slab Cracking on Blackland Clay",
        detail: "Wire mesh pushed into mud does not stop Texas clay movement. We excavate soft topsoil, compact 4 inches of crushed limestone base, tie #3 steel rebar on chairs, and saw-cut control joints within 12–24 hours."
      },
      {
        title: "Breathable Sealer Chemistry for High Humidity",
        detail: "Cheap non-breathable sealers trap ground moisture vapor and turn milky white ('blushing'). We use commercial breathable UV-stable sealers formulated for Texas heat."
      },
      {
        title: "Heat-Reflective Color Palettes for Pool Decks",
        detail: "Around swimming pools and barefoot walkways, we recommend lighter Texas limestone, buff, and desert-sand color blends that stay significantly cooler underfoot."
      }
    ],
    featuredCaseStudyId: "new-braunfels-stamped-concrete-patio",
    beforeState:
      "Cracked, undersized 10x12 plain gray builder concrete pad that settled unevenly on expansive clay soil.",
    afterState:
      "450 sq. ft. Ashlar cut-slate stamped and stained concrete patio poured over compacted limestone base and #3 rebar grid.",
    testimonials: [
      {
        quote: "Everyone who visits our home in New Braunfels thinks our patio is real hand-laid slate stone. JRM's rebar prep and two-tone staining look incredible.",
        author: "Jason & Melissa T.",
        city: "New Braunfels, TX",
        citySlug: "new-braunfels-tx",
        projectSummary: "Ashlar Slate Stamped Concrete Patio & Walkway"
      },
      {
        quote: "Instead of tearing out our structurally sound back porch, JRM applied a stamped concrete overlay that matched our Texas limestone exterior perfectly.",
        author: "Raymond D.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Decorative Stamped Concrete Patio Overlay"
      }
    ],
    faqs: [
      {
        question: "How much does stamped concrete cost per square foot in San Antonio?",
        answer: "New steel-reinforced stamped concrete slabs typically cost $14 to $22 per square foot depending on pattern complexity and site prep, while decorative stamped overlays over existing sound slabs range from $10 to $16 per square foot."
      },
      {
        question: "Is stamped concrete slippery when wet around a swimming pool?",
        answer: "Sealed stamped concrete can be slick if left untreated, which is why we blend a micro-textured non-slip polymer grit additive directly into the top sealer coat on all pool decks and steps."
      },
      {
        question: "How often does stamped concrete need to be resealed in Texas?",
        answer: "To keep colors vibrant and protect the surface from UV rays and stains, we recommend cleaning and applying a fresh maintenance coat of breathable sealer every 2 to 3 years."
      },
      {
        question: "Can you apply a stamped concrete overlay over a cracked slab?",
        answer: "Hairline surface craze cracks can be bridged with crack-isolation membranes and polymer overlays, but slabs with severe structural heaving or vertical displacement should be demolished and re-poured with proper rebar reinforcement."
      }
    ],
    relatedServices: [
      { name: "Hardscaping", to: "/hardscapes", desc: "Compare stamped concrete with interlocking pavers and natural flagstone." },
      { name: "Covered Patios", to: "/covered-patios", desc: "Add a custom roofed pavilion over your new stamped concrete patio." },
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", desc: "Build a stone outdoor cooking island on your reinforced slab." },
      { name: "Artificial Turf", to: "/artificial-turf", desc: "Frame stamped concrete pavers with lush synthetic turf strips." }
    ],
    relatedBlogSlugs: [
      "stamped-concrete-vs-pavers-san-antonio",
      "covered-patio-vs-pergola-texas"
    ]
  },
  "custom-decks": {
    slug: "custom-decks",
    serviceName: "Custom Deck Builders in San Antonio, TX",
    serviceType: "Composite, PVC & Western Red Cedar Deck Construction",
    shortSummary:
      "Multi-level capped composite decks, Western Red Cedar decks, hillside view decks, pool surrounds, and structural staircases across San Antonio and the Hill Country.",
    materialsAndOptions: [
      {
        name: "Capped Composite & Advanced PVC Decking (Trex, TimberTech)",
        spec: "4-side capped polymer/composite boards installed with hidden grooved fasteners over 12-inch OC joists.",
        benefit: "Zero sanding or staining required; resists fading, rot, splinters, and fungal decay for 25–50 years."
      },
      {
        name: "Kiln-Dried Western Red Cedar & Exotic Hardwoods",
        spec: "#1 Grade heartwood Western Red Cedar or Brazilian Ipe hardwood finished with penetrating UV oil.",
        benefit: "Natural wood grain that stays cooler in direct sunlight and complements Hill Country stone homes."
      },
      {
        name: "Heavy-Duty Substructure & Bedrock Concrete Piers",
        spec: "UC4A ground-contact pressure-treated 2x8/2x10 joists, butyl joist tape, and hot-dipped galvanized Simpson Strong-Tie hardware.",
        benefit: "Protects the structural skeleton from moisture rot and high wind uplift on elevated terrains."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Joist Spacing (12\" OC) for South Texas Heat",
        detail: "In 100°F+ San Antonio summers, composite deck boards spanned at 16 inches can feel bouncy or sag over time. We frame composite decks on 12-inch centers for rock-solid rigidity."
      },
      {
        title: "Sloped Hill Country Lot Pier Engineering",
        detail: "In Canyon Lake, Boerne, Helotes, and Bulverde, we anchor concrete deck piers directly into solid limestone strata rather than shallow soil pads."
      },
      {
        title: "Under-Deck Ventilation & Butyl Joist Flashing",
        detail: "Low-profile ground-level decks need cross-ventilation and waterproof butyl joist tape on the tops of every joist to stop trapped humidity from rotting screw threads."
      }
    ],
    featuredCaseStudyId: "canyon-lake-multi-level-composite-deck",
    beforeState:
      "Steep, unusable rocky limestone drop-off behind the home with rotting pine stairs and obstructed views.",
    afterState:
      "Two-tier capped composite and cedar deck anchored on bedrock concrete piers with wide wrap-around stairs, built-in seating, and stair riser LED lighting.",
    testimonials: [
      {
        quote: "Our hillside lot in Canyon Lake was too steep to use until JRM engineered a two-level composite deck. The 12-inch joist framing feels as solid as a concrete floor.",
        author: "Greg & Michelle H.",
        city: "Canyon Lake, TX",
        citySlug: "canyon-lake-tx",
        projectSummary: "Two-Tier Hillside Composite & Cedar Deck"
      },
      {
        quote: "They replaced our splintering wood pool deck in San Antonio with heat-mitigating composite boards and hidden fasteners. Our kids can finally walk barefoot safely.",
        author: "stephanie L.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Poolside Composite Deck & Railing Replacement"
      }
    ],
    faqs: [
      {
        question: "Is composite decking or cedar better for the San Antonio climate?",
        answer: "Capped composite or PVC decking is best if you want zero staining maintenance and a 25–50 year warranty against fading and rot. Western Red Cedar is a great choice if you prefer authentic natural timber at a lower upfront cost and don't mind cleaning and resealing every 2 years."
      },
      {
        question: "Do composite decks get too hot in the Texas sun?",
        answer: "Dark composite colors absorb heat in direct afternoon sun, so for unshaded San Antonio and pool decks we recommend light coastal grays, sandy tans, or heat-mitigating PVC lines—or pairing your deck with a cedar pergola or patio cover."
      },
      {
        question: "Do I need a building permit for a deck in San Antonio?",
        answer: "In the City of San Antonio, decks exceeding 30 inches above grade, exceeding 200 square feet, or attached to the primary dwelling require a building permit. We handle all permit drawings and city inspections."
      },
      {
        question: "How long does it take to build a custom deck?",
        answer: "Most single-level residential decks are completed in 5 to 10 working days once permits and HOA approvals are in place, while multi-level hillside decks with pergolas typically take 2 to 3 weeks."
      }
    ],
    relatedServices: [
      { name: "Covered Patios", to: "/covered-patios", desc: "Add a roofed pavilion or cedar pergola over your custom deck." },
      { name: "Fencing", to: "/fencing", desc: "Coordinate your deck with matching Western Red Cedar privacy fencing." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Integrated low-voltage LED stair riser and post-cap lighting." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Transition from your elevated deck onto a lower flagstone patio." }
    ],
    relatedBlogSlugs: [
      "choosing-right-deck-materials-texas",
      "covered-patio-vs-pergola-texas"
    ]
  },
  "artificial-turf": {
    slug: "artificial-turf",
    serviceName: "Artificial Turf & Putting Green Installation in San Antonio, TX",
    serviceType: "Synthetic Grass Lawns, Pet Turf & Backyard Putting Greens",
    shortSummary:
      "Drought-proof artificial grass lawns, antimicrobial pet turf systems, custom PGA-grade backyard putting greens, and pool-deck turf strips in San Antonio.",
    materialsAndOptions: [
      {
        name: "Lead-Free UV-Stabilized Landscape Turf (75–95 oz Face Weight)",
        spec: "Multi-tone polyethylene blades with thatch layer and high-flow hole-punched or 100% permeable polyurethane backing.",
        benefit: "Looks and feels like lush natural fescue/bermuda grass without mowing, fertilizing, or brown spots."
      },
      {
        name: "Antimicrobial Pet Turf & Zeolite Drainage System",
        spec: "Short-pile high-drainage pet turf over 4 inches of compacted crushed granite with antimicrobial silica sand and zeolite infill.",
        benefit: "Drains over 30 inches of liquid per hour and neutralizes ammonia pet odors before they start."
      },
      {
        name: "Custom Contoured Nylon & Polypropylene Putting Greens",
        spec: "Textured non-directional golf turf rolled to true 10–11 Stimpmeter ball speeds with regulation aluminum cups and fringe apron.",
        benefit: "Tour-quality short-game chipping and putting practice right in your own backyard."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "SAWS Water Restrictions & Drought Resilience",
        detail: "Replacing thirsty natural St. Augustine grass with synthetic turf eliminates lawn sprinkler usage—cutting summer residential water bills by up to 60–75%."
      },
      {
        title: "Preventing Clay Sub-Soil Shifting & Wrinkling",
        detail: "Turf laid directly over Texas dirt wrinkles and sinks. We excavate 3–4 inches of native soil, install geotextile fabric, and compact a two-stage crushed granite base."
      },
      {
        title: "Low-E Window Reflection & Heat Management",
        detail: "We use low-sheen, UV-inhibited turf fibers and light-colored cooling silica infills that reduce surface heat and resist magnification glare."
      }
    ],
    featuredCaseStudyId: "schertz-artificial-turf-putting-green",
    beforeState:
      "Muddy backyard lawn with dead shaded spots under oak trees, worn dog runs, and expensive summer water bills.",
    afterState:
      "Lush 80-oz synthetic lawn and custom 3-hole backyard putting green over a 4-inch compacted crushed granite drainage base.",
    testimonials: [
      {
        quote: "With three dogs and giant oak trees, we couldn't keep real grass alive in Schertz. JRM installed pet turf and a putting green—no more mud on the kitchen floor and zero odor.",
        author: "Brandon & Ashley W.",
        city: "Schertz, TX",
        citySlug: "schertz-tx",
        projectSummary: "Pet-Friendly Artificial Lawn & 3-Hole Putting Green"
      },
      {
        quote: "Our SAWS summer water bill dropped dramatically after JRM converted our backyard and pool surround to artificial turf.",
        author: "Teresa N.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Poolside Synthetic Turf & Paver Ribbon Installation"
      }
    ],
    faqs: [
      {
        question: "How much does artificial turf installation cost in San Antonio?",
        answer: "Turnkey professional installation—including 3–4 inches of soil excavation, compacted crushed granite base, weed barrier, premium turf, seaming, and infill—typically ranges from $11 to $17 per square foot for lawns and $18 to $28 per square foot for custom putting greens."
      },
      {
        question: "Does artificial grass smell when dogs use it?",
        answer: "Not when installed with a proper permeable crushed-granite base, non-absorbent backing, and antimicrobial zeolite infill. Simply rinsing high-use pet areas periodically with a garden hose keeps the turf fresh."
      },
      {
        question: "How long does synthetic turf last in the South Texas sun?",
        answer: "Our UV-stabilized American-made synthetic turf systems last 15 to 20+ years in San Antonio without fading or shedding."
      },
      {
        question: "What happens to my existing lawn sprinkler heads when turf is installed?",
        answer: "Before laying the aggregate sub-base, our irrigation technicians cap off unneeded pop-up lawn rotors while preserving or rerouting drip irrigation zones that water your perimeter trees and flower beds."
      }
    ],
    relatedServices: [
      { name: "Hardscaping", to: "/hardscapes", desc: "Combine synthetic turf with modern concrete pavers and stone borders." },
      { name: "Irrigation Systems", to: "/irrigation", desc: "Cap lawn sprinklers and convert perimeter beds to water-saving drip." },
      { name: "Softscapes", to: "/softscapes", desc: "Frame your synthetic lawn with native Texas perennial beds." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Illuminate your backyard putting green for evening play." }
    ],
    relatedBlogSlugs: [
      "artificial-turf-san-antonio-guide",
      "texas-backyard-landscaping-ideas"
    ]
  },
  "fencing": {
    slug: "fencing",
    serviceName: "Custom Fence Builders in San Antonio, TX",
    serviceType: "Western Red Cedar Privacy Fences, Ornamental Iron & Ranch Fencing",
    shortSummary:
      "Board-on-board Western Red Cedar privacy fences, steel-post fences, ornamental wrought iron, stone column entries, and ranch fencing in San Antonio.",
    materialsAndOptions: [
      {
        name: "Western Red Cedar Board-on-Board & Cap-and-Trim Fences",
        spec: "#1 Grade Western Red Cedar pickets, 3 horizontal 2x4 cedar rails, pressure-treated kickboard, top cap, and fascia trim.",
        benefit: "Zero sightline gaps even as wood seasons, with natural oils that resist warping and rot."
      },
      {
        name: "Concealed Galvanized Steel Posts (PostMaster / Schedule-40)",
        spec: "Heavy-gauge structural steel posts set 30–36 inches deep in concrete and wrapped with cedar trim.",
        benefit: "Eliminates the #1 cause of Texas fence failure—rotted or snapped 4x4 wood posts at ground level."
      },
      {
        name: "Ornamental Iron, Bull Panel & Hill Country Ranch Fencing",
        spec: "Powder-coated welded steel ornamental panels, cedar-framed wire mesh, and pipe/cable acreage fencing.",
        benefit: "Preserves scenic greenbelt and Hill Country views while securing pets and property lines."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Core-Drilling Solid Limestone Caliche",
        detail: "In North San Antonio, Boerne, Helotes, and Bulverde, builders who stop digging at 12 inches when they hit rock leave fences that blow over in the first thunderstorm. We use pneumatic rock drills to reach full 30–36 inch footing depth."
      },
      {
        title: "Ring-Shank Coated Fasteners (Never Staples)",
        detail: "Intense Texas humidity swings cause smooth nails and staples to pop out. We use exterior-grade hot-dipped galvanized or stainless ring-shank pickets nails and structural lag screws."
      },
      {
        title: "Welded Steel Gate Frames That Never Sag",
        detail: "Every wide walk gate and double drive gate is built on a rigid welded metal frame with adjustable heavy-duty hinges so it latches smoothly year after year."
      }
    ],
    featuredCaseStudyId: "bulverde-cedar-privacy-fence-masonry",
    beforeState:
      "Wind-damaged, leaning builder-grade whitewood fence with wide shrinkage gaps and sagging wooden gates.",
    afterState:
      "6'6\" Western Red Cedar board-on-board privacy fence on rock-drilled steel posts with pressure-treated kickboards, top cap rail, and welded-frame gates.",
    testimonials: [
      {
        quote: "After a spring storm knocked down our builder fence in Bulverde, JRM rock-drilled steel posts into the limestone and built a cedar board-on-board fence with cap and trim. It didn't budge a millimeter in 60 mph winds.",
        author: "Jeff & Amanda R.",
        city: "Bulverde, TX",
        citySlug: "bulverde-tx",
        projectSummary: "Cedar Board-on-Board Fence on Rock-Drilled Steel Posts"
      },
      {
        quote: "They installed ornamental wrought iron along our greenbelt lot line and cedar privacy fencing on the sides. Clean crew and great gate hardware.",
        author: "paul K.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Greenbelt Ornamental Iron & Side Cedar Fencing"
      }
    ],
    faqs: [
      {
        question: "Why should I upgrade from wood 4x4 posts to galvanized steel fence posts?",
        answer: "In San Antonio's wet-to-dry soil cycle, wood 4x4 posts eventually rot at the concrete collar or twist in the heat. Galvanized steel posts concealed behind cedar pickets withstand 70+ mph wind gusts and last 25+ years."
      },
      {
        question: "What is the difference between side-by-side and board-on-board cedar fencing?",
        answer: "Standard side-by-side pickets shrink slightly in the Texas summer, leaving small 1/8-to-1/4-inch daylight gaps. Board-on-board overlaps alternating pickets by 1 to 1.5 inches so your backyard remains 100% private."
      },
      {
        question: "Do you call Texas 811 before digging fence post holes?",
        answer: "Always. Before any excavation or rock drilling begins, we coordinate Texas 811 underground utility locates so gas, fiber-optic, electrical, and water lines are marked and protected."
      },
      {
        question: "Can you add stone columns to a cedar or wrought iron fence?",
        answer: "Yes. Because our in-house masonry crews build full hardscapes and outdoor kitchens, we frequently construct chopped Texas limestone columns and entry piers integrated directly into wood and iron fences."
      }
    ],
    relatedServices: [
      { name: "Custom Decks", to: "/custom-decks", desc: "Pair your new cedar fence with a matching cedar or composite deck." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Add Texas limestone masonry columns and retaining wall borders." },
      { name: "Covered Patios", to: "/covered-patios", desc: "Coordinate your fence stain with a custom cedar pergola or patio cover." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Mount warm low-voltage LED perimeter lights along fence posts." }
    ],
    relatedBlogSlugs: [
      "texas-backyard-landscaping-ideas",
      "retaining-wall-design-construction-san-antonio"
    ]
  },
  "adu-services": {
    slug: "adu-services",
    serviceName: "ADU Builders & Casita Construction in San Antonio, TX",
    serviceType: "Detached Guest Houses, Backyard Casitas & In-Law Suites",
    shortSummary:
      "Turnkey Accessory Dwelling Unit (ADU) design and construction, detached backyard casitas, garage conversions, and aging-in-place in-law suites in San Antonio.",
    materialsAndOptions: [
      {
        name: "Engineered Monolithic Slab & Utility Trenching Package",
        spec: "Rebar/post-tensioned concrete foundation with underground sewer tie-in, domestic water supply, and 100–125A electrical sub-panel.",
        benefit: "Provides complete independent residential utilities tied cleanly into your primary residence systems."
      },
      {
        name: "Energy-Efficient Framing, Spray Foam & Mini-Split HVAC",
        spec: "2x6 exterior framing, spray-foam roof deck insulation, Low-E windows, and whisper-quiet high-SEER ductless or ducted heat pumps.",
        benefit: "Keeps monthly electric costs ultra-low while delivering independent room-by-room climate control."
      },
      {
        name: "Universal Design / ADA-Friendly Interior Finishes",
        spec: "36-inch wide interior doorways, curbless walk-in tile showers, blocking for grab bars, quartz kitchenettes, and slip-resistant LVP flooring.",
        benefit: "Ensures safe, comfortable single-level living for aging parents, long-term family guests, or home offices."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "City of San Antonio Unified Development Code (UDC) ADU Rules",
        detail: "We verify lot zoning, maximum ADU footprint limits (typically up to 800 sq. ft. or zoning-specific percentages), rear/side yard setbacks, and alley access before drafting plans."
      },
      {
        title: "Architectural Matching & Historic / HOA Compliance",
        detail: "San Antonio codes and suburban HOAs require detached casitas to complement the main house's exterior siding/masonry and roof pitch—something we engineer into every design."
      },
      {
        title: "Gravity Sewer Fall vs. Sewage Ejector Pump Engineering",
        detail: "When a backyard ADU sits lower than the main house sewer cleanout, we install code-compliant sealed sewage ejector basins so plumbing drains reliably."
      }
    ],
    featuredCaseStudyId: "san-antonio-detached-adu-casita",
    beforeState:
      "Underutilized rear yard space with no private accommodations for aging parents visiting or living on-site.",
    afterState:
      "650 sq. ft. detached 1-bedroom backyard casita with full kitchen, curbless tile bath, laundry, covered porch, and matched limestone/siding exterior.",
    testimonials: [
      {
        quote: "We hired JRM to build a 650 sq. ft. detached casita in San Antonio for my mother. From city permits and sewer trenching to the curbless shower and kitchen cabinets, Robert's team delivered a true custom home in miniature.",
        author: "antonio & Rachel G.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "650 Sq. Ft. Detached Backyard ADU / In-Law Casita"
      },
      {
        quote: "Converting our detached garage in Alamo Heights into a guest suite and studio added tremendous value to our property. The exterior matches our historic home perfectly.",
        author: "Eleanor W.",
        city: "Alamo Heights, TX",
        citySlug: "alamo-heights-tx",
        projectSummary: "Detached Garage Apartment & Guest Casita Conversion"
      }
    ],
    faqs: [
      {
        question: "How much does it cost to build an ADU or guest casita in San Antonio?",
        answer: "Garage conversions into living suites typically range from $55,000 to $95,000, compact detached studio casitas (350–500 sq. ft.) range from $95,000 to $145,000, and custom 1-bedroom detached ADUs (550–800 sq. ft.) with full kitchens and baths range from $145,000 to $220,000+."
      },
      {
        question: "Does an ADU require its own CPS Energy electric meter or SAWS water meter?",
        answer: "In most residential family casita builds, we feed the ADU from a dedicated sub-panel off the main house electrical service (upgrading the main panel if needed) and tie into the existing water and sewer lines, avoiding separate monthly utility base fees."
      },
      {
        question: "How long does ADU permitting and construction take in San Antonio?",
        answer: "Architectural design, engineering, and City of San Antonio permit approval typically take 4 to 8 weeks, followed by 14 to 22 weeks of on-site construction."
      },
      {
        question: "Can you also build the private patio, walkway, and privacy fence for the ADU?",
        answer: "Yes. Because JRM is a full-service construction and landscaping contractor, we build the connecting walkways, private covered porch, privacy fencing, and landscaping around your new casita."
      }
    ],
    relatedServices: [
      { name: "New Construction", to: "/new-construction", desc: "Ground-up custom residential construction and structural additions." },
      { name: "House Remodeling", to: "/house-remodeling", desc: "Interior renovations and garage-to-suite conversions." },
      { name: "General Contracting", to: "/general-contracting", desc: "Complete municipal permitting, MEP trades, and inspections." },
      { name: "Covered Patios", to: "/covered-patios", desc: "Add a shaded front porch or courtyard to your backyard casita." }
    ],
    relatedBlogSlugs: [
      "adu-construction-planning-texas",
      "kitchen-remodeling-costs-san-antonio"
    ]
  },
  "design-service": {
    slug: "design-service",
    serviceName: "3D Landscape & Architectural Design in San Antonio, TX",
    serviceType: "3D Outdoor Living Renderings, Master Landscape Plans & Construction Blueprints",
    shortSummary:
      "Photorealistic 3D landscape and outdoor living design, scaled architectural site plans, HOA submittal packages, and material specification planning in San Antonio.",
    materialsAndOptions: [
      {
        name: "Photorealistic 3D Day & Night CAD Renderings",
        spec: "Full-color 3D architectural models showing exact house elevations, patio rooflines, stone textures, planting beds, and night lighting.",
        benefit: "Lets you walk through your finished project virtually and refine materials before a single shovel hits the ground."
      },
      {
        name: "Scaled 2D Master Site Plans & Drainage Grading Maps",
        spec: "Laser-measured property boundaries, impervious cover calculations, elevation contours, utility sleeves, and hardscape dimensions.",
        benefit: "Eliminates costly mid-project change orders and guarantees proper stormwater flow away from your foundation."
      },
      {
        name: "HOA Architectural Control (ACC) & City Permit Submittal Sets",
        spec: "Dimensioned structural framing diagrams, roof pitch elevations, stone/shingle boards, and Bexar County botanical plant schedules.",
        benefit: "Accelerates HOA committee approvals and municipal building permits on the first submission."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Sun Path & Afternoon Shade Modeling",
        detail: "Our 3D software simulates exact San Antonio solar angles across summer and winter months so your patio roof or pergola blocks blinding west sun."
      },
      {
        title: "USDA Zone 8b/9a Botanical & Soil Matching",
        detail: "Every planting plan specifies cold-hardy, drought-adapted plants suited to whether your lot sits on rocky Hill Country caliche or alkaline blackland clay."
      },
      {
        title: "Phased Master Planning for Multi-Stage Budgets",
        detail: "If you want to build your covered patio and hardscape in Phase 1 and add the outdoor kitchen or turf in Phase 2, we design the master plan so underground gas and electrical conduits are sleeved upfront."
      }
    ],
    featuredCaseStudyId: "stone-oak-outdoor-kitchen-pavilion",
    beforeState:
      "Homeowners uncertain how an L-shaped outdoor kitchen, gable pavilion roof, and dining terrace would fit their irregular backyard setback lines.",
    afterState:
      "Approved 3D architectural design translated into a built limestone outdoor kitchen and cedar pavilion with zero field layout surprises.",
    testimonials: [
      {
        quote: "Seeing the 3D renderings of our backyard in Stone Oak before construction started helped us realize we wanted to rotate the outdoor kitchen bar by 90 degrees. That one design decision made the whole space flow ten times better.",
        author: "Christopher & Dana M.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "3D Master Outdoor Living Design & Build"
      },
      {
        quote: "Our HOA in Boerne is notoriously strict. JRM's scaled design packet and material specs got approved in less than a week.",
        author: "Laura J.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "HOA Submittal Package & Landscape Master Plan"
      }
    ],
    faqs: [
      {
        question: "Why should I use a design-build contractor instead of hiring a separate landscape designer?",
        answer: "Independent designers often draw concepts that cost twice your target budget to actually build. Because JRM designs and builds in-house, every 3D plan we create is engineered to real-world San Antonio construction costs, structural codes, and material availability."
      },
      {
        question: "What is included in a JRM 3D landscape or outdoor living design package?",
        answer: "You receive an on-site laser elevation consultation, scaled 2D master layout, photorealistic 3D day and night renderings, material and plant selections, HOA/permit submittal drawings, and an itemized construction proposal."
      },
      {
        question: "Can we revise the 3D design if we want to test different stone colors or roof styles?",
        answer: "Yes. During our interactive design review, we can swap roof geometries (gable vs. hip vs. pergola), compare limestone vs. brick, and adjust patio dimensions until you love every detail."
      },
      {
        question: "Do you design both interior remodels and exterior outdoor living projects?",
        answer: "Yes. We provide space planning and 3D visualization for interior kitchen/bath remodels, room additions, detached ADUs, and complete backyard transformations."
      }
    ],
    relatedServices: [
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", desc: "Design ergonomic cooking zones, bar islands, and appliance layouts." },
      { name: "Covered Patios", to: "/covered-patios", desc: "Model gable, hip, and shed roof tie-ins before framing begins." },
      { name: "Softscapes", to: "/softscapes", desc: "Curated Texas native botanical planting plans and bed layouts." },
      { name: "House Remodeling", to: "/house-remodeling", desc: "Interior floor plan reconfiguration and kitchen/bath design." }
    ],
    relatedBlogSlugs: [
      "landscaping-ideas-san-antonio-homes",
      "texas-backyard-landscaping-ideas"
    ]
  },
  "softscapes": {
    slug: "softscapes",
    serviceName: "Softscape & Xeriscape Landscaping in San Antonio, TX",
    serviceType: "Texas Native Plantings, Soil Amendment, Sod & Mulch Installation",
    shortSummary:
      "Drought-tolerant Texas native softscapes, SAWS-friendly xeriscapes, organic soil amendment, Zeon Zoysia & Bermuda sod installation, and stone-bordered garden beds in San Antonio.",
    materialsAndOptions: [
      {
        name: "Drought-Tolerant & Deer-Resistant Texas Native Perennials",
        spec: "Cenizo (Texas Sage), Esperanza, Red Yucca, Gulf Muhly Grass, Flame Acanthus, Salvia Greggii, and Pride of Barbados.",
        benefit: "Thrives in 100°F+ heat and alkaline soil while providing three-season blooms for pollinators."
      },
      {
        name: "Amended Organic Bed Soil, Hardwood Mulch & River Rock",
        spec: "6 inches of screened organic compost-enriched sandy loam top-dressed with double-shredded native hardwood mulch or Colorado river rock.",
        benefit: "Breaks up dense clay, improves root oxygenation, and reduces soil moisture evaporation by up to 70%."
      },
      {
        name: "Drought-Tolerant Turfgrass Sod (Zoysia, Bermuda & St. Augustine)",
        spec: "Fresh-harvested Texas pallet sod (Palisades/Zeon Zoysia, Tifway 419 Bermuda, or Raleigh/Palmetto St. Augustine) rolled over laser-graded loam.",
        benefit: "Establishes dense, weed-resistant turf matched to your yard's sun and shade profile."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "SAWS WaterSaver Landscape Coupon Compatibility",
        detail: "We design drought-tolerant perennial beds and turf conversions using SAWS-approved native plant palettes that qualify for municipal water conservation programs."
      },
      {
        title: "White-Tailed Deer Pressure in Hill Country & North SA",
        detail: "In Stone Oak, Hollywood Park, Helotes, Boerne, and Bulverde, deer will devour traditional nursery plants overnight; we specify proven unpalatable deer-resistant species."
      },
      {
        title: "Alkaline Caliche & Heavy Clay Soil Preparation",
        detail: "Planting nursery stock directly into unamended Bexar County clay leads to iron chlorosis and root rot. We excavate and amend every bed with organic compost and expanded shale."
      }
    ],
    featuredCaseStudyId: "san-antonio-native-softscape-palm-installation",
    beforeState:
      "Sun-baked front and rear yard with compacted clay soil, dying builder shrubs, and patchy weeds.",
    afterState:
      "Layered Texas native perennial beds, chopped limestone edging, amended organic soil, specimen palms, and targeted drip irrigation.",
    testimonials: [
      {
        quote: "Deer used to eat everything we planted in Helotes. JRM redesigned our beds with Texas Sage, Red Yucca, Muhly Grass, and stone borders—the deer leave it alone and our yard bursts with color.",
        author: "cynthia & Roger H.",
        city: "Helotes, TX",
        citySlug: "helotes-tx",
        projectSummary: "Deer-Resistant Native Softscape & Limestone Borders"
      },
      {
        quote: "They stripped out our dead weeds, brought in rich topsoil, laid Palisades Zoysia sod, and installed beautiful flower beds.",
        author: "Victor M.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Zoysia Sod Installation & Front Yard Curb Appeal"
      }
    ],
    faqs: [
      {
        question: "What are the best drought-tolerant plants for San Antonio landscaping?",
        answer: "Top performers for San Antonio heat and winter freezes include Texas Sage (Cenizo), Esperanza (Yellow Bells), Red Yucca, Gulf Muhly Grass, Autumn Sage (Salvia greggii), Lantana, Rosemary, and Agave."
      },
      {
        question: "Which grass sod is best for San Antonio yards: Zoysia, Bermuda, or St. Augustine?",
        answer: "Zoysia (Palisades or Zeon) is our most popular all-around choice because it handles both full sun and moderate tree shade with strong drought recovery. Bermuda is best for full-sun athletic/pet yards, while St. Augustine works best under heavier live oak shade."
      },
      {
        question: "Should I use hardwood mulch or decorative river rock in my landscape beds?",
        answer: "Shredded hardwood mulch is best around moisture-loving shrubs and trees because it cools the soil and decomposes into rich organic humus. Decorative river rock or crushed granite is ideal for xeriscapes, succulents, palms, and drainage swales where wind or rain would wash mulch away."
      },
      {
        question: "When is the best time of year to plant softscapes in South Central Texas?",
        answer: "Spring (March–May) and Fall (September–November) offer ideal root establishment temperatures, though with proper soil amendment and drip irrigation we install sod, trees, and native perennials year-round."
      }
    ],
    relatedServices: [
      { name: "Irrigation Systems", to: "/irrigation", desc: "Protect new plantings with automated root-zone drip irrigation." },
      { name: "Palm Trees", to: "/palm-trees", desc: "Anchor your softscape beds with cold-hardy specimen palm trees." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Frame planting beds with chopped Texas limestone borders." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Highlight ornamental trees and garden beds after sunset." }
    ],
    relatedBlogSlugs: [
      "landscaping-ideas-san-antonio-homes",
      "texas-backyard-landscaping-ideas"
    ]
  },
  "palm-trees": {
    slug: "palm-trees",
    serviceName: "Cold-Hardy Palm Tree Supply & Installation in San Antonio, TX",
    serviceType: "Specimen Palm Tree Sourcing, Crane Planting & Shade Trees",
    shortSummary:
      "Freeze-resilient Texas Sabal, Windmill, Mediterranean Fan, and Pindo palm tree supply, crane placement, soil amendment, and root-zone irrigation in San Antonio.",
    materialsAndOptions: [
      {
        name: "Cold-Hardy Specimen Palms (Sabal, Windmill & Med Fan)",
        spec: "Sabal texana / Sabal palmetto (hardy to 10–15°F), Trachycarpus fortunei (Windmill Palm, hardy to 5–10°F), and Chamaerops humilis (Mediterranean Fan Palm).",
        benefit: "Proven freeze resilience through South Central Texas winter cold snaps when non-hardy palms fail."
      },
      {
        name: "Pindo Palms, Mule Palms & Poolside Resort Specimens",
        spec: "Butia capitata (Pindo/Jelly Palm) with arching silver-blue fronds and multi-trunk specimen clusters.",
        benefit: "Drop-free or low-litter root systems safe to plant near swimming pool shells, coping, and patios."
      },
      {
        name: "Sandy-Loam Drainage Pit & Palm Nutrient Package",
        spec: "Expanded planting pit backfilled with coarse washed sand, composted loam, slow-release magnesium/potassium palm fertilizer, and deep-root bubblers.",
        benefit: "Prevents fatal crown/root rot caused by waterlogged Bexar County clay soil."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Post-2021 Winter Freeze Selection Standards",
        detail: "After Winter Storm Uri, we stopped recommending tender tropical palms and focus on cold-hardy Sabal, Windmill, Mediterranean Fan, and Pindo varieties proven in USDA Zone 8b/9a."
      },
      {
        title: "Pool Deck & Foundation Safe Root Architecture",
        detail: "Unlike invasive shade trees, palm roots grow in a compact fibrous ball that will not crack pool gunite shells, stamped concrete decks, or plumbing lines."
      },
      {
        title: "Crane-Assisted Placement & Subsurface Drainage",
        detail: "Mature specimen palms weigh 1,500–4,000+ lbs; we handle crane rigging, percolation testing, and French drain relief in heavy clay."
      }
    ],
    featuredCaseStudyId: "san-antonio-native-softscape-palm-installation",
    beforeState:
      "Bare poolside and front entry lacking vertical architectural scale after freeze-damaged tropical plants were removed.",
    afterState:
      "Crane-set cold-hardy Texas Sabal and Windmill palms anchored in sandy-loam drainage pits with dedicated root bubblers and brass LED uplights.",
    testimonials: [
      {
        quote: "After losing our old queen palms in a freeze, JRM planted three cold-hardy Texas Sabal and Mediterranean Fan palms around our pool in San Antonio. They sailed through last winter's freeze without a single brown frond.",
        author: "Douglas & Karen S.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Poolside Cold-Hardy Sabal & Mediterranean Fan Palms"
      },
      {
        quote: "Their crane crew placed two massive specimen palms in our courtyard in New Braunfels without leaving a mark on our driveway or lawn.",
        author: "peter L.",
        city: "New Braunfels, TX",
        citySlug: "new-braunfels-tx",
        projectSummary: "Crane-Set Courtyard Specimen Palms & Lighting"
      }
    ],
    faqs: [
      {
        question: "Which palm trees survive winter freezes in San Antonio?",
        answer: "The most cold-hardy palms for San Antonio and the Hill Country are the Windmill Palm (Trachycarpus fortunei), Texas Sabal / Palmetto Palm (Sabal texana / palmetto), Needle Palm, Mediterranean Fan Palm (Chamaerops humilis), and Pindo Palm (Butia capitata)."
      },
      {
        question: "Are palm tree roots safe to plant next to a swimming pool or house foundation?",
        answer: "Yes. Palm trees do not form thick woody lateral roots that heave concrete. Their fibrous root balls grow downward and outward gently, making them ideal within 4 to 6 feet of pool decks and patios."
      },
      {
        question: "How do you prevent palm tree root rot in heavy San Antonio clay?",
        answer: "Palms hate sitting in stagnant water. When excavating into dense clay, we dig an oversized basin, test drainage percolation, blend coarse sand and compost into the backfill, and slightly mound the root ball crown above surrounding grade."
      },
      {
        question: "When is the best season to plant palm trees in Texas?",
        answer: "Late spring through summer (April–August) is optimal because warm soil temperatures trigger rapid new root growth, though cold-hardy container-grown palms can be installed almost year-round."
      }
    ],
    relatedServices: [
      { name: "Best Selling Trees", to: "/best-selling-trees", desc: "Explore Live Oaks, Monterrey Oaks, Crape Myrtles, and shade trees." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Dramatic 12V brass LED uplighting for palm trunks and canopies." },
      { name: "Irrigation Systems", to: "/irrigation", desc: "Dedicated deep-root tree bubbler zones for newly planted palms." },
      { name: "Softscapes", to: "/softscapes", desc: "Surround your palms with river rock, boulders, and agaves." }
    ],
    relatedBlogSlugs: [
      "texas-backyard-landscaping-ideas",
      "landscaping-ideas-san-antonio-homes"
    ]
  },
  "irrigation": {
    slug: "irrigation",
    serviceName: "Sprinkler & Drip Irrigation Systems in San Antonio, TX",
    serviceType: "Smart Lawn Sprinkler Installation, Drip Irrigation & Drainage",
    shortSummary:
      "Water-conserving multi-zone sprinkler installations, pressure-compensating drip irrigation, WiFi smart controllers, and backflow protection in San Antonio.",
    materialsAndOptions: [
      {
        name: "Pressure-Regulated Pop-Up Rotors & Multi-Stream Nozzles",
        spec: "Commercial Rain Bird / Hunter pressure-regulated (PRS) heads with matched precipitation rotary nozzles.",
        benefit: "Eliminates wind misting and runoff on clay slopes, delivering 30% higher water efficiency."
      },
      {
        name: "Subsurface & Root-Zone Drip Irrigation Grids",
        spec: "Pressure-compensating drip emitter tubing with check valves, pressure reducers, and Y-strainer filtration.",
        benefit: "Delivers water directly to plant roots with near-zero evaporation—often exempt from strict spray-watering hours."
      },
      {
        name: "EPA WaterSense Smart WiFi Controllers & Rain/Freeze Sensors",
        spec: "Rachio, Hunter Hydrawise, or Rain Bird ESP-TM2 WiFi controllers paired with wireless rain/freeze shutoff sensors.",
        benefit: "Automatically skips watering before San Antonio rainstorms or winter freezes and adjusts schedules from your phone."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "TCEQ & City of San Antonio Backflow Prevention Compliance",
        detail: "Every irrigation system must include a code-compliant backflow prevention assembly (PVB, Double Check, or RPZ) to protect the municipal potable water supply, plus a rain/freeze shutoff sensor."
      },
      {
        title: "Cycle-and-Soak Programming for Heavy Clay Soils",
        detail: "Bexar County clay absorbs water slowly (~0.15 inches/hour). Running a zone for 20 minutes straight causes street runoff; we program smart controllers for three 6-minute soak cycles."
      },
      {
        title: "SAWS Drought Stage & Foundation Watering Zones",
        detail: "We separate turf spray zones from foundation perimeter and flower-bed drip zones so your trees and slab stay hydrated even during Stage 2 or Stage 3 drought rules."
      }
    ],
    featuredCaseStudyId: "san-antonio-native-softscape-palm-installation",
    beforeState:
      "Aging sprinkler system with misting heads, broken lateral pipes under tree roots, and high water bills.",
    afterState:
      "Zoned smart irrigation upgrade featuring pressure-regulated rotary heads, dedicated foundation/bed drip lines, wireless rain/freeze sensor, and WiFi app control.",
    testimonials: [
      {
        quote: "JRM retrofitted our front and backyard sprinklers in San Antonio with pressure-regulated nozzles, drip lines for our flower beds, and a smart WiFi controller. Our monthly SAWS bill dropped immediately.",
        author: "kenneth & Lori B.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Smart Sprinkler Retrofit & Bed Drip Conversion"
      },
      {
        quote: "Before pouring our new patio and laying sod in Schertz, JRM trenched a brand-new 8-zone irrigation system. Every head has head-to-head coverage with zero overspray onto our fence.",
        author: "Timothy R.",
        city: "Schertz, TX",
        citySlug: "schertz-tx",
        projectSummary: "New 8-Zone Sprinkler & Drip System Installation"
      }
    ],
    faqs: [
      {
        question: "How much does a new sprinkler system installation cost in San Antonio?",
        answer: "A complete residential multi-zone sprinkler and drip irrigation system in San Antonio typically ranges from $3,200 to $6,800+ depending on lot size, number of hydro-zones, rock trenching requirements, and backflow device specifications."
      },
      {
        question: "Why should flower beds and trees be on separate drip zones from lawn sprinklers?",
        answer: "Turfgrass and deep-rooted shrubs/trees have completely different watering frequencies, and tall shrubs block spray heads. Dedicated drip zones deliver slow, deep moisture directly to root balls without wetting foliage or wasting water."
      },
      {
        question: "Can you reroute or cap sprinkler lines before building a patio, pool, or artificial turf lawn?",
        answer: "Yes. Because JRM builds both the outdoor structures and the irrigation systems, our crews locate, sleeve, reroute, and cap existing PVC mainlines and lateral zones before concrete or turf base work begins."
      },
      {
        question: "Do your systems include required rain and freeze shutoff sensors?",
        answer: "Yes. Every new irrigation system and controller upgrade we install includes a wireless rain and freeze sensor that automatically halts operation during rain events or when temperatures drop near freezing."
      }
    ],
    relatedServices: [
      { name: "Softscapes", to: "/softscapes", desc: "Pair your new irrigation system with fresh Zoysia sod and native beds." },
      { name: "Artificial Turf", to: "/artificial-turf", desc: "Eliminate lawn watering entirely in high-traffic pet or play zones." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Install subsurface PVC sleeves and French drains beneath new patios." },
      { name: "Palm Trees", to: "/palm-trees", desc: "Dedicated deep-root bubbler irrigation for specimen palms and oaks." }
    ],
    relatedBlogSlugs: [
      "landscaping-ideas-san-antonio-homes",
      "artificial-turf-san-antonio-guide"
    ]
  },
  "landscape-lighting": {
    slug: "landscape-lighting",
    serviceName: "Outdoor LED Landscape Lighting in San Antonio, TX",
    serviceType: "Low-Voltage Architectural, Pathway, Tree & Patio Lighting",
    shortSummary:
      "Solid cast-brass 12V LED landscape lighting, live oak canopy uplighting, hardscape under-cap lights, pathway illumination, and outdoor kitchen task lighting in San Antonio.",
    materialsAndOptions: [
      {
        name: "Solid Cast-Brass & Copper 12V LED Fixtures",
        spec: "IP67/IP68 weather-sealed solid cast brass uplights, path lights, and well lights with replaceable warm-white (2700K–3000K) integrated LED modules.",
        benefit: "Never rusts, peels, or corrodes in alkaline Texas soil and hard sprinkler water, unlike painted aluminum fixtures."
      },
      {
        name: "Stainless Steel Multi-Tap Transformers & Astronomical Timers",
        spec: "Commercial stainless steel low-voltage transformers (12V–15V taps) with astronomical dusk-to-dawn or smart WiFi app control.",
        benefit: "Compensates for voltage drop over long yard runs and adjusts automatically as sunset times shift."
      },
      {
        name: "Hardscape Under-Cap, Step Riser & Bistro String Lighting",
        spec: "Concealed LED masonry ledge lights, recessed deck stair lights, and commercial catenary wire café lighting.",
        benefit: "Eliminates trip hazards on stone steps and creates warm resort ambiance across patios and decks."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Hill Country Dark-Sky Friendly Shielded Optics",
        detail: "In Boerne, Bulverde, Helotes, Canyon Lake, and Fredericksburg, we use glare-shielded hex-louver uplights and downlights that illuminate your property without light trespass into the night sky."
      },
      {
        title: "Showcasing Heritage Live Oaks & Texas Limestone",
        detail: "Grazing chopped white Texas limestone facades and uplighting sculpted Live Oak canopies with 2700K warm LEDs adds dramatic nighttime curb appeal and home security."
      },
      {
        title: "Waterproof Gel-Filled Connections & Conduit Sleeving",
        detail: "We bury heavy-gauge 12/2 direct-burial copper landscape wire and seal every splice with waterproof silicone-gel wire nuts."
      }
    ],
    featuredCaseStudyId: "san-antonio-native-softscape-palm-installation",
    beforeState:
      "Pitch-black front facade and backyard patio after sunset with a single harsh floodlight creating glare.",
    afterState:
      "Layered 2700K solid-brass LED lighting system featuring architectural stone grazing, palm/oak uplights, and pathway illumination on an astronomical timer.",
    testimonials: [
      {
        quote: "The brass LED lighting JRM installed on our limestone facade and live oaks in Alamo Heights made our home look like a magazine cover at night.",
        author: "Harrison & Claire D.",
        city: "Alamo Heights, TX",
        citySlug: "alamo-heights-tx",
        projectSummary: "Architectural Facade & Live Oak Canopy Lighting"
      },
      {
        quote: "We had JRM add under-cap lights to our retaining wall and recessed lights in our covered patio in Boerne. The warm 2700K glow is relaxing and zero glare.",
        author: "glenn P.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "Patio, Retaining Wall & Pathway LED System"
      }
    ],
    faqs: [
      {
        question: "How much does professional LED landscape lighting cost in San Antonio?",
        answer: "A commercial-grade solid-brass low-voltage LED system (including stainless steel transformer, 8 to 12 brass fixtures, direct-burial 12/2 wiring, and smart timer) typically starts between $2,400 and $4,200, with larger estate and backyard packages ranging from $4,500 to $8,500+."
      },
      {
        question: "How much electricity does a 12V LED landscape lighting system use?",
        answer: "Because modern 12V LED fixtures draw only 3 to 7 watts each (compared to 35–50 watts for old halogen bulbs), a 12-fixture system running 6 hours every night typically adds less than $4 to $6 per month to your CPS Energy bill."
      },
      {
        question: "Why do you use solid cast-brass fixtures instead of aluminum?",
        answer: "San Antonio's mineral-heavy water and alkaline soil corrode powder-coated aluminum fixtures within 2 to 4 years. Solid cast brass develops a rich bronze patina and lasts for decades."
      },
      {
        question: "Can I control my outdoor lighting from my smartphone?",
        answer: "Yes. We offer smart WiFi astronomical timers and zoned transformers that let you dim lights, set sunset-to-midnight schedules, or turn on patio task lights from your phone."
      }
    ],
    relatedServices: [
      { name: "Covered Patios", to: "/covered-patios", desc: "Recessed soffit lighting, sconce wiring, and ceiling fan rough-ins." },
      { name: "Hardscaping", to: "/hardscapes", desc: "Integrate concealed under-cap LED lights into stone retaining walls." },
      { name: "Palm Trees", to: "/palm-trees", desc: "Spotlight specimen palms and Heritage Live Oaks at night." },
      { name: "Outdoor Kitchens", to: "/outdoor-kitchens", desc: "Task lighting over grills and under-counter bar LED strips." }
    ],
    relatedBlogSlugs: [
      "texas-backyard-landscaping-ideas",
      "landscaping-ideas-san-antonio-homes"
    ]
  },
  "best-selling-trees": {
    slug: "best-selling-trees",
    serviceName: "Shade & Ornamental Tree Planting in San Antonio, TX",
    serviceType: "Texas Native Shade Trees, Live Oaks, Monterrey Oaks & Crape Myrtles",
    shortSummary:
      "Nursery-grown Southern Live Oaks, Monterrey Oaks, Cedar Elms, Texas Mountain Laurels, and Crape Myrtles supplied and professionally planted in San Antonio.",
    materialsAndOptions: [
      {
        name: "Texas Native & Adapted Shade Trees (30-Gal to 100-Gal+)",
        spec: "Southern Live Oak (Quercus virginiana), Monterrey Oak (Mexican White Oak), Cedar Elm, and Chinquapin Oak.",
        benefit: "Fast-establishing canopy shade that lowers yard and roof temperatures while resisting oak wilt."
      },
      {
        name: "Flowering Ornamental & Privacy Screening Trees",
        spec: "Texas Mountain Laurel, Desert Willow, Natchez/Muskogee Crape Myrtle, Yaupon Holly, and Eagleston Holly.",
        benefit: "Provides vibrant spring/summer blooms and evergreen backyard privacy along two-story neighbor sightlines."
      },
      {
        name: "Rock Excavation, Mycorrhizal Soil Amendment & Deep-Root Staking",
        spec: "Hydraulic rock-augered tree pits, composted loam backfill, root-zone aeration tubes, hardwood mulch rings, and tree staking.",
        benefit: "Eliminates transplant shock and promotes deep structural rooting in rocky caliche or clay."
      }
    ],
    sanAntonioConsiderations: [
      {
        title: "Oak Wilt Prevention & Monterrey Oak Selection",
        detail: "In Bexar and Kendall counties, Oak Wilt is a serious concern. We follow Texas A&M Forest Service pruning protocols and often recommend Wilt-resistant Monterrey Oaks (Quercus polymorpha) and Chinquapin Oaks."
      },
      {
        title: "Rock-Breaking Tree Pits in North San Antonio",
        detail: "Planting a tree in a shallow bowl carved into solid limestone causes water to pool and drown the roots. We fracture compacted caliche edges and mound the root flare properly."
      },
      {
        title: "Canopy Cooling & Property Value",
        detail: "Strategically planting shade trees on the south and west sides of a San Antonio home can reduce summer air-conditioning loads by 15–25%."
      }
    ],
    featuredCaseStudyId: "san-antonio-native-softscape-palm-installation",
    beforeState:
      "New-build lot with zero shade canopy, intense afternoon glare, and bare perimeter sightlines.",
    afterState:
      "Established specimen shade and ornamental trees planted in amended basins with deep-root bubbler irrigation and stone mulch rings.",
    testimonials: [
      {
        quote: "JRM planted two 65-gallon Monterrey Oaks and a row of Eagleston Hollies along our back fence in Boerne. Even through a brutal summer, every single tree thrived.",
        author: "Phillip & Nancy W.",
        city: "Boerne, TX",
        citySlug: "boerne-tx",
        projectSummary: "65-Gallon Monterrey Oaks & Privacy Holly Screen"
      },
      {
        quote: "They broke through solid caliche in our Stone Oak front yard to plant a gorgeous Live Oak and stone tree ring with LED uplights.",
        author: "edward C.",
        city: "San Antonio, TX",
        citySlug: "san-antonio-tx",
        projectSummary: "Specimen Live Oak Planting & Stone Tree Ring"
      }
    ],
    faqs: [
      {
        question: "What are the best fast-growing shade trees for San Antonio?",
        answer: "The Monterrey Oak (Mexican White Oak) is one of the best fast-growing shade trees for San Antonio because it is drought-tolerant, semi-evergreen, alkaline-soil adapted, and highly resistant to Oak Wilt. Southern Live Oaks, Chinquapin Oaks, and Cedar Elms are also top choices."
      },
      {
        question: "What trees are best for backyard privacy along a fence line?",
        answer: "Eagleston Holly, Yaupon Holly, Texas Mountain Laurel, and Little Gem Magnolia provide dense evergreen foliage that blocks second-story neighbor windows without dropping heavy litter."
      },
      {
        question: "Does your tree installation include soil amendment and staking?",
        answer: "Yes. Every tree we supply and install includes excavation (including rock-breaking if needed), composted soil amendment, root stimulator, hardwood mulch basin, heavy-duty wind staking, and watering instructions."
      },
      {
        question: "Can you add tree rings and uplighting when planting new trees?",
        answer: "Yes. We frequently build chopped Texas limestone tree rings and install 12V solid-brass LED tree uplights and deep-root irrigation bubblers during installation."
      }
    ],
    relatedServices: [
      { name: "Palm Trees", to: "/palm-trees", desc: "Cold-hardy Texas Sabal, Windmill, and Mediterranean Fan palms." },
      { name: "Softscapes", to: "/softscapes", desc: "Complete perennial bed plantings, sod, and organic soil prep." },
      { name: "Irrigation Systems", to: "/irrigation", desc: "Automated deep-root tree bubbler zones for healthy establishment." },
      { name: "Landscape Lighting", to: "/landscape-lighting", desc: "Architectural LED uplighting for mature shade tree canopies." }
    ],
    relatedBlogSlugs: [
      "landscaping-ideas-san-antonio-homes",
      "texas-backyard-landscaping-ideas"
    ]
  }
};
