 "use client";

import { Heart, Share2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SolutionCardProps {
  id: string;
  lab: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  onSolve?: (id: string) => void;
}

export function SolutionCard({
  id,
  lab,
  industry,
  title,
  description,
  tags,
  likes,
  onSolve
}: SolutionCardProps) {
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
            {lab}
          </h3>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-neural-green">
          Solution Node
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
            <Share2 className="h-3 w-3 text-neural-green" />
            <span>Share</span>
          </span>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onSolve?.(id)}
          className="gap-1"
        >
          <Handshake className="h-3 w-3" />
          <span className="text-xs">Collab</span>
        </Button>
      </footer>
    </article>
  );
}

