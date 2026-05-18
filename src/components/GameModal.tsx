import type { Game } from "../data/games";
import Modal from "./Modal";

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

export default function GameModal({ game, onClose }: GameModalProps) {
  if (!game) return null;

  return (
    <Modal isOpen={!!game} onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={game.img}
          alt={game.title}
          className="w-full h-auto max-h-[50vh] object-cover rounded-xl md:row-span-full"
        />

        <div className="md:col-start-2">
          <h2 className="text-xl font-semibold text-white mb-2">{game.title}</h2>
          <p className="text-zinc-400 text-sm mb-2">{game.desc}</p>
          <p className="text-white text-sm font-semibold mb-4">
            <strong>Peso:</strong> {game.size}
          </p>

          <div className="border-t border-zinc-800 pt-4">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
              ⚙ Requisitos del sistema
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg p-3">
                <p className="text-xs text-zinc-500 uppercase mb-1">Mínimos</p>
                <p className="text-xs text-zinc-500 leading-relaxed whitespace-pre-line">
                  {game.minReq.replace(/<br\s*\/?>/gi, "\n")}
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg p-3">
                <p className="text-xs text-blue-500 uppercase mb-1">Recomendados</p>
                <p className="text-xs text-zinc-500 leading-relaxed whitespace-pre-line">
                  {game.recReq.replace(/<br\s*\/?>/gi, "\n")}
                </p>
              </div>
            </div>
          </div>

          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm transition"
          >
            Descargar
          </a>
        </div>
      </div>
    </Modal>
  );
}
