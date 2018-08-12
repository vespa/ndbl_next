import React from 'react';
import css from './style.scss';
import cssMain from '../../../scss/main.scss';

const MessageBox = () => {
  return (
    <div className={`${css['message-box']}`}>
      <div
        className={`
          ${cssMain.col_6}
        `}
      >
        <div
          className={`
            ${cssMain.icon}
            ${cssMain.icon__message}
            ${cssMain.col_6}
          `}
        >
        message
        </div>
      </div>
      <div
        className={`
          ${css['message-box__counter']}
          ${cssMain.col_6}
        `}
      >
        1
      </div>
    </div>
  );
};

export default MessageBox;
