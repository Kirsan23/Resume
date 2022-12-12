import { useState, useEffect } from 'react';
import './Overlay.scss';

export const Overlay = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const rootElement = document.getElementById('root');

  rootElement.classList.add('overlay');
  rootElement.style.setProperty('--cursorX', globalCoords.x + 'px');
  rootElement.style.setProperty('--cursorY', globalCoords.y + 'px');

  useEffect(() => {
    const handleCursorMove = (event) => {
      setGlobalCoords({
        x: event.clientX || 1 || event.touches[0].clientX,
        y: event.clientY || 1 || event.touches[0].clientY,
      });
    };

    window.addEventListener('mousemove', handleCursorMove);

    return () => {
      window.removeEventListener('mousemove', handleCursorMove);
      rootElement.removeAttribute('class');
      rootElement.removeAttribute('style');
    };
  }, []);
};
