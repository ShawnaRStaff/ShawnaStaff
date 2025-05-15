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
        output: `<pre class="py-2">Available commands:</pre>
        <div class="flex justify-center w-full ml-5">
          <table class="text-left">
            <tr><td class=""><pre>help</pre></td><td><pre class="pl-10">Display this help message</pre></td></tr>
            <tr><td class=""><pre>about</pre></td><td><pre class="pl-10">Learn about me</pre></td></tr>
            <tr><td class=""><pre>skills</pre></td><td><pre class="pl-10">View my technical skills</pre></td></tr>
            <tr><td class=""><pre>projects</pre></td><td><pre class="pl-10">Browse my portfolio projects</pre></td></tr>
            <tr><td class=""><pre>experience</pre></td><td><pre class="pl-10">View my work experience</pre></td></tr>
            <tr><td class=""><pre>contact</pre></td><td><pre class="pl-10">Get my contact information</pre></td></tr>
            <tr><td class=""><pre>clear</pre></td><td><pre class="pl-10">Clear the terminal screen</pre></td></tr>
          </table>
        </div>`,
      }),
    },
    about: {
      description: "Learn about me",
      action: () => ({
        isHtml: true,
        output: `<div class="flex justify-center w-full">
<pre>
Hi, I'm Shawna Staff! 👋

I'm a software engineer with experience in:
- Full-stack web development
- Mobile app development (React Native)
- Python backend services
- .NET microservices
- Data processing & automation
</pre>
</div>`,
      }),
    },
    skills: {
      description: "View my technical skills",
      action: () => ({
        isHtml: true,
        output: `<div class="flex justify-center w-full">
<pre>
Technical Skills:
-----------------
Languages: TypeScript, JavaScript, Python, C#
Frontend:  React, React Native, NextJS, HTMX, CSS
Backend:   FastAPI, .NET, Node.js
Database:  PostgreSQL, SQL, MongoDB, Firebase
Tools:     Git, Docker, CI/CD
</pre>
</div>`,
      }),
    },
    projects: {
      description: "Browse my portfolio projects",
      action: () => ({
        isHtml: true,
        output: `<div class="flex justify-center w-full">
<pre>
Featured Projects:
-----------------
1. Python Setup App - SQLAlchemy-FastAPI-PostgreSQL project template
2. Personal Budgeting App - React Native financial tracking application
3. CSV Cleaner - Python tool for data processing
</pre>
</div>`,
      }),
    },
    experience: {
      description: "View my work experience",
      action: () => ({
        isHtml: true,
        output: `<div class="flex justify-center w-full">
<pre>
Work Experience:
--------------
Software Engineer - Present
- Developing full-stack applications
- Working with React, TypeScript, Python, and more
- Implementing CI/CD pipelines and DevOps practices
</pre>
</div>`,
      }),
    },
    contact: {
      description: "Get my contact information",
      action: () => ({
        isHtml: true,
        output: `<div class="flex justify-center w-full">
<pre>
Contact Information:
------------------
Email:    shawnastaff@gmail.com
GitHub:   https://github.com/ShawnaRStaff
LinkedIn: https://www.linkedin.com/in/shawnastaff/
</pre>
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
        output: `Command not found: ${command}\nType 'help' to see available commands.`,
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
            { type: "output", content: matches.join("  ") },
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
          <div className="flex text-purple-400 pb-10">
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