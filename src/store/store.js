// store.js

import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Import your combined reducers

const store = createStore(rootReducer);

export default store;
