"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SolutionCard } from "@/components/cards/SolutionCard";

export interface MatchSolution {
  id: string;
  lab: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  relevance?: number;
}

interface AIMatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
  problemTitle: string;
  problemIndustry: string;
  solutions: MatchSolution[];
}

export function AIMatchesModal({
  isOpen,
  onClose,
  problemTitle,
  problemIndustry,
  solutions
}: AIMatchesModalProps) {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleCollab = () => {
    onClose();
    router.push("/workspace");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-emerald-500/40 bg-[#111827] shadow-[0_0_50px_rgba(0,255,156,0.25)]"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-emerald-500/30 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtext-gray">
                  AI Matches for
                </p>
                <h3 className="font-headline text-lg text-text-white">
                  {problemTitle}
                </h3>
                <p className="text-xs text-neural-green">{problemIndustry}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain p-5">
              <p className="mb-4 text-xs text-subtext-gray">
                Solutions from other industries. Click Collab on any solution to
                open the collaborative workspace.
              </p>
              <div className="space-y-4">
                {solutions.map((s) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="rounded-xl border border-emerald-500/20 bg-black/40 p-3 transition hover:border-emerald-500/50"
                  >
                    <SolutionCard {...s} onSolve={handleCollab} />
                    {s.relevance != null && (
                      <div className="mt-2 flex items-center justify-end gap-2">
                        <span className="rounded-full border border-neural-green/50 bg-neural-green/10 px-2 py-0.5 text-xs text-neural-green">
                          {s.relevance}% match
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
