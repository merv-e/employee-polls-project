import {
    RECEIVE_USERS, 
    ADD_QUESTION_AUTHOR, 
    SAVE_ANSWER_TO_USER
    // ADD_ANSWER_AUTHOR
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
                [action.authUser]: {
                  ...state[action.authUser],
                  answers: {
                    ...state[action.authUser].answers,
                    [action.id]: action.answer
                  }
                }
            };      
            
            
        default:
            return state;
    }
};

            // case  ADD_QUESTION_AUTHOR:
            //     const {id, author} = action;
            //     return {
            //         ...state,
            //         [author] : {
            //             ...state.author,
            //             questions : state[author].questions.concat(id),
            //         }
            //     };