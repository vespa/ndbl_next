import React from 'react';
import cssMain from '../../../scss/main.scss';
import css from './style.scss';
import MenuItem from './MenuItem';
import SearchBox from '../SearchBox';
import MessageBox from '../MessageBox';


export const MenuOptions = () => (
  <React.Fragment>
    <MenuItem href="/" text="Home" />
    <MenuItem href="/about" text="About" />
  </React.Fragment>
);

export const Logo = () => (
  <div
    className={`
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
);

const Menu = () => (
  <React.Fragment>
    <nav className={`${css['main-menu']}`}>
      <div className={`${cssMain.col_2}`}>
        <Logo />
      </div>
      <div className={cssMain.col_6}>
        <MenuOptions />
      </div>
      <div className={cssMain.col_3}>
        <SearchBox />
      </div>
      <div className={cssMain.col_1}>
        <MessageBox />
      </div>
    </nav>
    <nav className={`${css['main-menu-mobile']}`}>
      <div className={`${cssMain.m_col_4}`}>
        <button
          type="button"
          className={`
            ${css['main-menu-mobile__button']}
            ${cssMain.icon}
            ${cssMain.icon__menu}
          `}
        >
          Menu
        </button>
        <div className={`${css['main-menu-mobile__options']}`}>
          <MenuOptions />
        </div>
      </div>
      <div className={`${cssMain.m_col_4}`}>
        <Logo />
      </div>
    </nav>
  </React.Fragment>
);

export default Menu;
