"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { Building2, UserRound, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

type PanelProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  icon: React.ReactNode;
  primaryLabel: string;
  role: "INDUSTRY" | "INDIVIDUAL";
};

function Panel({
  title,
  subtitle,
  bullets,
  icon,
  primaryLabel,
  role
}: PanelProps) {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/dashboard";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-black/55 p-6 shadow-neural transition hover:border-neural-green/70 hover:bg-black/65">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neural-green">
              <Sparkles className="h-3 w-3" />
              Choose your node
            </div>
            <h2 className="mt-4 font-headline text-2xl text-text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm text-subtext-gray">{subtitle}</p>
          </div>
          <div className="h-11 w-11 rounded-2xl border border-emerald-400/50 bg-emerald-500/15 p-2 shadow-neural">
            <div className="flex h-full w-full items-center justify-center text-neural-green">
              {icon}
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-2 text-sm text-subtext-gray">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-neural-green" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            className="w-full gap-2"
            onClick={() => {
              signIn("google", {
                callbackUrl: from
              });
            }}
            type="button"
          >
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-subtext-gray">
          <Link
            href={role === "INDUSTRY" ? "/auth/industry-signup" : "/auth/individual-signup"}
            className="text-neural-green hover:text-neural-glow"
          >
            Create an account
          </Link>
          <span>Google SSO</span>
        </div>
      </div>
    </div>
  );
}

export function LoginPanels() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Panel
        title="Industry login"
        subtitle="Post challenges, review proposals, and run secure collaborations with innovators."
        bullets={[
          "Create problem nodes for your company",
          "Review AI matches and proposals privately",
          "Launch NDA-first collaboration workspaces"
        ]}
        icon={<Building2 className="h-5 w-5" />}
        primaryLabel="Continue with Google"
        role="INDUSTRY"
      />
      <Panel
        title="Individual login"
        subtitle="Share solutions, submit proposals, and build a verified cross-industry track record."
        bullets={[
          "Publish solution nodes from your domain",
          "Submit proposals without exposing full IP",
          "Earn verification via accepted proposals"
        ]}
        icon={<UserRound className="h-5 w-5" />}
        primaryLabel="Continue with Google"
        role="INDIVIDUAL"
      />
    </div>
  );
}

