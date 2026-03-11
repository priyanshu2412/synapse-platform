"use client";

import { motion } from "framer-motion";
import type { WorkspaceProposal } from "@/lib/workspaceMockData";

interface ProposalCardProps {
  proposal: WorkspaceProposal;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{ y: -2, boxShadow: "0 0 30px rgba(0,255,156,0.25)" }}
      className="rounded-2xl border border-[#00FF9C]/30 bg-[#111814] p-5"
    >
      <h3 className="font-headline text-lg font-semibold text-[#E5E7EB]">
        {proposal.title}
      </h3>
      <p className="mt-3 text-sm text-[#9CA3AF]">{proposal.summary}</p>
      <div className="mt-4">
        <span className="inline-flex items-center gap-1 rounded-full border border-[#00FF9C]/50 bg-[#00FF9C]/15 px-3 py-1 text-sm font-semibold text-[#00FF9C] shadow-[0_0_15px_rgba(0,255,156,0.35)]">
          {proposal.matchScore}% MATCH
        </span>
      </div>
    </motion.article>
  );
}
