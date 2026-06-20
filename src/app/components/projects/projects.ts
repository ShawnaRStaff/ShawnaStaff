export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
}

export const projects: ProjectType[] = [
  {
    id: "iam-go-nexus",
    title: "IAM-GO / Nexus",
    description:
      "Graph-based identity and access management with cryptographically assured credential linking (patent pending). Multi-hop Neo4j traversal, ML-based progressive trust scoring, full SoD conflict detection, and a built-in BI engine covering market mapping, influence analysis, and M&A due diligence. OAuth, SAML, OIDC, Auth0, and Firebase auth — all in Go.",
    technologies: ["Go", "Neo4j", "PostgreSQL", "Redis", "OIDC", "SAML", "Graph IAM", "ML Trust"],
  },
  {
    id: "buckler-dd",
    title: "Buckler Due Diligence",
    description:
      "Investment analytics and due diligence platform built for Buckler AI. Enables investment professionals to screen and analyze securities, run peer comparisons, perform structured due diligence workflows, and export research — all from a single dashboard. FastAPI backend with HTMX-powered frontend and Chart.js visualization.",
    technologies: ["Python", "FastAPI", "HTMX", "PostgreSQL", "Chart.js", "Data Pipeline"],
    liveUrl: "https://www.buckler.ai/",
    liveLabel: "Live",
  },
  {
    id: "cascade-cosmology",
    title: "Cascade Inversion Cosmology",
    description:
      "A computational research project modeling cosmic structure as self-organized criticality in a structured substrate. 1D Oslo and 2D/3D Manna sandpile simulations reproduce published critical exponents (τ≈1.55, D≈2.2) through finite-size scaling across lattice sizes — validation against the physics literature, not just plausible output. The scaling sweeps run on a self-healing AWS spot fleet: one EC2 instance per job, with spot-interruption auto-recovery, checkpoint-resume, and rsync fleet sync. Python, NumPy/SciPy, and a rigorous, documented methodology.",
    technologies: ["Python", "NumPy", "SciPy", "AWS EC2 Fleet", "SOC / Percolation", "Finite-Size Scaling"],
    githubUrl: "https://github.com/ShawnaRStaff/Cascade-Inversion-Cosmology",
  },
  {
    id: "homelab",
    title: "Homelab — Production Infrastructure",
    description:
      "31+ production services across 14 Docker Compose stacks on a retired Mac. Core stack: Nginx, PHP-FPM, MySQL, PostgreSQL/TimescaleDB, MongoDB, Redis. Networking: Pi-hole, WireGuard VPN, Nginx Proxy Manager, Portainer. Monitoring: Prometheus, Grafana, cAdvisor, node-exporter. Media: Jellyfin, Nextcloud. Home automation: Home Assistant, Mosquitto MQTT, Node-RED. Jenkins CI/CD health-checks all 36 containers. AI agents run daily briefings, security audits, and backup verification automatically.",
    technologies: ["Docker", "Prometheus", "Grafana", "WireGuard", "Pi-hole", "Jenkins", "Home Assistant"],
    githubUrl: "https://github.com/ShawnaRStaff/homelab-infrastructure",
  },
  {
    id: "cipher",
    title: "Cipher",
    description:
      "An AI coding assistant that doesn't forget. Blockchain-backed persistent memory means context is cryptographically verifiable across sessions — not just cached. A knowledge graph structures what it learns, and QLoRA fine-tuning lets the model actually improve from experience. Built for engineers who are tired of re-explaining their codebase every session.",
    technologies: ["AI", "LLM", "QLoRA", "Blockchain", "Knowledge Graph", "Fine-tuning"],
  },
  {
    id: "deadlife",
    title: "Dead Life Inc v2",
    description:
      "Multi-tenant platform for bands to sell merch, stream live shows, and manage their entire fan economy. Concert ticketing (including private concert access), print-on-demand merchandise, loyalty rewards, real-time analytics, blog, and revenue sharing — each band operates as a fully isolated tenant. 65+ granular permissions across 4 roles, Firebase Cloud Functions backend.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Firebase", "Multi-tenant", "Stripe"],
  },
];
