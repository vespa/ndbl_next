import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import Input from './Input';
import cssMain from '../../../scss/main.scss';
import Validation from '../Validation';
import css from './style.scss';

class Form extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      validate: false,
      action: 'http://localhost:5000/api/contact',
    };
    this._generateInputs = this._generateInputs.bind(this);
    this._updateFieldValue = this._updateFieldValue.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._blurCheckValidation = this._blurCheckValidation.bind(this);
  }

  componentDidMount() {
    this._checkIfJSisActive();
  }

  _checkIfJSisActive() {
    const validate = (typeof window !== 'undefined');
    this.setState({ validate });
  }

  _updateFieldValue(field) {
    return (e) => {
      this._removeErrorClass(e.target);
      this.setState({ [field]: e.target.value }, () => {
      });
    };
  }

  _removeErrorClass(item) {
    const errorClass = css['form__input--error'];
    const currentClass = item.getAttribute('class').replace(errorClass, '').trim();
    item.setAttribute('class', `${currentClass}`);
  }

  _addErrorClass(item) {
    const errorClass = css['form__input--error'];
    const currentClass = item.getAttribute('class');
    item.setAttribute('class', `${currentClass} ${errorClass}`);
  }

  _submit(data) {
    fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        Router.push('/success');
      }
    });
  }

  _onSubmit(e) {
    e.preventDefault();
    const items = e.target.querySelectorAll('input, textarea, select');
    const success = {};
    let send = true;
    [].slice.call(items).map((item) => {
      if (item.getAttribute('required') !== null && !Validation.check(item)) {
        this._addErrorClass(item);
        send = false;
      }
      success[item.name] = item.value;
      return item;
    });
    if (send) {
      this._submit(success);
    }
  }

  _blurCheckValidation(e) {
    const item = (e.target);
    if (!Validation.check(item)) {
      this._addErrorClass(item);
    }
  }

  _generateInputs(division, items) {
    return items.map((item) => {
      const {
        title, name, type, required = false, validation = '', Comp, value,
      } = item;
      return (
        <React.Fragment key={name}>
          <span className={`${division}`}>
            <Comp
              title={title}
              name={name}
              type={type}
              required={required}
              validation={validation}
              value={value}
              onChange={this._updateFieldValue(name)}
              onBlur={this._blurCheckValidation}
            >
              <div className={css['form__input__error-message']}>
                {title} {Validation.getMessage(validation)}
              </div>
            </Comp>
          </span>
        </React.Fragment>
      );
    });
  }

  render() {
    const { validate } = this.state;
    const {
      email,
      name,
      lastName,
      sex,
      birthday,
      address,
      addressNumber,
      addressZip,
      action,
    } = this.state;
    return (
      <form method="post" action={action} onSubmit={this._onSubmit} noValidate={validate}>

        <h3>Personal details * </h3>
        <div className={`${cssMain.col_12}`}>
          {this._generateInputs(`${cssMain.col_6} ${css.form__inp}`, [
            {
              title: 'Name',
              name: 'name',
              type: 'text',
              required: true,
              validation: 'no-empty',
              value: name,
              Comp: Input,
            },
            {
              title: 'Last name',
              name: 'lastName',
              type: 'text',
              required: true,
              validation: 'no-empty',
              value: lastName,
              Comp: Input,
            },
          ])}
        </div>
        <div className={`${cssMain.col_12}`}>
          <div className={`
              ${cssMain.col_4}
              ${css['form__inp--multi']}
            `}
          >
            <select
              name="sex"
              value={sex}
              onChange={this._updateFieldValue('sex')}
              className={`${cssMain.col_12}`}
            >
              <option>
                Female
              </option>
              <option>
                Male
              </option>
              <option>
                Other
              </option>
            </select>
          </div>

          {this._generateInputs(`${cssMain.col_4} ${css['form__inp--multi']}`, [
            {
              title: 'birthday',
              name: 'birthday',
              type: 'text',
              required: true,
              validation: 'no-empty',
              value: birthday,
              Comp: Input,
            },
            {
              title: 'E-mail',
              name: 'email',
              type: 'email',
              required: true,
              validation: 'e-mail',
              value: email,
              Comp: Input,
            },

          ])}
        </div>
        <div className={`${cssMain.col_12}`}>
          {this._generateInputs(`${cssMain.col_4} ${css['form__inp--multi']}`, [
            {
              title: 'Adress',
              name: 'address',
              type: 'text',
              required: true,
              validation: 'no-empty',
              value: address,
              Comp: Input,
            },
            {
              title: 'Number',
              name: 'addressNumber',
              type: 'text',
              required: true,
              validation: 'no-empty',
              value: addressNumber,
              Comp: Input,
            },
            {
              title: 'ZIP',
              name: 'addressZip',
              type: 'text',
              required: true,
              validation: 'dutch-zip',
              value: addressZip,
              Comp: Input,
            },
          ])}
        </div>
        <div className={`${cssMain.col_12}`}>
          <button
            type="submit"
            className={`
              ${cssMain.btn}
              ${cssMain.btn__confirm}
              ${cssMain.col_5}
              ${cssMain.right}
            `}
          >
            send
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
