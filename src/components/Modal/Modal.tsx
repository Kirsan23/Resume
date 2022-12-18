import React, { useState, useEffect, useRef, Fragment } from 'react';
import { clickHandler, outsideClickHandler } from '../../utils';
import { createPortal } from 'react-dom';
import './Modal.scss';

export const Modal = (props: any): React.ReactPortal => {
  const {
    children,
    button,
    isOpen,
    onClose,
  }: {
    children: JSX.Element;
    button: string;
    isOpen: boolean;
    onClose: (value: boolean) => void;
  } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const destinationElement = document.querySelector('.resume') as Element;

  const close = (): void => onClose(false);
  const notState = (): void => setIsOpened(!isOpened);

  useEffect(() => {
    if (isOpen || isOpened) {
      const outsideClick = (event: MouseEvent) => {
        outsideClickHandler(ref, event, button ? notState : close);
      };

      document.addEventListener('click', outsideClick, true);

      return () => {
        document.removeEventListener('click', outsideClick, true);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
