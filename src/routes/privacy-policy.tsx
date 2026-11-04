import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | JRM Construction Landscaping Design San Antonio, TX" },
      {
        name: "description",
        content:
          "Privacy Policy for JRM Construction Landscaping Design (JRM Construction Services LLC) in San Antonio, TX. Learn how we protect your contact and consultation information."
      },
      { property: "og:title", content: "Privacy Policy | JRM Construction Landscaping Design" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/privacy-policy" },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "canonical", href: "https://jrmconstructionservicellc.com/privacy-policy" }]
  }),
  component: PrivacyPolicyPage
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />
      <main id="main-content" className="w-full py-12 px-[15px]">
        <div className="mx-auto max-w-[1000px] rounded-[10px] bg-white border border-[#eae8e1] shadow-sm p-8 md:p-14 space-y-8">
          <div className="border-b border-neutral-200 pb-6">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#3d5636] bg-[#577a4c]/10 px-3 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Privacy & Data Protection
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-serif">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-500 mt-2">
              Effective Date: January 1, 2026 · JRM Construction Landscaping Design (JRM Construction Services LLC)
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">1. Information We Collect</h2>
              <p>
                When you request a free consultation, project estimate, or contact JRM Construction Landscaping Design through our website (<a href="https://jrmconstructionservicellc.com" className="text-[#577a4c] underline">jrmconstructionservicellc.com</a>), we collect the contact and project details you voluntarily provide, including your name, phone number, email address, property city or address, desired construction or landscaping services, and project description.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">2. How We Use Your Information</h2>
              <p>
                We use the information you submit solely to respond to your inquiry, schedule on-site consultations with owner Robert Thompson or our team, prepare accurate construction or landscaping proposals, and communicate updates regarding your project. We never sell, rent, or trade your personal contact information to third-party lead brokers or marketers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">3. Analytics & Website Performance</h2>
              <p>
                Our website uses standard analytics tools to understand how visitors navigate our service pages, portfolio case studies, and forms so we can improve user experience, mobile responsiveness, and page speed.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">4. Contact Us Regarding Privacy</h2>
              <p>
                If you have questions about this Privacy Policy or wish to update or remove your inquiry information, please contact JRM Construction Landscaping Design directly:
              </p>
              <div className="bg-[#fcfbf8] border border-[#eae8e1] rounded-xl p-5 space-y-2 text-xs font-medium text-neutral-800 mt-3">
                <p className="font-bold text-neutral-900">JRM Construction Landscaping Design (JRM Construction Services LLC)</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#577a4c]" /> San Antonio, TX & 80-Mile Surrounding Service Area</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#577a4c]" /> <a href="tel:2104295526" className="hover:underline">(210) 429-5526</a> (Robert Thompson)</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#577a4c]" /> <a href="mailto:robertsa210@icloud.com" className="hover:underline">robertsa210@icloud.com</a></p>
              </div>
            </section>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-4">
            <Link to="/" className="text-xs font-bold text-[#577a4c] hover:underline">← Back to Homepage</Link>
            <Link to="/services" className="text-xs font-bold text-[#577a4c] hover:underline">Explore All 18 Services →</Link>
            <Link to="/contact" className="text-xs font-bold text-[#577a4c] hover:underline">Request a Free Consultation →</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}

