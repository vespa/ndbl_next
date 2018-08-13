
import React from 'react';
import PropTypes from 'prop-types';
import cssMain from '../../../../../../scss/main.scss';

const FooterMenuSocialSocialItem = ({ text, icon, href }) => {
  const classe = `icon__social--${icon}`;
  return (
    <li>
      <span className={`${cssMain[classe]} ${cssMain.icon__social} ${cssMain.icon}`}> {text} </span>
      <a href={href}> {text} </a>
    </li>
  );
};

FooterMenuSocialSocialItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FooterMenuSocialSocialItem;
