"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { AIMatchesModal } from "@/components/feed/AIMatchesModal";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
  Globe2
} from "lucide-react";
import {
  demoProblems,
  demoSolutions,
  problemToSolutions
} from "@/lib/mockData";

export default function DashboardPage() {
  const router = useRouter();
  const [modalProblem, setModalProblem] = useState<{
    id: string;
    title: string;
    industry: string;
  } | null>(null);

  const handleViewMatches = (id: string) => {
    const p = demoProblems.find((x) => x.id === id);
    if (p) setModalProblem({ id: p.id, title: p.title, industry: p.industry });
  };

  const solutions = modalProblem
    ? problemToSolutions[modalProblem.id] ?? []
    : [];

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_0_0,rgba(0,255,156,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,255,179,0.18),transparent_55%)]">
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
          <Link href="/dashboard/notifications">
            <Button variant="outline" size="sm" className="hidden gap-1 md:inline-flex">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
          </Link>
          <Link href="/dashboard/problems">
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              New Problem
            </Button>
          </Link>
          <Link href="/workspace">
            <Button variant="outline" size="sm" className="gap-1">
              Open Workspace
            </Button>
          </Link>
        </div>
      </header>

      <div className="grid flex-1 gap-6 md:grid-cols-[1.8fr,1.1fr]">
        <section className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 px-4 py-3 text-xs shadow-neural">
              <div className="flex items-center justify-between">
                <span className="text-subtext-gray">Problems posted</span>
                <TrendingUp className="h-3.5 w-3.5 text-neural-green" />
              </div>
              <p className="mt-2 text-xl font-semibold text-text-white">12</p>
              <p className="text-[11px] text-subtext-gray">+4 this month • 3 solved</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 px-4 py-3 text-xs shadow-neural">
              <div className="flex items-center justify-between">
                <span className="text-subtext-gray">Active matches</span>
                <Sparkles className="h-3.5 w-3.5 text-neural-green" />
              </div>
              <p className="mt-2 text-xl font-semibold text-text-white">7</p>
              <p className="text-[11px] text-subtext-gray">3 from aviation • 2 from fintech</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 px-4 py-3 text-xs shadow-neural">
              <div className="flex items-center justify-between">
                <span className="text-subtext-gray">Collaborators</span>
                <Users className="h-3.5 w-3.5 text-neural-green" />
              </div>
              <p className="mt-2 text-xl font-semibold text-text-white">18</p>
              <p className="text-[11px] text-subtext-gray">Across 6 time zones</p>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-black/70 p-4 shadow-neural md:p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-headline text-sm uppercase tracking-[0.22em] text-subtext-gray">
                Neural Feed
              </h2>
              <span className="text-[11px] text-subtext-gray">
                Click &quot;View AI Matches&quot; to see solutions
              </span>
            </div>

            <div className="space-y-4">
              {demoProblems.map((p) => (
                <ProblemCard key={p.id} {...p} onViewMatches={handleViewMatches} />
              ))}
              {demoSolutions.map((s) => (
                <SolutionCard
                  key={s.id}
                  {...s}
                  onSolve={() => router.push("/workspace")}
                />
              ))}
            </div>
          </div>
        </section>

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
              <h3 className="font-headline uppercase tracking-[0.22em]">Live network</h3>
              <Globe2 className="h-4 w-4 text-neural-green" />
            </div>
            <p className="mt-2 text-sm text-subtext-gray">
              5,293 active collaborations • 184 countries connected.
            </p>
            <Link href="/workspace">
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Open Workspace
              </Button>
            </Link>
          </div>
        </aside>
      </div>

      <AIMatchesModal
        isOpen={!!modalProblem}
        onClose={() => setModalProblem(null)}
        problemTitle={modalProblem?.title ?? ""}
        problemIndustry={modalProblem?.industry ?? ""}
        solutions={solutions}
      />
    </div>
  );
}
