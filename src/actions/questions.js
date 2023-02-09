import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestionUserObj } from "./users";
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

export function saveAnswerToQuestion({authedUser, qid , answer}){
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

export function handleAddQuestion(info) {
    return(dispatch, getState) => {
        const {id, authedUser} = getState();

        dispatch(showLoading());
        
        return saveQuestion(info)
          .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionUserObj(question.id, authedUser))
          })
          .then(()=> dispatch(hideLoading()))
        }
}



