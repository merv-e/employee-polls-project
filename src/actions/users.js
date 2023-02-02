import { saveAnswerToQuestion } from "./questions";
import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_AUTHOR = 'ADD_QUESTION_AUTHOR';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export function addQuestionAuthor({author, questionId}) {
    return {
      type: SAVE_ANSWER_TO_USER,
      questionId,
      author,
    }
};

export function addAnswerOfAuthenticatedUser({authedUser, qid, answer}) {
    return {
      type: SAVE_ANSWER_TO_USER,
      authedUser,
      qid,
      answer,
    }
};

export default function handleSaveAnswer(authedUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerOfAuthenticatedUser( authedUser, qid, answer));
    dispatch(saveAnswerToQuestion(authedUser, qid, answer));

    return saveQuestionAnswer( authedUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveAnswer:', e);
    });
  };
}