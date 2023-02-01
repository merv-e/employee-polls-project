import {saveQuestion} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
    type: RECEIVE_QUESTIONS,
    questions,
    };
};

 function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
};

export function handleAddQuestion(text) {
    return(dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        
        return saveQuestion({
            text,
            author: authedUser,
            //is there anything else necessary?
        }).then((question)=> dispatch(addQuestion(question)))
        .then(()=> dispatch(hideLoading()));
    }
}