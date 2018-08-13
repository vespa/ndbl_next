import React from 'react';
import Header from '../src/client/components/Header';
/* eslint-disable */
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <React.Fragment>
        <Header img="form" title="404" subtitle="Page not found" />
      </React.Fragment>
    )
  }
}