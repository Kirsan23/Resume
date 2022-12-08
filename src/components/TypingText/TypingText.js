import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const TypingText = (props) => {
  const { children, component = 'h2', interval = 100, className=null } = props;
  const [string, setString] = useState('');
  const Tag = component;
  const index = useRef(0);

  useEffect(() => {
    const print = () => {
      setString(string + children[index.current]);
      index.current++;
    };

    if (index.current < children.length) {
      const intervalId = setInterval(print, interval);
      return () => clearInterval(intervalId);
    }
  }, [string]);

  return (
    <Tag className={`${className || 'typing_text'}`}>{string}</Tag>
  );
};

TypingText.propTypes = {
  interval: PropTypes.number,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  className: PropTypes.string,
};
