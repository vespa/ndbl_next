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
          <div className={` ${cssMain.col_6} ${css['help-box__content__col']}`}>
            <h3 className={cssMain['title--box']}>
              Application procedure
            </h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Morbi dapibus sem et magna porta, a cursus justo eleifend.</li>
              <li>Mauris nec elit sed lacus viverra blandit at ut erat.</li>
              <li>Aenean sollicitudin lacus vel sem convallis semper.</li>
            </ul>
            <a href="/">Continue Reading</a>
          </div>
          <div className={` ${cssMain.col_6} ${css['help-box__content__col']}`}>
            <h3 className={cssMain['title--box']}>
              Got a question?
            </h3>
            <strong>Please contact recruitment</strong>
            <p>
              T. +31 20 123 456 78 <br />
              Or <u><a href="mailto:a@a.com">send us an email</a></u>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

HelpBox.defaultProps = {
  subtitle: '',
};

export default HelpBox;
