import { saveQuestion, /* saveQuestionAnswer */ } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
// import addAnswerOfAuthenticatedUser from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION';

export function receiveQuestions(questions) {
    return {
    type: RECEIVE_QUESTIONS,
    questions,
    };
};

export function saveAnswerToQuestion({authedUser, qid , answer}){ // , answer, authedUser, votes
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        qid, 
        answer,
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



