import { combineReducers } from "redux";
import { tracksReducer as tracksObject } from "./reducers";
// import {
//     loginReducer as loginData,
//     findReducer as find,
//     logsReducer as logs,
//     reportsReducer as reports,
//     profileReducer as profilePage,
// } from './reducers';

export const rootreducer = combineReducers({
  tracksObject,
});
