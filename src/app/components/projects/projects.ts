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
      "Patent-pending graph-based identity & access management (US Patent 10,873,598 B1). Cryptographically-assured credential linking, multi-hop Neo4j traversal, ML-based progressive trust scoring, and full separation-of-duties conflict detection — built in Go.",
    technologies: ["Go", "Neo4j", "PostgreSQL", "OIDC", "SAML", "ML"],
    liveUrl: "https://patents.google.com/patent/US10873598B1",
    liveLabel: "Patent",
  },
  {
    id: "buckler-idd",
    title: "Buckler IDD",
    description:
      "Enterprise fintech platform for Canadian compliance and investment due diligence. FastAPI backend with an HTMX-powered frontend. Development lead.",
    technologies: ["Python", "FastAPI", "HTMX", "PostgreSQL", "Redis"],
    liveUrl: "https://www.buckler.ai/",
    liveLabel: "Live",
  },
  {
    id: "cascade-cosmology",
    title: "Cascade Inversion Cosmology",
    description:
      "Computational physics research modeling cosmic structure as self-organized criticality. Sandpile simulations validated against published critical exponents, run on a self-healing AWS spot fleet with checkpoint-resume and spot-interruption auto-recovery.",
    technologies: ["Python", "NumPy", "SciPy", "AWS EC2"],
    githubUrl: "https://github.com/ShawnaRStaff/Cascade-Inversion-Cosmology",
  },
  {
    id: "homelab",
    title: "Homelab Infrastructure",
    description:
      "30+ production services across 14 Docker Compose stacks: Prometheus/Grafana monitoring, WireGuard VPN, Pi-hole, and Jenkins CI/CD health-checking every container — plus daily AI agents for briefings, security audits, and backup verification.",
    technologies: ["Docker", "Prometheus", "Grafana", "Jenkins", "WireGuard"],
    githubUrl: "https://github.com/ShawnaRStaff/homelab-infrastructure",
  },
  {
    id: "cipher",
    title: "Cipher",
    description:
      "AI coding assistant with persistent, cryptographically-verifiable memory across sessions. A knowledge graph structures what it learns and QLoRA fine-tuning lets the model improve from experience. In private development.",
    technologies: ["AI / LLM", "QLoRA", "Knowledge Graph", "Python"],
  },
  {
    id: "create-sqlalchemy-app",
    title: "create-sqlalchemy-app",
    description:
      "Open-source CLI published to PyPI — scaffolds a full FastAPI + SQLAlchemy + PostgreSQL project with JWT auth, Alembic migrations, and Docker in a single command.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "PyPI", "CLI"],
    githubUrl: "https://github.com/ShawnaRStaff/create-sqlalchemy-app",
    liveUrl: "https://pypi.org/project/create-sqlalchemy-app/",
    liveLabel: "PyPI",
  },
];
