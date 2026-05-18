import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#intro", label: "Intro" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#works", label: "SN-TOOLS" },
  { href: "/#contact", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const handleNavClick = (href: string) => {
    setSidebarOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/30 backdrop-blur-md" : "bg-black/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl uppercase font-varela tracking-wide">
            SauNuz
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => {
                    const id = link.href.slice(2);
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-white transition-all pb-0.5 cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className={`text-sm uppercase tracking-wider border-b-2 transition-all pb-0.5 ${
                    location === link.href
                      ? "text-white border-white"
                      : "text-white/80 border-transparent hover:text-white hover:border-white"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <button
            className="md:hidden text-blue-500 p-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="button"
        tabIndex={0}
        onClick={() => setSidebarOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setSidebarOpen(false);
        }}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-black/50 backdrop-blur-xl border-l border-blue-900/30 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-blue-900/20">
          <span className="text-white text-sm uppercase tracking-wider">Menú</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-blue-500 p-1"
            aria-label="Cerrar menú"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col py-4">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-6 py-3.5 text-sm text-blue-200/70 hover:text-white hover:bg-blue-900/10 border-l-2 border-transparent hover:border-blue-500 transition-all w-full text-left cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-6 py-3.5 text-sm border-l-2 transition-all ${
                  location === link.href
                    ? "text-white bg-blue-900/10 border-blue-500"
                    : "text-zinc-400 hover:text-white hover:bg-blue-900/10 border-transparent hover:border-blue-500"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </>
  );
}
