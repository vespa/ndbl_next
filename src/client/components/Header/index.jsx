import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';


const Header = ({ title, subtitle, img }) => {
  const imgClass = css[`header--${img}`];
  return (
    <header className={`
      ${css.header} ${imgClass}
    `}
    >
      <div
        className={css.header__opening}
      >
        <div className={`${css['header__opening__box--opacity']} ${css.header__opening__box} `} />
        <div className={css.header__opening__box}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string.isRequired,
};
Header.defaultProps = {
  subtitle: '',
};

export default Header;
