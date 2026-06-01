import { useRef, useEffect, useState } from "react";
import {
  Calendar,
  MessageCircle,
  Check,
  List,
  Download,
  Code,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "motion/react";
import Hero from "../components/Hero";
import TeamCard from "../components/TeamCard";
import InfoModal from "../components/InfoModal";
import { team } from "../data/team";
import { messages } from "../data/messages";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YouTubeEmbed from "../components/YouTubeEmbed";

function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rafRef = useRef<number>(undefined);
  const moving = useRef(false);
  const visibleRef = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const container = containerRef.current;
    if (!el) return;

    const step = () => {
      if (moving.current || !visibleRef.current) { rafRef.current = requestAnimationFrame(step); return; }
      xRef.current -= 1;
      const copyEl = el.children[0] as HTMLElement;
      const copyWidth = copyEl.offsetWidth;
      const total = el.scrollWidth;
      const wrapAt = total - copyWidth;
      if (xRef.current < -wrapAt) xRef.current += wrapAt;
      el.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (container) observer.observe(container);

    const onVisibility = () => { visibleRef.current = !document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const slide = (dir: number) => {
    const el = ref.current;
    if (!el || moving.current) return;
    moving.current = true;
    const copyEl = el.children[0] as HTMLElement;
    const copyWidth = copyEl.offsetWidth;
    const total = el.scrollWidth;
    const wrapAt = total - copyWidth;
    xRef.current -= dir * 280;
    el.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    el.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
    el.addEventListener("transitionend", () => {
      el.style.transition = "none";
      if (xRef.current < -wrapAt) xRef.current += wrapAt;
      else if (xRef.current > 0) xRef.current -= wrapAt;
      el.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      moving.current = false;
    }, { once: true });
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-canvas to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-canvas to-transparent pointer-events-none" />
      <div className="overflow-hidden">
        <div ref={ref} className="flex gap-6 will-change-transform">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-6 shrink-0">
              {team.map((m) => <TeamCard key={m.name} {...m} />)}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => slide(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => slide(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showMusicMsg, setShowMusicMsg] = useState(false);

  function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setShowMusicMsg(true);
      setTimeout(() => setShowMusicMsg(false), 2500);
    } else {
      audio.pause();
    }
  }

  const [modalId, setModalId] = useState<string | null>(null);
  const seen = useRef(new Set<string>());
  const toolsRef = useRef<HTMLDivElement>(null);
  const [toolsVisible, setToolsVisible] = useState(false);

  const showModal = (id: string) => {
    const key = messages[id]?.localStorageKey;
    if (seen.current.has(id)) return;
    if (key && localStorage.getItem(key)) return;
    seen.current.add(id);
    if (key) localStorage.setItem(key, "true");
    setModalId(id);
  };

  const closeModal = () => {
    setModalId(null);
  };

  useEffect(() => {
    const key = messages["intro-home"]?.localStorageKey;
    if (!key || localStorage.getItem(key)) return;
    const t = setTimeout(() => showModal("intro-home"), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "team", "video"];
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const key = messages[id]?.localStorageKey;
      if (!key || localStorage.getItem(key)) continue;
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) showModal(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const el = toolsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setToolsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const section = (e.target as HTMLElement).closest("section[id]");
      if (!section) return;
      const id = section.id;
      if (id === "about" || id === "team" || id === "video") showModal(id);
    };
    const main = document.getElementById("main");
    main?.addEventListener("click", handleClick);
    return () => main?.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <InfoModal messageId={modalId} onClose={closeModal} />
      <Header onNavSectionClick={(id) => { if (id === "about" || id === "team" || id === "video") showModal(id); }} />
      <Hero />

      <main id="main" className="bg-canvas overflow-hidden">
        {/* Hello section */}
        <section id="intro" className="py-24 md:py-28 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-share text-3xl md:text-4xl text-blue-500 text-center uppercase mb-2">
              HOLA &amp; ¡BIENVENIDO!
            </h2>
            <p className="font-share text-center text-sm text-ink uppercase tracking-widest mb-12">
              <span className="relative inline-block before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-px before:bg-muted-2 after:absolute after:-right-8 after:top-1/2 after:-translate-y-1/2 after:w-5 after:h-px after:bg-muted-2">
                ¿Qué es esto?
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 items-start mt-17.5">
              <div className="space-y-8">
                <div className="text-right relative pr-24">
                  <div className="absolute right-1.25 top-1/2 -translate-y-1/2 size-12 border border-zinc-300 rotate-45 shadow-[4px_4px_0_0_#ddd] flex items-center justify-center">
                    <Calendar className="size-5 -rotate-45 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink uppercase">
                    Enfocado en tus necesidades
                  </h3>
                  <p className="text-xs text-ink-secondary mt-4">
                    Es frustrante tener que estar buscando en diferentes sitios
                    herramientas utiles, con SN-TOOLS es diferente.
                  </p>
                </div>
                <div className="text-right relative pr-24">
                  <div className="absolute right-1.25 top-1/2 -translate-y-1/2 size-12 border border-zinc-300 rotate-45 shadow-[4px_4px_0_0_#ddd] flex items-center justify-center">
                    <MessageCircle className="size-5 -rotate-45 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink uppercase">
                    Resolucion de problemas
                  </h3>
                  <p className="text-xs text-ink-secondary mt-4">
                    Los problemas desaparecen en pocos instantes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:-mt-16 relative">
                <div className="h-10 flex items-center justify-center">
                  <AnimatePresence>
                    {showMusicMsg && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs md:text-sm text-blue-400 font-share uppercase tracking-widest"
                      >
                        ¡Musica Desbloqueada!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div
                  className="relative size-57.5 shadow-[10px_10px_0_0_transparent] animate-spin-slow cursor-pointer"
                  onClick={toggleAudio}
                >
                  <img
                    src="/img/icon12.png"
                    alt="Code"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-48 md:w-56"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-left relative pl-24">
                  <div className="absolute left-1.25 top-1/2 -translate-y-1/2 size-12 border border-zinc-300 rotate-45 shadow-[4px_4px_0_0_#ddd] flex items-center justify-center">
                    <Check className="size-5 -rotate-45 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink uppercase">
                    Calidad
                  </h3>
                  <p className="text-xs text-ink-secondary mt-4">
                    Nos enforzamos frecuentemente para ofrecer un ecxelente
                    sofware mediante sitios o lugares seguros.
                  </p>
                </div>
                <div className="text-left relative pl-24">
                  <div className="absolute left-1.25 top-1/2 -translate-y-1/2 size-12 border border-zinc-300 rotate-45 shadow-[4px_4px_0_0_#ddd] flex items-center justify-center">
                    <List className="size-5 -rotate-45 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink uppercase">
                    Collection Perfect
                  </h3>
                  <p className="text-xs text-ink-secondary mt-4">
                    Los programas eligios posiblemente sean la mejor entre
                    muchas más.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote section */}
        <section className="py-36 bg-[url('/img/indicado.webp')] sm:bg-fixed bg-cover bg-center text-center relative">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <p className="text-2xl md:text-4xl text-white">
              Programar es perseverancia; al crear, usas tu imaginación, y tu
              código se convierte en el reflejo de tus ideas.
            </p>
            <p className="mt-4 text-2xl text-blue-500 italic">- Nuz</p>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-share text-3xl md:text-4xl text-blue-500 uppercase mb-2">
              Sobre SauNuz
            </h2>
            <p className="font-share text-sm text-ink uppercase tracking-widest mb-16">
              <span className="relative inline-block before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-px before:bg-muted-2 after:absolute after:-right-8 after:top-1/2 after:-translate-y-1/2 after:w-5 after:h-px after:bg-muted-2">
                Herramientas, desarrollo y soluciones en un solo lugar
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Download,
                  title: "Tools & Software",
                  desc: "En SauNuz ofrecemos herramientas, sistemas operativos y software optimizado para facilitar instalaciones, mantenimiento y uso diario en equipos de todo tipo.",
                },
                {
                  icon: Code,
                  title: "Desarrollo Web",
                  desc: "Creamos páginas modernas, rápidas y funcionales utilizando HTML, CSS y JavaScript, enfocadas en diseño atractivo y buena experiencia de usuario.",
                },
                {
                  icon: Settings,
                  title: "Optimización",
                  desc: "Mejoramos el rendimiento de sistemas y aplicaciones, ofreciendo versiones ligeras y configuraciones que aprovechan al máximo los recursos del equipo.",
                },
                {
                  icon: Users,
                  title: "Comunidad",
                  desc: "SauNuz busca ayudar a estudiantes y usuarios a acceder a recursos, aprender tecnología y mejorar sus habilidades en informática y desarrollo.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="size-18.75 mx-auto border border-zinc-300 rotate-45 shadow-[4px_4px_0_0_#ddd] flex items-center justify-center mb-6">
                    <item.icon className="size-6 -rotate-45 text-blue-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink uppercase mt-8">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-secondary mt-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section id="team" className="py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-share text-3xl md:text-4xl text-blue-500 uppercase mb-2">
              Nuestro equipo
            </h2>
            <p className="font-share text-sm text-ink uppercase tracking-widest mb-12">
              <span className="relative inline-block before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-px before:bg-muted-2 after:absolute after:-right-8 after:top-1/2 after:-translate-y-1/2 after:w-5 after:h-px after:bg-muted-2">
                Este es el equipo finder. 
              </span>
            </p>
          </div>
          <Carousel />
        </section>

        {/* Tools CTA */}
        <section id="works" className="py-36 bg-[url('/img/SN-tools.jpg')] sm:bg-fixed bg-cover bg-center text-center relative scroll-mt-20">
          <div className="absolute inset-0 bg-black/50" />
          <div ref={toolsRef} className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-700 ${toolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-share text-3xl md:text-4xl text-blue-500 uppercase mb-2">
              SN-TOOLS
            </h2>
            <p className="font-share text-sm text-white uppercase tracking-widest mb-8">
              <span className="relative inline-block before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-px before:bg-white/40 after:absolute after:-right-8 after:top-1/2 after:-translate-y-1/2 after:w-5 after:h-px after:bg-white/40">
                Aqui tienes unas recomendaciones de sitios (propios) de nuestras
                SN-TOOLS
              </span>
            </p>
            <Link
              href="/tools"
              onClick={() => window.scrollTo({ top: 0 })}
              className="inline-flex items-center justify-center w-47.5 h-14 bg-surface-soft text-blue-400 text-sm font-semibold tracking-wider rounded-xl border border-blue-500/45 backdrop-blur-md shadow-[0_0_20px_rgba(0,132,255,0.12)] hover:bg-blue-500/20 hover:text-blue-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,132,255,0.35)] active:scale-97 transition-all"
            >
              Explorar Herramienta
            </Link>
          </div>
        </section>

        {/* Video section */}
        <section id="video" className="py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-share text-3xl md:text-4xl text-blue-500 text-center uppercase mb-2">
             Introducción
            </h2>
            <p className="font-share text-center text-sm text-ink uppercase tracking-widest mb-12">
              <span className="relative inline-block before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-px before:bg-muted-2 after:absolute after:-right-8 after:top-1/2 after:-translate-y-1/2 after:w-5 after:h-px after:bg-muted-2">
                Video Demostrativo
              </span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <YouTubeEmbed videoId="-XraHbRlwwo" />

              <div className="space-y-6">
                <h3 className="font-share text-2xl md:text-3xl text-ink uppercase">
                  Sé bienvenido a <span className="text-blue-500">Sau-nuz</span>, tu destino para herramientas.
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                 Una pequeña introduccion a lo que es este sitio, sus funciones y como usarlo, 
                 te invitamos a verlo para que puedas conocer mas sobre nosotros y lo que ofrecemos.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Créditos a Themper09
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="py-36 bg-[url('/img/fotter.jpg')] sm:bg-fixed bg-cover bg-center text-center relative"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h2 className="font-share text-3xl md:text-4xl text-white mb-4">
              ¿Te gusta nuestro trabajo? !Contactanos!
            </h2>
            <p className="text-zinc-300 mb-8">
              Estaremos atentos ante cualquier inconveniente.
            </p>
            <a
              href="mailto:ivandavidmejiamendez@gmail.com"
              className="inline-flex items-center h-11 px-4 bg-blue-500 text-white text-sm uppercase tracking-wide border border-blue-500 hover:bg-transparent hover:border-white transition-all"
            >
              Contactar
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <audio ref={audioRef} src="/audio/mussicSong.mp3" loop preload="auto" />
    </>
  );
}
