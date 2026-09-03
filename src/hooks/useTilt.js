import { useRef } from "react";

/**
 * Efek tilt 3D saat mouse bergerak di atas kartu (khusus desktop).
 * Mengembalikan ref untuk dipasang ke elemen + handler mousemove/mouseleave.
 */
export default function useTilt() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const card = ref.current;
    if (!card || window.matchMedia("(hover: none)").matches) return;
    const rect = card.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
