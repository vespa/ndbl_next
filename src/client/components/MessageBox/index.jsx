import React from 'react';
// import css from './style.scss';
import cssMain from '../../../scss/main.scss';

const MessageBox = () => {
  return (
    <React.Fragment>
      <div
        className={`${cssMain.icon} ${cssMain.icon__message}`}
      >
      message
      </div>
    </React.Fragment>
  );
};

export default MessageBox;
