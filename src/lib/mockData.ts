export const demoProblems = [
  {
    id: "p1",
    company: "Northstar Health",
    industry: "Healthcare",
    title: "Predicting ICU bottlenecks 48 hours out",
    description:
      "We need early‑warning capacity models that account for local events, transfer patterns, and multi‑hospital load‑balancing.",
    tags: ["healthcare", "forecasting", "capacity"],
    likes: 182,
    interested: 41,
    solutions: 9,
    aiMatches: 4
  },
  {
    id: "p2",
    company: "Orbital Freight",
    industry: "Logistics",
    title: "Minimizing idle port time for containers",
    description:
      "Containers spend 30–40% of time idle between vessels, customs, and last‑mile routing. We need cross‑modal optimization.",
    tags: ["logistics", "routing", "optimization"],
    likes: 96,
    interested: 21,
    solutions: 5,
    aiMatches: 3
  }
];

export const demoSolutions = [
  {
    id: "s1",
    lab: "AeroOptix Labs",
    industry: "Aviation",
    title: "Real‑time gate re‑assignment engine",
    description:
      "Deployed at three major hubs to continuously reshuffle gates, reduce taxi time and missed connections using RL policies.",
    tags: ["aviation", "scheduling", "rl"],
    likes: 210
  },
  {
    id: "s2",
    lab: "QuantAgri Systems",
    industry: "Agriculture",
    title: "Satellite‑driven yield stress detector",
    description:
      "Computer‑vision models that turn multispectral satellite data into early stress alerts, deployed across 12M+ acres.",
    tags: ["agriculture", "cv", "remote-sensing"],
    likes: 143
  }
];

// AI matches per problem (solutions from individuals)
export const problemToSolutions: Record<
  string,
  Array<{ id: string; lab: string; industry: string; title: string; description: string; tags: string[]; likes: number; relevance?: number }>
> = {
  p1: [
    {
      id: "m1",
      lab: "AeroOptix Labs",
      industry: "Aviation",
      title: "Real‑time gate re‑assignment engine",
      description:
        "Deployed at three major hubs to continuously reshuffle gates, reduce taxi time and missed connections using RL policies. Same capacity-optimization logic applies to ICU bed allocation.",
      tags: ["aviation", "scheduling", "capacity"],
      likes: 210,
      relevance: 94
    },
    {
      id: "m2",
      lab: "DataFlow Systems",
      industry: "Data Centers",
      title: "ML-driven capacity forecasting",
      description:
        "We predict server load spikes 48h ahead using event streams and weather. Transfer patterns map directly to patient transfer networks.",
      tags: ["ml", "forecasting", "capacity"],
      likes: 156,
      relevance: 89
    },
    {
      id: "m3",
      lab: "GridWise Energy",
      industry: "Energy",
      title: "Dynamic grid allocation optimizer",
      description:
        "Real-time allocation of energy across regions under shifting demand. Analogous to multi-hospital load‑balancing.",
      tags: ["energy", "optimization", "load-balancing"],
      likes: 98,
      relevance: 85
    }
  ],
  p2: [
    {
      id: "m4",
      lab: "AeroOptix Labs",
      industry: "Aviation",
      title: "Aircraft turnaround optimization",
      description:
        "Minimize ground time between flights using constraint solvers and real-time routing. Same logic for container flow at ports.",
      tags: ["aviation", "routing", "optimization"],
      likes: 198,
      relevance: 92
    },
    {
      id: "m5",
      lab: "WarehouseAI",
      industry: "Retail",
      title: "Cross-dock scheduling engine",
      description:
        "Optimize container movement between trucks and warehouses. Reduces idle time by 35% through dynamic routing.",
      tags: ["retail", "logistics", "scheduling"],
      likes: 124,
      relevance: 88
    }
  ]
};
