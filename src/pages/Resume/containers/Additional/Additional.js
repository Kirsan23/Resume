import { useRef, Fragment, useContext } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../../../components/ThemeContext';
import './Additional.scss';

export const Additional = () => {
  const SKILLS = useRef({
    eng: {
      data: [
        {
          subtitle: 'SOFT SKILLS',
          subData: [
            {
              id: nanoid(),
              item: 'Fast learner, responsible, purposeful, emotionally stable, proactive.',
            },
            {
              id: nanoid(),
              item: 'I easily find an approach to people, communicable.',
            },
            {
              id: nanoid(),
              item: 'Good team player, love to solve interesting tasks.',
            },
          ],
        },
        {
          subtitle: 'HARD SKILLS',
          subData: [
            {
              id: nanoid(),
              item: <abbr title='HyperText Markup Language'>HTML</abbr>,
            },
            {
              id: nanoid(),
              item: <abbr title='Cascading Style Sheets'>CSS</abbr>,
            },
            {
              id: nanoid(),
              item: (
                <abbr title='Syntactically Awesome Style Sheets'>SASS</abbr>
              ),
            },
            { id: nanoid(), item: 'JavaScript' },
            { id: nanoid(), item: 'React / Redux (Redux Toolkit)' },
            { id: nanoid(), item: 'GitHub' },
          ],
        },
      ],
    },
    ua: {
      data: [
        {
          subtitle: 'SOFT SKILLS',
          subData: [
            {
              id: nanoid(),
              item: 'Швидко навчаюсь, відповідальний, цілеспрямований, емоційно стійкий, ініціативний.',
            },
            {
              id: nanoid(),
              item: 'Легко знаходжу підхід до людей, комунікабельний.',
            },
            {
              id: nanoid(),
              item: 'Хороший командний гравець, люблю вирішувати цікаві завдання.',
            },
          ],
        },
        {
          subtitle: 'HARD SKILLS',
          subData: [
            {
              id: nanoid(),
              item: <abbr title='HyperText Markup Language'>HTML</abbr>,
            },
            {
              id: nanoid(),
              item: <abbr title='Cascading Style Sheets'>CSS</abbr>,
            },
            {
              id: nanoid(),
              item: (
                <abbr title='Syntactically Awesome Style Sheets'>SASS</abbr>
              ),
            },
            { id: nanoid(), item: 'JavaScript' },
            { id: nanoid(), item: 'React / Redux (Redux Toolkit)' },
            { id: nanoid(), item: 'GitHub' },
          ],
        },
      ],
    },
  }).current;
  const ABOUT_ME = useRef({
    eng: {
      title: 'ABOUT ME',
      description:
        'My innate interest in computers and experience with networks led me to the IT, where I want to realize all my potential. I test my nervous system by assembling puzzles, I calm it down by upgrading my computer. I love long walks. 30 km is a great opportunity to reflect on the frailty of life. Pathological predisposition to solve challenges.',
    },
    ua: {
      title: 'ПРО МЕНЕ',
      description:
        'Мій вроджений інтерес до комп’ютерів і досвід роботи з мережами привели мене в ІТ, де я хочу реалізувати весь свій потенціал. Свою нервову систему перевіряю, збираючи пазли, заспокоюю, оновлюючи комп’ютер. Я люблю довгі прогулянки. 30 км – чудова можливість поміркувати про слабкість життя. Патологічна схильність до вирішення завдань.',
    },
  }).current;

  const language = useSelector((state) => state.languages.language);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`additional ${theme}-mode`}>
      <h2 className='about_me'>{ABOUT_ME[language].title}</h2>
      <p className='description'>{ABOUT_ME[language].description}</p>
      <img src={require('../../../../img/photo.jpg')} alt='It`s me' />
      <div className='skills'>
        {SKILLS[language].data.map(({ subtitle, subData }) => (
          <Fragment key={subtitle}>
            <h3 className='title'>{subtitle}</h3>
            <ul className='list'>
              {subData.map(({ id, item }) => (
                <li key={id} className='list-item'>
                  {item}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
