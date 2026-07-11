import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { team } from "../data/team";
import { games } from "../data/games";
import PortfolioModal from "./PortfolioModal";

interface Member {
  name: string;
  role: string;
  img: string;
  bio: string;
  github: string;
}

type Line =
  | { type: "text"; text: string; color?: string }
  | { type: "member"; member: Member };

const bootTexts = [
  "Inicializando sistema...",
  "Cargando módulo de equipo...",
  "Conexión establecida.",
];
const bootColors = ["text-blue-300", "text-blue-300", "text-blue-400"];

export default function TeamTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [bootLine, setBootLine] = useState(0);
  const lsCount = useRef(0);
  const [locked, setLocked] = useState(false);
  const [bootChars, setBootChars] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const booted = useRef(false);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;

    let lineIdx = 0;
    let charIdx = 0;

    const t = setInterval(() => {
      if (lineIdx >= bootTexts.length) {
        clearInterval(t);
        return;
      }

      const text = bootTexts[lineIdx];
      if (charIdx < text.length) {
        charIdx++;
        setBootChars(text.substring(0, charIdx));
      } else {
        setLines(prev => [...prev, { type: "text", text, color: bootColors[lineIdx] }]);
        lineIdx++;
        charIdx = 0;
        setBootLine(lineIdx);
        setBootChars("");
      }
    }, 30);

    return () => clearInterval(t);
  }, []);

  const focusInput = () => inputRef.current?.focus();

  const openMember = (member: Member) => {
    inputRef.current?.blur();
    setSelectedMember(member);
  };

  const addLine = (text: string, color?: string) => {
    setLines(prev => [...prev, { type: "text", text, color }]);
  };

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    addLine(`$ ${trimmed}`, "text-blue-400");

    if (trimmed === "ls" || trimmed === "list") {
      if (lsCount.current > 2) return;
      if (lsCount.current === 2) {
        lsCount.current++;
        setLocked(true);
        addLine(`✖ Comando agotado, curiosito -_-`, "text-red-400");
        return;
      }
      lsCount.current++;
      addLine(`total ${team.length}`, "text-muted");
      team.forEach((m, i) => {
        setTimeout(() => {
          setLines(prev => [...prev, { type: "member", member: m }]);
        }, i * 80);
      });
    } else if (trimmed === "help" || trimmed === "comandos") {
      addLine(`Comandos disponibles:`, "text-yellow-400");
      addLine(`  ls / list        → Ver equipo`, "text-blue-300/90");
      addLine(`  games / juegos   → Ver juegos disponibles`, "text-blue-300/90");
      addLine(`  game-[nombre]    → Abrir un juego`, "text-blue-300/90");
      addLine(`  clear            → Limpiar terminal`, "text-blue-300/90");
    } else if (trimmed === "games" || trimmed === "juegos") {
      const keys = Object.keys(games);
      if (keys.length === 0) {
        addLine(`No hay juegos configurados.`, "text-muted");
        return;
      }
      addLine(`Juegos disponibles:`, "text-yellow-400");
      keys.forEach((key) => {
        addLine(`  game-${key}  →  ${games[key].name}`, "text-blue-300/90");
      });
    } else if (trimmed.startsWith("game-")) {
      const gameKey = trimmed.slice(5);
      const game = games[gameKey];
      if (game) {
        addLine(`Abriendo ${game.name}...`, "text-green-400");
        setTimeout(() => window.open(game.url, "_blank"), 400);
      } else {
        addLine(`✖ Juego no encontrado: '${gameKey}'`, "text-red-400");
        addLine(`Escribe 'games' para ver los disponibles.`, "text-muted");
      }
    } else if (trimmed === "clear") {
      setLines([]);
    } else if (trimmed !== "") {
      addLine(`✖ Comando no encontrado: '${trimmed}'`, "text-red-400");
      addLine(`Escribe 'help' para ver los comandos.`, "text-muted");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  return (
    <>
      {selectedMember &&
        createPortal(
          <PortfolioModal
            isOpen={!!selectedMember}
            onClose={() => { setSelectedMember(null); }}
            name={selectedMember.name}
            role={selectedMember.role}
            img={selectedMember.img}
            bio={selectedMember.bio}
            github={selectedMember.github}
          />,
          document.body
        )}

      <div className="max-w-4xl mx-auto px-4" onClick={focusInput}>
        <div className="bg-[#0c0c0c] border border-border rounded-xl overflow-hidden shadow-2xl font-share">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-border">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-muted ml-2">team@sau-nuz:~/equipo</span>
          </div>

          <div className="p-5 min-h-[320px] max-h-[460px] overflow-y-auto text-sm leading-relaxed select-text">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-blue-400 mb-2 whitespace-pre leading-tight"
            >
{`╔═══════════════════════════════════════════════╗
║        SAUNUZ TEAM TERMINAL  v1.1           ║
║  'ls' equipo  ·  'games' juegos  ·  'help'  ║
╚═══════════════════════════════════════════════╝`}
            </motion.div>

            {bootLine < bootTexts.length && bootChars && (
              <div className={bootColors[bootLine]}>
                {bootChars}<span className="animate-pulse">▌</span>
              </div>
            )}

            <AnimatePresence mode="popLayout">
              {lines.map((line, i) =>
                line.type === "text" ? (
                  <motion.div
                    key={`text-${i}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={line.color || "text-blue-300/90"}
                  >
                    {line.text}
                  </motion.div>
                ) : (
                  <motion.div
                    key={`member-${line.member.name}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => { e.stopPropagation(); openMember(line.member); }}
                    className="text-blue-300/90 hover:text-cyan-300 cursor-pointer transition-colors"
                  >
                    <span className="text-muted">drwxr-x---  </span>
                    <span className="underline decoration-dotted underline-offset-2">
                      {line.member.name}
                    </span>
                    <span className="text-muted">
                      {" ".repeat(Math.max(1, 20 - line.member.name.length))}
                      {line.member.role}
                    </span>
                  </motion.div>
                )
              )}
            </AnimatePresence>

            <div className="flex items-center gap-2 mt-1.5">
              <span className={`shrink-0 ${locked ? "text-red-400" : "text-blue-400"}`}>
                {locked ? "✖" : "$"}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={locked}
                className="flex-1 bg-transparent border-none outline-none text-blue-300 font-share text-sm p-0 caret-blue-400 placeholder:text-muted-2 disabled:cursor-not-allowed"
                placeholder={locked ? "terminal bloqueada" : "escribe 'help' para ver comandos..."}
                spellCheck={false}
                autoComplete="off"
              />
              {!locked && <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse" />}
            </div>
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </>
  );
}
