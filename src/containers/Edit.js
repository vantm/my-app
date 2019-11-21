import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Form from '../components/Form';
import LoadingText from '../components/LoadingText';
import { fetchPersonAsync } from '../api/People';

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      isFetchingFailure: false,
      data: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({ isFetching: true, isFetchingFailure: false, data: null });

    fetchPersonAsync(id).then(
      response =>
        this.setState({
          isFetching: false,
          isFetchingFailure: false,
          data: [
            {
              name: 'id',
              title: 'ID',
              value: response.id,
            },
            {
              name: 'name',
              title: 'Name',
              value: response.name,
            },
            {
              name: 'age',
              title: 'Age',
              value: response.age,
            },
          ],
        }),
      error =>
        this.setState({
          isFetching: false,
          isFetchingFailure: true,
          error,
        })
    );
  }

  onSubmit = data => {
    alert('your submitted data: ' + JSON.stringify(data));
  };

  render() {
    const { isFetching } = this.state;

    return (
      <div>
        {isFetching ? (
          <LoadingText />
        ) : (
          <Form data={this.state.data} onSubmit={this.onSubmit} />
        )}
        <Link to='/'>back</Link>
      </div>
    );
  }
}

export default withRouter(connect()(Edit));
