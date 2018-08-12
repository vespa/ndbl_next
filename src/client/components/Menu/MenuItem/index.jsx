import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import cssMain from '../../../../scss/main.scss';

const MenuItem = ({ href, text }) => {
  return (
    <Link href={href}>
      <a href={href} className={`${cssMain.col_3}`}>
        {text}
      </a>
    </Link>
  );
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
