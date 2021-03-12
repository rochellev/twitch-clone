import { SIGN_IN, SIGN_OUT } from "../actions/types";

// true constant object -- no modify
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

// default argument, to initialize it, make it null
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      // create an entirely new object using spread and update some properties
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
