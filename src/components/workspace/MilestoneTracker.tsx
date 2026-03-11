"use client";

import { motion } from "framer-motion";
import { Check, Circle, Loader2 } from "lucide-react";
import type { Milestone } from "@/lib/workspaceMockData";

interface MilestoneTrackerProps {
  milestones: Milestone[];
}

export function MilestoneTracker({ milestones }: MilestoneTrackerProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-headline text-sm font-semibold text-[#E5E7EB]">
        Milestone Progress
      </h3>
      <div className="space-y-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-[#00FF9C]/20 bg-[#111814] p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#E5E7EB]">{m.title}</span>
              {m.status === "completed" && (
                <Check className="h-4 w-4 text-[#00FF9C]" />
              )}
              {m.status === "in_progress" && (
                <Loader2 className="h-4 w-4 animate-spin text-[#00FF9C]" />
              )}
              {m.status === "pending" && (
                <Circle className="h-4 w-4 text-[#9CA3AF]" />
              )}
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/40">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width:
                    m.status === "completed"
                      ? "100%"
                      : m.status === "in_progress"
                        ? "60%"
                        : "0%"
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#00FF9C] to-[#38FFB3]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
