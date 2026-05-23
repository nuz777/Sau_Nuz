import { useState, useEffect, useRef } from "react";
import PortfolioModal from "./PortfolioModal";

function GithubIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface TeamCardProps {
  name: string;
  role: string;
  img: string;
  bio: string;
  github: string;
}

export default function TeamCard({ name, role, img, bio, github }: TeamCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flipped) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setFlipped(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [flipped]);

  const handleImageClick = () => {
    setShowPortfolio(true);
  };

  return (
    <>
      <PortfolioModal
        isOpen={showPortfolio}
        onClose={() => setShowPortfolio(false)}
        name={name}
        role={role}
        img={img}
        bio={bio}
        github={github}
      />
      <div ref={cardRef} className="w-64 h-[335px] [perspective:1000px]">
        <div
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
          }}
          role="button"
          tabIndex={0}
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s",
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full cursor-pointer"
        >
          {/* Front */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
                setTimeout(() => handleImageClick(), 300);
              }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt={name}
                className="w-full h-[260px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  group-hover:bg-transparent/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Hi
                </span>
              </div>
            </div>
            <p className="text-center mt-4 font-semibold text-white">{name}</p>
          </div>

          {/* Back */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            className="absolute inset-0 bg-[#0f1e3a] text-white text-center rounded-xl p-5 flex items-center"
          >
            <div className="w-full">
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-xs mb-6">{role}</p>
              <div className="w-8 h-px bg-white mx-auto mb-6" />
              <p className="text-xs leading-relaxed">{bio}</p>
              <div className="flex justify-center gap-2 mt-8">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center size-8 border border-zinc-400 rotate-45 hover:bg-white hover:text-blue-500 transition-all"
                >
                  <GithubIcon size={14} className="-rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}