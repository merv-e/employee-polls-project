import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {addQuestionAuthor} from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function receiveQuestions(questions) {
    return {
    type: RECEIVE_QUESTIONS,
    questions,
    };
};

 function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
};

export function handleAddQuestion(optionOneText, optionTwoText, author) {
    return(dispatch, getState) => {
        const {authedUser} = getState();
        // dispatch(showLoading());
        
        return saveQuestion({optionOneText, optionTwoText, authedUser})
        .then((question) => {
              dispatch(addQuestion(question));
              dispatch(addQuestionAuthor(question));
        })
        //   .then(()=> dispatch(hideLoading()))
        }
}

// function saveAnswer (answer) {
//     return {
//         type: SAVE_ANSWER,
//         answer
//     }
// }

// export function handleSaveAnswer( qid, answer){
//     return (dispatch, getState) => {
//         const {authedUser} = getState();
//         // dispatch(showLoading);
//         return saveQuestionAnswer({
//             authedUser,

//         })
// }
// };