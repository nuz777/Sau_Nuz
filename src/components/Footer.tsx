import { ChevronsUp } from "lucide-react";
import { Link } from "wouter";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#intro", label: "Intro" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/tools", label: "Works" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0a0a0a] text-zinc-400">
      <div className="relative border-b border-white/10 px-5 py-20 text-center">
        <ul className="list-none flex flex-wrap justify-center gap-6 mb-5">
          {footerLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <li key={link.href}>
                <button
                  onClick={() => {
                    const id = link.href.slice(2);
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm uppercase tracking-wider text-zinc-500 hover:text-blue-400 transition cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="text-sm uppercase tracking-wider text-zinc-500 hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <button
          onClick={scrollToTop}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 size-11 flex items-center justify-center rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_15px_rgba(0,162,255,0.6)] transition-all"
        >
          <ChevronsUp size={18} />
        </button>
      </div>

      <div className="py-10 text-center">
        <p className="text-sm text-zinc-600">
          &copy; <span className="text-zinc-500">SauNuz Labs</span> - 2026
        </p>
      </div>
    </footer>
  );
}
