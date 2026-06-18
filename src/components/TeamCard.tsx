import { useState } from "react";
import { createPortal } from "react-dom";
import PortfolioModal from "./PortfolioModal";

interface TeamCardProps {
  name: string;
  role: string;
  img: string;
  bio: string;
  github: string;
}

export default function TeamCard({ name, role, img, bio, github }: TeamCardProps) {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      {createPortal(
        <PortfolioModal
          isOpen={showPortfolio}
          onClose={() => setShowPortfolio(false)}
          name={name}
          role={role}
          img={img}
          bio={bio}
          github={github}
        />,
        document.body
      )}
      <div className="w-64">
        <div
          onClick={() => setShowPortfolio(true)}
          className="relative group cursor-pointer overflow-hidden rounded-full"
        >
          <img
            src={img}
            alt={name}
            className="w-full h-[260px] object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {role}
            </span>
          </div>
        </div>
        <span
          onClick={() => setShowPortfolio(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowPortfolio(true);
          }}
          className="text-center mt-4 font-semibold text-ink block cursor-pointer"
        >
          {name}
        </span>
      </div>
    </>
  );
}