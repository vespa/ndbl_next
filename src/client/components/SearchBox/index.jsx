import React from 'react';
import css from './style.scss';
import cssMain from '../../../scss/main.scss';

const SearchBox = () => {
  return (
    <div className={css['search-box']}>
      <form>
        <input type="search" className={css['search-box__input']} />
        <button
          type="submit"
          className={`
            ${cssMain.icon}
            ${cssMain.icon__search}
            ${css['search-box__button']}
          `}
        >
        search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
