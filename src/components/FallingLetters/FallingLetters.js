import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FallingLetters.scss';

// TODO: try to rework (string + span for one char)

export const FallingLetters = (props) => {
  const {
    children,
    interval = 100,
    className = '',
    activated = true,
    delay = 0,
    reverse, // TODO: ADD THIS FUNC
  } = props;
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  const arrayFromSting = Array.from(children);

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
    <div className={`falling_letters-wrapper ${activated} ${started}`}>
      {arrayFromSting.map((char, i) => (
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

FallingLetters.propTypes = {
  activated: PropTypes.bool,
  interval: PropTypes.number,
  className: PropTypes.string,
  delay: PropTypes.number,
};
