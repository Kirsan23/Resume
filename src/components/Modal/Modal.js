import { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { clickHandler, outsideClickHandler } from '../../utils';
import { createPortal } from 'react-dom';
import './Modal.scss';

export const Modal = (props) => {
  const { children, button, isOpen, onClose } = props;
  const [isOpened, setIsOpened] = useState(false);

  const ref = useRef(null);
  const destinationElement = document.querySelector('.resume');

  const close = () => onClose(false);
  const notState = () => setIsOpened(!isOpened);
  const outsideClick = (event) => {
    outsideClickHandler(ref, event, button ? notState : close);
  };

  useEffect(() => {
    if (isOpen || isOpened) {
      document.addEventListener('click', outsideClick, true);
    }

    return () => document.removeEventListener('click', outsideClick, true);
  }, [isOpen || isOpened]);

  return createPortal(
    <Fragment>
      {button && (
        <button
          className='default_button'
          onClick={() => clickHandler(notState, isOpened)}
        >
          {button}
        </button>
      )}
      <div
        ref={ref}
        className={`modal ${isOpen || isOpened ? 'visible' : 'hidden'}`}
      >
        <button
          className='close_button'
          onClick={button ? () => clickHandler(notState) : () => onClose(false)}
        >
          <span className='icon-cross' />
        </button>
        {children}
      </div>
    </Fragment>,
    destinationElement
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  button: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
