import { useEffect } from "react";

export function useCardTilt(refreshKey) {
    useEffect(() => {
      const cards = Array.from(document.querySelectorAll('.card'));
      const listeners = [];

      cards.forEach((card) => {
        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -7;
          const rotateY = ((x - centerX) / centerX) * 7;

          card.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const onLeave = () => {
          card.style.transform = '';
        };

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);

        listeners.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });
      });

      return () => listeners.forEach((cleanup) => cleanup());
    }, [refreshKey]);
  }
