import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { blocked } from '../../redux/actions/portfolioCardBlocker';
import { useDispatch } from 'react-redux';
import { outsideClickHandler } from '../../utils';
import { clickHandler } from '../../utils';
import { FallingLetters } from '../FallingLetters';
import { ThemeContext } from '../ThemeContext';
import './PortfolioCard.scss';

export const PortfolioCard = (props: any) => {
  const { img, name, languages, link, description, index, length, isBlocked } = props;

  const [focused, setFocused] = useState(false);
  const [opened, setOpened] = useState(false);

  const ref = useRef(null);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const unfocus = () => setFocused(!focused);
  const outsideClick = (event: any) => outsideClickHandler(ref, event, unfocus);
  const insideClickHandler = () => {
    if (focused) return;

    setFocused(!focused);
    dispatch(blocked(true, index));
  };

  useEffect(() => {
    if (focused) {
      document.addEventListener('click', outsideClick, true);
      let timer = 0;

      const timerId = setInterval(() => {
        if (timer === 2000) return () => clearInterval(timerId);

        timer += 10;
      }, 10);

      dispatch(blocked(true, index));

      return () => {
        clearInterval(timerId);
        document.removeEventListener('click', outsideClick, true);
        setTimeout(dispatch, timer, blocked(false, index));
      };
    }
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
          } ${index === length - 1? 'last_card' : ''}`}
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
        {opened && <Modal isOpen={opened} onClose={() => setOpened(false)}>
          {description}
        </Modal>}
      </div>
  );
};

// PortfolioCard.propTypes = {
//   name: PropTypes.string,
//   img: PropTypes.string,
//   languages: PropTypes.string,
//   link: PropTypes.string,
//   description: PropTypes.element,
//   index: PropTypes.number,
//   isBlocked: PropTypes.bool,
// };
