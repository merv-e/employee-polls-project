import { saveAnswerToQuestion } from "./questions";
import { saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_NEW_QUESTION_USER = 'ADD_NEW_QUESTION_USER';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export function addAnswerOfAuthenticatedUser({authedUser, qid, answer}) {
  //suan icin qid'yi id olarak degistirirsek, undefined oluyor!
    return {
      type: SAVE_ANSWER_TO_USER,
      authedUser,
      qid,
      answer,
    }
};

export function addQuestionUserObj(id, authedUser) {
  return {
    type: ADD_NEW_QUESTION_USER,
    id,
    authedUser
  }
};

export default function handleSaveAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());

    dispatch(addAnswerOfAuthenticatedUser(info));
    dispatch(saveAnswerToQuestion(info));
    
    return saveQuestionAnswer(info)
    .then((info)=> {
      // dispatch(addAnswerOfAuthenticatedUser(info));
      // dispatch(saveAnswerToQuestion(info));
    })
      .catch(e => { 
        console.warn('Error in handleSaveAnswer:', e);        
        alert("An error occurred choosing an option. Please try again.")
      })
      
      .then(() => dispatch(hideLoading()));
  };
}