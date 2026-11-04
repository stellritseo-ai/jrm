import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import heroBg from "@/assets/hero-patio.jpg";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "San Antonio Construction, Remodeling & Landscaping Guides | JRM Construction Blog" },
      {
        name: "description",
        content:
          "Expert construction, remodeling, hardscaping, and landscaping cost guides and planning articles for San Antonio, TX homeowners. Authored and reviewed by 35+ year general contractor Robert Thompson."
      },
      { property: "og:title", content: "San Antonio Construction, Remodeling & Landscaping Guides | JRM Construction" },
      {
        property: "og:description",
        content:
          "Practical cost breakdowns, material comparisons, and Texas soil & climate advice from owner Robert Thompson."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/blog" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/blog" }
    ]
  }),
  component: BlogHubPage
});

function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Cost Guide",
    "Outdoor Living",
    "Landscaping",
    "Hardscaping",
    "ADU & Construction"
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* JSON-LD Schema for Blog Collection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Blog",
                "@id": "https://jrmconstructionservicellc.com/blog/#blog",
                "name": "JRM Construction Landscaping Design Resource & Cost Guide Library",
                "description": "Original construction, remodeling, hardscaping, and outdoor living guides for San Antonio and South Central Texas homeowners.",
                "url": "https://jrmconstructionservicellc.com/blog",
                "publisher": {
                  "@id": "https://jrmconstructionservicellc.com/#business"
                },
                "blogPost": blogPosts.map((post) => ({
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "description": post.excerpt,
                  "url": `https://jrmconstructionservicellc.com/blog/${post.slug}`,
                  "datePublished": post.publishedAt,
                  "dateModified": post.updatedAt || post.publishedAt,
                  "author": {
                    "@id": "https://jrmconstructionservicellc.com/#robert-thompson"
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jrmconstructionservicellc.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Blog & Cost Guides", "item": "https://jrmconstructionservicellc.com/blog" }
                ]
              }
            ]
          })
        }}
      />

      <main id="main-content">
        {/* ── CINEMATIC HERO SECTION ── */}
        <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
          <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[420px] flex items-center justify-center text-center px-6 py-16">
            <img
              src={heroBg}
              alt="Custom flagstone patio and outdoor living construction in San Antonio, TX"
              width={1400}
              height={420}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/80 to-[#111a0a]/92 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                <BookOpen className="w-3.5 h-3.5" />
                <span>San Antonio Construction &amp; Outdoor Living Library</span>
              </span>

              <h1
                className="text-[30px] sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
                style={{ fontFamily: "Georgia, serif" }}
              >
                San Antonio Homeowner Cost Guides &amp; Planning Articles
              </h1>

              <p className="mt-5 text-sm md:text-base text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto">
                Practical pricing breakdowns, South Texas soil and climate engineering insights, permitting advice, and material comparisons authored and reviewed by owner <strong>Robert Thompson</strong> (35+ years experience since 1989).
              </p>
            </motion.div>
          </section>
        </div>

        {/* ── SEARCH & CATEGORY FILTER BAR ── */}
        <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
          <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-8 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#577a4c] text-white shadow-md scale-105"
                        : "bg-white text-neutral-600 border border-neutral-200 hover:border-[#577a4c]/50 hover:text-[#577a4c]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72 shrink-0">
                <label htmlFor="blog-search-input" className="sr-only">
                  Search construction and landscaping guides
                </label>
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="blog-search-input"
                  type="search"
                  placeholder="Search guides & cost tables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-full text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#577a4c] shadow-sm"
                />
              </div>
            </div>
          </section>
        </div>

        {/* ── FEATURED POST SPOTLIGHT ── */}
        {selectedCategory === "All" && searchQuery === "" && featuredPost && (
          <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
            <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-md overflow-hidden p-6 md:p-10">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    width={640}
                    height={384}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-[#577a4c] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Featured Cost Guide
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-medium">
                    <span className="bg-[#577a4c]/10 text-[#3d5636] px-2.5 py-0.5 rounded-full font-bold">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    <Link
                      to="/blog/$slug"
                      params={{ slug: featuredPost.slug }}
                      className="hover:text-[#577a4c] transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#577a4c]" />
                    <span>Reviewed by {featuredPost.reviewerName} · {featuredPost.authorRole}</span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: featuredPost.slug }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ── ARTICLES GRID ── */}
        <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
          <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-6 py-12 md:px-12">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-neutral-500 text-sm">No articles found matching your search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-bold text-[#577a4c] underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                  >
                    <div>
                      <div className="relative h-52 w-full overflow-hidden border-b border-neutral-100">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          width={420}
                          height={220}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 bg-[#111a0a]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.publishedAt}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2
                          className="text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#577a4c] transition-colors"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          <Link to="/blog/$slug" params={{ slug: post.slug }}>
                            {post.title}
                          </Link>
                        </h2>

                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {post.relatedServiceLinks.slice(0, 2).map((svc) => (
                            <Link
                              key={svc.to}
                              to={svc.to}
                              className="text-[10px] font-bold text-[#3d5636] bg-[#577a4c]/10 hover:bg-[#577a4c] hover:text-white px-2.5 py-0.5 rounded-full transition-colors"
                            >
                              {svc.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-3 border-t border-neutral-100 mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={logo}
                          alt="Robert Thompson - JRM Construction"
                          width={24}
                          height={24}
                          loading="lazy"
                          className="w-6 h-6 rounded-full object-contain bg-neutral-900 p-0.5"
                        />
                        <span className="text-[11px] font-semibold text-neutral-700">
                          {post.author}
                        </span>
                      </div>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#3d5636] hover:text-[#577a4c]"
                      >
                        <span>Read Article</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
