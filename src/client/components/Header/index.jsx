import React from 'react';
import css from './style.scss';

const Index = () => (
  <header className={css.header}>
    <div className={css.header__opening}>
      <div className={`${css['header__opening__box--opacity']} ${css.header__opening__box} `} />
      <div className={css.header__opening__box}>
        <h1>Purchasing assistant</h1>
        <h2>Amsterdam, the Netherlands</h2>
      </div>
    </div>
  </header>
);

export default Index;
