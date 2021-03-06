// eslint-disable-next-line no-undef
import * as types from "../actions/actionType";
import initialState from "./initialState";
export default function authorReducer(state = initialState.authors, action) {
  //refer normalizing redux shape
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
