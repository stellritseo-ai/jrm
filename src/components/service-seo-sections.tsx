import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
  BookOpen,
  ArrowRight,
  Phone,
  Quote,
  Layers,
  HelpCircle,
} from "lucide-react";
import { SERVICE_SEO_DATA, PRIORITY_SERVICE_LOCATIONS } from "@/data/service-seo-data";
import { PROJECT_CASE_STUDIES } from "@/data/project-case-studies";
import { BLOG_POSTS } from "@/data/blog-posts";
import { trackPhoneClick } from "@/lib/analytics";

interface ServiceSeoSectionsProps {
  slug: string;
  /** Set to false on the 4 pages (general-contracting, house-remodeling, outdoor-kitchens, covered-patios) that already render an inline FAQ section and head JSON-LD */
  renderFaqs?: boolean;
  includeJsonLd?: boolean;
}

export function ServiceSeoSections({
  slug,
  renderFaqs = true,
  includeJsonLd = true,
}: ServiceSeoSectionsProps) {
  const data = SERVICE_SEO_DATA[slug];
  if (!data) return null;

  const caseStudy =
    PROJECT_CASE_STUDIES.find((c) => c.id === data.featuredCaseStudyId) ??
    PROJECT_CASE_STUDIES[0];

  const relatedBlogs = BLOG_POSTS.filter((post) =>
    data.relatedBlogSlugs.includes(post.slug)
  );

  const canonicalUrl = `https://www.jrmconstructionservicellc.com/${data.slug}`;

  const jsonLdGraph = includeJsonLd
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${canonicalUrl}#service`,
            name: data.serviceName,
            serviceType: data.serviceType,
            description: data.shortSummary,
            url: canonicalUrl,
            provider: {
              "@id": "https://www.jrmconstructionservicellc.com/#organization",
            },
            areaServed: PRIORITY_SERVICE_LOCATIONS.map((loc) => ({
              "@type": "City",
              name: loc.name,
            })),
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.jrmconstructionservicellc.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.jrmconstructionservicellc.com/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: data.serviceName,
                item: canonicalUrl,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ],
      }
    : null;

  return (
    <div className="bg-slate-50 border-t border-slate-200/80">
      {jsonLdGraph && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      )}

      {/* 1. Materials & Construction Options + San Antonio Local Considerations */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Materials & Construction Specifications */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/80">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              Materials &amp; Construction Specifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Commercial-Grade Materials Engineered for {data.serviceType}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Every JRM Construction Landscaping Design project is built using verified structural specifications rather than builder-grade shortcuts. Here are the primary material and construction options we specify:
            </p>

            <div className="space-y-6">
              {data.materialsAndOptions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-emerald-600/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0d3b26] text-[#c8f542] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-900 mb-1.5">
                        Specification: <span className="font-normal text-slate-700">{item.spec}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Why It Matters in Texas:</strong> {item.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* San Antonio & Texas Regional Engineering Factors */}
          <div className="lg:col-span-5 bg-[#0a1f16] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#c8f542] text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              San Antonio &amp; Texas Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Local Soil, Climate &amp; Code Considerations
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Building in Bexar County, Comal County, and Kendall County requires accounting for the Balcones Escarpment fault zone, extreme UV heat, and municipal codes:
            </p>

            <div className="space-y-6">
              {data.sanAntonioConsiderations.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-base font-bold text-[#c8f542] mb-1.5 flex items-center gap-2">
                    <Wrench className="w-4 h-4 shrink-0" />
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {factor.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                  Direct Owner Consultation
                </p>
                <p className="text-sm font-bold text-white">
                  Robert Thompson • 35+ Years in San Antonio
                </p>
              </div>
              <a
                href="tel:2104295526"
                onClick={() => trackPhoneClick(`Service Engineering Card - ${data.slug}`)}
                className="inline-flex items-center gap-2 bg-[#c8f542] hover:bg-[#b8e532] text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                (210) 429-5526
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Completed Project Case Study & Before/After Transformation */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200/80 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Featured San Antonio Area Case Study
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Real Completed Project &amp; Transformation
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0d3b26] hover:text-emerald-700 transition-colors"
            >
              View All 10 Project Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90">
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[4/3] bg-slate-900">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  width={640}
                  height={480}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/80">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 block mb-1">
                    Before JRM Construction
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {data.beforeState}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200/80">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-900 block mb-1">
                    After JRM Transformation
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {data.afterState}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0d3b26] text-[#c8f542] text-xs font-bold">
                  {caseStudy.category}
                </span>
                <Link
                  to="/locations/$location"
                  params={{ location: caseStudy.locationSlug }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-800 text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  {caseStudy.location}
                </Link>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {caseStudy.projectName}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Project Scope &amp; Design:</strong>{" "}
                {caseStudy.designConcept}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Site &amp; Engineering Solution:</strong>{" "}
                {caseStudy.constructionChallenges}
              </p>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5">
                  Key Work Performed by JRM Crews:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.workPerformed.slice(0, 4).map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/lets-talk"
                  className="inline-flex items-center gap-2 bg-[#0d3b26] hover:bg-[#145337] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  Request a Free Estimate for a Similar Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  Explore Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service-Specific Verified Client Testimonials */}
      <section className="py-16 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Quote className="w-3.5 h-3.5 text-emerald-700" />
            Verified Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            What San Antonio Area Homeowners Say About Our {data.serviceType}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-900">
                    {t.projectSummary}
                  </span>
                  <Link
                    to="/locations/$location"
                    params={{ location: t.citySlug }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-emerald-800"
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    {t.city}
                  </Link>
                </div>
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="font-bold text-slate-900 text-sm">
                  — {t.author}
                </span>
                <span className="text-xs text-emerald-800 font-semibold">
                  Verified JRM Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Service-Specific FAQs (Rendered when page does not already have an inline FAQ section) */}
      {renderFaqs && data.faqs.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200/80 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Common Questions About {data.serviceName}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Internal Linking Hub: Related Services, Helpful Cost/Design Guides & Service Areas */}
      <section className="py-16 bg-slate-100 border-t border-slate-200/90 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Related Services */}
            <div className="lg:col-span-7">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Complementary Construction &amp; Landscaping Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Combine multiple trades under a single turnkey JRM project schedule:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.relatedServices.map((svc, idx) => (
                  <Link
                    key={idx}
                    to={svc.to}
                    className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-700 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 flex items-center justify-between mb-1.5">
                        {svc.name}
                        <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Helpful Blog Guides */}
            <div className="lg:col-span-5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Helpful San Antonio Cost &amp; Planning Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                In-depth articles reviewed by owner Robert Thompson:
              </p>
              <div className="space-y-4">
                {relatedBlogs.map((post) => (
                  <Link
                    key={post.slug}
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group block p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-700 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {post.category} • {post.readTime}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0d3b26] hover:text-emerald-700 pt-1"
                >
                  Browse All 11 Construction &amp; Landscaping Guides
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Priority Service Areas */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                {data.serviceName} Across Greater San Antonio &amp; the Hill Country
              </h2>
              <Link
                to="/service-areas"
                className="text-xs font-bold text-emerald-800 hover:underline"
              >
                View 80-Mile Service Area Map →
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRIORITY_SERVICE_LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  to="/locations/$location"
                  params={{ location: loc.slug }}
                  className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-700 hover:bg-emerald-50 text-xs font-semibold text-slate-700 hover:text-emerald-950 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

