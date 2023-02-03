import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION';

export function receiveQuestions(questions) {
    return {
    type: RECEIVE_QUESTIONS,
    questions,
    };
};

export function saveAnswerToQuestion(id){ // answer, authedUser
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        id, // answer, authedUser,
    }
};

 function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
};

export function handleAddQuestion({optionOneText, optionTwoText, author}) {
    return(dispatch, getState) => {
        // dispatch(showLoading());
        
        return saveQuestion({
            optionOneText, optionTwoText, author})
        .then((question) => {
         dispatch(addQuestion(question));
        })
        // .then(()=> dispatch(hideLoading()))
        }
}



