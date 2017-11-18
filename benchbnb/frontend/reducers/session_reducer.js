import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

  const _nullUser = {
    currentUser: null
  };

export default (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, state);
      newState.currentUser = action.user;
      return newState;
    default:
      return state;
  }
};
