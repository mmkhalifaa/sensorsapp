import React, { PropTypes } from "react";

const Layout = ({ children }) => <main>{ children }</main>;

Layout.propTypes = { children: PropTypes.node };

export default Layout;

