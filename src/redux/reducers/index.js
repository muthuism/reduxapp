import { combineReducers } from "redux";
import courses from "./courseReducers";
import authors from "./authorReducer";
import apicallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apicallsInProgress
});

export default rootReducer;
