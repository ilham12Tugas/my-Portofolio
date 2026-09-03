import { useEffect, useState } from "react";

/**
 * Mengembalikan [ref, visible] — visible jadi true sekali saat elemen ref
 * masuk viewport, dipakai untuk memicu animasi lebar progress bar.
 */
export default function useSkillBars(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}
