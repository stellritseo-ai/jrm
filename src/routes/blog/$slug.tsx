import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  List,
  CheckCircle2,
  MapPin,
  Phone
} from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { trackPhoneClick } from "@/lib/analytics";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug) || blogPosts[0];
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://jrmconstructionservicellc.com/blog/${post.slug}` },
        { property: "article:published_time", content: post.publishedAt },
        { property: "article:modified_time", content: post.updatedAt || post.publishedAt },
        { property: "article:author", content: post.author },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.metaTitle },
        { name: "twitter:description", content: post.metaDescription }
      ],
      links: [
        { rel: "canonical", href: `https://jrmconstructionservicellc.com/blog/${post.slug}` }
      ]
    };
  },
  component: BlogPostPage
});

function BlogPostPage() {
  const params = Route.useParams();
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f4f3ef] flex flex-col justify-between">
        <SiteHeader />
        <main id="main-content" className="max-w-md mx-auto text-center py-20 px-4">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-sm text-neutral-600 mb-6">
            The guide you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#577a4c] text-white px-6 py-2.5 rounded-full text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog Library
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* JSON-LD Article + Person + BreadcrumbList + FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Article", "BlogPosting"],
                "@id": `https://jrmconstructionservicellc.com/blog/${post.slug}#article`,
                "headline": post.title,
                "description": post.metaDescription,
                "url": `https://jrmconstructionservicellc.com/blog/${post.slug}`,
                "datePublished": post.publishedAt,
                "dateModified": post.updatedAt || post.publishedAt,
                "author": {
                  "@type": "Person",
                  "@id": "https://jrmconstructionservicellc.com/#robert-thompson",
                  "name": post.author,
                  "jobTitle": post.authorRole,
                  "url": "https://jrmconstructionservicellc.com/about",
                  "worksFor": {
                    "@id": "https://jrmconstructionservicellc.com/#business"
                  }
                },
                "reviewedBy": {
                  "@type": "Person",
                  "@id": "https://jrmconstructionservicellc.com/#robert-thompson",
                  "name": post.reviewerName
                },
                "publisher": {
                  "@id": "https://jrmconstructionservicellc.com/#business"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://jrmconstructionservicellc.com/blog/${post.slug}`
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": `https://jrmconstructionservicellc.com/blog/${post.slug}#breadcrumb`,
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jrmconstructionservicellc.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Blog & Cost Guides", "item": "https://jrmconstructionservicellc.com/blog" },
                  { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://jrmconstructionservicellc.com/blog/${post.slug}` }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": `https://jrmconstructionservicellc.com/blog/${post.slug}#faq`,
                "mainEntity": post.faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              }
            ]
          })
        }}
      />

      <main id="main-content">
        {/* ── CINEMATIC HERO SECTION ── */}
        <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
          <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] flex items-center justify-center text-center px-6 py-14">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1400}
              height={420}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/82 to-[#111a0a]/92 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Guides</span>
                </Link>
                <span className="text-neutral-500">•</span>
                <span className="bg-white/10 border border-white/20 px-3 py-0.5 rounded-full text-white text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <h1
                className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-200">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <img
                    src={logo}
                    alt={post.author}
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full object-contain bg-neutral-900"
                  />
                  <span className="font-semibold text-white">
                    By {post.author} · Technical Review by {post.reviewerName}
                  </span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#a5b89d]" />
                  Published {post.publishedAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#a5b89d]" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </section>
        </div>

        {/* ── ARTICLE CONTENT CONTAINER ── */}
        <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
          <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto">
              {/* Reviewer E-E-A-T Verification Banner */}
              <div className="bg-[#577a4c]/10 border border-[#577a4c]/25 rounded-2xl p-4 md:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#3d5636] shrink-0 mt-0.5 sm:mt-0" />
                  <div className="text-xs text-neutral-800">
                    <span className="font-bold text-neutral-900">Contractor-Verified San Antonio Resource:</span>{" "}
                    Reviewed for technical and local pricing accuracy by <strong>{post.reviewerName}</strong> ({post.reviewerCredentials}).
                  </div>
                </div>
                <Link
                  to="/about"
                  className="text-[11px] font-bold text-[#3d5636] hover:underline shrink-0"
                >
                  About Robert →
                </Link>
              </div>

              {/* Table of Contents Box */}
              <nav aria-label="Table of Contents" className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-6 mb-10 shadow-xs">
                <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <List className="w-4 h-4 text-[#577a4c]" />
                  <span>In This Guide</span>
                </h2>
                <ul className="space-y-2 text-xs md:text-sm text-neutral-700">
                  {post.content.map((sec, idx) => (
                    <li key={idx}>
                      <a
                        href={`#section-${idx + 1}`}
                        className="hover:text-[#577a4c] transition-colors flex items-center gap-2 font-medium"
                      >
                        <span className="text-[#577a4c] font-bold">{idx + 1}.</span>
                        <span>{sec.heading}</span>
                      </a>
                    </li>
                  ))}
                  {post.faqs.length > 0 && (
                    <li>
                      <a
                        href="#article-faqs"
                        className="hover:text-[#577a4c] transition-colors flex items-center gap-2 font-medium"
                      >
                        <span className="text-[#577a4c] font-bold">{post.content.length + 1}.</span>
                        <span>Frequently Asked Questions</span>
                      </a>
                    </li>
                  )}
                </ul>
              </nav>

              {/* Article Body Sections */}
              <article className="space-y-10 text-neutral-800 leading-relaxed">
                {post.content.map((sec, idx) => (
                  <section key={idx} id={`section-${idx + 1}`} className="space-y-4 scroll-mt-24">
                    <h2
                      className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {sec.heading}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm md:text-base text-neutral-700 leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-6 space-y-3 mt-4">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-800 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#577a4c] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </article>

              {/* FAQs Section */}
              {post.faqs.length > 0 && (
                <section id="article-faqs" className="mt-14 pt-10 border-t border-neutral-200 scroll-mt-24">
                  <h2
                    className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2.5"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    <HelpCircle className="w-6 h-6 text-[#577a4c]" />
                    <span>Frequently Asked Questions</span>
                  </h2>

                  <div className="space-y-4">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="bg-[#fcfbf8] border border-neutral-200 rounded-xl p-6">
                        <h3 className="text-sm md:text-base font-bold text-neutral-900 mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Author & Reviewer E-E-A-T Card */}
              <div className="mt-14 p-6 md:p-8 bg-[#f8f8f8] border border-neutral-200 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <img
                  src={logo}
                  alt="Robert Thompson - Owner of JRM Construction Landscaping Design"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-contain bg-neutral-900 p-1.5 shrink-0 shadow-md"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#577a4c] block mb-1">
                    Written &amp; Technically Reviewed By
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">{post.author}</h3>
                  <p className="text-xs text-neutral-600 font-semibold mb-3">
                    {post.authorRole} · {post.reviewerCredentials}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Robert Thompson is the owner and principal general contractor of JRM Construction Landscaping Design (JRM Construction Services LLC). Since 1989, Robert has personally supervised residential remodeling, structural concrete, custom masonry, outdoor living structures, and landscape installations across San Antonio and an 80-mile surrounding Hill Country radius.
                  </p>
                </div>
              </div>

              {/* Related Services & Local Service Area Internal Links */}
              <div className="mt-12 pt-8 border-t border-neutral-200 grid sm:grid-cols-2 gap-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-3">
                    Explore Corresponding Services
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {post.relatedServiceLinks.map((svc) => (
                      <Link
                        key={svc.to}
                        to={svc.to}
                        className="bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/25 hover:bg-[#577a4c] hover:text-white transition-all px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <span>{svc.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-3">
                    Featured Local Service Areas
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {post.relatedLocationLinks.map((loc) => (
                      <Link
                        key={loc.to}
                        to={loc.to}
                        className="bg-neutral-100 text-neutral-800 border border-neutral-200 hover:border-[#577a4c] hover:text-[#3d5636] transition-all px-3.5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#577a4c]" />
                        <span>{loc.label}</span>
                      </Link>
                    ))}
                    <Link
                      to="/service-areas"
                      className="text-xs font-bold text-[#3d5636] hover:underline inline-flex items-center px-2 py-2"
                    >
                      All 15 Cities →
                    </Link>
                  </div>
                </div>
              </div>

              {/* More Helpful Guides */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  More San Antonio Construction &amp; Landscaping Guides
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {otherPosts.map((op) => (
                    <Link
                      key={op.slug}
                      to="/blog/$slug"
                      params={{ slug: op.slug }}
                      className="group rounded-xl border border-neutral-200 p-4 hover:border-[#577a4c] bg-[#fcfbf8] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#577a4c]">
                          {op.category}
                        </span>
                        <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#3d5636] mt-1 leading-snug">
                          {op.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold text-[#3d5636] mt-3 inline-flex items-center gap-1">
                        Read Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
          <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-16 text-center border border-neutral-800 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Ready to Plan Your Project in San Antonio?
              </h2>
              <p className="text-sm text-neutral-300 font-light mb-8 leading-relaxed">
                Schedule a free, no-obligation on-site consultation directly with owner Robert Thompson. 35+ years of licensed, insured, and bonded craftsmanship across San Antonio and the Texas Hill Country.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:2104295526"
                  onClick={() => trackPhoneClick(`Blog Article: ${post.slug}`)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Robert: (210) 429-5526</span>
                </a>
                <Link
                  to="/lets-talk"
                  className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
                >
                  Request Free Consultation
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
