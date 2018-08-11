
import React from 'react';

class Validation extends React.Component {
  static messages = {
    'no-empty': 'can not be empty',
    'e-mail': 'is not filled correctly',
  }

  getMessage(type) {
    return `${this.constructor.messages[type]}`;
  }

  check(field) {
    const type = field.getAttribute('validation');
    const valitation = {
      'no-empty': () => {
        return field.value.replace(/\s/, '') !== '';
      },
      'e-mail': () => {
        const rule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return rule.test(field.value);
      },
    };
    if (valitation[type] === undefined) return '';
    return valitation[type]();
  }
}
export default new Validation();
