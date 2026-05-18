import type { Game } from "../data/games";

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

export default function GameCard({ game, onClick }: GameCardProps) {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      role="button"
      tabIndex={0}
      className="card-stagger fade-in-card border border-zinc-800 px-3 py-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:bg-[#111] hover:-translate-y-1"
    >
      <img
        src={game.img}
        alt={game.title}
        className="w-full h-[250px] object-cover rounded-lg mb-2"
        loading="lazy"
      />
      <h3 className="text-white font-semibold text-sm">{game.title}</h3>
      <p className="text-zinc-500 text-xs mt-1">{game.size}</p>
    </div>
  );
}
