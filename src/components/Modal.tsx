import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") onClose(); }}
    >
      <div className="relative w-[92vw] max-w-[750px] max-h-[85vh] overflow-y-auto bg-black/90 p-6 rounded-2xl shadow-2xl transition-transform duration-200 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-500 hover:text-blue-300 z-10"
        >
          <X size={28} />
        </button>
        {children}
      </div>
    </div>
  );
}
