import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Table from '../components/Table';
import Prompt from '../components/Prompt';
import LoadingText from '../components/LoadingText';
import {
  dispatchFetchPeople as fetchPeople,
  dispatchChangePageSize as changePageSize,
} from '../actions';
import PageNav from '../components/PageNav';

const head = ['ID', 'Name', 'Age'];

const TableButton = ({ onClick, data, text }) => (
  <button onClick={() => onClick(data)}>{text}</button>
);

const PageSizePanel = ({ pageSize, onChange }) => (
  <div>
    Page size: {pageSize}
    <select
      defaultValue={pageSize}
      onChange={e => onChange && onChange(parseInt(e.target.value))}>
      {[10, 20, 50, 100].map(s => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  </div>
);

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: [...head, 'Actions'],
      promptData: {
        visible: false,
        message: '',
        data: null,
      },
    };
  }

  componentDidMount() {
    const { pageIndex, fetchPeople } = this.props;
    fetchPeople(pageIndex);
  }

  onRowClick = row => {
    this.setState({
      promptData: {
        visible: true,
        message: 'You choosed ' + JSON.stringify(row) + '!',
        data: row,
      },
    });
  };

  onRowOk = row => {
    alert('You ok with ' + JSON.stringify(row));

    this.setState({
      promptData: {
        visible: false,
      },
    });
  };

  onRowCancel = row => {
    alert('You cancelled actions on ' + JSON.stringify(row));

    this.setState({
      promptData: {
        visible: false,
      },
    });
  };

  goTo = index => {
    const { fetchPeople } = this.props;
    fetchPeople(index);
  };

  onPageSizeChange = pageSize => {
    const { changePageSize, fetchPeople } = this.props;
    changePageSize(pageSize);
    fetchPeople(1);
  };

  render() {
    const {
      promptData: { visible, message, data },
      tableHead,
    } = this.state;

    const { pageIndex, pageSize, totalPages, items, isFetching } = this.props;
    const tableData = items.map(row => [
      row.id,
      row.name,
      row.age,
      <React.Fragment>
        <Link to={'/edit/' + row.id}>edit</Link>
        <TableButton onClick={this.onRowClick} data={row.id} text='delete' />
      </React.Fragment>,
    ]);

    return (
      <React.Fragment>
        {visible ? (
          <Prompt
            message={message}
            onOk={this.onRowOk}
            onCancel={this.onRowCancel}
            data={data}
          />
        ) : (
          <React.Fragment>
            {isFetching ? (
              <LoadingText />
            ) : (
              <div>
                <Table head={tableHead} body={tableData} />
                <PageSizePanel
                  {...{ pageSize, onChange: this.onPageSizeChange }}
                />
                <PageNav
                  {...{ pageIndex, pageSize, totalPages, goTo: this.goTo }}
                />
              </div>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const {
    data: { pageIndex, pageSize, totalPages, items },
    isFetching,
    isFetchingFailure,
    error,
  } = state.People;

  return {
    pageIndex,
    pageSize,
    totalPages,
    items,
    isFetching,
    isFetchingFailure,
    error,
  };
};

const mapDispatchToProps = {
  fetchPeople,
  changePageSize,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
