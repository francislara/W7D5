import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


// TODO: FOR TESTING
import { signup, signin, signout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1 store={store}>Welcome to BenchBnB</h1>, root);




  // TODO: FOR TESETING

  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
