import React from 'react';
import { connect } from 'react-redux';
import Form from '../src/client/components/Form';
/* eslint-disable */
class Index extends React.Component {
  render() {
    return (
      <Form />
    );
  }
}

export default connect()(Index);