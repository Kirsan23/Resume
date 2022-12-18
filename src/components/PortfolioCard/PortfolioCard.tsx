import React, { useState, useRef, useEffect, useContext } from 'react';
import { outsideClickHandler } from '../../utils';
import { clickHandler } from '../../utils';
import { ThemeContext, Modal, FallingLetters } from '../../components';
import './PortfolioCard.scss';

import { useAppDispatch } from '../../redux/hooks';
import { blocked, unblocked } from '../../redux/slices/portfolioCardSlice';

export const PortfolioCard = (props: any): JSX.Element => {
  const {
    img,
    name,
    languages,
    link,
    description,
    index,
    length,
    isBlocked,
  }: {
    img: string;
    name: string;
    languages: string;
    link: string;
    description: string;
    index: number;
    length: number;
    isBlocked: boolean;
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  const unfocus = (): void => setFocused(!focused);
  const outsideClick = (event: MouseEvent): void =>
    outsideClickHandler(ref, event, unfocus);
  const insideClickHandler = () => {
    if (focused) return;

    setFocused(!focused);
    dispatch(blocked(index));
  };

  useEffect(() => {
    if (focused) {
      document.addEventListener('click', outsideClick, true);
      let timer: number = 0;

      const timerId: NodeJS.Timer = setInterval(() => {
        if (timer === 2000) return () => clearInterval(timerId);

        timer += 10;
      }, 10);

      dispatch(blocked(index));

      return () => {
        clearInterval(timerId);
        document.removeEventListener('click', outsideClick, true);
        setTimeout(dispatch, timer, unblocked());
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  return (
    <div
      ref={ref}
      onClick={isBlocked ? undefined : () => insideClickHandler()}
      className={`portfolio_card ${focused ? 'focused' : 'unfocused'} ${
        isBlocked ? 'blocked' : 'unlocked'
      } ${
        index === 0 || !(index % 2) ? 'left_card' : 'right_card'
      } ${theme}-mode`}
    >
      <div
        className={`description ${focused ? 'focused' : 'unfocused'} ${
          index === 0 || !(index % 2) ? 'left_card' : 'right_card'
        } ${index === length - 1 ? 'last_card' : ''}`}
      >
        <FallingLetters
          activated={focused ? true : false}
          delay={1000}
          className='name'
        >
          {name}
        </FallingLetters>
        <p className='languages'>{languages}</p>
        <button className='about_button' onClick={() => setOpened(true)}>
          About
        </button>
        <a className='link' href={link}>
          Show on GitHub
        </a>
        <button
          className='close_button'
          onClick={() => clickHandler(unfocus, !focused)}
        >
          <span className='icon-arrow_back' />
        </button>
      </div>
      <div className='main'>
        <img src={img} className='main' alt='pet project' />
      </div>
      {opened && (
        <Modal isOpen={opened} onClose={() => setOpened(false)}>
          {description}
        </Modal>
      )}
    </div>
  );
};
