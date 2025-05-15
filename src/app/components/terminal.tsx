import { useEffect, useRef, useState } from "react";

interface HistoryItem {
  type: "system" | "command" | "output";
  content: string;
  isHtml?: boolean;
}

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

export default function Terminal(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "system",
      content: `Welcome to Shawna Staff's portfolio terminal!
Type 'help' to see available commands.`,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const COMMANDS: CommandsType = {
    help: {
      description: "Display available commands",
      action: () => ({
        isHtml: true,
        output: `<pre class="pb-2 pt-5">Available commands:</pre>
        <div class="flex w-full pb-5 pl-4">
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
<div class="flex w-full pb-5 pl-4">
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
<div class="flex w-full pb-5 pl-4">
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
<div class="flex w-full pb-5 pl-4">
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
<div class="flex w-full pb-5 pl-4">
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
<div class="flex w-full pb-5 pl-4">
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
        output: `<pre class="pt-5 text-red-400 pl-4">Command not found: ${command}</pre>
<pre class="pb-5 pl-4">Type 'help' to see available commands.</pre>`,
      }),
    },
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string): void => {
    const [command, ...args] = cmd.trim().split(" ");
    const commandArgs = args.join(" ");

    setHistory((prev) => [
      ...prev,
      { type: "command", content: `visitor@portfolio:~$ ${cmd}` },
    ]);

    const commandObj = COMMANDS[command.toLowerCase()] || COMMANDS.unknown;
    const result = commandObj.action(commandArgs);

    if (result.clear) {
      setHistory([]);
      return;
    }

    if (result.output) {
      setHistory((prev) => [
        ...prev,
        { 
          type: "output", 
          content: result.output,
          isHtml: result.isHtml 
        },
      ]);
    }

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!input.trim()) return;

    executeCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
      if (newIndex >= 0 && commandHistory.length > 0) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.max(-1, historyIndex - 1);
      setHistoryIndex(newIndex);
      if (newIndex >= 0) {
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion
      const partialCommand = input.toLowerCase();
      if (partialCommand) {
        const matches = Object.keys(COMMANDS).filter(
          (cmd) => cmd !== "unknown" && cmd.startsWith(partialCommand)
        );
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          // Show completions
          setHistory((prev) => [
            ...prev,
            { type: "command", content: `visitor@portfolio:~$ ${input}` },
            { 
              type: "output", 
              isHtml: true,
              content: `<pre class="pt-5 pb-5 pl-4">Available completions: ${matches.join("  ")}</pre>` 
            },
          ]);
        }
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-md overflow-hidden border border-purple-800 shadow-lg shadow-purple-500/20">
      {/* Terminal Header */}
      <div className="flex items-center bg-gray-900 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-gray-400 text-sm font-mono">
          terminal@shawnastaff.dev
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="bg-gray-900 p-4 h-60 md:h-80 overflow-y-auto font-mono text-sm"
      >
        <div className="w-full">
          {history.map((item, index) => (
            <div
              key={index}
              className={`${
                item.type === "command"
                  ? "text-purple-400"
                  : item.type === "system"
                  ? "text-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {item.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                <div className="whitespace-pre-wrap">{item.content}</div>
              )}
            </div>
          ))}

          {/* Command Input Line */}
          <div className="flex text-purple-400 pt-5">
            <div>visitor@portfolio:~$</div>
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none border-none w-full ml-2 text-purple-400 font-mono"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="bg-gray-900 px-4 py-2 flex justify-between items-center border-t border-purple-800">
        <div className="text-xs text-gray-500 font-mono">
          Tab: autocomplete | ↑↓: history
        </div>
      </div>
    </div>
  );
}