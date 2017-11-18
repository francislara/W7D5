import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

//Regular Action Creators

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


//Thunk Action Creators

export const signin = (user) => dispatch => {
  APIUtil.signin(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const signout = () => dispatch => {
  APIUtil.signout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const signup = user => dispatch => {
  APIUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};
