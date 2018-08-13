import React from 'react';
// import PropTypes from 'prop-types';
import cssMain from '../../../scss/main.scss';
import css from './style.scss';


const HelpBox = () => {
  return (
    <aside className={`
      ${css['help-box']}  ${css['help-box--bg']} ${cssMain.col_12} 
    `}
    >
      <div className={`${cssMain.container}`}>
        <div className={` ${cssMain.col_12} ${css['help-box__content']}`}>
          <div className={` ${cssMain.col_6}`}>
            <h3 className={cssMain['title--box']}>xxxx</h3>
          </div>
          <div className={` ${cssMain.col_6}`}>
            <h3 className={cssMain['title--box']}>xxxx</h3>
          </div>
        </div>
      </div>
    </aside>
  );
};

// HelpBox.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string,
//   img: PropTypes.string.isRequired,
// };
HelpBox.defaultProps = {
  subtitle: '',
};

export default HelpBox;
