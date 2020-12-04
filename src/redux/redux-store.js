import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
