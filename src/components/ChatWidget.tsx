import { useState, useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FlowNode {
  bot: string;
  options: { label: string; next: string }[];
}

const flows: Record<string, FlowNode> = {
  start: {
    bot: "Hola, bienvenido a Saunuz. ¿En qué te puedo ayudar?",
    options: [
      { label: "Juegos de PC", next: "pc" },
      { label: "Juegos de Android", next: "android" },
      { label: "Herramientas gratis", next: "tools" },
      { label: "Otro / Reportar problema", next: "other" },
    ],
  },
  pc: {
    bot: "Genial, tenemos juegos de PC para todos los gustos. ¿Qué necesitas?",
    options: [
      { label: "¿Cómo descargo un juego?", next: "pc_download" },
      { label: "El juego no me abre", next: "pc_error" },
      { label: "¿Qué requisitos necesito?", next: "pc_req" },
    ],
  },
  android: {
    bot: "Tenemos juegos Android gratis. ¿En qué te ayudo?",
    options: [
      { label: "¿Cómo instalo el APK?", next: "apk_install" },
      { label: "El APK me da error", next: "apk_error" },
      { label: "¿Es seguro instalar?", next: "apk_safe" },
    ],
  },
  tools: {
    bot: "Nuestras herramientas son 100% gratis. ¿Cuál es tu duda?",
    options: [
      { label: "¿Cómo uso una herramienta?", next: "tools_how" },
      { label: "Una herramienta no funciona", next: "tools_error" },
      { label: "¿Tienen app móvil?", next: "tools_app" },
    ],
  },
  other: {
    bot: "Entendido. ¿Qué quieres hacer?",
    options: [
      { label: "Reportar un link caído", next: "report_link" },
      { label: "Sugerir un juego o herramienta", next: "suggest" },
      { label: "Otro problema", next: "contact" },
    ],
  },
  pc_download: {
    bot: "Para descargar un juego de PC: haz clic en el botón de descarga de la página del juego. Si hay varios links, prueba el primero. La descarga viene en .zip o .rar, necesitas WinRAR o 7-Zip para extraerla. ¡Listo para jugar!",
    options: [],
  },
  pc_error: {
    bot: "Si el juego no abre, intenta ejecutarlo como administrador. También asegúrate de tener instalado Visual C++ Redistributable y DirectX, los links están en la página del juego. A veces el antivirus bloquea los ejecutables, puedes desactivarlo temporalmente y probar de nuevo.",
    options: [],
  },
  pc_req: {
    bot: "Los requisitos mínimos están en la página de cada juego, justo debajo del título. Si tu PC tiene menos de 4GB de RAM y GPU integrada, busca juegos con la etiqueta 'bajo rendimiento'.",
    options: [],
  },
  apk_install: {
    bot: "Para instalar un APK, primero descarga el archivo desde Saunuz. Luego ve a Ajustes > Seguridad y activa la opción 'Fuentes desconocidas'. Por último abre el APK descargado y toca Instalar. Así de fácil.",
    options: [],
  },
  apk_error: {
    bot: "Si el APK da error: verifica que tengas espacio suficiente, que la versión de Android sea compatible (indicada en la página) y que hayas activado 'Fuentes desconocidas'. Si persiste, prueba otro link de descarga.",
    options: [],
  },
  apk_safe: {
    bot: "Todos los APKs de Saunuz son verificados manualmente antes de publicarse. Aun así, te recomendamos tener Malwarebytes en tu Android. ¡Jugamos limpio!",
    options: [],
  },
  tools_how: {
    bot: "Cada herramienta tiene una guía rápida justo debajo del título. También puedes ver el video tutorial si está disponible. Si aún tienes dudas, escríbenos por el formulario de contacto.",
    options: [],
  },
  tools_error: {
    bot: "Si una herramienta no funciona, prueba recargando la página. También asegúrate de estar usando Chrome o Firefox. A veces los bloqueadores de anuncios interfieren, puedes desactivarlos. Si el problema sigue, repórtalo para revisarlo.",
    options: [],
  },
  tools_app: {
    bot: "Por ahora no tenemos app móvil oficial, pero la web de Saunuz está optimizada para móviles. Puedes añadirla a tu pantalla de inicio como si fuera una app.",
    options: [],
  },
  report_link: {
    bot: "Gracias por avisar. Usa el formulario de contacto en la página del juego o herramienta y lo revisamos en menos de 24 horas.",
    options: [],
  },
  suggest: {
    bot: "Nos encanta recibir sugerencias. Envíanos el nombre del juego o herramienta que quieres ver en Saunuz por el formulario de contacto y lo evaluamos.",
    options: [],
  },
  contact: {
    bot: "Para cualquier otro problema, contáctanos desde el formulario de contacto en saunuz.com. Respondemos en menos de 48 horas.",
    options: [],
  },
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [nodeId, setNodeId] = useState("start");
  const [, setHistory] = useState<string[]>([]);
  const [userLabel, setUserLabel] = useState<string | null>(null);
  const [botText, setBotText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const msgsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const scrollDown = useCallback(() => {
    requestAnimationFrame(() => {
      if (msgsRef.current)
        msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => { scrollDown(); }, [botText, showTyping, showOptions, userLabel]);

  const cleanup = useCallback(() => {
    if (intervalRef.current != null) clearInterval(intervalRef.current);
    if (timeoutRef.current != null) clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    timeoutRef.current = null;
  }, []);

  useEffect(() => cleanup, [cleanup]);

  const startBotTyping = useCallback((text: string) => {
    if (!mountedRef.current) return;
    setShowTyping(false);
    setBotText("");
    setShowOptions(false);

    if (!text) {
      setShowOptions(true);
      return;
    }

    let idx = 0;
    intervalRef.current = setInterval(() => {
      if (!mountedRef.current) {
        if (intervalRef.current != null) clearInterval(intervalRef.current);
        return;
      }
      idx++;
      if (idx >= text.length) {
        if (intervalRef.current != null) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setBotText(text);
        setShowOptions(true);
      } else {
        setBotText(text.slice(0, idx + 1));
      }
    }, 25);
  }, []);

  const goToNode = useCallback((id: string, userLabelVal?: string) => {
    cleanup();
    const nodeData = flows[id];
    if (!nodeData) return;

    setUserLabel(userLabelVal ?? null);
    setShowTyping(true);
    setShowOptions(false);
    setBotText("");
    setNodeId(id);

    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) {
        startBotTyping(nodeData.bot);
      }
    }, 600 + Math.random() * 600);
  }, [cleanup, startBotTyping]);

  const handleOption = (label: string, next: string) => {
    setHistory((prev) => [...prev, label]);
    setShowOptions(false);
    goToNode(next, label);
  };

  const handleBack = () => {
    cleanup();
    setHistory([]);
    setShowOptions(false);
    goToNode("start");
  };

  const toggleOpen = () => {
    if (open) {
      cleanup();
      setOpen(false);
    } else {
      setHistory([]);
      setNodeId("start");
      setUserLabel(null);
      setBotText("");
      setShowTyping(false);
      setShowOptions(false);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => goToNode("start"), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  const nodeData = flows[nodeId];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-[400px] origin-bottom-right"
          >
            <div className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden max-h-[560px]">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 shrink-0">
                <img
                  src="/agent.webp"
                  alt="Saunuz Bot"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white">Saunuz Bot</div>
                  <div className="text-[11px] text-zinc-500">Respuesta inmediata</div>
                </div>
                <button
                  onClick={toggleOpen}
                  className="shrink-0 p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div
                ref={msgsRef}
                className="flex-1 overflow-y-auto px-4 py-3 space-y-2 min-h-[280px] max-h-[420px] scrollbar-thin scrollbar-thumb-zinc-700"
              >
                {userLabel && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[88%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl rounded-br-sm bg-sky-600 text-white">
                      {userLabel}
                    </div>
                  </motion.div>
                )}

                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex justify-start"
                  >
                    <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-zinc-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0s" }} />
                      <span className="w-2 h-2 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                      <span className="w-2 h-2 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </motion.div>
                )}

                {botText && (
                  <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[88%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl rounded-bl-sm bg-zinc-800 text-zinc-200">
                      {botText}
                    </div>
                  </motion.div>
                )}

                {showOptions && nodeData && nodeData.options.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, staggerChildren: 0.05 }}
                    className="flex flex-col gap-1.5 pt-1"
                  >
                    {nodeData.options.map((opt) => (
                      <motion.button
                        key={opt.next}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOption(opt.label, opt.next)}
                        className="w-full text-left px-3.5 py-2.5 text-sm text-zinc-400 bg-transparent border border-zinc-700 rounded-lg transition-colors hover:border-sky-500 hover:text-zinc-100 hover:bg-sky-500/10"
                      >
                        {opt.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {showOptions && nodeId !== "start" && (
                  <button
                    onClick={handleBack}
                    className="block text-xs text-zinc-600 hover:text-zinc-400 transition-colors pt-1 pb-0.5"
                  >
                    ← Volver al inicio
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1.5">
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative px-3 py-1.5 text-xs text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-xl rounded-br-sm shadow-lg whitespace-nowrap"
          >
            ¿Necesitas ayuda?
            <div className="absolute -bottom-[5px] right-3 w-2.5 h-2.5 bg-zinc-800 border-r border-b border-zinc-700 rotate-45" />
          </motion.div>
        )}
        <motion.button
          onClick={toggleOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={{ boxShadow: ["0 0 0 0 rgba(14,165,233,0.3)", "0 0 0 12px rgba(14,165,233,0)", "0 0 0 0 rgba(14,165,233,0)"] }}
          transition={{ boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }, scale: { type: "spring", stiffness: 400, damping: 15 } }}
          className="w-14 h-14 rounded-full shadow-lg overflow-hidden ring-2 ring-sky-500/60"
        >
          <img
            src="/agent.webp"
            alt="Saunuz Bot"
            className="w-full h-full object-cover"
          />
        </motion.button>
      </div>
    </>
  );
}
