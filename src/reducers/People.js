import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  CHANGE_PAGE_SIZE,
} from '../actions';

const localPageSize = localStorage.getItem('PEOPLE_PAGE_SIZE');

const initialState = {
  data: {
    pageIndex: 1,
    totalPages: 0,
    pageSize: parseInt(localPageSize) || 10,
    items: [],
  },
  isFetching: false,
  isFetchingFailure: false,
  error: null,
};

function People(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      const { pageIndex } = action;

      return {
        ...state,
        isFetching: true,
        isFetchingFailure: false,
        error: null,
        data: {
          ...state.data,
          pageIndex,
        },
      };
    case FETCH_PEOPLE_SUCCESS:
      const {
        response: { totalPages, items },
      } = action;

      return {
        ...state,
        isFetching: false,
        isFetchingFailure: false,
        error: null,
        data: {
          ...state.data,
          items,
          totalPages,
        },
      };
    case FETCH_PEOPLE_FAILURE:
      const { error } = action;

      return {
        ...state,
        isFetching: false,
        isFetchingFailure: true,
        error,
      };

    case CHANGE_PAGE_SIZE:
      const { pageSize } = action;

      return {
        ...state,
        data: {
          ...state.data,
          pageSize,
        },
      };
    default:
      return state;
  }
}

export default People;
