import {RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER_TO_QUESTION} from '../actions/questions';

export default function questions( state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };      
            
        case SAVE_ANSWER_TO_QUESTION:
            // const {authedUser} = getState(); 
            // authedUser'ı degisik bir bicimde atamamız lazım 
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            };
        
        case ADD_QUESTION:
            return {
                  ...state,
                  [action.question.qid]: action.question,
            };
        default:
            return state;
    };
}
