import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PageNav extends Component {
  constructor(props) {
    super(props);
    this._pageRef = React.createRef();
    this.state = {
      page: props.pageIndex,
    };
  }

  render() {
    const { pageIndex, pageSize, totalPages, goTo } = this.props;

    return (
      <div>
        <button
          onClick={() => goTo && goTo(parseInt(pageIndex) - 1)}
          disabled={pageIndex <= 1}>
          previous
        </button>
        {pageIndex} of {totalPages} {pageSize > 1 ? 'pages' : 'page'}
        <input
          type='number'
          ref={this._pageRef}
          value={this.state.page}
          onChange={e => this.setState({ page: e.target.value })}
          max={totalPages}
          min='1'
          disabled={totalPages <= 1}
        />
        <button
          onClick={() => goTo && goTo(this._pageRef.current.value)}
          disabled={totalPages <= 1}>
          go to
        </button>
        <button
          onClick={() => goTo && goTo(pageIndex)}
          disabled={totalPages < 1}>
          reload
        </button>
        <button
          onClick={() => goTo && goTo(parseInt(pageIndex) + 1)}
          disabled={pageIndex >= totalPages}>
          next
        </button>
      </div>
    );
  }
}

PageNav.propTypes = {
  pageIndex: PropTypes.number,
  pageSize: PropTypes.number,
  goTo: PropTypes.func,
};

export default PageNav;
