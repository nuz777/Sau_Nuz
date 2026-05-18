import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function IntroModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("introVisto")) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("introVisto", "true");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div className="text-center py-4">
        <img src="/img/pngegg.webp" alt="Welcome" className="w-48 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-white mb-4">Bienvenido ^w^</h2>
        <p className="text-zinc-400 mb-2">
          Aquí puedes descargar juegos gratis. Haz clic en cualquier tarjeta para ver detalles y
          descargar. Recuerda leer el manual =]
        </p>
        <p className="text-yellow-500 text-sm mb-6">
          ⚠️ Este proyecto sigue en fase alpha, paciencia por fis.
        </p>
        <button
          onClick={() => setOpen(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Entendido
        </button>
      </div>
    </Modal>
  );
}
