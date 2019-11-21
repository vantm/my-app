import { CHANGE_PAGE_SIZE } from '../actions';

export default store => next => action => {
  const { type, pageSize } = action;

  const result = next(action);

  if (type === CHANGE_PAGE_SIZE) {
    localStorage.setItem('PEOPLE_PAGE_SIZE', pageSize);
  }

  return result;
};
