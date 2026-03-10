import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { LoginPanels } from "@/components/auth/LoginPanels";
import { AuthGateClient } from "@/components/auth/AuthGateClient";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0A0F14]" style={{ backgroundColor: "#0A0F14" }}>
      <Navbar />
      <AuthGateClient />
      <div className="mx-auto max-w-6xl px-4 pt-24 md:px-8 md:pt-28">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-subtext-gray">
              Authentication
            </p>
            <h1 className="font-headline text-3xl text-text-white">
              Log in to Synapse
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-subtext-gray">
              Synapse supports two account types. Pick the path that matches
              how you collaborate — you can switch later from your profile.
            </p>
          </div>
          <Link
            href="/"
            className="hidden text-sm text-neural-green hover:text-neural-glow md:inline"
          >
            Back to landing
          </Link>
        </div>

        <LoginPanels />

        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-dark-graphite/60 p-4 text-xs text-subtext-gray shadow-neural">
          Google sign-in requires `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`,
          and `NEXTAUTH_SECRET` in your `.env.local`.
        </div>
      </div>
    </div>
  );
}

