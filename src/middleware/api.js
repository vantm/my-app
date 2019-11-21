import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from '../actions';

import { fetchPeopleAsync } from '../api/People';

export default store => next => action => {
  const { type } = action;

  const doesActionNameMatchTo = name => type.indexOf(name) === 0;

  if (type) {
    if (doesActionNameMatchTo(FETCH_PEOPLE)) {
      const {
        People: {
          data: { pageSize },
        },
      } = store.getState();

      const { pageIndex } = action;

      next(action);

      return fetchPeopleAsync(pageIndex, pageSize).then(
        response =>
          next({
            type: FETCH_PEOPLE_SUCCESS,
            response,
          }),
        error =>
          next({
            type: FETCH_PEOPLE_FAILURE,
            error,
          })
      );
    }
  }

  return next(action);
};
