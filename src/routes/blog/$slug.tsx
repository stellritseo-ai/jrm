import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  HelpCircle,
  ArrowRight,
  List
} from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import heroBg from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug) || blogPosts[0];
    return {
      meta: [
        { title: `${post.title} | JRM Construction Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://jrmconstructionservicellc.com/blog/${post.slug}` },
        { property: "article:published_time", content: "2026-08-03" },
        { property: "article:author", content: post.author.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt }
      ],
      links: [
        { rel: "canonical", href: `https://jrmconstructionservicellc.com/blog/${post.slug}` }
      ]
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const params = Route.useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f4f3ef] flex flex-col justify-between">
        <SiteHeader />
        <div className="max-w-md mx-auto text-center py-20 px-4">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-sm text-neutral-600 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-[#577a4c] text-white px-6 py-2.5 rounded-full text-xs font-bold">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog Hub
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://jrmconstructionservicellc.com/blog/${post.slug}`,
                "datePublished": "2026-08-03",
                "dateModified": "2026-08-03",
                "author": {
                  "@type": "Person",
                  "name": post.author.name,
                  "jobTitle": post.author.role,
                  "worksFor": {
                    "@id": "https://jrmconstructionservicellc.com/#business"
                  }
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
                "@type": "FAQPage",
                "mainEntity": post.faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] flex items-center justify-center text-center px-6 py-14">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/82 to-[#111a0a]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Blog Hub</span>
              </Link>
              <span className="text-neutral-500">•</span>
              <span className="bg-white/10 border border-white/20 px-3 py-0.5 rounded-full text-white text-[11px] font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 
              className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                <img src={post.author.image} alt={post.author.name} className="w-5 h-5 rounded-full object-contain bg-neutral-900" />
                <span className="font-semibold text-white">{post.author.name}</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#a5b89d]" />
                {post.publishDate}
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

            {/* Table of Contents Box */}
            <div className="bg-[#fcfbf8] border border-[#eae8e1] rounded-2xl p-6 mb-10 shadow-xs">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <List className="w-4 h-4 text-[#577a4c]" />
                <span>Table of Contents</span>
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-neutral-700">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a href={`#${toc.id}`} className="hover:text-[#577a4c] transition-colors flex items-center gap-2">
                      <span className="text-[#577a4c] font-bold">›</span>
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body */}
            <article 
              className="prose prose-neutral max-w-none text-neutral-800 font-light leading-relaxed space-y-6 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* FAQs Accordion */}
            {post.faqs.length > 0 && (
              <div className="mt-14 pt-10 border-t border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2.5" style={{ fontFamily: "Georgia, serif" }}>
                  <HelpCircle className="w-6 h-6 text-[#577a4c]" />
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="bg-[#fcfbf8] border border-neutral-200 rounded-xl p-6">
                      <h4 className="text-sm font-bold text-neutral-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author E-E-A-T Card */}
            <div className="mt-14 p-6 md:p-8 bg-[#f8f8f8] border border-neutral-200 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img src={post.author.image} alt={post.author.name} className="w-16 h-16 rounded-full object-contain bg-neutral-900 p-1 shrink-0 shadow-md" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#577a4c] block mb-1">Written By</span>
                <h4 className="text-lg font-bold text-neutral-900 mb-1">{post.author.name}</h4>
                <p className="text-xs text-neutral-500 font-medium mb-3">{post.author.role} • {post.author.experience}</p>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>

            {/* Related Services Internal Links */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-4">Related Services</span>
              <div className="flex flex-wrap gap-3">
                {post.relatedServices.map((svc) => (
                  <Link
                    key={svc.name}
                    to={svc.link}
                    className="bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 hover:bg-[#577a4c] hover:text-white transition-all px-4 py-2 rounded-full text-xs font-bold"
                  >
                    {svc.name} →
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
              Ready to Start Your Remodeling or Outdoor Project?
            </h2>
            <p className="text-sm text-neutral-300 font-light mb-8 leading-relaxed">
              Consult directly with owner Robert Thompson. 35+ years of trusted, licensed general contracting across San Antonio and Central Texas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
              >
                Call Robert: (210) 429-5526
              </a>
              <Link
                to="/lets-talk"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-sm font-bold uppercase transition-all shadow-lg hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
