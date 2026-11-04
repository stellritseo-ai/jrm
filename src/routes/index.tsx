import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { WelcomeSection } from "@/components/welcome-section";
import { ServicesSection } from "@/components/services-section";
import { GetStartedSection } from "@/components/get-started";
import { WhyChooseSection } from "@/components/why-choose";
import { FreeConsultationSection } from "@/components/free-consultation";
import { GallerySection } from "@/components/gallery-section";
import { QuoteSection } from "@/components/quote-section";
import { ReviewsSection } from "@/components/reviews-section";
import { StatsSection } from "@/components/stats-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction, Landscaping & Outdoor Living Contractors in San Antonio, TX | JRM Construction" },
      {
        name: "description",
        content:
          "JRM Construction Landscaping Design is San Antonio's licensed, insured & bonded general contractor, home remodeler, and outdoor living builder. 35+ years experience led by owner Robert Thompson. Custom outdoor kitchens, covered patios, hardscaping, stamped concrete & landscaping. Call (210) 429-5526."
      },
      { property: "og:title", content: "Construction, Landscaping & Outdoor Living Contractors in San Antonio, TX | JRM Construction" },
      {
        property: "og:description",
        content:
          "35+ years of owner-led general contracting, house remodeling, outdoor kitchens, covered patios, hardscaping, and landscaping across San Antonio, Alamo Heights, Boerne & New Braunfels. Free consultation: (210) 429-5526."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Construction, Landscaping & Outdoor Living Contractors in San Antonio, TX | JRM" },
      {
        name: "twitter:description",
        content:
          "Licensed general contracting, house remodeling, outdoor kitchens, covered patios, and landscaping in San Antonio, TX. Led by Robert Thompson since 1989."
      },
      { property: "og:image", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://jrmconstructionservicellc.com/#webpage",
              "url": "https://jrmconstructionservicellc.com",
              "name": "Construction, Landscaping & Outdoor Living Contractors in San Antonio, TX | JRM Construction",
              "description": "Licensed, insured, and bonded general contracting, house remodeling, outdoor kitchens, covered patios, hardscaping, and landscaping in San Antonio, TX.",
              "isPartOf": { "@id": "https://jrmconstructionservicellc.com/#website" },
              "about": { "@id": "https://jrmconstructionservicellc.com/#business" }
            },
            {
              "@type": "FAQPage",
              "@id": "https://jrmconstructionservicellc.com/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What areas do you service around San Antonio, TX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide construction, home remodeling, hardscaping, and landscaping services throughout San Antonio and an 80-mile surrounding radius, including Alamo Heights, Boerne, New Braunfels, Seguin, Canyon Lake, Schertz, Helotes, Bulverde, Universal City, Kerrville, Fredericksburg, Converse, Live Oak, and Leon Valley."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you licensed, insured, and bonded?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, JRM Construction Landscaping Design (JRM Construction Services LLC) is fully licensed, insured, and bonded. Owner Robert Thompson brings over 35 years of hands-on general contracting and landscape construction experience since 1989."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is your process for starting a new construction, remodeling, or landscaping project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We start with a free, no-obligation on-site consultation with Robert Thompson to evaluate your property, soil conditions, and goals. We then deliver a transparent, itemized proposal and optional 3D architectural rendering before handling permits and construction."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer 24/7 emergency construction repairs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we handle urgent structural storm damage repairs, fallen tree impacts, retaining wall failures, and emergency residential or commercial stabilization across the San Antonio metro area."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes JRM Construction's 35+ years of experience different?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike single-trade contractors or volume builders who hand off projects to unsupervised sub-crews, owner Robert Thompson personally oversees every jobsite, combining structural general contracting with custom masonry, concrete, and landscape architecture."
                  }
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: Index
});

function Index() {
  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <GetStartedSection />
        <WhyChooseSection />
        <FreeConsultationSection />
        <GallerySection />
        <QuoteSection />
        <ReviewsSection />
        <StatsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
