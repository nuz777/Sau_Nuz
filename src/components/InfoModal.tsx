import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { messages, type InfoMessage } from "../data/messages";

interface InfoModalProps {
  messageId: string | null;
  onClose: () => void;
}

function playAudio(src: string) {
  const audio = new Audio(src);
  audio.volume = 0.5;
  const promise = audio.play();
  if (promise) {
    promise.catch(() => {
      const handler = () => {
        audio.play();
        document.removeEventListener("click", handler);
        document.removeEventListener("touchstart", handler);
        document.removeEventListener("keydown", handler);
      };
      document.addEventListener("click", handler, { once: true });
      document.addEventListener("touchstart", handler, { once: true });
      document.addEventListener("keydown", handler, { once: true });
    });
  }
  return audio;
}

export default function InfoModal({ messageId, onClose }: InfoModalProps) {
  const [showBubble, setShowBubble] = useState(false);
  const lastConfig = useRef<InfoMessage | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (messageId) {
    lastConfig.current = messages[messageId] as InfoMessage | null;
  }

  const config = lastConfig.current;

  useEffect(() => {
    if (messageId) {
      const msg = messages[messageId] as InfoMessage | undefined;
      const t = setTimeout(() => {
        setShowBubble(true);
        if (msg?.audio) {
          audioRef.current = playAudio(msg.audio);
        }
      }, 300);
      const autoClose = setTimeout(() => {
        onClose();
      }, 21300);
      return () => {
        clearTimeout(t);
        clearTimeout(autoClose);
        audioRef.current?.pause();
        audioRef.current = null;
      };
    }
    setShowBubble(false);
  }, [messageId]);

  if (!config) return null;

  return (
    <AnimatePresence>
      {messageId && (
        <motion.div
          className={`fixed z-50 max-w-sm ${
            config.position === "top-right" ? "top-[69%] right-6" : "bottom-6 right-6"
          }`}
          initial={{ opacity: 0, x: 100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 22, mass: 0.8 }}
        >
          <AnimatePresence>
            {showBubble && (
              <motion.div
                className="relative bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-3 pr-12 shadow-2xl border border-zinc-900"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.7 }}
              >
                <motion.img
                  src={config.image}
                  alt={config.imageAlt}
                  className="absolute -top-13 -right-3 w-20 h-20 rounded-full object-cover shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 18 }}
                />

                <h3 className="text-blue-400 font-bold text-xs mb-1">{config.title}</h3>
                <p className="text-zinc-300 text-xs leading-relaxed mb-2">{config.message}</p>
                {config.footnote && (
                  <p className="text-zinc-500 text-[11px] mb-2">{config.footnote}</p>
                )}
                {config.warning && (
                  <p className="text-yellow-500 text-[11px] mb-2">{config.warning}</p>
                )}
                <motion.button
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium px-3 py-1 rounded-lg transition w-full cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {config.buttonText}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
