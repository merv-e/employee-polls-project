import {RECEIVE_USERS, ADD_QUESTION_AUTHOR} from "../actions/users";

export default function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case ADD_QUESTION_AUTHOR:
            const {id, author} = action;
            return {
                ...state,
                [author] : {
                    ...state.author,
                    questions : state[author].questions.concat(id),
                }
            };
        default:
            return state;
    }
}
