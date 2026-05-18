import { useState } from "react";
import { games, type Game } from "../data/games";
import GameCard from "../components/GameCard";
import GameModal from "../components/GameModal";
import SubpageHeader from "../components/SubpageHeader";

const navLinks = [
  { href: "/tools", label: "Inicio" },
  { href: "/tools/windows", label: "Herramientas" },
  { href: "/docs/Manual_SauNuz.pdf", label: "Manual", download: true },
];

export default function Games() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Game | null>(null);

  const filtered = games.filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SubpageHeader
        title="Games"
        navLinks={navLinks}
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Buscar juego..."
      />

      <div className="max-w-5xl mx-auto px-5 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} onClick={() => setSelected(game)} />
          ))}
        </div>
      </div>

      <GameModal game={selected} onClose={() => setSelected(null)} />

      <footer className="text-center py-5 border-t border-zinc-800 text-zinc-600 text-sm">
        <p>SauNuz ©</p>
        <a
          href="/docs/Manual_SauNuz.pdf"
          download
          className="inline-block mt-2 border border-white px-3 py-1.5 text-white hover:bg-white hover:text-black transition text-sm"
        >
          Manual
        </a>
      </footer>
    </main>
  );
}
