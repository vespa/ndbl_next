
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './style.scss';

const FooterMenu = ({ title, links }) => {
  return (
    <React.Fragment>
      <h3 className={css['footer-menu__title']}>{title}</h3>
      <ul className={css['footer-menu__list']}>
        {links.map(item => <li key={item.text}><Link href={item.href}>{item.text}</Link> </li>)}
      </ul>
    </React.Fragment>
  );
};

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FooterMenu;
