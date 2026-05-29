import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export default function InfoModal() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("infoVisto")) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("infoVisto", "true");
        setTimeout(() => setShowBubble(true), 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 max-w-sm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <AnimatePresence>
            {showBubble && (
              <motion.div
                className="relative bg-zinc-900/95 backdrop-blur-xl rounded-2xl rounded-br-sm p-4 pr-14 shadow-2xl border border-zinc-700"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <motion.img
                  src="/img/nuz (2).jpg"
                  alt="Info"
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                />

                <h3 className="text-blue-400 font-bold text-sm mb-1">¡Hola! <cite className="not-italic">Finder</cite></h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                  Puedes explorar herramientas de programación, utilidades de Windows y más. Todos los juegos han sido probados por Nuz, garantizando su seguridad.
                </p>
                <p className="text-zinc-400 text-xs mb-2">
                  ¿Problemas o sugerencias? No dudes en contactarnos.
                </p>
                <p className="text-yellow-500 text-xs mb-3">
                  ¡OJO! Visita regularmente para ver nuevos contenidos.
                </p>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-1.5 rounded-lg transition w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Gracias Nuz
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
