import { useEffect, useState } from "react";

/**
 * Efek mengetik & menghapus bergantian untuk daftar kata.
 * @param {string[]} words
 */
export default function useTypingEffect(words) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = words[wordIndex];
      setTyped(currentWord.substring(0, charIndex));
      let speed = isDeleting ? 75 : 150;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
        speed = 900;
      }
      timeoutId = setTimeout(tick, speed);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, [words]);

  return typed;
}
