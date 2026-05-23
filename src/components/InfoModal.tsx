import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export default function InfoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("infoVisto")) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("infoVisto", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="button"
          tabIndex={0}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <motion.div
            className="relative w-[92vw] max-w-2xl max-h-[90vh] overflow-y-auto bg-black/40 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-zinc-800"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-blue-500 hover:text-blue-300 z-10 transition"
            >
              <X size={28} />
            </button>

            <motion.div
              className="text-center py-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <img src="/img/nuz (2).jpg" alt="Info" className="w-40 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-blue-500 mb-4"> ¡Hola! <cite>Finder</cite></h2>
              <p className="text-zinc-300 mb-4">
                Puedes explorar nuestras secciones de herramientas de programación, utilidades de Windows y mucho más. Ten en 
                cuenta que estos juegos han sido probados y testeados por Nuz, garantizando su seguridad y funcionamiento.
              </p>
              <p className="text-zinc-300 mb-4">
                Si encuentras algún problema o tienes sugerencias, no dudes en contactarnos.
              </p>
              <p className="text-yellow-500 text-sm mb-6">
                OJO! Visita regularmente para ver nuevos contenidos.
              </p>
              <motion.button
                onClick={() => setOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Gracias Nuz
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
