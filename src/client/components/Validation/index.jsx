
import React from 'react';

class Validation extends React.Component {
  static messages = {
    'no-empty': 'can not be empty',
    'e-mail': 'is not filled correctly',
    'dutch-zip': 'is not filled correctly',
    date: ': incorrect format',
  }

  getMessage(type) {
    return `${this.constructor.messages[type]}`;
  }

  check(field) {
    const type = field.getAttribute('validation');
    const valitation = {
      date: () => {
        const rule = /^\d{4}-\d{2}-\d{2}$/;
        return rule.test(field.value);
      },
      'no-empty': () => {
        return field.value.replace(/\s/, '') !== '';
      },
      'e-mail': () => {
        const rule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return rule.test(field.value);
      },
      'dutch-zip': () => {
        const rule = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
        return rule.test(field.value);
      },
    };
    if (valitation[type] === undefined) return '';
    return valitation[type]();
  }
}
export default new Validation();
