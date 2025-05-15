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
        output: `<pre>Available commands:
    help        Display this help message
    about       Learn about Shawna       
    skills      View my technical skills 
          projects    Browse my portfolio projects   
    experience  View my work experience  
     contact     Get my contact information
    clear       Clear the terminal screen</pre>`,
      }),
    },
    about: {
      description: "Learn about me",
      action: () => ({
        isHtml: true,
        output: `<pre>
Hi, I'm Shawna Staff! 👋

I'm a software engineer with experience in:
- Full-stack web development
           - Mobile app development (React Native)
- Python backend services   
- .NET microservices        
  - Data processing & automation
</pre>`,
      }),
    },
    skills: {
      description: "View my technical skills",
      action: () => ({
        isHtml: true,
        output: `<pre>
Technical Skills:
-----------------
Languages: TypeScript, JavaScript, Python, C#
   Frontend: React, React Native, NextJS, HTMX, CSS
Backend: FastAPI, .NET, Node.js              
Database: PostgreSQL, SQL, MongoDB, Firebase 
Tools: Git, Docker, CI/CD                    
</pre>`,
      }),
    },
    projects: {
      description: "Browse my portfolio projects",
      action: () => ({
        isHtml: true,
        output: `<pre>
Featured Projects:
-----------------
1. Python Setup App - SQLAlchemy-FastAPI-PostgreSQL project template
   2. Personal Budgeting App - React Native financial tracking application
3. CSV Cleaner - Python tool for data processing                    
</pre>`,
      }),
    },
    experience: {
      description: "View my work experience",
      action: () => ({
        isHtml: true,
        output: `<pre>
Work Experience:
--------------
Software Engineer - Present
- Developing full-stack applications
- Working with React, TypeScript, Python, and more
- Implementing CI/CD pipelines and DevOps practices
</pre>`,
      }),
    },
    contact: {
      description: "Get my contact information",
      action: () => ({
        isHtml: true,
        output: `<pre>
Contact Information:
------------------
Email: shawnastaff@gmail.com
GitHub: https://github.com/ShawnaRStaff
LinkedIn: https://www.linkedin.com/in/shawnastaff/
</pre>`,
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
      const partialCommand = input.toLowerCase();
      if (partialCommand) {
        const matches = Object.keys(COMMANDS).filter(
          (cmd) => cmd !== "unknown" && cmd.startsWith(partialCommand)
        );
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
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
        className="bg-gray-900 p-4 h-60 md:h-80 overflow-y-auto font-mono text-sm flex justify-center"
      >
        <div className="w-full max-w-lg">
          <div className="my-10">
            {history.map((item, index) => (
              <div
                key={index}
                className={`mb-1 ${
                  item.type === "command"
                    ? "text-purple-400 whitespace-pre"
                    : item.type === "system"
                    ? "text-cyan-400 whitespace-pre"
                    : "text-gray-300"
                }`}
              >
                {item.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                ) : (
                  item.content
                )}
              </div>
            ))}
          </div>

          {/*Command Line */}
          <div className="flex items-center text-purple-400 mt-1 pb-10">
            <span className="flex-shrink-0">visitor@portfolio:~$</span>
            <form onSubmit={handleSubmit} className="flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none border-none w-full ml-2 text-purple-400 font-mono leading-normal py-0"
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