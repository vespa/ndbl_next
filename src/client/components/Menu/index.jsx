import React from 'react';
import cssMain from '../../../scss/main.scss';
import css from './style.scss';
import MenuItem from './MenuItem';
import SearchBox from '../SearchBox';
import MessageBox from '../MessageBox';

const Index = () => (
  <nav className={`${css['main-menu']}`}>
    <div
      className={`
        ${cssMain.col_2}
        ${css['main-menu__logo']}
      `}
    >
      <div
        className={`
          ${css['main-menu__logo__img']}
          ${cssMain.icon}
          ${cssMain.icon__logo}
        `}
      >
        Logo
      </div>
    </div>
    <div className={cssMain.col_6}>
      <MenuItem href="/" text="Home" />
      <MenuItem href="/about" text="About" />
    </div>
    <div className={cssMain.col_3}>
      <SearchBox />
    </div>
    <div className={cssMain.col_1}>
      <MessageBox />
    </div>
  </nav>
);

export default Index;
