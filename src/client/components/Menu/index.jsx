import React from 'react';
import Link from 'next/link';
import cssMain from '../../../scss/main.scss';
import css from './style.scss';

const Index = () => (
  <nav className={`${css['main-menu']} ${cssMain.container}`}>
    <Link href="/">
      <a href="/" className={`${cssMain.col}`}>
      Home
      </a>
    </Link>
    <Link href="/test">
      <a href="/test" className={`${cssMain.col}`}>About</a>
    </Link>
  </nav>
);

export default Index;
