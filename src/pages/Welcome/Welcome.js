import { TypingText } from '../../components/TypingText';
import './Welcome.scss';

import { FallingLetters } from '../../components/FallingLetters';

export const Welcome = () => {
  const welcome = 'Wake up...';

  return (
    <section className='welcome'>
      <div className='border'>
        <a className='container' href='/resume'>
          {/* <FallingLetters interval={500}>{welcome}</FallingLetters> */}
          <TypingText component='h1'>{welcome}</TypingText>
        </a>
      </div>
    </section>
  );
};
