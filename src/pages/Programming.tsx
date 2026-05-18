import { useState } from "react";
import { languages } from "../data/languages";
import Modal from "../components/Modal";
import SubpageHeader from "../components/SubpageHeader";

const navLinks = [
  { href: "/tools", label: "Inicio" },
  { href: "/tools/windows", label: "Herramientas" },
  { href: "/docs/Manual_SauNuz.pdf", label: "Manual", download: true },
];

export default function Programming() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = languages.filter((l) => l.title.toLowerCase().includes(search.toLowerCase()));

  const lang = selected ? languages.find((l) => l.id === selected) : null;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SubpageHeader
        title="Programming"
        navLinks={navLinks}
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Buscar..."
      />

      <div className="max-w-5xl mx-auto px-5 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((l) => (
            <div
              key={l.id}
              onClick={() => setSelected(l.id)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(l.id); }}
              role="button"
              tabIndex={0}
              className="card-stagger fade-in-card border border-zinc-800 p-4 text-center cursor-pointer transition-all duration-300 hover:bg-[#111] hover:-translate-y-1"
            >
              <img
                src={l.img}
                alt={l.title}
                className="w-full h-62.5 object-contain rounded-lg mb-2"
                loading="lazy"
              />
              <h3 className="text-white font-semibold text-sm">{l.title}</h3>
              <p className="text-zinc-500 text-xs mt-1">{l.tag}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!lang} onClose={() => setSelected(null)}>
        {lang && (
          <div className="py-4">
            <h2 className="text-2xl font-semibold text-white mb-4">{lang.title}</h2>
            <p className="text-zinc-400 leading-relaxed">{lang.desc}</p>
          </div>
        )}
      </Modal>
    </main>
  );
}
