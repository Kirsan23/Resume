import { useState, useRef, Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { blocked } from '../../redux/actions/PortfolioCardBlocker';
import { useDispatch } from 'react-redux';
import { clickHandler, outsideClickHandler } from '../../utils';
import { FallingLetters } from '../FallingLetters';
import { ThemeContext } from '../../components/ThemeContext';
import './PortfolioCard.scss';

export const PortfolioCard = (props) => {
  const { img, name, languages, link, description, index, length, isBlocked } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const unfocus = () => setIsFocused(!isFocused);
  const outsideClick = (event) => outsideClickHandler(ref, event, unfocus);
  const insideClickHandler = () => {
    if (isFocused) return;

    setIsFocused(!isFocused);
    dispatch(blocked(true, index));
  };

  console.log(`CARD WITH INDEX ${index} WAS RENDERED`); // TODO: REMOVE!!!
  console.log(length)

  useEffect(() => {
    if (isFocused) {
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
  }, [isFocused]);

  return (
    <Fragment>
      <div
        ref={ref}
        onClick={isBlocked ? null : () => insideClickHandler()}
        className={`portfolio_card ${isFocused ? 'focused' : 'unfocused'} ${
          isBlocked ? 'blocked' : 'unlocked'
        } ${
          index === 0 || !(index % 2) ? 'left_card' : 'right_card'
        } ${theme}-mode`}
      >
        <div
          className={`description ${isFocused ? 'focused' : 'unfocused'} ${
            index === 0 || !(index % 2) ? 'left_card' : 'right_card'
          } ${index === length - 1? 'last_card' : ''}`}
        >
          <FallingLetters
            activated={isFocused ? true : false}
            delay={200}
            className='name'
          >
            {name}
          </FallingLetters>
          <p className='languages'>{languages}</p>
          <button className='about_button' onClick={() => setIsOpen(true)}>
            About
          </button>
          <a className='link' href={link}>
            Show on GitHub
          </a>
          <button
            className='close_button'
            onClick={() => clickHandler(unfocus, !isFocused)}
          >
            <span className='icon-arrow_back' />
          </button>
        </div>
        <div className='main'>
          <img src={img} alt='pet project' />
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {description}
        </Modal>
      </div>
    </Fragment>
  );
};

PortfolioCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  languages: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.element,
  index: PropTypes.number,
  isBlocked: PropTypes.bool,
};
