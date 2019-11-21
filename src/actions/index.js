export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE';

export const fetchPeople = pageIndex => ({
  type: FETCH_PEOPLE,
  pageIndex,
});

export const dispatchFetchPeople = pageIndex => dispatch =>
  dispatch(fetchPeople(pageIndex));

export const CHANGE_PAGE_SIZE = 'CHANGE_PAGE_SIZE';

export const changePageSize = pageSize => ({
  type: CHANGE_PAGE_SIZE,
  pageSize,
});

export const dispatchChangePageSize = pageSize => dispatch =>
  dispatch(changePageSize(pageSize));
