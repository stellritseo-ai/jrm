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
      { title: "General Contractor San Antonio TX | JRM Construction Services LLC" },
      { name: "description", content: "San Antonio's trusted licensed, insured & bonded general contractor with 35+ years experience. Expert house remodeling, custom outdoor kitchens, covered patios, hardscapes & construction. Call (210) 429-5526." },
      { property: "og:title", content: "General Contractor San Antonio TX | JRM Construction Services LLC" },
      { property: "og:description", content: "San Antonio's trusted licensed, insured & bonded general contractor with 35+ years experience. Expert house remodeling, custom outdoor kitchens, covered patios, hardscapes & construction. Call (210) 429-5526." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor San Antonio TX | JRM Construction" },
      { property: "og:image", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://jrmconstructionservicellc.com/assets/og-image.jpg" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" },
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What areas do you service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide construction, home remodeling, and outdoor living services throughout San Antonio and an 80-mile surrounding radius, including Boerne, New Braunfels, Seguin, Canyon Lake, Bulverde, Spring Branch, Schertz, Converse, Helotes, and Alamo Heights."
              }
            },
            {
              "@type": "Question",
              "name": "Are you licensed and insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, JRM Construction Landscaping Design is fully licensed, insured, and bonded. Owner Robert Thompson brings over 35 years of hands-on contractor experience overseeing every project directly."
              }
            },
            {
              "@type": "Question",
              "name": "What is your process for starting a new project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We start with a free, no-obligation on-site consultation to review your property and ideas. We then deliver a detailed, transparent proposal and 3D architectural plan before breaking ground."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer emergency services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle structural storm damage repairs, fallen tree removal, retaining wall failures, and urgent residential construction repairs across the San Antonio metro area."
              }
            },
            {
              "@type": "Question",
              "name": "What makes your 35 years of experience different?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unlike volume contractors who hand off jobs to unsupervised sub-crews, Robert Thompson personally supervises each job site with dedicated master craftsmen, ensuring lifetime structural integrity and authentic Texas Hill Country craftsmanship."
              }
            }
          ]
        })
      }
    ],
  }),
  component: Index,
});

function Index() {

  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <SiteHeader />
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
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
