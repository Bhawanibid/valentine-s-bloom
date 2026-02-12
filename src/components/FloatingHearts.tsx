import { Heart } from "lucide-react";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 12 + Math.random() * 20,
  duration: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 6}s`,
  opacity: 0.15 + Math.random() * 0.25,
}));

const FloatingHearts = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {hearts.map((h) => (
      <div
        key={h.id}
        className="absolute animate-float-heart"
        style={{
          left: h.left,
          "--duration": h.duration,
          "--delay": h.delay,
          opacity: h.opacity,
        } as React.CSSProperties}
      >
        <Heart
          size={h.size}
          className="fill-primary/40 text-primary/30"
        />
      </div>
    ))}
  </div>
);

export default FloatingHearts;
