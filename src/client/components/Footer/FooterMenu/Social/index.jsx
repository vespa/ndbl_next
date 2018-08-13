
import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import cssMain from '../../../../../scss/main.scss';

const FooterMenuSocial = ({ title }) => {
  return (
    <React.Fragment>
      <h3 className={css['footer-menu__title']}>{title}</h3>
      <ul className={css['footer-menu__list']}>
        {/* {links.map(item => <li key={item.text}><a href={item.href}>{item.text}</a> </li>)} */}
        <ul className={cssMain.col_6}>
          teste
        </ul>
        <ul className={cssMain.col_6}>
          teste
        </ul>
      </ul>
    </React.Fragment>
  );
};

FooterMenuSocial.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FooterMenuSocial;
