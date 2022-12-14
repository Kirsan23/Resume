import React from 'react'
import { TypingText } from '../../components';
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
