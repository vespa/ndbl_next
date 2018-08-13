import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import cssMain from '../../../../scss/main.scss';
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
  onBlur,
}) => {
  return (
    <div className={` ${cssMain.col_12}`}>
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
          className={` ${cssMain.col_12} ${css.input} inp inp-${name}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {children}
      </label>
    </div>
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
  onBlur: PropTypes.func,
  children: PropTypes.node,
};

Input.defaultProps = {
  validation: '',
  required: false,
  value: '',
  children: <span />,
  onChange: () => {},
  onBlur: () => {},
};
export default Input;
