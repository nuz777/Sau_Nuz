import { useState } from "react";
import { Link } from "wouter";
import { toolCategories } from "../data/toolsCategories";
import RedirectScreen from "../components/RedirectScreen";

export default function Tools() {
  const [redirect, setRedirect] = useState<string | null>(null);

  const handleExternalClick = (url: string) => {
    setRedirect(url);
    setTimeout(() => {
      window.location.href = url;
    }, 1800);
  };

  return (
    <main className="min-h-screen  bg-black">
      {redirect && <RedirectScreen />}
      <section className="py-20 md:py-28 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(rgba(14,165,233,.12)_1px,transparent_1px)] before:bg-[length:32px_32px] before:pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-space text-[0.68rem] tracking-widest uppercase text-blue-400 mb-4 before:content-['//'] before:text-blue-400/60 after:content-[''] after:block after:w-10 after:h-px after:bg-blue-500/50">
              SN-TOOLS
            </div>
            <h2 className="font-syne text-4xl md:text-6xl font-semibold text-white leading-tight mb-4">
               Ir {" "}
              <span className="text-blue-400 relative after:absolute after:bottom-0.5 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:rounded-sm after:shadow-[0_0_12px_rgba(14,165,233,.35)]">
                a SuperTools
              </span>
            </h2>
            <p className="font-ibm text-sm text-zinc-500 max-w-lg leading-relaxed">
              Sitios propios con recursos seleccionados para{" "}
              <strong className="text-blue-400/70 font-normal">
                programadores y entusiastas
              </strong>{" "}
              este apartado es hecho por Nuz.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl rounded-2xl overflow-hidden">
            {toolCategories.map((cat) => {
              const isExternal = cat.route.startsWith("http");
              const commonProps = {
                key: cat.num,
                className: "tool-card-anim group relative bg-gray  flex flex-col text-inherit no-underline min-h-[320px] transition-colors duration-300  hover:bg-[#080d18] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-cyan-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 before:ease-[cubic-bezier(.16,1,.3,1)] hover:before:scale-x-100 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,.06)_0%,transparent_60%)] after:opacity-0 after:transition-opacity after:duration-400 hover:after:opacity-100",
              } as const;
              return isExternal ? (
                <div
                  {...commonProps}
                  onClick={() => handleExternalClick(cat.route)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") handleExternalClick(cat.route); }}
                >
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-[180px] object-cover object-center block saturate-[.7] brightness-[.75] transition-all duration-400 group-hover:saturate-100 group-hover:brightness-90 group-hover:scale-104"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />
                    <span className="absolute top-2.5 right-2.5 font-space text-[0.58rem] tracking-widest uppercase text-blue-400 bg-[#050810]/85 border border-blue-500/30 rounded px-2 py-1 backdrop-blur-md z-10">
                      {cat.badge}
                    </span>
                    <span className="absolute top-2.5 left-3 font-space text-[0.6rem] text-blue-400/40 z-10">
                      {cat.num}
                    </span>
                  </div>

                  <div className="p-4 md:p-5 flex-1 flex flex-col gap-2">
                    <h3 className="font-syne font-semibold text-white text-base leading-tight transition-colors group-hover:text-cyan-400">
                      {cat.title}
                    </h3>
                    <p className="font-ibm text-[0.72rem] text-zinc-500 flex-1 leading-relaxed">
                      {cat.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-space text-[0.65rem] tracking-widest uppercase text-blue-400 mt-1 transition-all group-hover:gap-2.5 group-hover:text-cyan-400 after:content-['→'] after:transition-transform group-hover:after:translate-x-1">
                      Ver recursos
                    </span>
                  </div>
                </div>
              ) : (
                <Link
                  {...commonProps}
                  href={cat.route}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-[180px] object-cover object-center block saturate-[.7] brightness-[.75] transition-all duration-400 group-hover:saturate-100 group-hover:brightness-90 group-hover:scale-104"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />
                    <span className="absolute top-2.5 right-2.5 font-space text-[0.58rem] tracking-widest uppercase text-blue-400 bg-[#050810]/85 border border-blue-500/30 rounded px-2 py-1 backdrop-blur-md z-10">
                      {cat.badge}
                    </span>
                    <span className="absolute top-2.5 left-3 font-space text-[0.6rem] text-blue-400/40 z-10">
                      {cat.num}
                    </span>
                  </div>

                  <div className="p-4 md:p-5 flex-1 flex flex-col gap-2">
                    <h3 className="font-syne font-semibold text-white text-base leading-tight transition-colors group-hover:text-cyan-400">
                      {cat.title}
                    </h3>
                    <p className="font-ibm text-[0.72rem] text-zinc-500 flex-1 leading-relaxed">
                      {cat.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-space text-[0.65rem] tracking-widest uppercase text-blue-400 mt-1 transition-all group-hover:gap-2.5 group-hover:text-cyan-400 after:content-['→'] after:transition-transform group-hover:after:translate-x-1">
                      Ver recursos
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-blue-500/15">
            <p className="font-space text-[0.68rem] text-zinc-500 tracking-wide">
              <span className="text-blue-400">2</span> categorías disponibles &nbsp;·&nbsp;
              Actualizado regularmente xd.
            </p>
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0 })}
              className="inline-flex items-center gap-2 font-space text-[0.7rem] tracking-widest uppercase text-white bg-transparent border border-blue-500/15 rounded px-5 py-2 cursor-pointer no-underline hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(14,165,233,.15)] transition-all"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
