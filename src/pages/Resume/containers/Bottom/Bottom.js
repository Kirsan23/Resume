import { useSelector } from 'react-redux';
import { Tabs } from '../../../../components/Tabs';
import { ThemeContext } from '../../../../components/ThemeContext';
import { PortfolioCard } from '../../../../components/PortfolioCard';
import { nanoid } from 'nanoid';
import { Fragment, useContext, useRef } from 'react';
import './Bottom.scss';

export const Bottom = () => {
  const EXPERIENCE = useRef({
    eng: {
      title: 'EXPERIENCE',
      data: [
        {
          subtitle: 'WORK EXPERIENCE',
          subData: [
            {
              id: nanoid(),
              place: 'Account Manager | EK.ua',
              description:
                'Communication and customer acquisition, clients registration in the CRM system.',
              date: 'Apr 2016 – present',
            },
            {
              id: nanoid(),
              place: 'Connection Technician | CJSC "Volia-cable"',
              description:
                'Attraction and connection of new subscribers, maintenance of existing ones.',
              date: 'Dec 2012 – Apr 2016',
            },
            {
              id: nanoid(),
              place:
                'System Administrator | Embassy of the Kingdom of Denmark in Ukraine',
              description:
                'Network laying and diagnostics, troubleshooting, maintenance of equipment.',
              date: 'Jun 2012 – Dec 2012',
            },
            {
              id: nanoid(),
              place: 'Call Center Consultant | PJSC "Kyivstar GSM"',
              description:
                'Service maintenance of subscribers, direct sale of services by a telephone conversation.',
              date: 'Sept 2010 – Nov 2011',
            },
          ],
        },
        {
          subtitle: 'EDUCATION',
          subData: [
            {
              id: nanoid(),
              place: 'Dnipropetrovsk Radio Instrument Engineering College',
              description:
                'Faculty of Computer Networks and SystemsMaintenance',
              date: '2008 – 2013',
            },
            {
              id: nanoid(),
              place: 'Educational complex №28',
              date: '2000 - 2008',
            },
          ],
        },
      ],
    },
    ua: {
      title: 'ДОСВІД',
      data: [
        {
          subtitle: 'ДОСВІД РОБОТИ',
          subData: [
            {
              id: nanoid(),
              place: 'Аккаунт Менеджер | EK.ua',
              description:
                'Спілкування та залучення клієнтів, реєстрація клієнтів в CRM системі.',
              date: 'Квітень 2016 – зараз',
            },
            {
              id: nanoid(),
              place: 'Технік з підключення | ЗАТ "Воля-кабель"',
              description:
                'Залучення та підключення нових абонентів, обслуговування існуючих.',
              date: 'Грудень 2012 – Квітень 2016',
            },
            {
              id: nanoid(),
              place:
                'Системний адміністратор | Посольство Королівства Данії в Україні',
              description:
                'Прокладання та діагностика мереж, усунення несправностей, обслуговування обладнання.',
              date: 'Червень 2012 – Грудень 2012',
            },
            {
              id: nanoid(),
              place: 'Консультант кол-центру | ПАТ "Київстар GSM"',
              description:
                'Сервісне обслуговування абонентів, прямий продаж послуг по телефонній розмові.',
              date: 'Вересень 2010 – Листопад 2011',
            },
          ],
        },
        {
          subtitle: 'ОСВІТА',
          subData: [
            {
              id: nanoid(),
              place: 'Дніпропетровський радіоприладобудівний коледж',
              description: `Факультет обслуговування комп'ютерних мереж і систем`,
              date: '2008 – 2013',
            },
            {
              id: nanoid(),
              place: 'Навчально-виховний комплекс №28',
              date: '2000 - 2008',
            },
          ],
        },
      ],
    },
  }).current;
  const GOALS = useRef({
    eng: {
      title: 'GOALS',
      data: [
        {
          id: nanoid(),
          description:
            'A position in a forward-looking company that will allow me to develop as a programmer.',
        },
        {
          id: nanoid(),
          description:
            'Acquisition of new knowledge and skills in development.',
        },
        {
          id: nanoid(),
          description:
            'Professional and personal growth in a friendly working atmosphere.',
        },
      ],
    },
    ua: {
      title: 'ЦІЛІ',
      data: [
        {
          id: nanoid(),
          description:
            'Посада в перспективній компанії, яка дозволить мене розвивати як програміста.',
        },
        {
          id: nanoid(),
          description: 'Придбання нового знання та вміння в розвитку.',
        },
        {
          id: nanoid(),
          description:
            'Професійний і особистісне зростання в дружній робочій атмосфері.',
        },
      ],
    },
  }).current;
  const PORTFOLIO = useRef({
    eng: {
      title: 'PORTFOLIO',
      data: [
        {
          id: nanoid(),
          name: 'STAGE 1',
          languages: 'HTML - CSS - JavaScript',
          link: 'https://github.com/Kirsan23/Stage-1',
          description: (
            <Fragment>
              <h2 className='title'>The first experience</h2>
              <p className='paragraph'>
                It all started with the one-week Front-End development marathon
                in Ukrainian IT school. As part of the marathon, we had to
                create a CV page, according to the layout from Figma.com. Even
                during the marathon, I became very interested in the additional
                features of HTML and CSS. The marathon was over, but the
                interest was only growing.
              </p>
              <p className='paragraph'>
                I am so lucky that I have a friend who has been working as a
                Front-End developer for many years. So, I decided to ask
                questions and consult with him.
              </p>
              <p className='paragraph'>
                My friend suggested to make another maquette from the Figma
                website, but already with him as a mentor. Of course, I couldn't
                refuse, because I was very interested. That's how the project
                with the simple name 'Stage 1' has appeared.
              </p>
              <p className='paragraph-sub'>
                I learned a lot while working on this project. For example, I
                studied pseudo-elements and pseudo-classes better, I started to
                get acquainted with simple animations, learned additional HTML
                capabilities.
              </p>
              <p className='paragraph'>
                To make a mobile version of the page I dealt with media
                requests.
              </p>
              <p className='paragraph'>
                It gradually came to JavaScript. And at that moment I realized
                that everything is more interesting than it seemed to me before.
              </p>
              <p className='paragraph-sub'>
                At this project, the presence of JS was kept to a minimum
                because there was practically no need for it.
              </p>
              <p className='paragraph'>
                But the key achievement of this project was that I became even
                more interested (the number of open tabs with requests for "how
                to do "something" on Google was inexorably increasing).
              </p>
            </Fragment>
          ),
          img: require('../../../../img/stage1.png'),
        },
        {
          id: nanoid(),
          name: 'STAGE 2',
          languages: 'JavaScript (React) - SCSS',
          link: 'https://github.com/Kirsan23/Stage-2',
          description: (
            <Fragment>
              <h2 className='title'>Acquaintance with React</h2>
              <p className='paragraph'>
                One day my mentor told me - "Finish with this layout and let's
                move on"
              </p>
              <p className='paragraph'>
                The task for the new project was to get acquainted with the
                library for JS - React and the transition from CSS to SASS (for
                experiments, a new layout was taken from the Figma site).
              </p>
              <p className='paragraph-sub'>
                Half an hour on YouTube + a few (dozens) of open tabs with
                Google searches and I got down to business.
              </p>
              <p className='paragraph'>
                It was difficult at first, but it only made me more interested,
                because I always get more interested when I don't understand
                something and I need to figure out how it works.
              </p>
              <p className='paragraph'>
                Gradually, I got acquainted with the structure of the React
                project, with hooks (useState, useRef, useEffect and
                useCallback), I began to understand the specifics of React work
                (when renderings take place, etc.), I tried (successfully) to
                use Context (to change themes) and became friends with SASS.
              </p>
              <p className='paragraph'>
                Once, when I already "felt my strength" a little, I decided to
                try to write my own slider for one of the components (in the
                first project, I used the ready-made slider code and simply
                rewrote it a little for my needs). I was very happy when
                something working came out.
              </p>
              <p className='paragraph'>
                Then my friend named "Mentor", advised me to study server
                requests. He offered me several API options so that I could
                request data there - this is how I got acquainted with
                asynchronous functions in JS and learned how to process GET
                requests.
              </p>
              <p className='paragraph-sub'>The next step was Redux...</p>
              <p className='paragraph-sub'>
                Although I understood how it works, I couldn't figure out how to
                add Redux to the project.
              </p>
              <p className='paragraph'>
                But this beast was also defeated. I used RTK (Redux Toolkit for
                GET requests).
              </p>
              <p className='paragraph'>
                In this project, I learned a lot for myself and was very
                inspired by the React library. The combination of HTML and JS is
                exactly what I am very interested in working with.
              </p>
            </Fragment>
          ),
          img: require('../../../../img/stage2.png'),
        },
      ],
    },
    ua: {
      title: 'ПОРТФОЛІО',
      data: [
        {
          id: nanoid(),
          name: 'STAGE 1',
          languages: 'HTML - CSS - JavaScript',
          link: 'https://github.com/Kirsan23/Stage-1',
          description: (
            <Fragment>
              <h2 className='title'>Перший досвід</h2>
              <p className='paragraph'>
                Почалося все з того, що одна з IT-шкіл набирала учасників на
                тижневий марафон із Front-End розробки. У рамках марафону
                потрібно було зверстати сторінку-резюме, згідно з макетом на
                сайті Figma.com. Ще під час марафону я став цікавитися
                додатковими можливостями HTML та СSS. Марафон закінчився, а
                інтерес тільки зростав.
              </p>
              <p className='paragraph'>
                Мені дуже пощастило з тим, що у мене є друг, який дуже добре
                розуміється на Front-End розробці. Саме до нього я і звернувся,
                щоб поставити запитання та порадитись.
              </p>
              <p className='paragraph'>
                Друг запропонував мені зробити ще один макет із сайту Figma, але
                вже під його менторством. Звичайно ж, я не став відмовляти, тому
                що мені було дуже цікаво – так і з'явився проект під нехитрою
                назвою 'Stage 1'.
              </p>
              <p className='paragraph-sub'>
                Під час роботи із цим проектом я дізнався багато нового.
                Наприклад, я краще вивчив псевдоелементи та псевдокласи, почав
                знайомитися з простими анімаціями, дізнався, що ще можна робити
                за допомогою HTML.
              </p>
              <p className='paragraph'>
                Додатково розібрався з медіа-запитами, щоб зробити мобільну
                версію сторінки.
              </p>
              <p className='paragraph'>
                У якийсь момент справа поступово підійшла до JavaScript. І в цю
                мить я зрозумів, що все ще цікавіше, ніж мені здавалося раніше.
              </p>
              <p className='paragraph-sub'>
                У цьому проекті присутність JS була зведена до мінімуму, тому що
                в ньому практично не було потреби.
              </p>
              <p className='paragraph'>
                Але ключовим досягненням цього проекту стало те, що я
                зацікавився ще більше (кількість відкритих вкладок із запитами
                «як зробити «щось» у Google невблаганно зростала).
              </p>
            </Fragment>
          ),
          img: require('../../../../img/stage1.png'),
        },
        {
          id: nanoid(),
          name: 'STAGE 2',
          languages: 'JavaScript (React) - SCSS',
          link: 'https://github.com/Kirsan23/Stage-2',
          description: (
            <Fragment>
              <h2 className='title'>Знайомство з React</h2>
              <p className='paragraph'>
                Якоїсь миті друг мені сказав - "Закінчуй з цим макетом і підемо
                далі".
              </p>
              <p className='paragraph'>
                Завдання на новий проект полягало в тому, щоб познайомитися з
                бібліотекою для JS - React і перехід від CSS до SASS (для
                дослідів було взято новий макет із сайту Figma).
              </p>
              <p className='paragraph-sub'>
                Півгодини на YouTube + пара (десятків) відкритих вкладок з
                пошуковими запитами в Google і я приступив до справи.
              </p>
              <p className='paragraph'>
                Спочатку було складно, але це лише посилювало інтерес, тому що
                мені завжди стає цікавіше, коли я щось не розумію і мені
                потрібно розібратися, як це працює.
              </p>
              <p className='paragraph'>
                Поступово я познайомився зі структурою React-проекту, з хуками
                (useState, useRef, useEffect і useCallback), потроху почав
                вникати в специфіку роботи React (коли відбуваються рендери і
                т.д.), спробувал (вдало) використати Context (для зміни тем) та
                потоваришував із SASS.
              </p>
              <p className='paragraph'>
                У якийсь момент, коли я вже трохи "відчув у собі сили", я
                вирішив спробувати написати свій власний слайдер для одного з
                компонентів (у першому проекті я використав вже готовий код
                слайдера і просто трохи переписав його під свої потреби). Дуже
                зрадів, коли вийшло щось робоче.
              </p>
              <p className='paragraph'>
                Далі мій дуг на прізвисько "Ментор" порадив мені ознайомитися з
                серверними запитами і для цього запропонував мені кілька
                варіантів API, щоб я міг запитувати там дані - так я
                познайомився з асинхронними функціями в JS і навчився обробляти
                GET-запити.
              </p>
              <p className='paragraph-sub'>Наступною порадою став Redux...</p>
              <p className='paragraph-sub'>
                Хоча я зрозумів принцип дії, я не міг зрозуміти, як мені додати
                Redux до проекту.
              </p>
              <p className='paragraph'>
                Але і цього звіра вдалося здолати. Я використав RTK (Redux
                Toolkit для GET-запитів).
              </p>
              <p className='paragraph'>
                У цьому проекті я дізнався для себе багато нового і дуже
                перейнявся бібліотекою React. Поєднання HTML та JS – це саме те,
                з чим мені дуже цікаво працювати.
              </p>
            </Fragment>
          ),
          img: require('../../../../img/stage2.png'),
        },
      ],
    },
  }).current;
  const LANGUAGES = useRef({
    eng: {
      title: 'LANGUAGES',
      data: [
        { id: nanoid(), description: 'English – pre-intermediate' },
        { id: nanoid(), description: 'Ukrainian – native' },
        { id: nanoid(), description: 'Russian – native' },
      ],
    },
    ua: {
      title: 'МОВИ',
      data: [
        { id: nanoid(), description: 'English – pre-intermediate' },
        { id: nanoid(), description: 'Ukrainian – native' },
        { id: nanoid(), description: 'Russian – native' },
      ],
    },
  }).current;
  const language = useSelector((state) => state.languages.language);
  const { theme } = useContext(ThemeContext);
  const isBlocked = useSelector((state) => state.portfolioCardsState.blocked);

  return (
    <section className={`bottom ${theme}-mode`}>
      <div className='wrapper'>
        <Tabs
          titles={[
            EXPERIENCE[language].title,
            GOALS[language].title,
            LANGUAGES[language].title,
            PORTFOLIO[language].title,
          ]}
        >
          <div className='experience'>
            {EXPERIENCE[language].data.map(({ subData, subtitle }) => (
              <Fragment key={subtitle}>
                <h2 className='title'>{subtitle}</h2>
                <ul className='list'>
                  {subData.map(({ id, place, description, date }) => (
                    <li key={id} className='list-item'>
                      <h3 className='place'>{place}</h3>
                      <p className='description'>{description}</p>
                      <p className='date'>{date}</p>
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </div>
          <ul className='list'>
            {GOALS[language].data.map(({ id, description }) => (
              <li key={id} className='list-item'>
                {description}
              </li>
            ))}
          </ul>
          <ul className='list'>
            {LANGUAGES[language].data.map(({ id, description }) => (
              <li key={id} className='list-item'>
                {description}
              </li>
            ))}
          </ul>
          <div className='portfolio'>
            {PORTFOLIO[language].data.map(
              ({ id, name, img, link, description, languages }, index) => (
                <PortfolioCard
                  key={id}
                  name={name}
                  img={img}
                  languages={languages}
                  link={link}
                  index={index}
                  length={PORTFOLIO[language].data.length}
                  description={description}
                  isBlocked={index === isBlocked ? true : false}
                />
              )
            )}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
