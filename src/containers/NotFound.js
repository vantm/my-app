import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <small>Oops! Your page doesn't exist.</small>
    </div>
  );
}

export default withRouter(connect()(NotFound));
