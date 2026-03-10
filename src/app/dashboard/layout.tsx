import { ReactNode } from "react";
import Link from "next/link";
import { Home, Brain, Layers, Sparkles, Bell, User } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/problems", label: "Problems", icon: Brain },
  { href: "/dashboard/solutions", label: "Solutions", icon: Layers },
  { href: "/dashboard/ai-matches", label: "AI Matches", icon: Sparkles },
  { href: "/dashboard/collaborations", label: "Collaborations", icon: Layers },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/profile", label: "Profile", icon: User }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A0F14] text-[#E5E7EB]">
      <aside className="hidden w-64 flex-none border-r border-emerald-500/20 bg-[#111827]/95 px-4 py-6 backdrop-blur-sm md:block">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl border border-emerald-400/50 bg-gradient-to-br from-emerald-500/30 to-neural-green/10 shadow-[0_0_20px_rgba(0,255,156,0.25)]" />
          <span className="font-headline text-xl font-semibold tracking-tight text-[#E5E7EB]">Synapse</span>
        </div>
        <nav className="space-y-1 text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[#9CA3AF] transition hover:bg-emerald-500/15 hover:text-[#E5E7EB]"
              >
                <Icon className="h-4 w-4 text-[#00FF9C]" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 bg-[#0A0F14] px-4 py-6 md:px-8">
        {children}
      </main>
    </div>
  );
}

