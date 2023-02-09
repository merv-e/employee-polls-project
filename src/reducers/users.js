import {
    RECEIVE_USERS, 
    ADD_NEW_QUESTION_USER, 
    SAVE_ANSWER_TO_USER
} from "../actions/users";

export default function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };

        case SAVE_ANSWER_TO_USER:
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                }
            }
            };      
        
        case ADD_NEW_QUESTION_USER:
            const {authedUser} = action;
                return {
                    ...state,
                    [authedUser] : {
                        ...state[authedUser],
                        questions : state[authedUser].questions.concat([action.id]),
                    }
                };
        default:
            return state;
    }
};
