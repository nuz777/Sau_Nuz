import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  img: string;
  bio: string;
  github: string;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

function TypingEffect({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    const startTimer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, delay]);

  return (
    <p className="text-zinc-300 text-sm md:text-lg leading-relaxed">
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </p>
  );
}

export default function PortfolioModal({
  isOpen,
  onClose,
  name,
  role,
  img,
  bio,
  github,
}: PortfolioModalProps) {
  const isMobile = useIsMobile();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay backdrop-blur-sm"
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={isMobile ? undefined : { opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
          }}
          role="button"
          tabIndex={0}
        >
          <motion.div
            className="relative w-[92vw] max-w-4xl max-h-[90vh] overflow-y-auto bg-surface/40 backdrop-blur-lg p-4 md:p-8 rounded-2xl shadow-2xl border border-border"
            initial={isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? undefined : { opacity: 0, scale: 0.8, y: 20 }}
            transition={isMobile ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 22, mass: 0.8 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white hover:text-blue-300 z-10 transition"
            >
              <X size={30} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={isMobile ? { duration: 0 } : { type: "spring", stiffness: 180, damping: 20, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={isMobile ? { duration: 0 } : { type: "spring", stiffness: 180, damping: 20, delay: 0.3 }}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{name}</h2>
                  <p className="text-lg md:text-xl text-zinc-400 font-semibold">{role}</p>
                </div>

                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />

                <TypingEffect text={bio} delay={isMobile ? 0 : 500} />

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 md:mt-6 px-5 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-lg font-semibold transition-all text-sm md:text-base"
                >
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Ver GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
