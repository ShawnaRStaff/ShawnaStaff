interface CommandResult {
  output: string;
  clear?: boolean;
  isHtml?: boolean;
}

interface Command {
  description: string;
  action: (args?: string) => CommandResult;
}

interface CommandsType {
  [key: string]: Command;
}

const c = {
  g: "color: var(--color-terminal)",
  a: "color: var(--color-amber)",
  c: "color: var(--color-cyan)",
  m: "color: var(--color-text-muted)",
};

export const COMMANDS: CommandsType = {
  help: {
    description: "Display available commands",
    action: () => ({
      isHtml: true,
      output: `<div class="pt-3 pb-3">
<div style="${c.a}" class="mb-2">[COMMANDS]</div>
<table class="text-left text-xs md:text-sm">
  <tr><td style="${c.g}">help</td><td style="${c.m}" class="pl-6">Display available commands</td></tr>
  <tr><td style="${c.g}">about</td><td style="${c.m}" class="pl-6">Learn about me</td></tr>
  <tr><td style="${c.g}">skills</td><td style="${c.m}" class="pl-6">View technical skills</td></tr>
  <tr><td style="${c.g}">projects</td><td style="${c.m}" class="pl-6">Browse portfolio</td></tr>
  <tr><td style="${c.g}">experience</td><td style="${c.m}" class="pl-6">Work history</td></tr>
  <tr><td style="${c.g}">contact</td><td style="${c.m}" class="pl-6">Get in touch</td></tr>
  <tr><td style="${c.g}">clear</td><td style="${c.m}" class="pl-6">Clear terminal</td></tr>
</table></div>`,
    }),
  },
  about: {
    description: "Learn about me",
    action: () => ({
      isHtml: true,
      output: `<div class="pt-3 pb-3">
<div style="${c.c}" class="mb-2">[ABOUT]</div>
<div style="${c.m}" class="text-xs md:text-sm leading-relaxed">
Full-stack engineer, database to deployment:<br/>
<span style="${c.g}">></span> Patent-pending graph IAM architecture<br/>
<span style="${c.g}">></span> Production AI / LLM systems (QLoRA fine-tuning)<br/>
<span style="${c.g}">></span> Web & mobile (React, Next.js, React Native)<br/>
<span style="${c.g}">></span> Python / FastAPI backends, .NET microservices<br/>
<span style="${c.g}">></span> 30+ container Docker homelab + CI/CD
</div></div>`,
    }),
  },
  skills: {
    description: "View my technical skills",
    action: () => ({
      isHtml: true,
      output: `<div class="pt-3 pb-3">
<div style="${c.a}" class="mb-2">[SKILLS]</div>
<table class="text-left text-xs md:text-sm">
  <tr><td style="${c.c}">Languages</td><td style="${c.m}" class="pl-4">TypeScript, JavaScript, Python, C#</td></tr>
  <tr><td style="${c.c}">Frontend</td><td style="${c.m}" class="pl-4">React, React Native, Next.js, HTMX</td></tr>
  <tr><td style="${c.c}">Backend</td><td style="${c.m}" class="pl-4">FastAPI, .NET, Node.js</td></tr>
  <tr><td style="${c.c}">Database</td><td style="${c.m}" class="pl-4">PostgreSQL, MongoDB, Firebase</td></tr>
  <tr><td style="${c.c}">DevOps</td><td style="${c.m}" class="pl-4">Docker, GitHub Actions, CI/CD</td></tr>
</table></div>`,
    }),
  },
  projects: {
    description: "Browse my portfolio projects",
    action: () => ({
      isHtml: true,
      output: `<div class="pt-3 pb-3">
<div style="${c.a}" class="mb-2">[PROJECTS]</div>
<div class="text-xs md:text-sm">
<div style="${c.g}" class="mb-1">01. IAM-GO / Nexus</div>
<div style="${c.m}" class="ml-4 mb-2">Patent-pending graph IAM (US Patent 10,873,598 B1)</div>
<div style="${c.g}" class="mb-1">02. Buckler IDD</div>
<div style="${c.m}" class="ml-4 mb-2">Fintech compliance & due diligence platform (Dev Lead)</div>
<div style="${c.g}" class="mb-1">03. Cascade Inversion Cosmology</div>
<div style="${c.m}" class="ml-4 mb-2">SOC physics simulations on a self-healing AWS spot fleet</div>
<div style="${c.g}" class="mb-1">04. Homelab Infrastructure</div>
<div style="${c.m}" class="ml-4 mb-2">30+ production services, Docker, monitoring, CI/CD</div>
<div style="${c.g}" class="mb-1">05. Cipher</div>
<div style="${c.m}" class="ml-4 mb-2">AI assistant w/ persistent memory + QLoRA fine-tuning</div>
<div style="${c.g}" class="mb-1">06. create-sqlalchemy-app</div>
<div style="${c.m}" class="ml-4">Published PyPI CLI - scaffolds FastAPI projects</div>
</div></div>`,
    }),
  },
  experience: {
    description: "View my work experience",
    action: () => ({
      isHtml: true,
      output: `<div class="pt-3 pb-3">
<div style="${c.a}" class="mb-2">[EXPERIENCE]</div>
<div style="${c.c}" class="text-xs md:text-sm mb-1">Software Engineer</div>
<div style="${c.m}" class="text-xs md:text-sm leading-relaxed">
<span style="${c.g}">></span> Patent-pending IAM & graph systems (Go, Neo4j)<br/>
<span style="${c.g}">></span> Full-stack web & mobile development<br/>
<span style="${c.g}">></span> Python/HTMX/Jinja backends, .NET microservices<br/>
<span style="${c.g}">></span> AI/LLM integration & fine-tuning<br/>
<span style="${c.g}">></span> Docker, CI/CD, cloud infrastructure
</div></div>`,
    }),
  },
  contact: {
    description: "Get my contact information",
    action: () => ({
      isHtml: true,
      output: `<div class="pt-3 pb-3">
<div style="${c.a}" class="mb-2">[CONTACT]</div>
<table class="text-left text-xs md:text-sm">
  <tr><td style="${c.c}">Email</td><td style="${c.m}" class="pl-4">shawnastaff@gmail.com</td></tr>
  <tr><td style="${c.c}">GitHub</td><td style="${c.m}" class="pl-4">github.com/ShawnaRStaff</td></tr>
  <tr><td style="${c.c}">LinkedIn</td><td style="${c.m}" class="pl-4">linkedin.com/in/shawnastaff</td></tr>
</table></div>`,
    }),
  },
  clear: {
    description: "Clear the terminal screen",
    action: () => ({ clear: true, output: "" }),
  },
  unknown: {
    description: "Unknown command",
    action: (command) => ({
      isHtml: true,
      output: `<div class="pt-2 pb-2 text-xs md:text-sm">
<span style="color: #ff5555">Error: command not found: ${command}</span><br/>
<span style="${c.m}">Type 'help' for available commands</span>
</div>`,
    }),
  },
};