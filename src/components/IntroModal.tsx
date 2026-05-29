import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function IntroModal() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("introVisto")) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("introVisto", "true");
        setTimeout(() => setShowBubble(true), 300);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-[69%] right-6 z-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <AnimatePresence>
            {showBubble && (
              <motion.div
                className="relative bg-zinc-900/95 backdrop-blur-xl rounded-2xl rounded-br-100000 p-3 pr-12 shadow-2xl border border-zinc-900"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <motion.img
                 src="/img/Nuz.png"
                  alt="Welcome"
                  className="absolute -top-13 -right-3 w-20 h-20 rounded-full object-cover   shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                />

                <h3 className="text-blue-400 font-bold text-xs mb-1">SN-Tools</h3>
                <p className="text-zinc-300 text-xs leading-relaxed mb-2">
                  ¡Bienvenido! Aquí puedes descargar tools & games gratis. Recuerda leer el manual =]
                </p>
                <p className="text-yellow-500 text-[11px] mb-2">
                  ⚠️ Proyecto en fase alpha, es normal ver errores.
                </p>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium px-3 py-1 rounded-lg transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Entendido
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
