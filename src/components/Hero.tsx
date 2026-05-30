import { ChevronsDown } from "lucide-react";

function Background() {
    return (
      
        <div className="hidden sm:block absolute -left-30 right-0 top-0 w-full z-10">
          <div className="absolute left-30 bg-[#445bd5] h-dvh w-dvw z-1" />
          <img src="/hero/yui.png" alt="Yui" className="absolute left-30 fade-in-left-right object-cover h-dvh z-10" />
          <img src="/hero/blue.png" alt="Yui" className="absolute left-29 object-cover h-dvh z-5" />
          <img src="/hero/white.png" alt="Yui" className="absolute inset-0 object-cover h-dvh w-full z-1" />
         </div> 
    );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Desktop video */}
      <Background />
      {/* Mobile fallback image */}
      <div
        className="mobile-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/celular.jpeg)", zIndex: 2 }}
      />

      {/* Single dark overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 3 }} />

      <div className="relative z-10 text-center px-4">
        <h1 className="typing-animate font-share font-bold text-4xl md:text-5xl text-blue-200 inline-block overflow-hidden whitespace-nowrap border-r-3 border-blue-400">
          &lt; Saunuz Tools /&gt;
        </h1>
        <p className="font-share text-white mt-8 text-sm md:text-base uppercase tracking-wide opacity-0 animate-[fadeUp_1s_ease_0.6s_forwards]">
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
