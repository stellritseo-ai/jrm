import { Link } from "@tanstack/react-router";
import { ChevronRight, Images } from "lucide-react";

interface ServiceBreadcrumbBarProps {
  serviceTitle: string;
  category?: string;
}

export function ServiceBreadcrumbBar({ serviceTitle, category }: ServiceBreadcrumbBarProps) {
  const targetCategory = category && category !== "All" ? category : undefined;

  return (
    <div className="w-full bg-[#f4f3ef] pt-2 pb-1 px-[15px]">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between flex-wrap gap-2.5 py-2 px-3 sm:px-4 bg-white/85 backdrop-blur-md rounded-xl border border-[#eae8e1] shadow-xs">
        {/* Left: Breadcrumbs Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-600 font-medium">
          <Link
            to="/"
            className="hover:text-[#2d401a] transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <Link
            to="/services"
            className="hover:text-[#2d401a] transition-colors whitespace-nowrap"
          >
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="text-[#111a0a] font-bold truncate max-w-[200px] sm:max-w-none">
            {serviceTitle}
          </span>
        </nav>

        {/* Top Right: View Projects button */}
        <Link
          to="/work"
          search={{ category: targetCategory }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2d401a] hover:bg-[#1a2510] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 group shrink-0"
        >
          <Images className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a5b89d] group-hover:scale-110 transition-transform" />
          <span>View Projects</span>
          <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

