import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Prompt extends Component {
  render() {
    const { message, data, onOk, onCancel } = this.props;

    return (
      <div>
        <p>{message}</p>
        <button onClick={() => onCancel && onCancel(data)}>cancel</button>
        <button onClick={() => onOk && onOk(data)}>ok</button>
      </div>
    );
  }
}

Prompt.propTypes = {
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  visible: PropTypes.bool,
  data: PropTypes.any,
};
