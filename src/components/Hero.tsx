import { ChevronsDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Desktop video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/img/ryo.jpg"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover hidden md:block"
        style={{ zIndex: 2 }}
      >
        <source src="/video/herotest.mp4" type="video/mp4" />
      </video>

      {/* Mobile fallback image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url(/img/ryo.jpg)", zIndex: 2 }}
      />

      {/* Single dark overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 3 }} />

      <div className="relative z-10 text-center px-4">
        <h1 className="typing-animate font-share text-4xl md:text-5xl text-blue-400 inline-block overflow-hidden whitespace-nowrap border-r-3 border-blue-400">
          &lt; Saunuz Tools /&gt;
        </h1>
        <p className="font-share text-zinc-400 mt-8 text-sm md:text-base uppercase tracking-wide opacity-0 animate-[fadeUp_1s_ease_0.6s_forwards]">
          Hecho por Nuz_v &amp; Thempher09.
        </p>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 mx-auto w-5 text-center hero-arrow-bounce"
        style={{ zIndex: 10 }}
      >
        <button
          onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white cursor-pointer"
        >
          <ChevronsDown className="text-white size-6 mx-auto" />
        </button>
      </div>
    </section>
  );
}
