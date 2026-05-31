import { useState } from "react";
import { type WindowsItem, windowsItems } from "../data/windowsItems";
import Modal from "../components/Modal";
import SubpageHeader from "../components/SubpageHeader";

const navLinks = [
  { href: "/tools", label: "Inicio" },
  { href: "/docs/Manual_SauNuz.pdf", label: "Manual", download: true },
];

export default function WindowsTools() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<WindowsItem | null>(null);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 12;

  const filtered = windowsItems.filter((w) =>
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const goTo = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <SubpageHeader
        title="Tools"
        navLinks={navLinks}
        searchValue={search}
        onSearchChange={handleSearch}
        searchPlaceholder="Buscar..."
      />

      <div className="flex-1 max-w-5xl w-full mx-auto px-5 pt-20 pb-12">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-3 text-zinc-500">
            <span className="text-5xl">Thempher dice</span>
            <p className="text-lg">No se encontró ninguna herramienta</p>
            <p className="text-sm text-zinc-600">Intenta con otro nombre</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {paginated.map((w) => (
                <div
                  key={w.id}
                  onClick={() => setSelected(w)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelected(w);
                  }}
                  role="button"
                  tabIndex={0}
                  className="card-stagger fade-in-card border border-zinc-800 p-3 text-center cursor-pointer transition-all duration-300 hover:bg-[#111] hover:-translate-y-1 rounded-xl"
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    className="w-full h-62.5 object-cover object-center rounded-lg mb-2"
                    loading="lazy"
                  />
                  <h3 className="text-white font-semibold text-sm">{w.title}</h3>
                  <p className="text-zinc-500 text-xs mt-1">{w.size}</p>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={() => goTo(page - 1)}
                  disabled={page === 0}
                  className="px-5 py-2 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  ← Anterior
                </button>
                <span className="text-zinc-500 text-sm">{page + 1} / {totalPages}</span>
                <button
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages - 1}
                  className="px-5 py-2 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Siguiente →
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="pt-5 flex flex-col sm:flex-row gap-8">
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-auto max-h-[70vh] object-cover rounded-xl md:w-2/5"
            />

            <div className="md:col-start-2 md:w-3/5">
              <h2 className="text-xl font-semibold text-white mb-2">{selected.title}</h2>
              <p className="text-zinc-400 text-sm mb-2">{selected.desc}</p>
              <p className="text-white text-sm font-semibold mb-4">
                <strong>Peso:</strong> {selected.size}
              </p>

              <div className="border-t border-zinc-800 pt-4">
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                  ⚙ Requisitos del sistema
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg p-3">
                    <p className="text-xs text-zinc-500 uppercase mb-1">Mínimos</p>
                    <p className="text-xs text-zinc-500 leading-relaxed whitespace-pre-line">
                      {selected.minReq.replace(/<br\s*\/?>/gi, "\n")}
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg p-3">
                    <p className="text-xs text-blue-500 uppercase mb-1">Recomendados</p>
                    <p className="text-xs text-zinc-500 leading-relaxed whitespace-pre-line">
                      {selected.recReq.replace(/<br\s*\/?>/gi, "\n")}
                    </p>
                  </div>
                </div>
              </div>

              {selected.password && (
                <p className="text-yellow-500 text-sm mt-4 mb-4">
                  <strong>Contraseña:</strong> {selected.password}
                </p>
              )}

              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm transition"
              >
                Descargar
              </a>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}