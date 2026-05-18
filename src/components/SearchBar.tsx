interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-4 py-2 w-full max-w-[220px] rounded-lg border border-blue-500/25 bg-blue-900/5 text-white text-sm outline-none focus:border-blue-500/60 focus:bg-blue-900/10 transition placeholder-zinc-500"
    />
  );
}
