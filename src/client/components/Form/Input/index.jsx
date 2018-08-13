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
  value,
  onChange,
  children,
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
          title={title}
          placeholder={title}
          validation={validation}
          className={` ${style.input} inp inp-${name}`}
          value={value}
          onChange={onChange}
        />
        {children}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

Input.defaultProps = {
  validation: '',
  required: false,
  value: '',
  children: <span />,
  onChange: () => {},
};
export default Input;
