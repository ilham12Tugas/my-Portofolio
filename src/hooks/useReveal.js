import { useEffect } from "react";

/**
 * Menambahkan class "show" pada elemen ber-class "reveal" saat masuk viewport.
 * Dipanggil sekali di level App setelah semua section ter-render.
 */
export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
