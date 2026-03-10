 "use client";

import { Heart, Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProblemCardProps {
  id: string;
  company: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  interested: number;
  solutions: number;
  aiMatches: number;
  onViewMatches?: (id: string) => void;
}

export function ProblemCard({
  id,
  company,
  industry,
  title,
  description,
  tags,
  likes,
  interested,
  solutions,
  aiMatches,
  onViewMatches
}: ProblemCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-dark-graphite/90 to-deep-black/90 p-4 shadow-neural transition-all duration-300",
        "hover:-translate-y-1 hover:border-neural-green hover:shadow-[0_0_35px_rgba(0,255,156,0.55)]"
      )}
    >
      <div className="pointer-events-none absolute inset-px rounded-2xl border border-emerald-400/10" />

      <header className="relative flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-subtext-gray">
            {industry}
          </p>
          <h3 className="font-headline text-sm font-semibold text-text-white">
            {company}
          </h3>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-neural-green">
          Problem Node
        </span>
      </header>

      <div className="mt-3 space-y-2">
        <h4 className="font-headline text-base font-semibold text-text-white">
          {title}
        </h4>
        <p className="line-clamp-3 text-sm text-subtext-gray">{description}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="neural-tag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="neural-divider my-3" />

      <footer className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-subtext-gray">
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3 text-neural-green" />
            <span>{likes}</span>
          </span>
          <span className="flex items-center gap-1">
            <Link2 className="h-3 w-3 text-neural-green" />
            <span>{interested}</span>
          </span>
          <span className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-neural-green" />
            <span>{solutions}</span>
          </span>
        </div>
        <Button
          size="sm"
          onClick={() => onViewMatches?.(id)}
          className="group relative overflow-hidden"
        >
          <span className="mr-1 text-xs">View AI Matches</span>
          <Sparkles className="h-3 w-3" />
          <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0_0,rgba(0,0,0,0.2),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Button>
      </footer>
    </article>
  );
}

