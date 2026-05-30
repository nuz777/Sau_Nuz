import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#intro", label: "Intro" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#works", label: "SN-TOOLS" },
  { href: "/#video", label: "Video" },
  { href: "/#contact", label: "Contacto" },
];

interface HeaderProps {
  onNavSectionClick?: (sectionId: string) => void;
}
export default function Header({ onNavSectionClick }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

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
        onNavSectionClick?.(id);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
};

  return (
    <>
      <header
        className="fixed top-2 md:top-4 left-1/2 z-50 w-[calc(100vw-0.75rem)] md:w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 rounded-xl md:rounded-2xl border border-border shadow-lg shadow-black/20 bg-surface/30 backdrop-blur-md"
      >
        <div className="px-3 md:px-4 flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="text-ink text-xl md:text-2xl uppercase font-varela tracking-wide">
            SauNuz
          </Link>

          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => {
                    const id = link.href.slice(2);
                    onNavSectionClick?.(id);
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative text-ink/80 hover:text-ink text-sm uppercase tracking-wider cursor-pointer group pb-1"
                >
                  {link.label}
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className={`relative text-sm uppercase tracking-wider group pb-1 ${
                    location === link.href ? "text-ink" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-px left-0 h-px bg-ink transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ),
            )}
            <button
              onClick={toggleTheme}
              className="text-muted hover:text-ink hover:bg-surface-soft p-2 rounded-lg transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-muted hover:text-ink p-1.5 rounded-lg transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-blue-500 hover:text-blue-300 p-1.5 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-overlay transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="button"
        tabIndex={0}
        onClick={() => setSidebarOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setSidebarOpen(false);
        }}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-surface/50 backdrop-blur-xl border-l border-border-accent transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="text-ink text-sm uppercase tracking-widest font-medium">Menú</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-blue-500 hover:text-blue-300 p-1.5 rounded-lg transition-colors"
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
                className="px-6 py-3.5 text-sm text-ink-secondary/70 hover:text-ink hover:bg-accent-soft border-l-2 border-transparent hover:border-blue-500 transition-all w-full text-left cursor-pointer"
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
                    ? "text-ink bg-accent-soft border-blue-500"
                    : "text-muted hover:text-ink hover:bg-accent-soft border-transparent hover:border-blue-500"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
