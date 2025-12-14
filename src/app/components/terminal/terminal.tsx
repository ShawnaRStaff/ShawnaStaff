import { useEffect, useRef, useState } from "react";
import { COMMANDS } from "./commands";

interface HistoryItem {
  type: "system" | "command" | "output";
  content: string;
  isHtml?: boolean;
}

export default function Terminal(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "system", content: "[SYSTEM] Welcome to Shawna Staff's portfolio terminal" },
    { type: "system", content: "[SYSTEM] Type 'help' to see available commands" },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  const executeCommand = (cmd: string): void => {
    const [command, ...args] = cmd.trim().split(" ");
    const commandArgs = args.join(" ");
    setHistory((prev) => [...prev, { type: "command", content: `visitor@portfolio:~$ ${cmd}` }]);
    const commandObj = COMMANDS[command.toLowerCase()] || COMMANDS.unknown;
    const result = commandObj.action(commandArgs);
    if (result.clear) {
      setHistory([]);
      return;
    }
    if (result.output) {
      setHistory((prev) => [...prev, { type: "output", content: result.output, isHtml: result.isHtml }]);
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
      setInput(newIndex >= 0 ? commandHistory[commandHistory.length - 1 - newIndex] : "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partialCommand = input.toLowerCase();
      if (partialCommand) {
        const matches = Object.keys(COMMANDS).filter((cmd) => cmd !== "unknown" && cmd.startsWith(partialCommand));
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          setHistory((prev) => [
            ...prev,
            { type: "command", content: `visitor@portfolio:~$ ${input}` },
            { type: "output", isHtml: true, content: `<pre class="pt-3 pb-3 text-[var(--color-amber)]">Completions: ${matches.join("  ")}</pre>` },
          ]);
        }
      }
    }
  };

  return (
    <div className="terminal-window w-full max-w-3xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="ml-4 text-[var(--color-text-muted)] text-xs md:text-sm">terminal@shawnastaff.dev</span>
      </div>

      <div ref={terminalRef} className="p-3 md:p-4 h-52 md:h-72 overflow-y-auto text-xs md:text-sm text-left" onClick={() => inputRef.current?.focus()}>
        <div className="w-full flex flex-col items-start">
          {history.map((item, index) => (
            <div
              key={index}
              className={`w-full ${
                item.type === "command"
                  ? "text-[var(--color-terminal)] text-glow-subtle"
                  : item.type === "system"
                  ? "text-[var(--color-cyan)]"
                  : "text-[var(--color-text)]"
              }`}
            >
              {item.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                <div className="whitespace-pre-wrap">{item.content}</div>
              )}
            </div>
          ))}

          <div className="flex w-full text-[var(--color-terminal)] pt-3">
            <span className="text-[var(--color-amber)]">visitor</span>
            <span className="text-[var(--color-text-muted)]">@</span>
            <span className="text-[var(--color-cyan)]">portfolio</span>
            <span className="text-[var(--color-text-muted)]">:~$</span>
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none border-none w-full ml-2 text-[var(--color-terminal)] caret-[var(--color-terminal)]"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
            </form>
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] px-3 md:px-4 py-2 flex justify-between items-center">
        <span className="text-[10px] md:text-xs text-[var(--color-text-muted)]">Tab: autocomplete | ↑↓: history</span>
        <span className="text-[10px] md:text-xs text-[var(--color-terminal-dim)]">zsh</span>
      </div>
    </div>
  );
}