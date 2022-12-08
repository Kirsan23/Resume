import { useState, useEffect } from 'react';
import './Overlay.scss';

export const Overlay = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: (event.clientX || 1) || event.touches[0].clientX,
        y: (event.clientY || 1) || event.touches[0].clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  return (
    <div
      className='overlay'
      style={{ "--cursorX": `${globalCoords.x}px`, "--cursorY": `${globalCoords.y}px` }}
    >
    </div>
  );
};
