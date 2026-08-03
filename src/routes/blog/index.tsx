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
  Sparkles,
  Tag,
  UserCheck
} from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import heroBg from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Home Remodeling & Outdoor Living Guides | JRM Construction Blog" },
      { name: "description", content: "Expert guides, cost breakdowns, and design tips for home remodeling, outdoor kitchens, covered patios & landscaping in San Antonio, TX. Written by 35+ year contractor Robert Thompson." },
      { property: "og:title", content: "Home Remodeling & Outdoor Living Guides | JRM Construction Blog" },
      { property: "og:description", content: "Expert guides, cost breakdowns, and design tips for home remodeling, outdoor kitchens, covered patios & landscaping in San Antonio, TX." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jrmconstructionservicellc.com/blog" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "canonical", href: "https://jrmconstructionservicellc.com/blog" }
    ]
  }),
  component: BlogHubPage,
});

function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Remodeling", "Outdoor Living", "Hardscapes & Concrete", "Turf & Landscaping"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
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
            "@type": "Blog",
            "@id": "https://jrmconstructionservicellc.com/blog/#blog",
            "name": "JRM Construction Landscaping Design Blog",
            "description": "Expert guides, cost breakdowns, and design tips for home remodeling and outdoor living spaces in San Antonio, Texas.",
            "url": "https://jrmconstructionservicellc.com/blog",
            "publisher": {
              "@id": "https://jrmconstructionservicellc.com/#business"
            },
            "blogPost": blogPosts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://jrmconstructionservicellc.com/blog/${post.slug}`,
              "datePublished": "2026-08-03",
              "author": {
                "@type": "Person",
                "name": post.author.name
              }
            }))
          })
        }}
      />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[440px] flex items-center justify-center text-center px-6 py-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
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
              <span>Construction & Outdoor Living Guides</span>
            </span>

            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              San Antonio Homeowner Guides & Cost Breakdowns
            </h1>

            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Expert advice, budgeting insights, permitting tips, and design ideas straight from founder <strong>Robert Thompson</strong> (35+ years experience in Central Texas construction).
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── SEARCH & CATEGORY FILTER BAR ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-sm px-6 py-8 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#577a4c] text-white shadow-md scale-105"
                      : "bg-white text-neutral-600 border border-neutral-200 hover:border-[#577a4c]/50 hover:text-[#577a4c]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-full text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#577a4c] shadow-sm"
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
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#577a4c] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Featured Guide
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium">
                  <span className="bg-[#577a4c]/10 text-[#3d5636] px-2.5 py-0.5 rounded-full font-bold">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.publishDate}
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
                  <Link to={`/blog/${featuredPost.slug}` as any} className="hover:text-[#577a4c] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/blog/${featuredPost.slug}` as any}
                    className="inline-flex items-center gap-2 rounded-full bg-[#577a4c] hover:bg-[#4d6c43] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
                  >
                    <span>Read Full Guide</span>
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
              <p className="text-neutral-500 text-sm font-light">No articles found matching your query.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 text-xs font-bold text-[#577a4c] underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                  <div>
                    <div className="relative h-52 w-full overflow-hidden border-b border-neutral-100">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-[#111a0a]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.publishDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 
                        className="text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#577a4c] transition-colors"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        <Link to={`/blog/${post.slug}` as any}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-100/50 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.author.image} alt={post.author.name} className="w-6 h-6 rounded-full object-contain bg-neutral-900 p-0.5" />
                      <span className="text-[11px] font-medium text-neutral-700">{post.author.name}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}` as any}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#3d5636] hover:text-[#577a4c] pt-3"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
