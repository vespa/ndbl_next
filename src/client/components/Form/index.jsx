import React from 'react';
import Input from './Input';
import Validation from '../Validation';
import css from './style.scss';
/*
  name
  last name
  Citi
  email
  country
  telefone
  motivation
  atach resume, portfolio, photo
  send a copy
  Apply button
*/
class Form extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      validate: false,
    };
    this._generateInputs = this._generateInputs.bind(this);
    this._updateFieldValue = this._updateFieldValue.bind(this);
    this._createFileds = this._createFileds.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
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

  _onSubmit(e) {
    e.preventDefault();
    const items = e.target.querySelectorAll('[required]');
    // let send = true;
    [].slice.call(items).map((item) => {
      if (!Validation.check(item)) {
        this._addErrorClass(item);
        // send = false;
      }
      return item;
    });
    // console.log(send);
  }

  _createFileds() {

  }

  _generateInputs(items) {
    return items.map((item) => {
      const {
        title, name, type, required = false, validation = '', Comp, value,
      } = item;
      return (
        <React.Fragment key={name}>
          <Comp
            title={title}
            name={name}
            type={type}
            required={required}
            validation={validation}
            value={value}
            onChange={this._updateFieldValue(name)}
          >
            <div className={css['form__input__error-message']}>
              {title} {Validation.getMessage(validation)}
            </div>
          </Comp>
        </React.Fragment>
      );
    });
  }

  render() {
    const { validate } = this.state;
    const { email, name } = this.state;
    return (
      <form action="/sent" onSubmit={this._onSubmit} noValidate={validate}>
        {this._generateInputs([
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
            title: 'E-mail',
            name: 'email',
            type: 'email',
            required: true,
            validation: 'e-mail',
            value: email,
            Comp: Input,
          },
        ])}
        <button type="submit">
          send
        </button>
      </form>
    );
  }
}
export default Form;
