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
      { name: "twitter:description", content: "35+ years of trusted construction, house remodeling & outdoor living in San Antonio, TX. Call (210) 429-5526." },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, TX" },
      { name: "geo.position", content: "29.424122;-98.493628" },
      { name: "ICBM", content: "29.424122, -98.493628" },
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com" },
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
