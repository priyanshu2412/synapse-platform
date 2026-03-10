import { ArrowRight, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0F14]">
      <Navbar />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-24 md:px-8 md:pt-28">
      {/* Hero */}
      <section className="grid flex-1 gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neural-green shadow-neural">
            <Sparkles className="h-3 w-3" />
            The world&apos;s neural network for innovation
          </div>

          <div className="space-y-4">
            <h1 className="font-headline text-4xl leading-tight text-text-white sm:text-5xl lg:text-6xl">
              Connect problems in{" "}
              <span className="bg-gradient-to-r from-neural-green via-neural-glow to-deep-emerald bg-clip-text text-transparent">
                any industry
              </span>{" "}
              with solutions from everywhere.
            </h1>
            <p className="max-w-xl text-sm text-subtext-gray sm:text-base">
              Synapse maps your toughest challenges onto a global lattice of
              cross-industry knowledge—using AI to discover aviation ideas that
              fix healthcare, logistics that transform finance, and more. All
              wrapped in a secure workspace designed for serious IP.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/auth/industry-signup">
              <Button className="gap-2">
                Start Solving Problems
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/individual-signup">
              <Button variant="outline" className="gap-2">
                Start Sharing Solutions
                <Network className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-xs text-subtext-gray">
            <div>
              <p className="font-semibold text-text-white">12,847</p>
              <p>Problems Solved</p>
            </div>
            <div>
              <p className="font-semibold text-text-white">5,293</p>
              <p>Active Collaborations</p>
            </div>
            <div>
              <p className="font-semibold text-text-white">184</p>
              <p>Countries Connected</p>
            </div>
          </div>
        </div>

        {/* Animated demo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-emerald-500/40 bg-dark-graphite/90 p-5 shadow-neural">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_10%_0,rgba(0,255,156,0.25),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(56,255,179,0.35),transparent_60%)] opacity-80" />
          {/* stylised logo-style node in background */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-4 h-20 w-20 -translate-x-1/2 rounded-full border border-neural-green/40 bg-emerald-500/10 blur-[1px]" />
            <div className="absolute left-[18%] top-1/3 h-12 w-12 rounded-full border border-neural-green/30" />
            <div className="absolute right-[18%] top-1/3 h-12 w-12 rounded-full border border-neural-green/30" />
            <div className="absolute left-1/4 bottom-6 h-10 w-10 rounded-full border border-neural-green/30" />
            <div className="absolute right-1/4 bottom-6 h-10 w-10 rounded-full border border-neural-green/30" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="neural-line" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00FF9C" />
                  <stop offset="100%" stopColor="#38FFB3" />
                </linearGradient>
              </defs>
              <path
                d="M80 180 C 140 120 260 120 320 180"
                stroke="url(#neural-line)"
                strokeWidth="1.5"
                fill="none"
                strokeOpacity="0.8"
              />
              <path
                d="M200 70 C 210 130 220 160 200 210"
                stroke="url(#neural-line)"
                strokeWidth="1.5"
                fill="none"
                strokeOpacity="0.8"
              />
            </svg>
          </div>
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-subtext-gray">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-neural-green" />
                AI Cross-Industry Matching
              </span>
              <span>Real-time neural connections</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ProblemCard
                id="demo-problem"
                company="MedSpace Health Systems"
                industry="Healthcare"
                title="ICU bed allocation during surge events"
                description="We need dynamic allocation of ICU beds across multiple facilities during unpredictable surges, while maintaining triage quality and transfer safety."
                tags={["healthcare", "operations", "capacity"]}
                likes={250}
                interested={32}
                solutions={12}
                aiMatches={3}
              />
              <SolutionCard
                id="demo-solution"
                lab="AeroRoute Optimization"
                industry="Aviation"
                title="Constraint-aware dynamic allocation engine"
                description="A constraint solver + RL policy that reallocates capacity in real time under hard safety constraints and rapidly shifting demand."
                tags={["aviation", "optimization", "allocation"]}
                likes={190}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="card-hover-glow rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 p-5">
          <h3 className="font-headline text-lg text-text-white">
            Break Knowledge Silos
          </h3>
          <p className="mt-2 text-sm text-subtext-gray">
            Visualize your problems as nodes in a living neural map that spans
            every industry, technology, and geography.
          </p>
        </div>
        <div className="card-hover-glow rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 p-5">
          <h3 className="font-headline text-lg text-text-white">
            AI Cross-Industry Matching
          </h3>
          <p className="mt-2 text-sm text-subtext-gray">
            Our embedding engine continuously searches for analogues across
            industries, surfacing high-confidence matches.
          </p>
        </div>
        <div className="card-hover-glow rounded-2xl border border-emerald-500/30 bg-dark-graphite/80 p-5">
          <h3 className="font-headline text-lg text-text-white">
            Secure Collaboration
          </h3>
          <p className="mt-2 text-sm text-subtext-gray">
            Work inside encrypted workspaces with PD-friendly proposal flows
            and IP-aware document sharing.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-divider-gray pt-6 text-sm text-subtext-gray md:flex-row">
        <p>Synapse • Cross-Industry Innovation Network</p>
        <div className="flex gap-3">
          <Link href="/auth/industry-signup">
            <Button size="sm">I&apos;m an Industry Team</Button>
          </Link>
          <Link href="/auth/individual-signup">
            <Button size="sm" variant="outline">
              I&apos;m an Innovator
            </Button>
          </Link>
        </div>
      </footer>
    </main>
    </div>
  );
}

