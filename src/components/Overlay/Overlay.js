import { useState, useEffect } from 'react';
import './Overlay.scss';

export const Overlay = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  const element = document.getElementById('root');

  element.classList.add('overlay');
  element.style.setProperty('--cursorX', globalCoords.x + 'px');
  element.style.setProperty('--cursorY', globalCoords.y + 'px');

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.clientX || 1 || event.touches[0].clientX,
        y: event.clientY || 1 || event.touches[0].clientY,
      });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      element.removeAttribute('class');
      element.removeAttribute('style');
    };
  }, []);
};
