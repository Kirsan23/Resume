import React, { useEffect, useState } from 'react';
import './FallingLetters.scss';

// TODO: try to rework (string + span for one char)

export const FallingLetters = (props: any) => {
  const {
    children,
    interval = 100,
    className = '',
    activated = true,
    delay = 0,
    reverse, // TODO: ADD THIS FUNC
  }: {
    children: string;
    interval?: number;
    className?: string;
    activated?: boolean;
    delay?: number;
    reverse?: true;
  } = props;
  const [started, setStarted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const arrayFromSting: string[] = Array.from(children);

  if (activated) setTimeout(setStarted, delay, true);
  if (!activated && started) {
    setStarted(false);
    setIndex(0);
  }

  useEffect(() => {
    if (index < children.length && started) {
      const indexIncrease = () => {
        setIndex(index + 1);
      };
      const intervalId = setInterval(indexIncrease, interval);

      return () => clearInterval(intervalId);
    }
  }, [index || started]);

  return (
    <div className={`falling_letters-wrapper`}>
      {arrayFromSting.map((char: string, i: number) => (
        <span
          key={i}
          className={`${className} falling_letters ${
            i >= index ? 'up' : 'down'
          }`}
          style={{ marginRight: `${char === ' ' ? 5 : 0}px` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
