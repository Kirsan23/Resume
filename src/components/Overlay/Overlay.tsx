import { useState, useEffect } from 'react';
import './Overlay.scss';

export const Overlay = (): null => {
  const [globalCoords, setGlobalCoords] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: 0, y: 0 });
  const rootElement = document.getElementById('root') as HTMLDivElement;

  rootElement.classList.add('overlay');
  rootElement.style.setProperty('--cursorX', globalCoords.x + 'px');
  rootElement.style.setProperty('--cursorY', globalCoords.y + 'px');

  useEffect(() => {
    const handleCursorMove = (event: MouseEvent): void => {
      setGlobalCoords({
        x: event.clientX || 1,
        y: event.clientY || 1,
      });
    };

    window.addEventListener('mousemove', handleCursorMove);

    return () => {
      window.removeEventListener('mousemove', handleCursorMove);
      rootElement.removeAttribute('class');
      rootElement.removeAttribute('style');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null
};


