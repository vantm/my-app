import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

function Head({ data }) {
  let key = 1;

  return (
    <thead>
      <tr>{data && data.map(cell => <th key={key++}>{cell}</th>)}</tr>
    </thead>
  );
}

function Body({ data }) {
  let key = 1;
  let key2 = 1;

  return (
    <tbody>
      {data &&
        data.map(row => (
          <tr key={key++}>
            {row.map(cell => (
              <td key={key2++}>{cell}</td>
            ))}
          </tr>
        ))}
    </tbody>
  );
}

export default class Table extends Component {
  render() {
    return (
      <table className='ma-table'>
        <Head data={this.props.head} />
        <Body data={this.props.body} />
      </table>
    );
  }
}

Table.propTypes = {
  head: PropTypes.array,
  body: PropTypes.array,
};
