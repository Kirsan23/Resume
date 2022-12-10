import { TypingText } from '../../components/TypingText';
import './Welcome.scss';

export const Welcome = () => {
  const welcome = 'Wake up...';

  return (
    <section className='welcome'>
      <div className='border'>
        <a className='container' href='/resume'>
          <TypingText component='h1'>{welcome}</TypingText>
        </a>
      </div>
    </section>
  );
};
