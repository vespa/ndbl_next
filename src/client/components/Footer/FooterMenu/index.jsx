
import React from 'react';
import PropTypes from 'prop-types';
// import css from './style.scss';
const FooterMenu = ({ title, links }) => {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <ul>
        {links.map(item => <li key={item.text}><a href={item.href}>{item.text}</a> </li>)}
      </ul>
    </React.Fragment>
  );
};

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FooterMenu;
