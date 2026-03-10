"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { UserRound, ArrowRight, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IndividualSignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0F14] px-4" style={{ backgroundColor: "#0A0F14" }}>
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-emerald-500/40 bg-dark-graphite/95 shadow-neural md:grid-cols-[0.9fr,1.1fr]">
        {/* Left: illustration / copy */}
        <div className="relative hidden flex-col justify-between border-r border-emerald-500/20 bg-[radial-gradient(circle_at_0_0,rgba(0,255,156,0.22),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,255,179,0.3),transparent_60%)] px-8 py-8 md:flex">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neural-green">
              <Sparkles className="h-3 w-3" />
              For Individual Innovators
            </div>
            <h1 className="mt-5 font-headline text-3xl text-text-white">
              Plug your ideas into the world&apos;s problems.
            </h1>
            <p className="mt-3 text-sm text-subtext-gray">
              Bring algorithms, prototypes, and hard‑won intuition from your
              domain. We route them to problems in completely different
              industries.
            </p>
          </div>

          <div className="mt-6 space-y-3 text-sm text-subtext-gray">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-neural-green" />
              <span>Earn from accepted proposals and collaborations.</span>
            </div>
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-neural-green" />
              <span>Build a verified cross‑industry track record.</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col justify-between px-6 py-7 md:px-8">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl border border-emerald-400/50 bg-emerald-500/20 shadow-neural" />
                <div>
                  <p className="font-headline text-sm uppercase tracking-[0.18em] text-subtext-gray">
                    Synapse
                  </p>
                  <p className="text-xs text-subtext-gray">
                    Innovator account • Solution node
                  </p>
                </div>
              </div>
              <Link
                href="/auth/industry-signup"
                className="text-xs text-neural-green hover:text-neural-glow"
              >
                I&apos;m an industry team
              </Link>
            </div>

            <h2 className="font-headline text-xl text-text-white">
              Claim your innovator node
            </h2>
            <p className="mt-1 text-sm text-subtext-gray">
              Use any email to start. You can connect GitHub, LinkedIn or
              portfolio links later.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                signIn("google", { callbackUrl: "/dashboard" });
              }}
            >
              <div className="space-y-1.5">
                <label className="text-xs text-subtext-gray">Full name</label>
                <input
                  className="w-full rounded-xl border border-emerald-500/40 bg-black/40 px-3 py-2 text-sm text-text-white outline-none ring-neural-green/40 focus:border-neural-green focus:ring-1"
                  placeholder="Ava Singh"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-subtext-gray">
                  Primary domain
                </label>
                <input
                  className="w-full rounded-xl border border-emerald-500/40 bg-black/40 px-3 py-2 text-sm text-text-white outline-none ring-neural-green/40 focus:border-neural-green focus:ring-1"
                  placeholder="Aviation, Robotics, Fintech..."
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-subtext-gray">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-emerald-500/40 bg-black/40 px-3 py-2 text-sm text-text-white outline-none ring-neural-green/40 focus:border-neural-green focus:ring-1"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <Button type="submit" className="mt-2 w-full gap-2">
                Continue with secure login
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-divider-gray pt-4 text-[11px] text-subtext-gray">
            <span>
              Synapse never shares your proposals publicly without consent.
            </span>
            <Link
              href="/auth/login"
              className="text-neural-green hover:text-neural-glow"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

