"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb } from "lucide-react";
import type { CrossIndustryInsight } from "@/lib/workspaceMockData";

interface AIInsightPanelProps {
  insights: CrossIndustryInsight[];
}

export function AIInsightPanel({ insights }: AIInsightPanelProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-headline text-base font-semibold text-[#E5E7EB]">
          AI Knowledge Transfer Engine
        </h3>
        <p className="mt-1 text-xs text-[#9CA3AF]">
          Discover solutions from other industries
        </p>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-[#00FF9C]">
          Cross Industry Ideas
        </h4>
        <div className="mt-3 space-y-3">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.industry}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{
                boxShadow: "0 0 25px rgba(0,255,156,0.2)",
                borderColor: "rgba(0,255,156,0.5)"
              }}
              className="rounded-xl border border-[#00FF9C]/30 bg-[#111814] p-3"
            >
              <p className="text-sm font-medium text-[#E5E7EB]">
                {insight.industry}
              </p>
              <p className="mt-1 text-xs text-[#9CA3AF]">{insight.description}</p>
              <p className="mt-2 text-[10px] text-[#00FF9C]">
                Relevance: {insight.relevance}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-[#00FF9C]">
          Idea Expansion
        </h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 rounded-xl border border-[#38FFB3]/30 bg-[#38FFB3]/5 p-3"
        >
          <div className="flex items-start gap-2">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#38FFB3]" />
            <p className="text-xs text-[#E5E7EB]">
              Combine adaptive airflow optimization with IoT occupancy sensors to
              dynamically adjust building cooling systems.
            </p>
          </div>
        </motion.div>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-[#00FF9C]">
          Potential Risks
        </h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-3 flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
          <p className="text-xs text-[#9CA3AF]">
            Initial infrastructure upgrade costs may be high.
          </p>
        </motion.div>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-[#00FF9C]">
          Recommended Next Step
        </h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{
            boxShadow: "0 0 30px rgba(0,255,156,0.35)",
            scale: 1.01
          }}
          className="mt-3 rounded-xl border-2 border-[#00FF9C]/50 bg-[#00FF9C]/10 p-4"
        >
          <p className="text-sm font-medium text-[#E5E7EB]">
            Run airflow simulation using digital building models.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
