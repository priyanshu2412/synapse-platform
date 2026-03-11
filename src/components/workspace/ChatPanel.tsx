"use client";

import { motion } from "framer-motion";
import type { ChatMessage } from "@/lib/workspaceMockData";

interface ChatPanelProps {
  messages: ChatMessage[];
}

export function ChatPanel({ messages }: ChatPanelProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-headline text-sm font-semibold text-[#E5E7EB]">
        Collaboration Chat
      </h3>
      <div className="space-y-3">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`flex ${msg.role === "innovator" ? "justify-end" : ""}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                msg.role === "industry"
                  ? "border border-[#00FF9C]/30 bg-[#00FF9C]/5"
                  : msg.role === "ai"
                    ? "border border-[#38FFB3]/30 bg-[#38FFB3]/5"
                    : "border border-[#00C97B]/30 bg-[#00C97B]/10"
              }`}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-[#00FF9C]">
                {msg.sender}
              </p>
              <p className="mt-1 text-sm text-[#E5E7EB]">{msg.text}</p>
              <p className="mt-1 text-[10px] text-[#9CA3AF]">{msg.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
