"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
  Globe2
} from "lucide-react";

const demoProblems = [
  {
    id: "p1",
    company: "Northstar Health",
    industry: "Healthcare",
    title: "Predicting ICU bottlenecks 48 hours out",
    description:
      "We need early‑warning capacity models that account for local events, transfer patterns, and multi‑hospital load‑balancing.",
    tags: ["healthcare", "forecasting", "capacity"],
    likes: 182,
    interested: 41,
    solutions: 9,
    aiMatches: 4
  },
  {
    id: "p2",
    company: "Orbital Freight",
    industry: "Logistics",
    title: "Minimizing idle port time for containers",
    description:
      "Containers spend 30–40% of time idle between vessels, customs, and last‑mile routing. We need cross‑modal optimization.",
    tags: ["logistics", "routing", "optimization"],
    likes: 96,
    interested: 21,
    solutions: 5,
    aiMatches: 3
  }
];

const demoSolutions = [
  {
    id: "s1",
    lab: "AeroOptix Labs",
    industry: "Aviation",
    title: "Real‑time gate re‑assignment engine",
    description:
      "Deployed at three major hubs to continuously reshuffle gates, reduce taxi time and missed connections using RL policies.",
    tags: ["aviation", "scheduling", "rl"],
    likes: 210
  },
  {
    id: "s2",
    lab: "QuantAgri Systems",
    industry: "Agriculture",
    title: "Satellite‑driven yield stress detector",
    description:
      "Computer‑vision models that turn multispectral satellite data into early stress alerts, deployed across 12M+ acres.",
    tags: ["agriculture", "cv", "remote-sensing"],
    likes: 143
  }
];

export default function DashboardPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const role = searchParams.get("role");
    if (role === "INDUSTRY" || role === "INDIVIDUAL") {
      fetch("/api/users/role", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ role })
      }).catch(() => {});
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_0_0,rgba(0,255,156,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,255,179,0.18),transparent_55%)]">
      {/* Top bar */}
      <header className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-emerald-500/30 bg-black/60 px-4 py-3 shadow-neural md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-subtext-gray">
            Synapse Dashboard
          </p>
          <h1 className="font-headline text-lg text-text-white md:text-xl">
            Your cross‑industry innovation console
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <Bell className="mr-1 h-4 w-4" />
            Notifications
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            New Problem
          </Button>
        </div>
      </header>

      <div className="grid flex-1 gap-6 md:grid-cols-[1.8fr,1.1fr]">
        {/* Center feed + left meta combined */}
        <section className="space-y-4">
          {/* Metrics strip */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 px-4 py-3 text-xs shadow-neural">
              <div className="flex items-center justify-between">
                <span className="text-subtext-gray">Problems posted</span>
                <TrendingUp className="h-3.5 w-3.5 text-neural-green" />
              </div>
              <p className="mt-2 text-xl font-semibold text-text-white">12</p>
              <p className="text-[11px] text-subtext-gray">
                +4 this month • 3 solved
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 px-4 py-3 text-xs shadow-neural">
              <div className="flex items-center justify-between">
                <span className="text-subtext-gray">Active matches</span>
                <Sparkles className="h-3.5 w-3.5 text-neural-green" />
              </div>
              <p className="mt-2 text-xl font-semibold text-text-white">7</p>
              <p className="text-[11px] text-subtext-gray">
                3 from aviation • 2 from fintech
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 px-4 py-3 text-xs shadow-neural">
              <div className="flex items-center justify-between">
                <span className="text-subtext-gray">Collaborators</span>
                <Users className="h-3.5 w-3.5 text-neural-green" />
              </div>
              <p className="mt-2 text-xl font-semibold text-text-white">18</p>
              <p className="text-[11px] text-subtext-gray">
                Across 6 time zones
              </p>
            </div>
          </div>

          {/* Feed */}
          <div className="rounded-2xl border border-emerald-500/30 bg-black/70 p-4 shadow-neural md:p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-headline text-sm uppercase tracking-[0.22em] text-subtext-gray">
                Neural Feed
              </h2>
              <span className="text-[11px] text-subtext-gray">
                Mixed problems • solutions • AI matches
              </span>
            </div>

            <div className="space-y-4">
              {demoProblems.map((p) => (
                <ProblemCard key={p.id} {...p} />
              ))}
              {demoSolutions.map((s) => (
                <SolutionCard key={s.id} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Right discovery column */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-emerald-500/30 bg-black/75 p-4 shadow-neural">
            <h3 className="font-headline text-xs uppercase tracking-[0.22em] text-subtext-gray">
              AI Insights
            </h3>
            <ul className="mt-3 space-y-3 text-xs text-subtext-gray">
              <li>
                • Aviation optimization algorithms show{" "}
                <span className="text-neural-green">0.87 similarity</span> to
                your ICU capacity problem.
              </li>
              <li>
                • Warehouse routing work from logistics could transfer to your
                supply‑chain node.
              </li>
              <li>
                • 3 innovators in{" "}
                <span className="text-neural-green">Singapore</span> recently
                solved analogous issues.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-black/75 p-4 shadow-neural">
            <div className="flex items-center justify-between text-xs text-subtext-gray">
              <h3 className="font-headline uppercase tracking-[0.22em]">
                Live network
              </h3>
              <Globe2 className="h-4 w-4 text-neural-green" />
            </div>
            <p className="mt-2 text-sm text-subtext-gray">
              5,293 active collaborations • 184 countries connected right now.
            </p>
            <div className="mt-4 h-28 rounded-xl border border-emerald-500/30 bg-[radial-gradient(circle_at_30%_0,rgba(0,255,156,0.22),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(56,255,179,0.3),transparent_60%)]" />
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-black/75 p-4 shadow-neural text-xs text-subtext-gray">
            <p className="font-headline text-[11px] uppercase tracking-[0.22em] text-subtext-gray">
              Next steps
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Post your first cross‑industry problem.</li>
              <li>Invite 2 teammates into a collaboration workspace.</li>
              <li>Shortlist at least 3 external innovators to brief.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

