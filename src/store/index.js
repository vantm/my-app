import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import api from '../middleware/api';
import asyncStorage from '../middleware/asyncStorage';
import rootSaga from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware, api, asyncStorage))
);

sagaMiddleware.run(rootSaga);
