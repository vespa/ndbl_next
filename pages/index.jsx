import React from 'react';
import 'normalize.css';
import { connect } from 'react-redux';
import Form from '../src/client/components/Form';
import Header from '../src/client/components/Header';
import cssMain from '../src/scss/main.scss';

/* eslint-disable react/prefer-stateless-function */
class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header img="form" title="Purchasing assistant" subtitle="Amsterdam, the Netherlands" />
        <div className={cssMain.container}>
          <h2 className={cssMain['title--main']}>Apply for the position of Purchasing assistant</h2>
          <Form />
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Index);
