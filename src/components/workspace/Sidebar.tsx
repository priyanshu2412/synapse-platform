"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Flag,
  Sparkles
} from "lucide-react";

const navItems = [
  { href: "/workspace", label: "Overview", icon: LayoutDashboard },
  { href: "/workspace#chat", label: "Chat", icon: MessageSquare },
  { href: "/workspace#documents", label: "Documents", icon: FileText },
  { href: "/workspace#milestones", label: "Milestones", icon: Flag },
  { href: "/workspace#insights", label: "AI Insights", icon: Sparkles }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[260px] flex-col border-r border-emerald-500/20 bg-[#111814]">
      <div className="border-b border-emerald-500/20 p-5">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-neural-green/40 bg-black/40">
            <Image
              src="/logo.png"
              alt="Synapse"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-headline text-lg font-semibold text-[#E5E7EB]">
            Synapse
          </span>
        </div>
        <h2 className="mt-4 text-sm font-medium text-[#E5E7EB]">
          Smart Building Energy Optimization
        </h2>
        <span className="mt-2 inline-block rounded-full border border-[#00FF9C]/50 bg-[#00FF9C]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#00FF9C] shadow-[0_0_12px_rgba(0,255,156,0.3)]">
          ACTIVE COLLABORATION
        </span>
      </div>

      <div className="border-b border-emerald-500/20 p-4">
        <p className="text-[10px] uppercase tracking-wider text-[#9CA3AF]">
          Participants
        </p>
        <div className="mt-3 flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-9 w-9 rounded-full border-2 border-[#111814] bg-gradient-to-br from-[#00FF9C]/30 to-[#00C97B]/20 ring-2 ring-[#00FF9C]/30"
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-[#9CA3AF]">
          Industry Representative, Innovator, AI Assistant
        </p>
      </div>

      <nav className="flex-1 space-y-0.5 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "#");
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-[#00FF9C]/10 text-[#00FF9C] shadow-[0_0_15px_rgba(0,255,156,0.2)]"
                    : "text-[#9CA3AF] hover:bg-[#00FF9C]/5 hover:text-[#E5E7EB]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
