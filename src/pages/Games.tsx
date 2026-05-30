import { useState } from "react";
import { games, type Game } from "../data/games";
import GameCard from "../components/GameCard";
import GameModal from "../components/GameModal";
import SubpageHeader from "../components/SubpageHeader";
import InfoModal from "../components/InfoModal";

const navLinks = [
  { href: "/tools", label: "Inicio" },
  { href: "/tools/windows", label: "Herramientas" },
  { href: "/docs/Manual_SauNuz.pdf", label: "Manual", download: true },
];

export default function Games() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Game | null>(null);
  const [page, setPage] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(true);

  const GAMES_PER_PAGE = 12;

  const filtered = games.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const totalPages = Math.ceil(filtered.length / GAMES_PER_PAGE);

  const paginated = filtered.slice(
    page * GAMES_PER_PAGE,
    (page + 1) * GAMES_PER_PAGE
  );

  const goTo = (newPage: number) => {
    setPage(newPage);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollIntoView({ block: "start", inline: "nearest" });
    });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <InfoModal messageId={showInfoModal ? "info-games" : null} onClose={() => setShowInfoModal(false)} />
      <SubpageHeader
        title="Games"
        navLinks={navLinks}
        searchValue={search}
        onSearchChange={handleSearch}
        searchPlaceholder="Buscar juego..."
      />

      <div className="flex-1 max-w-5xl w-full mx-auto px-5 pt-20 pb-12 flex flex-col">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-3 text-zinc-500">
            <span className="text-5xl">Nuz dice</span>

            <p className="text-lg">
              No se encontró ningún juego :[
            </p>

            <p className="text-sm text-zinc-600">
              Intenta con otro nombre
            </p>
          </div>
        ) : (
          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginated.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onClick={() => setSelected(game)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-auto pt-10">
                <button
                  onClick={() => goTo(page - 1)}
                  disabled={page === 0}
                  className="px-5 py-2 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  ← Anterior
                </button>

                <span className="text-zinc-500 text-sm">
                  {page + 1} / {totalPages}
                </span>

                <button
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages - 1}
                  className="px-5 py-2 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Siguiente →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <GameModal
        game={selected}
        onClose={() => setSelected(null)}
      />

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