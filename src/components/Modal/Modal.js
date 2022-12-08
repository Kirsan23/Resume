import { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { clickHandler, outsideClickHandler } from '../../utils';
import { ThemeContext } from '../../components/ThemeContext';
import './Modal.scss';

export const Modal = (props) => {
  const { children, button, isOpen, onClose } = props;
  const [isOpened, setIsOpened] = useState(false);

  const ref = useRef(null);

  const closed = () => onClose(false);
  const notState = () => setIsOpened(!isOpened);
  const outsideClick = (event) => outsideClickHandler(ref, event, (button ? notState : closed));

  useEffect(() => {
    if (isOpen || isOpened) {
      document.addEventListener('click', outsideClick, true);
    }

    return () => document.removeEventListener('click', outsideClick, true);
  }, [isOpen || isOpened]);

  return (
    <Fragment>
      {button && (
        <button className='default_button' onClick={() => clickHandler(notState, isOpened)}>
          {button}
        </button>
      )}
      <div ref={ref} className={`modal ${isOpen || isOpened ? 'visible' : 'hidden'}`}>
        <button className='close_button' onClick={button ? () => clickHandler(notState) : () => onClose(false)}><span className='icon-cross'/></button>
        {children}
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  button: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

