"use client";

import { motion } from "framer-motion";
import { ProblemOverviewCard } from "@/components/workspace/ProblemOverviewCard";
import { ProposalCard } from "@/components/workspace/ProposalCard";
import { ChatPanel } from "@/components/workspace/ChatPanel";
import { MilestoneTracker } from "@/components/workspace/MilestoneTracker";
import { AIInsightPanel } from "@/components/workspace/AIInsightPanel";
import {
  workspaceProblem,
  workspaceProposal,
  chatMessages,
  milestones,
  crossIndustryInsights
} from "@/lib/workspaceMockData";

export default function WorkspacePage() {
  return (
    <div className="grid min-h-screen gap-6 p-6 lg:grid-cols-[1fr_340px]">
      {/* Column 2: Main Collaboration Area */}
      <div className="space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ProblemOverviewCard problem={workspaceProblem} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <ProposalCard proposal={workspaceProposal} />
        </motion.section>

        <motion.section
          id="chat"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-[#00FF9C]/20 bg-[#111814] p-5"
        >
          <ChatPanel messages={chatMessages} />
        </motion.section>

        <motion.section
          id="milestones"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-2xl border border-[#00FF9C]/20 bg-[#111814] p-5"
        >
          <MilestoneTracker milestones={milestones} />
        </motion.section>
      </div>

      {/* Column 3: AI Insight Panel */}
      <motion.aside
        id="insights"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl border border-[#00FF9C]/20 bg-[#111814] p-5"
      >
        <AIInsightPanel insights={crossIndustryInsights} />
      </motion.aside>
    </div>
  );
}
