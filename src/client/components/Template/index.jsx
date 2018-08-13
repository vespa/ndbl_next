import PropTypes from 'prop-types';
import React from 'react';
import 'normalize.css';
import Menu from '../Menu';
import Footer from '../Footer';

const Template = ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
      <Footer />
    </React.Fragment>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
