"use client";

import { motion } from "framer-motion";
import type { WorkspaceProblem } from "@/lib/workspaceMockData";

interface ProblemOverviewCardProps {
  problem: WorkspaceProblem;
}

export function ProblemOverviewCard({ problem }: ProblemOverviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: "0 0 30px rgba(0,255,156,0.25)" }}
      className="rounded-2xl border border-[#00FF9C]/30 bg-[#111814] p-5"
    >
      <h3 className="font-headline text-lg font-semibold text-[#E5E7EB]">
        {problem.title}
      </h3>
      <p className="mt-1 text-xs text-[#00FF9C]">{problem.industry}</p>
      <p className="mt-2 text-xs text-[#9CA3AF]">Posted By: {problem.postedBy}</p>
      <p className="mt-3 text-sm text-[#9CA3AF]">{problem.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {problem.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#00FF9C]/40 bg-[#00FF9C]/10 px-2 py-0.5 text-xs text-[#00FF9C]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
