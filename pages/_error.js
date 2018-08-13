import React from 'react';
import Header from '../src/client/components/Header';
import Template from '../src/client/components/Template';
/* eslint-disable */
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Template>
        <Header img="form" title="404" subtitle="Page not found" />
      </Template>
    )
  }
}