import React, { useState, useEffect, useRef } from 'react';

export const TypingText = (props: any) => {
  const {
    children,
    component = 'h2',
    interval = 100,
    className = '',
  }: {
    children: string;
    component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
    interval: number;
    className: string;
  } = props;
  const [string, setString] = useState<string>('');
  const Tag = component;
  const index = useRef<number>(0);

  useEffect(() => {
    const print = (): void => {
      setString(string + children[index.current]);
      index.current++;
    };

    if (index.current < children.length) {
      const intervalId: NodeJS.Timer = setInterval(print, interval);
      return () => clearInterval(intervalId);
    }
  }, [string]);

  return <Tag className={`${className || 'typing_text'}`}>{string}</Tag>;
};
