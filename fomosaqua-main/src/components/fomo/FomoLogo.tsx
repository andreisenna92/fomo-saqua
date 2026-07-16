export function FomoLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-baseline gap-0.5 font-display font-black tracking-tight ${className}`}>
      <span className="text-brand-ink">F</span>
      <span className="relative">
        <span className="gradient-text">O</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 200deg, #6C2CF3, #FF6A3D, #FF8A00, #6C2CF3)",
            opacity: 0.12,
            filter: "blur(6px)",
          }}
        />
      </span>
      <span className="text-brand-ink">M</span>
      <span className="text-brand-ink">O</span>
    </div>
  );
}
