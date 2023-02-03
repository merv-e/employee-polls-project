import {RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER_TO_QUESTION} from '../actions/questions';

export default function questions( state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };      
        // case ADD_QUESTION:
        //     return {
        //           ...state,
        //           [action.question.id]: action.question,
        //     };
        
        case SAVE_ANSWER_TO_QUESTION:
            // const {authedUser} = getState(); authedUser'ı degisik bir bicimde atamamız lazım 
          return {
              ...state,
              [action.id]: {
              ...state[action.id],
              [action.answer]: {
                  ...state[action.id][action.answer],
                  votes: state[action.id][action.answer].votes.concat(action.author)
              }
              }
        };
        default:
            return state;
    };
}
