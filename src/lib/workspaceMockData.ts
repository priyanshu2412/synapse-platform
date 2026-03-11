export interface WorkspaceUser {
  id: string;
  name: string;
  role: "industry" | "innovator" | "ai";
}

export interface WorkspaceProblem {
  title: string;
  industry: string;
  postedBy: string;
  description: string;
  tags: string[];
}

export interface WorkspaceProposal {
  title: string;
  summary: string;
  matchScore: number;
}

export interface ChatMessage {
  id: string;
  sender: string;
  role: "industry" | "innovator" | "ai";
  text: string;
  timestamp: string;
}

export interface Milestone {
  id: string;
  title: string;
  status: "completed" | "in_progress" | "pending";
}

export interface CrossIndustryInsight {
  industry: string;
  description: string;
  relevance: number;
}

export const workspaceUsers: WorkspaceUser[] = [
  { id: "u1", name: "Industry Representative", role: "industry" },
  { id: "u2", name: "Innovator", role: "innovator" },
  { id: "u3", name: "AI Assistant", role: "ai" }
];

export const workspaceProblem: WorkspaceProblem = {
  title: "Reduce Energy Consumption in Smart Buildings",
  industry: "Smart Infrastructure",
  postedBy: "GreenTech Industries",
  description:
    "Buildings consume large amounts of energy through inefficient HVAC airflow distribution. The goal is to develop optimization strategies that dynamically adjust airflow patterns to minimize power consumption while maintaining thermal comfort.",
  tags: ["Energy Optimization", "Smart Buildings", "HVAC Systems", "Sustainability"]
};

export const workspaceProposal: WorkspaceProposal = {
  title: "Aviation-Inspired Adaptive Airflow Optimization",
  summary:
    "Aircraft cabins use intelligent airflow algorithms to regulate temperature efficiently while minimizing energy usage. By adapting this airflow optimization model to building HVAC systems, energy consumption can be significantly reduced.",
  matchScore: 92
};

export const chatMessages: ChatMessage[] = [
  {
    id: "c1",
    sender: "Industry Rep",
    role: "industry",
    text: "We're interested in how this airflow model scales to large buildings.",
    timestamp: "10:24"
  },
  {
    id: "c2",
    sender: "Innovator",
    role: "innovator",
    text: "The algorithm adjusts airflow dynamically based on occupancy patterns.",
    timestamp: "10:31"
  },
  {
    id: "c3",
    sender: "AI Assistant",
    role: "ai",
    text: "I found a similar airflow optimization model used in data center cooling systems.",
    timestamp: "10:35"
  }
];

export const milestones: Milestone[] = [
  { id: "m1", title: "Problem Analysis", status: "completed" },
  { id: "m2", title: "Optimization Model Design", status: "in_progress" },
  { id: "m3", title: "Simulation Testing", status: "pending" },
  { id: "m4", title: "Pilot Implementation", status: "pending" }
];

export const crossIndustryInsights: CrossIndustryInsight[] = [
  {
    industry: "Aviation",
    description:
      "Aircraft airflow optimization reduces energy usage using dynamic cabin pressure systems.",
    relevance: 94
  },
  {
    industry: "Data Centers",
    description:
      "Cooling systems use AI airflow prediction to minimize server overheating.",
    relevance: 88
  },
  {
    industry: "Automotive",
    description:
      "Electric vehicles optimize battery temperature using adaptive airflow channels.",
    relevance: 84
  }
];
