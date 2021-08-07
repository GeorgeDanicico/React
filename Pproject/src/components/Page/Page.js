import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Page = ({ children }) => (
  <div className="authentication-page-container">
    <div className="logo-container" />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};
export default Page;