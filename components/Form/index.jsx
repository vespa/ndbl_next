import React from 'react';
import Input from './Input';
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
    this._generateInput = this._generateInput.bind(this);
    this.state = {
      validate: false,
    };
  }

  componentDidMount() {
    this._checkIfJSisActive();
  }

  _checkIfJSisActive() {
    const validate = (typeof window !== 'undefined');
    this.setState({ validate });
  }

  _onSubmit(e) {
    e.preventDefault();
    console.log('OI');
  }

  _generateInput(items) {
    const elements = items.map((item) => {
      const {
        title, name, type, required = false, validation = '', Comp,
      } = item;
      return (
        <Comp
          key={name}
          title={title}
          name={name}
          type={type}
          required={required}
          validation={validation}
        />
      );
    });
    // this.setState({ elements });
    return elements;
  }

  render() {
    const { validate } = this.state;
    return (
      <form action="/sent" onSubmit={this._onSubmit} noValidate={validate}>
        {this._generateInput([
          {
            title: 'Name',
            name: 'name',
            type: 'text',
            required: true,
            validation: 'no-empty',
            Comp: Input,
          },
          {
            title: 'E-mail',
            name: 'email',
            type: 'email',
            required: true,
            validation: 'no-empty',
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
