import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
});

let store = createStore(reducers);

export default store;
