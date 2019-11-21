import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export function About() {
  return <h1>About me</h1>;
}

export default withRouter(connect()(About));
