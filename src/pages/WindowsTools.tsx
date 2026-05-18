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

  const filtered = windowsItems.filter((w) => w.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SubpageHeader
        title="Tools"
        navLinks={navLinks}
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Buscar..."
      />

      <div className="max-w-5xl mx-auto px-5 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((w) => (
            <div
              key={w.id}
              onClick={() => setSelected(w)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(w); }}
              role="button"
              tabIndex={0}
              className="card-stagger fade-in-card border border-zinc-800 p-4 text-center cursor-pointer transition-all duration-300 hover:bg-[#111] hover:-translate-y-1"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-62.5 object-center rounded-lg mb-2"
                loading="lazy"
              />
              <h3 className="text-white font-semibold text-sm">{w.title}</h3>
              <p className="text-zinc-500 text-xs mt-1">{w.size}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-white mb-2">{selected.title}</h2>
            <p className="text-zinc-400 text-sm mb-2">{selected.desc}</p>
            <p className="text-white text-sm font-semibold mb-4">
              <strong>Peso:</strong> {selected.size}
            </p>
            {selected.password && (
              <p className="text-yellow-500 text-sm mb-2">
                <strong>Contraseña:</strong> {selected.password}
              </p>
            )}
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm transition"
            >
              Descargar
            </a>
          </div>
        )}
      </Modal>
    </main>
  );
}
