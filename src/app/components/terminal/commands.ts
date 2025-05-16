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
  

export const COMMANDS: CommandsType = {
    help: {
      description: "Display available commands",
      action: () => ({
        isHtml: true,
        output: `<pre class="pb-2 pt-5">Available commands:</pre>
        <div class="flex w-full pb-5 pl-0 md:pl-25">
          <table class="text-left">
            <tr><td><pre>help</pre></td><td><pre class="pl-10">Display this help message</pre></td></tr>
            <tr><td><pre>about</pre></td><td><pre class="pl-10">Learn about me</pre></td></tr>
            <tr><td><pre>skills</pre></td><td><pre class="pl-10">View my technical skills</pre></td></tr>
            <tr><td><pre>projects</pre></td><td><pre class="pl-10">Browse my portfolio projects</pre></td></tr>
            <tr><td><pre>experience</pre></td><td><pre class="pl-10">View my work experience</pre></td></tr>
            <tr><td><pre>contact</pre></td><td><pre class="pl-10">Get my contact information</pre></td></tr>
            <tr><td><pre>clear</pre></td><td><pre class="pl-10">Clear the terminal screen</pre></td></tr>
          </table>
        </div>`,
      }),
    },
    about: {
      description: "Learn about me",
      action: () => ({
        isHtml: true,
        output: `<pre class="pt-5 text-cyan-400 font-bold">Hi, I'm Shawna Staff! 👋</pre>
<pre class="pb-2">I'm a software engineer with experience in:</pre>
<div class="flex w-full pb-5 pl-0 md:pl-25">
  <table class="text-left">
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Full-stack web development</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Mobile app development (React Native)</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Python backend services</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">.NET microservices</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Data processing & automation</pre></td></tr>
  </table>
</div>`,
        }),
      },
    skills: {
      description: "View my technical skills",
      action: () => ({
        isHtml: true,
        output: `<pre class="pb-2 pt-5">Technical Skills:</pre>
<div class="flex w-full pb-5 pl-0 md:pl-25">
  <table class="text-left">
    <tr><td><pre>Languages</pre></td><td><pre class="pl-10">TypeScript, JavaScript, Python, C#</pre></td></tr>
    <tr><td><pre>Frontend</pre></td><td><pre class="pl-10">React, React Native, NextJS, HTMX, CSS</pre></td></tr>
    <tr><td><pre>Backend</pre></td><td><pre class="pl-10">FastAPI, .NET, Node.js</pre></td></tr>
    <tr><td><pre>Database</pre></td><td><pre class="pl-10">PostgreSQL, SQL, MongoDB, Firebase</pre></td></tr>
    <tr><td><pre>Tools</pre></td><td><pre class="pl-10">Git, Docker, CI/CD</pre></td></tr>
  </table>
</div>`,
      }),
    },
    projects: {
      description: "Browse my portfolio projects",
      action: () => ({
        isHtml: true,
        output: `<pre class="pb-2 pt-5">Projects:</pre>
<div class="flex w-full pb-5 pl-0 md:pl-25">
  <table class="text-left">
    <tr><td><pre>1. Python Setup App</pre></td><td><pre class="pl-5">SQLAlchemy-FastAPI-PostgreSQL project template</pre></td></tr>
    <tr><td><pre>   Technologies</pre></td><td><pre class="pl-5">Python, FastAPI, PostgreSQL</pre></td></tr>
    <tr><td><pre>   GitHub</pre></td><td><pre class="pl-5">github.com/ShawnaRStaff/python_setup_app</pre></td></tr>
    <tr><td></td><td></td></tr>
    <tr><td><pre>2. Budgeting App</pre></td><td><pre class="pl-5">React Native financial tracking application</pre></td></tr>
    <tr><td><pre>   Technologies</pre></td><td><pre class="pl-5">React Native, TypeScript, Firebase</pre></td></tr>
    <tr><td><pre>   GitHub</pre></td><td><pre class="pl-5">github.com/ShawnaRStaff/personal-budgeting-app</pre></td></tr>
    <tr><td></td><td></td></tr>
    <tr><td><pre>3. CSV Cleaner</pre></td><td><pre class="pl-5">Python tool for data processing</pre></td></tr>
    <tr><td><pre>   Technologies</pre></td><td><pre class="pl-5">Python, Pandas</pre></td></tr>
    <tr><td><pre>   GitHub</pre></td><td><pre class="pl-5">github.com/ShawnaRStaff/csv-cleaner</pre></td></tr>
  </table>
</div>`,
      }),
    },
    experience: {
      description: "View my work experience",
      action: () => ({
        isHtml: true,
        output: `<pre class="pt-5">Work Experience:</pre>
<pre class="pb-2">Software Engineer - Present</pre>
<div class="flex w-full pb-5 pl-0 md:pl-25">
  <table class="text-left">
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Developing full-stack applications</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Working with React, TypeScript, Python</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Implementing CI/CD pipelines</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Building RESTful APIs and microservices</pre></td></tr>
    <tr><td><pre>-</pre></td><td><pre class="pl-2">Optimizing database performance</pre></td></tr>
  </table>
</div>`,
      }),
    },
    contact: {
      description: "Get my contact information",
      action: () => ({
        isHtml: true,
        output: `<pre class="pb-2 pt-5">Contact Information:</pre>
<div class="flex w-full pb-5 pl-0 md:pl-25">
  <table class="text-left">
    <tr><td><pre>Email</pre></td><td><pre class="pl-10">shawnastaff@gmail.com</pre></td></tr>
    <tr><td><pre>GitHub</pre></td><td><pre class="pl-10">github.com/ShawnaRStaff</pre></td></tr>
    <tr><td><pre>LinkedIn</pre></td><td><pre class="pl-10">linkedin.com/in/shawnastaff</pre></td></tr>
  </table>
</div>`,
      }),
    },
    clear: {
      description: "Clear the terminal screen",
      action: () => ({
        clear: true,
        output: "",
      }),
    },
    unknown: {
      description: "Unknown command",
      action: (command) => ({
        isHtml: true,
        output: `<pre class="pt-5 text-red-400 pl-0 md:pl-25">Command not found: ${command}</pre>
<pre class="pb-5 pl-0 md:pl-25">Type 'help' to see available commands.</pre>`,
      }),
    },
  };