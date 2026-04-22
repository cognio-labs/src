import { motion } from "motion/react";

export const DharmaChakra = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <circle cx="50" cy="50" r="48" strokeWidth="0.2" />
    <circle cx="50" cy="50" r="45" />
    <circle cx="50" cy="50" r="12" />
    <circle cx="50" cy="50" r="10" strokeWidth="0.2" />
    {[...Array(24)].map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="50"
        x2={50 + 45 * Math.cos((i * Math.PI) / 12)}
        y2={50 + 45 * Math.sin((i * Math.PI) / 12)}
        opacity={i % 3 === 0 ? 1 : 0.3}
      />
    ))}
    <circle cx="50" cy="50" r="40" strokeDasharray="1 2" opacity="0.5" />
  </svg>
);

export const LotusGeometry = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

export const SoundWave = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 40" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <motion.path
      d="M0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M0 20 Q 25 35, 50 20 T 100 20 T 150 20 T 200 20"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.2 }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </svg>
);

export const MandalaGrid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.2">
    <circle cx="50" cy="50" r="48" />
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="20" />
    {[...Array(24)].map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="50"
        x2={50 + 48 * Math.cos((i * Math.PI) / 12)}
        y2={50 + 48 * Math.sin((i * Math.PI) / 12)}
      />
    ))}
    <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
    <rect x="20" y="20" width="60" height="60" />
  </svg>
);
