import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

interface NavLink {
  href: string;
  label: string;
  download?: boolean;
}

interface SubpageHeaderProps {
  title: string;
  navLinks: NavLink[];
  searchValue: string;
  onSearchChange: (val: string) => void;
  searchPlaceholder?: string;
}

export default function SubpageHeader({
  title,
  navLinks,
  searchValue,
  onSearchChange,
  searchPlaceholder,
}: SubpageHeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-3.5 bg-black/30 backdrop-blur-md border-b border-blue-500/20">
        <h1 className="text-lg font-semibold">
          {title} <span className="text-blue-600">SauNuz</span>
        </h1>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-1.5">
            {navLinks.map((link) =>
              link.download ? (
                <a
                  key={link.href}
                  href={link.href}
                  download
                  className="text-blue-200/70 hover:text-ink text-sm px-3 py-1.5 rounded-lg hover:bg-blue-900/15 transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-200/70 hover:text-ink text-sm px-3 py-1.5 rounded-lg hover:bg-blue-900/15 transition"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>

        <button
          className="md:hidden text-blue-500 p-2"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={24} />
        </button>
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
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-black/95 backdrop-blur-xl border-l border-blue-900/30 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-blue-900/20">
          <span className="text-ink text-sm uppercase tracking-wider">Menú</span>
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
            link.download ? (
              <a
                key={link.href}
                href={link.href}
                download
                onClick={handleNavClick}
                className="px-6 py-3.5 text-sm text-blue-200/70 hover:text-ink hover:bg-blue-900/10 border-l-2 border-transparent hover:border-blue-500 transition-all"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-6 py-3.5 text-sm text-blue-200/70 hover:text-ink hover:bg-blue-900/10 border-l-2 border-transparent hover:border-blue-500 transition-all"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="px-4 pt-2">
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>
      </div>
    </>
  );
}
