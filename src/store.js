import { configureStore } from '@reduxjs/toolkit';
import users from "./reducers/users";
import questions from './reducers/questions';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from './reducers/authedUser';

export const store = configureStore({
  reducer: {
    users,
    questions,
    authedUser, 
    loadingBar : loadingBarReducer  
  }
});