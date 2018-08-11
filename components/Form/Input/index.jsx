import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
/* eslint-env browser */
const Input = ({
  title,
  name,
  type,
  required,
  validation,
}) => {
  return (
    <Fragment>
      <label htmlFor={name}>
        <span style={{ display: 'none' }}>
          {title}
        </span>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={title}
          className={`${validation} ${style.input} inp inp-${name}`}
        />
      </label>
    </Fragment>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validation: PropTypes.string,
};

Input.defaultProps = {
  validation: '',
  required: false,
};
export default Input;
