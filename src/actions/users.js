import { saveAnswerToQuestion } from "./questions";
import { saveQuestionAnswer } from "../utils/api";
import { showLoading } from "react-redux-loading-bar";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_AUTHOR = 'ADD_QUESTION_AUTHOR';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
};

// export function addQuestionAuthor({author, questionId}) {
//     return {
//       type: SAVE_ANSWER_TO_USER,
//       questionId,
//       author,
//     }
// };

export function addAnswerOfAuthenticatedUser({authedUser, answer, qid }) {
  //suan icin qid'yi id olarak degistirirsek, undefined oluyor!
    return {
      type: SAVE_ANSWER_TO_USER,
      authedUser,
      answer,
      qid,
    }
};

export default function handleSaveAnswer({
      authedUser,
      qid,
      answer

    }) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    // dispatch(showLoading());
    dispatch(addAnswerOfAuthenticatedUser({
     authedUser,
      qid,
      answer

    }));
    dispatch(saveAnswerToQuestion({
      authedUser,
      qid,
      answer
    }
    ));
    
    return saveQuestionAnswer({
     authedUser,
     qid,
     answer
    })

    // .then((info) => 
    .catch(e => {
      console.warn('Error in handleSaveAnswer:', e);
      // dispatch(addAnswerOfAuthenticatedUser( info));
      // dispatch(saveAnswerToQuestion(info));
      alert("The was an error choosing an option. Try again.");
    });
  };
}


// export default function handleSaveAnswer(questionId, answer) {
//   return (dispatch, getState) => {
      
//     const { authedUser } = getState();
    
//     return saveQuestionAnswer(authedUser.id, questionId, answer)
//       .then(() => {
//           dispatch(saveAnswerToQuestion(authedUser.id, questionId, answer));
//           dispatch(addAnswerOfAuthenticatedUser(authedUser.id, questionId, answer));
//       });
//   };
// }