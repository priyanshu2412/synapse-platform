"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getDemoName, getDemoRole, clearDemoSession } from "@/lib/demoAuth";

export function Navbar() {
  const [demoRole, setDemoRole] = useState<string | null>(null);
  const [demoName, setDemoName] = useState<string | null>(null);

  useEffect(() => {
    setDemoRole(getDemoRole());
    setDemoName(getDemoName());
  }, []);

  const isAuthed = !!demoRole;
  const displayName = demoName ?? (demoRole === "INDUSTRY" ? "Industry" : "Innovator");

  const handleLogout = () => {
    clearDemoSession();
    window.location.href = "/";
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-emerald-500/20 bg-deep-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-emerald-400/50 bg-black/40 shadow-[0_0_22px_rgba(0,255,156,0.35)]">
            <Image
              src="/logo.png"
              alt="Synapse logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-headline text-xl font-semibold tracking-tight text-text-white">
            Synapse
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/dashboard"
            className="text-sm text-subtext-gray transition hover:text-text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/auth/industry-signup"
            className="text-sm text-subtext-gray transition hover:text-text-white"
          >
            For Industry
          </Link>
          <Link
            href="/auth/individual-signup"
            className="text-sm text-subtext-gray transition hover:text-text-white"
          >
            For Innovators
          </Link>
          <Link
            href="/workspace"
            className="text-sm text-subtext-gray transition hover:text-text-white"
          >
            Workspace
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {isAuthed ? (
            <>
              <div className="hidden items-center gap-2 md:flex">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-neural-green">
                  {demoRole}
                </span>
                <span className="text-xs text-subtext-gray">{displayName}</span>
              </div>
              <Button size="sm" variant="outline" onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/industry-signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
