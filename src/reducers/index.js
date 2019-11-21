import { combineReducers } from 'redux';
import People from './People';

export default combineReducers({
  Counter: (state = { value: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 };
      default:
        return state;
    }
  },
  People,
});
