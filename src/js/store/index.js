import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from 'js/reducers';


const middleware = [thunk, promiseMiddleware];

const createStoreWithMiddleware = compose(applyMiddleware(...middleware))(createStore);

const persistConfig = {
  storage: AsyncStorage,
  // In milliseconds
  debounce: 500,
  // reducers to save
  whitelist: [],
};

const configureStore = (onComplete) => {
  const store = autoRehydrate()(createStoreWithMiddleware)(reducers);

  persistStore(store, persistConfig, onComplete);

  return store;
};

export default configureStore;
