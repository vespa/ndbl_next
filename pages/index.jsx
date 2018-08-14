import React from 'react';
// import { connect } from 'react-redux';
import cssMain from '../src/scss/main.scss';
import Template from '../src/client/components/Template';
import Form from '../src/client/components/Form';
import Header from '../src/client/components/Header';
import HelpBox from '../src/client/components/HelpBox';
/* eslint-disable react/prefer-stateless-function */
class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Template>
          <Header img="form" title="Purchasing assistant" subtitle="Amsterdam, the Netherlands" />
          <div className={cssMain.container}>
            <h2 className={cssMain['title--main']}>Apply for the position of Purchasing assistant</h2>
            <Form />
          </div>
          <HelpBox />
        </Template>
      </React.Fragment>
    );
  }
}

export default Index;
