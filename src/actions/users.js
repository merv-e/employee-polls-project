import { saveAnswerToQuestion } from "./questions";
import { saveQuestionAnswer } from "../utils/api";
import { showLoading, showHiding } from "react-redux-loading-bar";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_AUTHOR = 'ADD_QUESTION_AUTHOR';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export function addAnswerOfAuthenticatedUser({authedUser, answer, qid }) {
  //suan icin qid'yi id olarak degistirirsek, undefined oluyor!
    return {
      type: SAVE_ANSWER_TO_USER,
      authedUser,
      qid,
      answer,
    }
};


export default function handleSaveAnswer({authedUser, qid, answer}) {
  return (dispatch, getState) => {
    // dispatch(showLoading());
    // const {authedUser} = getState();
    dispatch(addAnswerOfAuthenticatedUser({authedUser, qid, answer}));
    dispatch(saveAnswerToQuestion({authedUser, qid, answer}));

    return saveQuestionAnswer(authedUser, qid, answer)
    // .then((question) => {
      // dispatch(addAnswerOfAuthenticatedUser(question))
      // dispatch(saveAnswerToQuestion(authedUser, qid, answer))
    // })
    .catch(e => { 
      console.warn('Error in handleSaveAnswer:', e)
      alert("The was an error choosing an option. Try again.")
    })
    // .then(() => dispatch(showHiding()));
  };
}