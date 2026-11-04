import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { FileText, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | JRM Construction Landscaping Design San Antonio, TX" },
      {
        name: "description",
        content:
          "Website Terms and Conditions for JRM Construction Landscaping Design (JRM Construction Services LLC) in San Antonio, TX."
      },
      { property: "og:title", content: "Terms & Conditions | JRM Construction Landscaping Design" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/terms-and-conditions" },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "canonical", href: "https://jrmconstructionservicellc.com/terms-and-conditions" }]
  }),
  component: TermsAndConditionsPage
});

function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />
      <main id="main-content" className="w-full py-12 px-[15px]">
        <div className="mx-auto max-w-[1000px] rounded-[10px] bg-white border border-[#eae8e1] shadow-sm p-8 md:p-14 space-y-8">
          <div className="border-b border-neutral-200 pb-6">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#3d5636] bg-[#577a4c]/10 px-3 py-1 rounded-full mb-3">
              <FileText className="w-3.5 h-3.5" /> Website Terms of Use
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-serif">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-neutral-500 mt-2">
              Effective Date: January 1, 2026 · JRM Construction Landscaping Design (JRM Construction Services LLC)
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">1. Project Estimates &amp; On-Site Consultations</h2>
              <p>
                Cost ranges, material comparisons, and planning guides published on this website are provided for general educational reference in the San Antonio and South Central Texas market. All binding construction, remodeling, hardscaping, and landscaping scopes of work require an on-site evaluation and a written proposal signed by JRM Construction Services LLC and the property owner.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">2. Permitting, Engineering &amp; Local Compliance</h2>
              <p>
                Construction requirements vary across the City of San Antonio, Alamo Heights, Boerne, New Braunfels, Seguin, Canyon Lake, Schertz, Helotes, Bulverde, Universal City, Kerrville, Fredericksburg, and neighborhood Homeowners Associations (HOAs). Project timelines and specifications are subject to applicable municipal building codes, utility locates (Texas 811), and geotechnical site conditions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">3. Intellectual Property &amp; Project Photography</h2>
              <p>
                All text, custom 3D renderings, design concepts, and completed project photographs displayed on this website are the property of JRM Construction Services LLC and may not be reproduced or redistributed without prior written consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-900 font-serif">4. Contact Information</h2>
              <div className="bg-[#fcfbf8] border border-[#eae8e1] rounded-xl p-5 space-y-2 text-xs font-medium text-neutral-800 mt-3">
                <p className="font-bold text-neutral-900">JRM Construction Landscaping Design (JRM Construction Services LLC)</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#577a4c]" /> San Antonio, TX &amp; Surrounding Communities</p>
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

