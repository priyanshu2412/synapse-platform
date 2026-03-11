"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { setDemoSession } from "@/lib/demoAuth";

export default function IndustrySignupPage() {
  const router = useRouter();

  const handleContinue = () => {
    setDemoSession("INDUSTRY", "MedSpace Health");
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div
      className="min-h-screen bg-[#0A0F14]"
      style={{ backgroundColor: "#0A0F14" }}
    >
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-emerald-500/40 bg-dark-graphite/95 shadow-neural md:grid-cols-[1.1fr,0.9fr]">
          <div className="relative hidden flex-col justify-between border-r border-emerald-500/20 bg-[radial-gradient(circle_at_0_0,rgba(0,255,156,0.18),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,255,179,0.28),transparent_60%)] px-8 py-8 md:flex">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neural-green">
                <Sparkles className="h-3 w-3" />
                For Industry Teams
              </div>
              <h1 className="mt-5 font-headline text-3xl text-text-white">
                Turn impossible problems into cross‑industry breakthroughs.
              </h1>
              <p className="mt-3 text-sm text-subtext-gray">
                Post mission‑critical challenges. Let Synapse map them onto a
                global network of innovators.
              </p>
            </div>
            <div className="mt-6 space-y-3 text-sm text-subtext-gray">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-neural-green" />
                <span>IP‑aware workspaces and audit trail.</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-neural-green" />
                <span>Trusted by teams across 180+ countries.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between px-6 py-7 md:px-8">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <p className="font-headline text-sm uppercase tracking-[0.18em] text-subtext-gray">
                  Industry account
                </p>
                <Link
                  href="/auth/individual-signup"
                  className="text-xs text-neural-green hover:text-neural-glow"
                >
                  I&apos;m an innovator →
                </Link>
              </div>

              <h2 className="font-headline text-xl text-text-white">
                Create your industry workspace
              </h2>
              <p className="mt-1 text-sm text-subtext-gray">
                Connect your organisation to the Synapse network.
              </p>

              <Button
                className="mt-6 w-full gap-2"
                onClick={handleContinue}
                type="button"
              >
                Continue as Industry
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 border-t border-divider-gray pt-4 text-[11px] text-subtext-gray">
              <Link
                href="/auth/login"
                className="text-neural-green hover:text-neural-glow"
              >
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
